onEvent('block.registry', event => {
  event.create('super_netherite_block')
  	   .material('metal')
       .hardness(0.5)
       .displayName('Super Netherite Block') // No longer required in 1.18.2+
       .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a shovel in 1.18.2+
})