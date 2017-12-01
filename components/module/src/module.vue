<template>
	<div class="eu-module" :data-module-name="prex + '-' + name">
		<slot></slot>	
	</div>
</template>
<script>
	export default {
		name: 'EuModule',
		props: {
			name: {
				type: String,
				default: () => 'module'
			}
		},
		data(){
			return {
				prex: 'web',
			}
		},
	}
</script>
<style lang="scss">
	div[data-module-name]{
		&:before,
		&:after{
			content: '';
			display: table-cell;
			clear: both;
		}
	}
</style>