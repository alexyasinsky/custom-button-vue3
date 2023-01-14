<script setup>
  import CustomButton from "./components/CustomButton.vue";
  const sayHello = () => alert('hello');
  const title = 'helloBtn'
</script>

<template>
  <CustomButton :title='title' :handler="sayHello"/>
</template>

<style scoped lang="scss">

</style>
