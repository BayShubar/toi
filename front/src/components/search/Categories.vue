<template>
		<div class="container">
			<h3 class="header">Категорий</h3><br>
			<div class="row">
				<category></category>
				<category></category>
				<category></category>
			</div>
		</div>
</template>

<script>
	import Category from './Category.vue'
	export default{
		name:"categories",
		components:{
			Category
		}
	}
</script>

<style scoped>
	.header{
		font-family: "Arial Black", Gadget, sans-serif;
		text-align: left;
	}
	.list{

	}
</style>