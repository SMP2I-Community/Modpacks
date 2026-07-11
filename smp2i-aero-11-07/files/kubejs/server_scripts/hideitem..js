JEIEvents.hideItems(event => {

  event.hide('kubejs:the_game')


event.hide({ mod : 'ftbquests'})


 
event.hide('apotheosis:ender_lead')
  
 /* 
Ingredient.of('@untamedwilds').stacks.forEach(item => {
  if (item == 'untamedwilds:trap_cage'){
  }
  else{event.hide(item)}
}) 
*/



Ingredient.of('@ftbquests').stacks.forEach(item => {
  event.hide(item)}
)




})

