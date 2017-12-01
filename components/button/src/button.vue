<template>
	<button class="eu-button" @click="handerClick">
		<slot></slot>
	</button>
</template>
<script>
	export default {
		name: 'EuButton',
		methods: {
			handerClick(){
				this.$emit('click')
			}
		}
	}
</script>
<style>
	.eu-button{
		display: inline-block;
		height: 36px;
		padding: 0 12px;
		font-size: 14px;
		text-align: center;
		line-height: 36px;
		border: none;
		border-radius: 4px;
		color: #fff;
		background: #409eff;
		outline: none;
		cursor: pointer;
		user-select: none;
	}
</style>