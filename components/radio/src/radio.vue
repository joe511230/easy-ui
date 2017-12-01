<template>
	<div class="eu-radio-box"
		:class='checkedState ? "eu-radio-active" : ""'
		@click="changeHander">
		<span class="eu-radio-dot"></span>
		<span class="eu-radio-text">
			<slot></slot>
		</span>
	</div>
</template>
<script>

	export default {
		name: 'EuRadio',
		model: {
			prop: 'checked',
			event: 'change'
		},
		props: {
			checked: [String, Number],
		    value: [String, Number]
		},
		data(){
			return {
				checkedState: false,
				val: this.value,
			}
		},
		methods: {
			changeHander(){
				this.checkedState = !this.checkedState
				this.$emit('change', this.val)
			},
			state(){
				if(Number(this.checked) !== Number(this.val)){
					this.checkedState = false
				}else{
					this.checkedState = true
				}
			}
		},
		watch: {
			checked(){
				this.state()
			}
		},
		created(){
			this.state()
		}
	}
</script>
<style lang="scss">
	.eu-radio{
		&-box{
			display: inline-block;
			height: 36px;
			padding: 0 3px;
			line-height: 36px;
			cursor: pointer;
			user-select: none;
		}
		&-active{
			color: #409eff;
			.eu-radio-dot{
				border-width: 4px;
				background: #fff;
			}
		}
		&-dot{
			display: inline-block;
			box-sizing: border-box;
			width: 14px;
			height: 14px;
			border: 2px solid;
			border-radius: 50%;
			vertical-align: middle;
			transition: all .15s;
		}
		&-text{
			display: inline-block;
			line-height: 1;
			vertical-align: middle;
			overflow: hidden;
		}
	}
</style>