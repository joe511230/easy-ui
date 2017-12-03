<template>
	<div ref="timeShow" class="eu-datepicker-box" @click.stop="">
		<input type="text" name="" :value="value" @focus="showPickerHander" readonly>
	</div>
</template>
<script>
	import Vue from 'vue'
	import Panel from './panel.vue'
	export default {
		name: 'EuDatepicker',
		data(){
			return {
				el: '',
				panel: '',
				value: '',
			}
		},
		computed: {
			refBox(){
				return this.$refs.timeShow
			},
		},
		methods: {
			showPickerHander(){
				let _set = this.refBox.getBoundingClientRect()
				let _height = _set.height
				let _top = _set.top + _height + 10 + document.body.scrollTop
				let _left = _set.left
				this.panel = new Vue(Panel).$mount()
				this.panel.$on('change', (value) => {
					this.value = value
				})
				this.el = this.panel.$el
				this.el.style.top = _top + 'px'
				this.el.style.left = _left + 'px'
				if(this.el){
					document.body.appendChild(this.el)
				}else{
					document.body.style.display = 'block'
				}
			},
			hidePanel(){
				document.body.addEventListener('click', () => {
					if(this.el){
						document.body.removeChild(this.el)
						this.el = ''
					}
				})
			}
		},
		created(){
			this.hidePanel();
		}
	}
</script>
<style lang="scss">
	.eu-datepicker{
		&-box{
			display: inline-block;
			width: 300px;
			height: 36px;
			box-sizing: border-box;
			font-size: 14px;
			color: #409eff;
			line-height: 36px;
			border: 1px solid;
			border-radius: 4px;
			overflow: hidden;
			input{
				display: block;
				width: 100%;
				height: 100%;
				padding: 0 12px;
				margin: 0;
				box-sizing: border-box;
				font-size: inherit;
				border: none;
				outline: none;
				overflow: hidden;
			}
		}
	}
</style>