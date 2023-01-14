
<template>
  <button type="button" @click="handler">{{ title }}</button>
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
