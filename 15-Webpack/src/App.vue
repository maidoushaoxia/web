<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello, webpack"
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
  color: red;
}
</style>