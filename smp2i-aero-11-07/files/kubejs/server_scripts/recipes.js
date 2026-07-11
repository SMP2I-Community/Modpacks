
// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {







event.remove({ output: 'alexscaves:uranium_rod' })
event.recipes.create.mechanical_crafting('alexscaves:uranium_rod', [
    'CCC',
    'TUT',
    'TUT',
    'CCC'
    ], {
    C: 'createdeco:industrial_iron_sheet',
    T: 'alexscaves:depth_glass',
    U: 'alexscaves:uranium'
    })

 event.remove({ output: 'alexscaves:fissile_core' })
event.recipes.create.mechanical_crafting('alexscaves:fissile_core', [
    '  C  ',
    ' CTC ',
    'CTUTC',
    ' CTC ',
    '  C  '
    ], {
    C: 'createdeco:industrial_iron_ingot',
    T: 'alexscaves:uranium_rod',
    U: 'alexscaves:block_of_uranium',
    })


event.remove({id: 'create:industrial_iron_block_from_ingots_iron_stonecutting'})

event.remove({ output: 'alexscaves:nuclear_bomb' })
event.recipes.create.mechanical_crafting('alexscaves:nuclear_bomb', [
    ' BCB ',
    'BCFCB',
    'CDZTC',
    'BCFCB',
    ' BCB '
    ], {
    C: 'createdeco:industrial_iron_ingot',
    T: 'create:precision_mechanism',
    D: 'alexscaves:remote_detonator',
    Z:'createdeco:zinc_sheet',
    F:'alexscaves:fissile_core',
    B:'create:industrial_iron_block'
    })



event.remove({ output: 'alexscaves:remote_detonator' })
event.shaped('alexscaves:remote_detonator', [
    ' A ',
    'ARA',
    ' A '
], {
    R: 'create:redstone_link',
    A: 'createdeco:industrial_iron_sheet'
})




event.remove({ output: 'alexscaves:charred_remnant' })
event.recipes.create.mechanical_crafting('alexscaves:charred_remnant', [
    ' T ',
    'TUT',
    'TTT'
    ], {
    T: 'createdeco:industrial_iron_ingot',
    U: 'alexscaves:uranium_rod'
    })



event.remove({ output:'apothic_enchanting:flimsy_ender_lead'})


event.remove({ output: 'minecraft:ender_eye' })
event.recipes.create.mixing('minecraft:ender_eye', ['minecraft:ender_pearl','2x blaze_powder', Fluid.of('create_enchantment_industry:experience',108)]).heated()







event.remove({id:'create:crushing/prismarine_crystals'})

  event.recipes.create.crushing(['minecraft:diamond', CreateItem.of('minecraft:diamond', 0.5)], 'minecraft:coal_block')


event.recipes.create.crushing(['kubejs:prismarine_powder', CreateItem.of('kubejs:prismarine_powder',0.33)], 'minecraft:prismarine_crystals')
event.recipes.create.mixing('alexscaves:sea_glass_shards', 'kubejs:prismarine_powder').superheated()

event.recipes.create.mechanical_crafting('alexscaves:enigmatic_engine', [
    ' BIB ',
    'BCTGB',
    'IVEVI',
    'BGPCB',
    ' BIB '
    ], {
    E: 'create_sa:heat_engine',
    C: 'create:cogwheel',
    G: 'create:large_cogwheel',
    V:'create:copper_valve_handle',
    I:'create:copper_sheet',
    B:'minecraft:copper_block',
    T:'create:electron_tube',
    P:'create:propeller'
    })



event.remove({mod : 'untamedwilds', not:{output:'untamedwilds:trap_cage'}})


event.remove({output:'tiab:time_in_a_bottle'})
event.recipes.create.mechanical_crafting('tiab:time_in_a_bottle', [
    ' D ',
    'DGD',
    'GCG',
    'LEL'
    ], {
        D:'minecraft:diamond',
        G:'minecraft:gold_block',
        C:'minecraft:clock',
        E:'minecraft:experience_bottle',
        L:'minecraft:lapis_block'
    })


//event.remove({output:'irons_spellbooks:evoker_spell_book'})
//event.remove({output:'irons_spellbooks:necronomicon_spell_book'})


event.remove({output: 'create_sa:copper_magnet'})
event.shaped('kubejs:unmagnetized_copper_magnet', [
    'G G',
    'C C',
    'CCC'
], {
    G:'minecraft:iron_ingot',
    C: 'minecraft:copper_ingot'
})




//event.recipes.create.filling('create_sa:copper_magnet', [Fluid.of(create:potion["alexscaves:magnetizing", 250])], 'kubejs:unmagnetized_copper_magnet')

event.recipes.create.filling('create_sa:copper_magnet', [Fluid.of('create_wizardry:lightning', 250), 'kubejs:unmagnetized_copper_magnet'])



//event.remove({input:'createornithopterglider:elytra_piece'})

event.replaceInput(
  { input: 'createornithopterglider:elytra_piece' },         // Arg 1: the filter
  'createornithopterglider:elytra_piece',                    // Arg 2: the item to replace
  Ingredient.of('#createornithopterglider:wing_meshes')  // Arg 3: the item to replace it with 
  // Do /kjs hand with the items you want to use to see all their tags.
)



event.remove({id:'item.minecraft.potion.effet_id.apothic_attributes.levitation.to.item.minecraft.potion.effect_id.apothic_attributes.flying'})

event.smoking('minecraft:andesite', 'minecraft:gravel').cookingTime(2400)














})


