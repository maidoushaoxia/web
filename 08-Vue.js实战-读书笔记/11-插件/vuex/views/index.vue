<template>
  <div>
    <!-- <h1>首页</h1> -->
    {{count}}
    <!-- <div>{{list}}</div>
    <div>{{listCount}}</div> -->
    <button @click="handleAsyncIncrease">action +5</button>
    <!-- <button @click="handleDecrease">-1</button> -->
  </div>
  
</template>

<script>
  export default {
   computed: {
     count(){
       return this.$store.state.count;
     },
      // list(){
      //   return this.$store.getters.filteredList;
      // },
      // listCount(){
      //   return this.$store.getters.listCount;
      // }
    },
    methods: {
    //   handleIncrease(){
    //     // this.$store.commit('increase');
    //     this.$store.commit({
    //       type:'increase',
    //       count:10
    //     });
    //   },
    //   handleDecrease(){
    //     this.$store.commit('decrease');
    //   }
      handleAsyncIncrease(){
        this.$store.dispatch('asyncIncrease').then(() => {
          console.log(this.$store.state.count);
        });
      }
    },
  }
</script>
