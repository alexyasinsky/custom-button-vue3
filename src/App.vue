<script setup>
import ButtonLinkColumn from "./components/ButtonLinkColumn.vue";
import IconColumn from './components/IconColumn.vue';
import ButtonMultiSizedColumn from './components/ButtonMultiSizedColumn.vue';
const sayHello = () => alert('hello');
const title = 'hello'
</script>

<template>
  <v-app class="wrapper bg-background">
    <v-container>
      <v-row no-gutters>
        <v-col>
          <button-link-column />
        </v-col>
        <v-col>
          <icon-column />
        </v-col>
        <v-col>
          <button-multi-sized-column />
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
