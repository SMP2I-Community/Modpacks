ServerEvents.recipes(event => {

event.shapeless('b3_worldborder:expandercrystal_t1', ['2x #kjs:ingot_t1','#kjs:resource_t1', 'minecraft:amethyst_shard'])

event.recipes.create.sequenced_assembly(
    'b3_worldborder:expandercrystal_t2', 

      'minecraft:amethyst_shard', 
      [
        event.recipes.create.deploying('b3_worldborder:unstable_t2', ['b3_worldborder:unstable_t2', ['create:brass_ingot', 'irons_spellbooks:arcane_ingot', 'alloyed:steel_ingot', 'createbigcannons:cast_iron_ingot'],]),
        event.recipes.create.deploying('b3_worldborder:unstable_t2', ['b3_worldborder:unstable_t2',['minecraft:ender_pearl', 'minecraft:prismarine_shard', 'minecraft:blaze_rod','minecraft:spider_eye']]),
      ]
    )
    .transitionalItem('b3_worldborder:unstable_t2')
    .loops(2)


event.recipes.create.sequenced_assembly(
    'b3_worldborder:expandercrystal_t3', 

      'minecraft:amethyst_shard', 
      [
        event.recipes.create.deploying('b3_worldborder:unstable_t3', ['b3_worldborder:unstable_t3', ['alloyed:bronze_ingot', 'createaddition:electrum_ingot', 'createbigcannons:nethersteel_ingot'],]),
        event.recipes.create.deploying('b3_worldborder:unstable_t3', ['b3_worldborder:unstable_t3',['alexscaves:heavy_bone', 'alexscaves:tough_hide', 'irons_spellbooks:cinder_essence','alexscaves:charred_remnant', 'minecraft:turtle_scute', 'alexscaves:dark_tatters']]),
        event.recipes.create.pressing('b3_worldborder:unstable_t3', 'b3_worldborder:unstable_t3'),

    ]
    )
    .transitionalItem('b3_worldborder:unstable_t3')
    .loops(3)

event.recipes.create.sequenced_assembly(
    'b3_worldborder:expandercrystal_t4', 

      'minecraft:amethyst_shard', 
      [
        event.recipes.create.deploying('b3_worldborder:unstable_t4', ['b3_worldborder:unstable_t4', ['cataclysm:ignitium_ingot', 'cataclysm:witherite_ingot'],]),
        event.recipes.create.deploying('b3_worldborder:unstable_t4', ['b3_worldborder:unstable_t4',['irons_spellbooks:dragonskin','alexscaves:radiant_essence', 'alexscaves:gazing_pearl', 'alexscaves:pure_darkness', 'alexscaves:fissile_core', 'minecraft:nether_star']]),
        event.recipes.create.filling('b3_worldborder:unstable_t4', ['b3_worldborder:unstable_t4', Fluid.of('create_enchantment_industry:crystal_essence', 30)]),
       
        event.recipes.create.pressing('b3_worldborder:unstable_t4', 'b3_worldborder:unstable_t4'),

    ]
    )
    .transitionalItem('b3_worldborder:unstable_t4')
    .loops(4)



    
})