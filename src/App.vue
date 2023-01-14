<script setup>
  import CustomButton from "./components/CustomButton.vue";
  const sayHello = () => alert('hello');
  const title = 'hello'
</script>

<template>
  <v-app class="wrapper bg-background">
    <v-container>
      <v-row no-gutters>
        <v-col
        >
          <CustomButton :title='title' :handler="sayHello"/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped lang="scss">
  .wrapper {
    height: 100vh;
    border: 8px solid rgba(255, 255, 255, 1);
  }
</style>
