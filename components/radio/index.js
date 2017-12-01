import Radio from './src/radio.vue'

Radio.install = function(vue){
	vue.component(Radio.name, Radio)
}

export default Radio