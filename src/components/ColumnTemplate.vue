<template>
  <v-card elevation=0 color="background" class="column-template">
    <v-card-title><h1>{{title}}</h1></v-card-title>
    <v-card-text>
      <slot/>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ColumnTemplate",
  props: {
    title: {
      type: String,
      default: 'Untitled'
    }
  }
}
</script>

<style scoped>
  .column-template {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>