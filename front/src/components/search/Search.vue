<template>
		<div class="container">
			<div class="col-md-10 holder">
					<input type="text" class="search" placeholder="Поиск...">
					<button class="hidden-xs btn-search">Начать поиск</button>
			</div>
		</div>
</template>

<script>
	export default{
		name:"search"
	}
</script>

<style scoped>
	.holder{
		height: 70px;
		border:1px solid #DBDBDB;
		padding: 10px;
	}
	.search{
		height: 50px;
		width: 83%;
		padding: 5px;
		border: 0px #DBDBDB solid;
		display: inline-block;
		font-size: 20px;
	}
	.search:focus{
		outline: none;
	}
	.btn-search{
		height: 50px;
		display: inline-block;
		background-color:#FF5A5F; 
		color:white;
		border: 0px solid white;
		border-radius: 5px;
		padding: 5px 15px;
		font-size: 20px;
	}
</style>