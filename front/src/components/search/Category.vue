<template>
		<div class="col-md-3 holder">
			<div class="row">
					<img class="img-cat" src="http://restopr.ru/wp-content/uploads/2015/02/restaurant_marketing.jpg" alt="">
					<div class="col-md-5 text"><h4><b>Ресторан</b></h4></div>
			</div>
		</div>
</template>

<script>
	export default{
		name:"category"
	}
</script>

<style scoped>
	.holder{
		display: inline-block;
		height: 72px;
		border-radius: 5px;
		border: solid 1px #E5E5E5;
		width: 25%;
		margin:1%;	
	}
	.text{
		padding-top: 15px;
		padding-left: 10px;
	}
	.image{

	}
	.img-cat{
		height: 72px;
		width: 150px;
	}
</style>