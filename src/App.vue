<script setup>
import ButtonLink from "./components/ButtonLinkColumn.vue";
import Icon from './components/IconColumn.vue';
const sayHello = () => alert('hello');
const title = 'hello'
</script>

<template>
  <v-app class="wrapper bg-background">
    <v-container>
      <v-row no-gutters>
        <v-col>
          <button-link />
        </v-col>
        <v-col>
          <icon></icon>
        </v-col>
        <v-btn
            variant="text"
            icon="mdi-thumb-up"
            color="blue-lighten-2"
        ></v-btn>
        <v-btn
            icon="mdi-heart"
            color="primary"
        >
        </v-btn>
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
