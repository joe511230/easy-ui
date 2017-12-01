<template>
	<div class="eu-checkbox-box"
		:class='state ? "eu-checkbox-active" : ""'
		 @click="changeHander">
		<span class="eu-checkbox-dot"></span>
		<span class="eu-checkbox-text">
			<slot></slot>
		</span>
	</div>
</template>
<script>
	export default{
		name: 'EuCheckbox',
		model: {
			prop: 'checked',
			event: 'change',
		},
		props: {
			checked: Array,
			value: [String, Number]
		},
		data(){
			return {
				val: this.checked,
				state: false,
			}
		},
		methods: {
			changeHander(){
				this.state = !this.state
				if(this.state){
					this.val.push(this.value)
				}else{
					let indexOf = this.val.indexOf(this.value)
					if(indexOf > -1){
						this.val.splice(indexOf, 1)
					}
				}
				this.$emit('change', this.val)
			},
			stateHander(){
				if(this.val.indexOf(this.value) > -1){
					this.state = true
				}else{
					this.state = false
				}
			}
		},
		created(){
			this.stateHander();
		}
	}
</script>
<style lang="scss">
	.eu-checkbox{
		&-box{
			display: inline-block;
			padding: 0 3px;
			cursor: pointer;
			user-select: none;

		}
		&-active{
			color: #409eff;
			.eu-checkbox-dot{
				&:after{
					transform: rotateZ(37deg) scale(1);
				}
			}
		}
		&-dot{
			position: relative;
			display: inline-block;
			width: 14px;
			height: 14px;
			box-sizing: border-box;
			border: 2px solid;
			vertical-align: middle;
			&:after{
				content: '';
			    position: absolute;
			    top: -5px;
			    left: 3px;
			    width: 5px;
			    height: 12px;
			    border: 2px solid;
			    border-top: none;
			    border-left: none;
			    transform-origin: center;
			    transform: rotateZ(37deg) scale(0);
			    transition: transform .35s;
			}
		}
		&-text{
			display: inline-block;
			overflow: hidden;
			vertical-align: middle;
		}
	}
</style>