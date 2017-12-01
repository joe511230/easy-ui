import Datepicker from './src/datepicker.vue'

Datepicker.install = (vue) => {
	vue.component(Datepicker.name, Datepicker)
}

export default Datepicker