const emailReg = /^(\w)+[._-\w]*@(\w)+((\.\w+)+)$/
const numberReg = /^\d+$/
const telReg = /^1[3|4|5|7|8]\d{9}$/

export const text = () => {
	return true
}
export const required = (_value = '') => {
	if(_value === ''){
		return false
	}
	return true
}
export const length = (_value, _min_length = '', _max_length = '') => {
	let _l = _value.length
	if(_min_length !== ''){
		if(_l < _min_length){
			return false
		}
	}
	if(_max_length !== ''){
		if(_l > _max_length){
			return false
		}
	}
	return true
}
export const email = (_value) => {
	if(_value === ''){
		return false
	}
	if(!emailReg.test(_value)){
		return false
	}
	return true
}
export const number = (_value) => {
	if(_value === ''){
		return false
	}
	if(!numberReg.test(_value)){
		return false
	}
	return true
}
export const tel = (_value) => {
	if(_value === ''){
		return false
	}
	if(!telReg.test(_value)){
		return false
	}
	return true
}
export const pattern = (_value, _pattern = '') => {
	_pattern = new RegExp(_pattern)
	if(_value === ''){
		return false
	}
	if(_pattern.test(_value)){
		return false
	}
	return true
}