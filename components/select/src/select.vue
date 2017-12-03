<template>
	<div class="eu-select-box">
		<div class="eu-select-value">{{value}}</div>
	</div>
</template>
<script>
	export default {
		name: 'EuSelect',
		model: {
			prop: '_value',
			event: 'selectchange',
		},
		props: {
			_value: [String, Number],
			value: {
				type: [String, Number],
				default: '请选择'
			}
		},
		data(){
			return {

			}
		}
	}
</script>
<style lang="scss">
	.eu-select{
		&-box{
			display: inline-block;
			width: 240px;
			height: 36px;
			padding: 0 12px;
			font-size: 14px;
			text-align: left;
			line-height: 36px;
			color: #409eff;
			border: 1px solid;
			border-radius: 4px;
		}
	}
</style>