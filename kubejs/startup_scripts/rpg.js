onEvent('block.registry', event => {
  event.create('rpg')
  	   .material('metal')
       .hardness(0.5)
       .displayName('RPG') // No longer required in 1.18.2+
       .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a shovel in 1.18.2+
})