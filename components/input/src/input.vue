<template>
	<div class="eu-input-box"
		:class='errorState ? "eu-input-error" : ""'>
		<input class="eu-input-input" 
			type="text" 
			:name="name" 
			:value="val" 
			:placeholder="placeholder" 
			@input="changeHander">
		<div v-if="errorState" class="eu-input-tips">{{error}}</div>
	</div>
</template>
<script>
	import * as Ruler from 'src/inputRuler'
	export default{
		name: 'EuInput',
		model: {
			prop: '_value',
			event: 'inputchange',
		},
		props: {
			_value: {
				type: String,
			},
			type: {
				type: String,
				default: 'text',
			},
			name: {
				type: [String, Array],
				default: '',
			},
			placeholder: {
				type: String,
				default: ''
			},
			length: {
				type: [String, Number],
				default: '',
			},
			min: {
				type: [String, Number],
				default: 0
			},
			max: {
				type: [String, Number],
				default: '',
			},
			pattern: {
				type: String,
				default: '',
			},
			error: {
				type: String,
				default: ''
			}
		},
		data(){
			return {
				val: this._value,
				errorState: false,
			}
		},
		methods: {
			changeHander(event){

				// console.dir(this.$options.parent.testChild)
				this.$options.parent.testChild = true

				let _type = this.type
				
				try{

					if(!(_type in Ruler)){
						throw new Error('dont support type check')
					}

				} catch(error){
					console.error(error)
				}
				let _value = event.target.value
				this.val = _value

				this.$emit('inputchange', _value)
				if(this.validator(this.type, _value)){
					this.errorState = false
				}else{
					this.errorHander()
				}
			},
			validator(_type, _value){
				switch(_type){
					case 'required':
						return Ruler.required(_value)
						break
					case 'email':
						return Ruler.email(_value)
						break
					case 'number':
						return Ruler.number(_value)
						break
					case 'tel':
						return Ruler.tel(_value)
						break
					case 'length':
						return Ruler.length(_value, Number(this.min), Number(this.max))
						break
					default:
						return Ruler.text()
						break
				}
			},
			errorHander(){
				this.errorState = true			
			}
		},
	}
</script>
<style lang="scss">
	.eu-input{
		&-box{
			position: relative;
			display: inline-block;
			width: 300px;
			font-size: 14px;
			line-height: 36px;
			& > input{
				width: 100%;
				height: 36px;
				padding: 0 12px;
				font-size: inherit;
				line-height: inherit;
				color: inherit;
				border: 1px solid #409eff;
				border-radius: 4px;
				outline: none;
			}
		}
		&-error{
			input{
				border-color: #ef1111;
			}
		}
		&-tips{
			position: absolute;
			top: -25px;
			left: 50%;
			height: 20px;
			padding: 0 16px;
			border: 1px solid;
			border-radius: 3px;
			font-size: 12px;
			line-height: 20px;
			color: #ef1111;
			background-color: #fff;
			transform: translateX(-60%);
			&:after{
				content: '';
				position: absolute;
				bottom: -4px;
				left: 50%;
				width: 6px;
				height: 6px;
				border-width: 0 0 1px 1px;
				border-style: solid;
				background-color: inherit;
				transform: rotateZ(-45deg);
			}
		}
	}
</style>