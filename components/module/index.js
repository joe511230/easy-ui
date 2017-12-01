import Module from './src/module.vue'

Module.install = function(vue){
	vue.component(Module.name, Module)
}

export default Module