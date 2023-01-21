<script setup>
  import ButtonLinkColumn from "./components/Columns/ButtonLinkColumn.vue";
  import IconColumn from './components/Columns/IconColumn.vue';
  import ButtonWithIconColumn from './components/Columns/ButtonWithIconColumn.vue';
  import ButtonWithWidgetColumn from './components/Columns/ButtonWithWidgetColumn.vue';
  import ButtonClassicColumn from './components/Columns/ButtonClassicColumn.vue';
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
          <button-with-icon-column />
        </v-col>
        <v-col>
          <button-with-widget-column />
        </v-col>
        <v-col>
          <button-classic-column/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped lang="scss">
.wrapper {
  height: 100%;
  border: 8px solid rgba(255, 255, 255, 1);
}

</style>
