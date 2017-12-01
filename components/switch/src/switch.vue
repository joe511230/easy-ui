<template>
	<div class="eu-switch-box">
		<slot name="left">开</slot>
		<span class="eu-switch-check" 
			:class='state ? "eu-active" : ""'
			@click="changeHander"></span>
		<slot name="right">关</slot>
	</div>
</template>
<script>
	export default{
		name: 'EuSwitch',
		model: {
			prop: '_value',
			event: 'switchchange'
		},
		props: {
			value: {
				type: String,
				default: '',
			}
		},
		data(){
			return {
				state: true
			}
		},
		methods: {
			changeHander(){
				let _value = ''
				
				if(this.state){
					_value = this.value
				}else{
					_value = ''
				}
				this.state = !this.state
				this.$emit('switchchange', _value)
			}
		}
	}
</script>
<style lang="scss">
	.eu-switch {
		&-box{
			display: inline-block;
			height: 36px;
			padding: 6px 0;
			line-height: 24px;
			user-select: none;
			*{
				display: inline-block;
			}
		}
		&-check{
			position: relative;
			display: inline-block;
			width: 44px;
			height: 24px;
			border-radius: 12px;
			background: #409eff;
			vertical-align: top;
			cursor: pointer;
			&:after{
				content: '';
				position: absolute;
				height: 22px;
				width: 22px;
				margin: 1px;
				border-radius: 50%;
				background: #fff;
				transition: transform .15s;
			}
			&.eu-active{
				background-color: rgb(255, 73, 73);
				&:after{
					transform: translate3d(18px, 0, 0)
				}
			}
		}
	}
</style>