<template>
  <div class="hello">
        <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  computed:{
    name(){
      return  this.$store.getters.getData
    }
  },
  created(){
  	this.$store.dispatch('setData');
  }
}
</script>

<style scoped>
</style>
