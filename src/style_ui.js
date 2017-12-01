import Vue from 'vue'
import Button from 'components/button'
import Module from 'components/module'
import Radio from 'components/radio'
import Checkbox from 'components/checkbox'
import Datepicker from 'components/datepicker'
import Input from 'components/input'
import Switch from 'components/switch'

const components = [
	Button,
	Module,
	Radio,
	Checkbox,
	Datepicker,
	Input,
	Switch
]

const install = (vue, options) => {
	components.forEach((com) => {
		vue.component(com.name, com)
	})
}
export default {
	install
};
