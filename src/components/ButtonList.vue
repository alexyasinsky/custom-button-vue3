<template>
  <v-card elevation=0 color="background">
    <v-card-title><h1>{{title}}</h1></v-card-title>
    <v-card-text>
      <slot/>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ButtonsCard",
  props: {
    title: {
      type: String,
      default: 'Untitled'
    }
  }
}
</script>

<style scoped>

</style>