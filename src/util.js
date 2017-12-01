export const timeFormat = (value) => {
	if(value > 0 && value < 10){
		value = '0' + value
	}
	return value
}