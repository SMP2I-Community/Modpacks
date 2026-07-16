MoreJS.registerPotionBrewing((event) => {


    /*
event.removeByPotion("apotheosis:levitation", null, null)
event.removeByPotion("apotheosis:long_flying", null, null)

event.removeByPotion("apotheosis:extra_long_flying", null, null)


/*
    event.addCustomBrewing(
        'kubejs:creative_ingot',
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "minecraft:slow_falling";
        }),
        Item.of('minecraft:potion', '{Potion:"apotheosis:flying"}') // This is a custom made potion. It's not vanilla
    )
*/

event.removePotionBrewing({
        ingredient: "minecraft:popped_chorus_fruit"
    })

event.removePotionBrewing({
        output: 'minecraft:potion[potion_contents={potion:"apothic_attributes:flying"}]'
    })    
event.removePotionBrewing({output: "apothic_attributes:levitation"})

event.removePotionBrewing({output: "apothic_attributes:long_flying"})
    
event.removePotionBrewing({output: "apothic_attributes:extra_long_flying"})  


event.removeCustomBrewing({


        output: "apothic_attributes:flying",
    })



}) 