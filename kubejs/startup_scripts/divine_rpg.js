onEvent('block.registry', event => {
  event.create('divine_rpg')
  	   .material('metal')
       .hardness(0.5)
       .displayName('DivineRPG') // No longer required in 1.18.2+
       .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a shovel in 1.18.2+
})