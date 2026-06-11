import os
import sys
import json
import zipfile
import requests
import tempfile

ENTRY = "https://api.curseforge.com"
FILE_INFO = "{entry}/v1/mods/{project_id}/files/{file_id}"


class DownloadInfo:
    def __init__(self, url, file_name):
        self.url = url
        self.file_name = file_name


def generate_download_url(file_id, file_name):
    first_half = str(file_id)[:4]
    last_half = str(file_id)[4:].replace("0", "")

    return f"https://mediafilez.forgecdn.net/files/{first_half}/{last_half}/{file_name}"


def get_download_url(project_id, file_id, headers):
    r = requests.get(FILE_INFO.format(entry=ENTRY, project_id=project_id, file_id=file_id), headers = headers)
    mdata = r.json()["data"]

    download_url = mdata["downloadUrl"]
    file_name = mdata["fileName"]
    if download_url is None:
        download_url = generate_download_url(file_id, file_name)

    return DownloadInfo(download_url, file_name)


def download_mod(file, mods_dir, headers):
        project_id = file["projectID"]
        file_id = file["fileID"]

        download_info: DownloadInfo = get_download_url(project_id, file_id, headers)

        to = os.path.join(mods_dir, download_info.file_name)
        download_file(download_info.url, to)


def download_file(url, to):
    os.makedirs(os.path.dirname(to), exist_ok=True)
    with requests.get(url, stream=True) as r:
        r.raise_for_status()
        with open(to, "wb") as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
    print(to, "downloaded")


def process_zip(key, zip_path):
    headers = {
    'Accept': 'application/json',
    'x-api-key': key
    }

    pack_name = os.path.splitext(os.path.basename(zip_path))[0]
    mods_dir = os.path.join("modpacks", pack_name, "mods")

    with tempfile.TemporaryDirectory() as tmp_dir:
        with zipfile.ZipFile(zip_path, "r") as z:
            z.extractall(tmp_dir)
        
        manifest_path = os.path.join(tmp_dir, "manifest.json")
        with open(manifest_path, "r") as f:
            data = json.load(f)

        for file in data["files"]:
            download_mod(file, mods_dir, headers)


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: process_modpack.py <curseforge_key> <zip_path> ")
        sys.exit(1)

    key = sys.argv[1]
    zip_path = sys.argv[2]

    process_zip(key, zip_path)