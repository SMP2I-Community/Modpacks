// Visit the wiki for more info - https://kubejs.com/


ServerEvents.recipes(event => {



const crea = ['minecraft:iron_ingot','minecraft:copper_ingot','minecraft:gold_ingot','minecraft:netherite_ingot','create:brass_ingot',
  'cataclysm:witherite_ingot', 'cataclysm:ancient_metal_ingot','cataclysm:black_steel_ingot','cataclysm:ignitium_ingot'
  ,'cataclysm:cursium_ingot','alexscaves:scarlet_neodymium_ingot','alexscaves:azure_neodymium_ingot','create:zinc_ingot',
  'createdeco:industrial_iron_ingot','irons_spellbooks:arcane_ingot', 'alloyed:bronze_ingot', 'alloyed:steel_ingot',
   'irons_spellbooks:mithril_ingot','createpropulsion:platinum_ingot', 'irons_spellbooks:pyrium_ingot', 'createaddition:electrum_ingot',
  'createpropulsion:platinum_ingot', 'createbigcannons:cast_iron_ingot','createbigcannons:nethersteel_ingot' ]






event.recipes.create.mechanical_crafting('kubejs:creative_ingot', [
    ' ABC ',
    'EFGHD',
    'IJKLQ',
    'MNOPR',
    ' STU '

    ], {
        A:crea[0],
        B:crea[1],
        C:crea[2],
        D:crea[3],
        E:crea[4],
        F:crea[5],
        G:crea[6],
        H:crea[7],
        I:crea[8],
        J:crea[9],
        K:crea[10],
        L:crea[11],
        M:crea[12],
        N:crea[13],
        O:crea[14],
        P:crea[15],
        Q:crea[16],
        R:crea[17],
        S:crea[18],
        T:crea[19],
        U:crea[20],
    })

event.shaped(
  '2xkubejs:creative_upgrade_smithing_template', // arg 1: output
  [
    'ITI',
    'IAI', // arg 2: the shape (array of strings)
    'III'
  ],
  {
    A: 'minecraft:pink_glazed_terracotta',
    I: 'kubejs:creative_ingot',  //arg 3: the mapping object
    T: 'kubejs:creative_upgrade_smithing_template'
  }
)

event.smithing(
  'create:creative_motor',                     // arg 1: output
  'kubejs:creative_upgrade_smithing_template', // arg 2: the smithing template
  'create:steam_engine',                          // arg 3: the item to be upgraded
  'kubejs:creative_ingot'                            // arg 4: the upgrade item
)


event.smithing(
  'create_sa:creative_filling_tank',                     // arg 1: output
  'kubejs:creative_upgrade_smithing_template', // arg 2: the smithing template
  'create_sa:large_filling_tank',                          // arg 3: the item to be upgraded
  'kubejs:creative_ingot'                            // arg 4: the upgrade item
)

event.smithing(
  'create_sa:creative_filling_tank',                     // arg 1: output
  'kubejs:creative_upgrade_smithing_template', // arg 2: the smithing template
  'create_sa:large_fueling_tank',                          // arg 3: the item to be upgraded
  'kubejs:creative_ingot'                            // arg 4: the upgrade item
)

event.smithing(
  'create_submarine:creative_oxygenator',                     // arg 1: output
  'kubejs:creative_upgrade_smithing_template', // arg 2: the smithing template
  'create_submarine:oxygene_diffuser',                          // arg 3: the item to be upgraded
  'kubejs:creative_ingot'                            // arg 4: the upgrade item
)

event.smithing(
  'create:creative_blaze_cake',                     // arg 1: output
  'kubejs:creative_upgrade_smithing_template', // arg 2: the smithing template
  'create:blaze_cake',                          // arg 3: the item to be upgraded
  'kubejs:creative_ingot'                            // arg 4: the upgrade item
)

event.smithing(
  'simulated:creative_physics_staff',                     // arg 1: output
  'kubejs:creative_upgrade_smithing_template', // arg 2: the smithing template
  'create:wrench',                          // arg 3: the item to be upgraded
  'kubejs:creative_ingot'                            // arg 4: the upgrade item
)

event.smithing(
  'create_enchantment_industry:creative_bookshelf',                     // arg 1: output
  'kubejs:creative_upgrade_smithing_template', // arg 2: the smithing template
  'minecraft:bookshelf',                          // arg 3: the item to be upgraded
  'kubejs:creative_ingot'                            // arg 4: the upgrade item
)

event.smithing(
  'createpropulsion:creative_thruster',                     // arg 1: output
  'kubejs:creative_upgrade_smithing_template', // arg 2: the smithing template
  'createpropulsion:thruster',                          // arg 3: the item to be upgraded
  'kubejs:creative_ingot'                            // arg 4: the upgrade item
)

event.smithing(
  'createpropulsion:creative_vector_thruster',                     // arg 1: output
  'kubejs:creative_upgrade_smithing_template', // arg 2: the smithing template
  'createpropulsion:vector_thruster',                          // arg 3: the item to be upgraded
  'kubejs:creative_ingot'                            // arg 4: the upgrade item
)

event.smithing(
  'createbigcannons:creative_autocannon_ammo_container',                     // arg 1: output
  'kubejs:creative_upgrade_smithing_template', // arg 2: the smithing template
  'createbigcannons:autocannon_ammo_container',                          // arg 3: the item to be upgraded
  'kubejs:creative_ingot'                            // arg 4: the upgrade item
)

event.smithing(
  'create_radar:creative_radar_plate',                     // arg 1: output
  'kubejs:creative_upgrade_smithing_template', // arg 2: the smithing template
  'create_radar:radar_plate_block',                          // arg 3: the item to be upgraded
  'kubejs:creative_ingot'                            // arg 4: the upgrade item
)

event.smithing(
  'createterminal:creative_remote_terminal',                     // arg 1: output
  'kubejs:creative_upgrade_smithing_template', // arg 2: the smithing template
  'createterminal:advanced_remote_terminal',                          // arg 3: the item to be upgraded
  'kubejs:creative_ingot'                            // arg 4: the upgrade item
)

event.smithing(
  'createaddition:creative_energy',                     // arg 1: output
  'kubejs:creative_upgrade_smithing_template', // arg 2: the smithing template
  'createaddition:alternator',                          // arg 3: the item to be upgraded
  'kubejs:creative_ingot'                            // arg 4: the upgrade item
)

})