#!/usr/bin/env python3
import json
import os
import sys
import shutil
import zipfile
import hashlib
import requests
from pathlib import Path
from urllib.parse import quote


CURSEFORGE_API = "https://api.curseforge.com/v1"
API_KEY = os.environ.get("CURSEFORGE_API_KEY")
GITHUB_REPO = os.environ.get("GITHUB_REPOSITORY", "USER/Modpack")  # auto en CI

HEADERS = {"x-api-key": API_KEY, "Accept": "application/json"}


def sha1_of_file(path):
    h = hashlib.sha1()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(8192), b""):
            h.update(chunk)
    return h.hexdigest()


def build_raw_url(base_url: str, rel_path: str) -> str:
    encoded_segments = [quote(part) for part in rel_path.split("/")]
    return f"{base_url}/{'/'.join(encoded_segments)}"


def get_mod_file_info(project_id, file_id):
    url = f"{CURSEFORGE_API}/mods/{project_id}/files/{file_id}"
    r = requests.get(url, headers=HEADERS, timeout=30)
    r.raise_for_status()
    data = r.json()["data"]

    download_url = data.get("downloadUrl")
    if not download_url:
        file_id_str = str(file_id)
        download_url = (
            f"https://edge.forgecdn.net/files/{file_id_str[:4]}/{file_id_str[4:]}/"
            f"{data['fileName']}"
        )

    return {
        "fileName": data["fileName"],
        "downloadUrl": download_url,
        "fileLength": data["fileLength"],
        "displayName": data.get("displayName", data["fileName"]),
    }


def download_file(url, dest_path):
    dest_path.parent.mkdir(parents=True, exist_ok=True)
    with requests.get(url, stream=True, timeout=120, headers={"User-Agent": "ModpackLauncher/1.0"}) as r:
        r.raise_for_status()
        with open(dest_path, "wb") as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)


def extract_zip_manifest(zip_path, work_dir):
    with zipfile.ZipFile(zip_path, "r") as z:
        z.extractall(work_dir)
    manifest_path = work_dir / "manifest.json"
    overrides_dir = work_dir / "overrides"
    return manifest_path, overrides_dir


def process(input_path, output_root):
    input_path = Path(input_path)
    output_root = Path(output_root)
    work_dir = Path("/tmp/work") / input_path.stem
    if work_dir.exists():
        shutil.rmtree(work_dir)
    work_dir.mkdir(parents=True)

    overrides_dir = None

    if input_path.suffix == ".zip":
        manifest_path, overrides_dir = extract_zip_manifest(input_path, work_dir)
    else:
        manifest_path = input_path

    with open(manifest_path) as f:
        manifest = json.load(f)

    modpack_id = input_path.stem
    modpack_name = manifest.get("name", modpack_id)
    modpack_version = manifest.get("version", "1.0.0")
    mc_version = manifest.get("minecraft", {}).get("version", "unknown")
    modloaders = manifest.get("minecraft", {}).get("modLoaders", [])
    primary_loader = next((m["id"] for m in modloaders if m.get("primary")), "unknown")

    files_index = {}
    files_dir = output_root / modpack_id / "files"
    files_dir.mkdir(parents=True, exist_ok=True)

    base_raw_url = f"https://raw.githubusercontent.com/{GITHUB_REPO}/data/{modpack_id}/files"

    # 1. Mods CurseForge
    for mod in manifest.get("files", []):
        project_id = mod["projectID"]
        file_id = mod["fileID"]
        # required = mod.get("required", True)
        # if not required:
        #     continue

        try:
            info = get_mod_file_info(project_id, file_id)
        except requests.HTTPError as e:
            print(f"  WARNING: skip projectID={project_id} fileID={file_id}: {e}")
            continue

        rel_path = f"mods/{info['fileName']}"
        dest = files_dir / rel_path
        print(f"  Downloading {info['displayName']} -> {rel_path}")
        download_file(info["downloadUrl"], dest)

        files_index[rel_path] = {
            "url": build_raw_url(base_raw_url, rel_path),
            "size": dest.stat().st_size,
            "sha1": sha1_of_file(dest),
        }

    # 2. Overrides (configs, resourcepacks, scripts, etc.)
    if overrides_dir and overrides_dir.exists():
        for root, _, filenames in os.walk(overrides_dir):
            for fn in filenames:
                src = Path(root) / fn
                rel_path = str(src.relative_to(overrides_dir))
                dest = files_dir / rel_path
                dest.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(src, dest)

                files_index[rel_path] = {
                    "url": build_raw_url(base_raw_url, rel_path),
                    "size": dest.stat().st_size,
                    "sha1": sha1_of_file(dest),
                }

    # 3. Write files.json
    with open(output_root / modpack_id / "files.json", "w") as f:
        json.dump(files_index, f, indent=4)

    # 4. Update index.json
    index_path = output_root / "index.json"
    if index_path.exists():
        with open(index_path) as f:
            index = json.load(f)
    else:
        index = {"modpacks": []}

    entry = {
        "id": modpack_id,
        "name": modpack_name,
        "version": modpack_version,
        "minecraft_version": mc_version,
        "modloader": primary_loader,
        "files_url": f"https://raw.githubusercontent.com/{GITHUB_REPO}/data/{modpack_id}/files.json",
    }

    index["modpacks"] = [m for m in index["modpacks"] if m["id"] != modpack_id]
    index["modpacks"].append(entry)

    with open(index_path, "w") as f:
        json.dump(index, f, indent=4)

    print(f"Done: {len(files_index)} files for {modpack_id}")


if __name__ == "__main__":
    assert API_KEY != "", "Api key can't be null"
    process(sys.argv[1], sys.argv[2])