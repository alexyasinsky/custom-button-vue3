<template>
  <div class="defaultColumn">
    <h2>{{title}}</h2>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "DefaultColumn",
  props: {
    title: {
      type: String,
      default: 'Untitled'
    }
  }
}
</script>

<style scoped lang="scss">
  .defaultColumn {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      margin-bottom: 30px;
    }
  }
</style>