<template>
	<div>
		<eu-module name="button">
			<eu-button v-on:click="testClick">button hello</eu-button>
			<eu-button v-on:click="testClick">button hello</eu-button>
			<eu-button v-on:click="testClick">button hello</eu-button>
		</eu-module>
		<eu-module name="radio">
			<eu-radio v-model="radio" value="1">hello radio</eu-radio>
			<eu-radio v-model="radio" value="2">hello radio other</eu-radio>
			<eu-radio v-model="radio" value="3">hello radio other</eu-radio>
			<eu-radio v-model="radio" value="4">hello radio other</eu-radio>
		</eu-module>
		<eu-module name="checkbox">
			<eu-checkbox v-model="checkbox" value="first">hello checkboxs</eu-checkbox>
			<eu-checkbox v-model="checkbox" value="two">hello checkboxs</eu-checkbox>
			<eu-checkbox v-model="checkbox" value="three">hello checkboxs</eu-checkbox>
			<eu-checkbox v-model="checkbox" value="four">hello checkboxs</eu-checkbox>
			<eu-checkbox v-model="checkbox" value="five">hello checkboxs</eu-checkbox>
		</eu-module>
		<eu-module>
			<p>
				<eu-input 
					v-model="inputText" 
					type="required" 
					name="test"
					error="不能为空"
					placeholder="this is text">
				</eu-input>
			</p>
			<p>
				<eu-input 
					v-model="inputEmail" 
					type="email" 
					name="test"
					error="email格式不正确" 
					placeholder="this is email">
				</eu-input>
			</p>
			<p>
				<eu-input 
					v-model="inputNumber" 
					type="number" 
					name="test"
					error="输入的不是数字" 
					placeholder="this is number">
				</eu-input>
			</p>
			<p>
				<eu-input 
					v-model="inputLength" 
					type="length" 
					name="test" 
					min="8"
					max="16"
					error="请输入8-16个字符"
					placeholder="this is placeholder">
				</eu-input>
			</p>
		</eu-module name="switch">
		<eu-module>
			<eu-switch v-model="switchtext" value="default switch">
				<span slot="left">开</span>
				<span slot="right">关</span>
			</eu-switch>
		</eu-module>
		<eu-module name="select">
			<eu-select v-model="selectOptions"></eu-select>
		</eu-module>
		<eu-module name="datepicker">
			<eu-datepicker></eu-datepicker>
		</eu-module>
	</div>
</template>
<script>
	export default {
		name: 'app',
		data(){
			return {
				radio: 1,
				checkbox: ['first','two'],
				inputText: 'input text',
				inputEmail: 'input email',
				inputNumber: 'input numer',
				inputLength: 'input length',
				switchtext: 1,
				selectOptions: [
					{
						key: 'select 1',
						value: 1,
					},
					{
						key: 'select 2',
						value: 2,
					},
					{
						key: 'select 3',
						value: 3,
					},
				]
			}
		},
		methods: {
			testClick(){
				console.log('button click')
			}
		},
		updated(){
			// console.log(this.radio, this.checkbox, this.inputText, this.inputEmail, this.inputNumber, this.inputLength, this.switchtext)
			console.log(this.inputLength)
		},
		mounted(){
			
		}
	}
</script>
<style lang="scss">
	[class*="eu-"]{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		div,p{
			box-sizing: border-box;
		}
	}
	
	body{
		font-family: 'helvetica neue';
		padding-bottom: 500px;
	}
</style>