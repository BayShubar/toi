<template>
<nav class="navbar holder">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand hidden-sm hidden-xs"  href="#"><img src="../image/logo.png" class="logo" alt="Logo"></a>
      <a class="navbar-brand hidden-lg hidden-md"  href="#"><img src="../image/logo.png" class="logo" alt="Logo"></a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
      	<li><a class="menu" href="#">Домой</a></li>
      	<li><a class="menu" href="#">Поиск</a></li>
        <li><a class="menu"  href="#">Регистрация</a></li>
        <li><a class="menu" href="#">Войти</a></li>
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
	color:#767676;
	margin-right: 17px;
	font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}
.menu:hover{
	background-color: white;
	border-bottom: 2px solid #767676;
}
.logo{
	height:"40px";
	margin-top: -15px;
}
.icon-bar{
  color:red;
}
</style>