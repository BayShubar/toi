<template>
  <div class="container main">
    <div class="col-md-offset-10 col-md-offset-1 holder">
      <div class="container">
           <div class="col-md-7  slogan">
             <h1 class="logan">ToiLa</h1>
             <h2 class="slogan-text">Бронируйте хорошие рестораны и звезд для вашего праздника.</h2>
           </div>
      </div><br><br>
          <search></search><br><br>
          <categories></categories>
          <br><br><br>
    </div>
  </div>
</template>

<script>
//Duisebay Yerkebulan
import Search from '../search/Search.vue'
import Categories from '../search/Categories.vue'
export default {
  name: 'welcome',
  computed:{
    name(){
      return  this.$store.getters.getData
    }
  },
  created(){
  	this.$store.dispatch('setData');
  },
    components:{
     Search, Categories
    }
}
</script>

<style scoped>
.main{
  
}
.holder{
  padding-top: 20px;
}
.slogan{
  background-color: white;
  text-align: left;
  color: #767676;
}
.logan{
  font-size:50px;
  color: #FF5A5F;
  font-family: "Arial Black", Gadget, sans-serif;
}
.slogan-text{
  font-size: 45px;
  color: #484848;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
