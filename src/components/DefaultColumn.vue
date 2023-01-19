<template>
  <div class="defaultColumn">
    <h1>{{title}}</h1>
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
    h1 {
      margin-bottom: 20px;
    }
  }
</style>