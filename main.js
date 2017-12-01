import Vue from 'vue'
import styleUi from './src/style_ui.js'
import App from './app.vue'

Vue.use(styleUi, {
	prefix: 'wetest'
})
var aaaa = new Vue({
	el: '#app',
	render: h => h(App)
})

