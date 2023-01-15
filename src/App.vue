<script setup>
  import CustomButton from "./components/CustomButton.vue";
  import ButtonsCard from "./components/ButtonsCard.vue";
  const sayHello = () => alert('hello');
  const title = 'hello'
</script>

<template>
  <v-app class="wrapper bg-background">
    <v-container>
      <v-row no-gutters>
        <v-col>
          <buttons-card>
            <custom-button :title='title' :handler="sayHello"/>
          </buttons-card>
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
