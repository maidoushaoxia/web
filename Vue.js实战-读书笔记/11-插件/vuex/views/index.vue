<template>
  <div>
    <h1>首页</h1>
    {{count}}
    <button @click="handleIncrease">+10</button>
    <button @click="handleDecrease">-1</button>
  </div>
  
</template>

<script>
  export default {
   computed: {
      count(){
        return this.$store.state.count;
      }
    },
    methods: {
      handleIncrease(){
        // this.$store.commit('increase');
        this.$store.commit({
          type:'increase',
          count:10
        });
      },
      handleDecrease(){
        this.$store.commit('decrease');
      }
    },
  }
</script>
