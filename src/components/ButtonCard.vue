<template>
  <h3>{{cardTitle}}</h3>
  <slot></slot>
</template>

<script>
export default {
  name: "ButtonCard",
  props: {
    cardTitle: {
      type: String,
      default: 'Untitled'
    }
  }
}
</script>

<style scoped lang="scss">
  h3 {
    text-align: left;
    margin-bottom: 8px;
    margin-top: 16px;
  }
</style>