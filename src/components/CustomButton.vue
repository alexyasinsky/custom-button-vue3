
<template>
  <v-btn variant="tonal" color="secondary" @click="handler">
    {{ title }}
  </v-btn>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Untitled'
      },
      handler: {
        type: Function,
        default: ()=> {}
      }
    },

    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>
<style scoped lang="scss">

</style>
