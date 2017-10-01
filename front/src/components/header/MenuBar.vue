<template>
<nav class="navbar holder">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand"  href="#"><img src="../image/logo.png" class="logo" alt="Logo"></a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
      	<li><a class="menu" href="#">Home</a></li>
      	<li><a class="menu" href="#">Search</a></li>
        <li><a class="menu"  href="#">Sign Up</a></li>
        <li><a class="menu" href="#">Login</a></li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
	export default{
		name:"menu-bar"
	}
</script>

<style scoped>
.holder{
	height: 64px;
	padding: 8px;
	background-color: white;
}
.menu{
	color:black;
	margin-right: 20px;
	font-size: 18px;
}
.menu:hover{
	background-color: white;
	border-bottom: 2px solid black;
}
.logo{
	height:"40px";
	margin-top: -15px;
}
</style>