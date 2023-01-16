<template>
  <h3>{{cardTitle}}</h3>
  <p>{{cardTitleSmall}}</p>
  <slot></slot>
</template>

<script>
export default {
  name: "ButtonCard",
  props: {
    cardTitle: {
      type: String
    },
    cardTitleSmall: {
      type: String
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
  p {
    font-size: 14px;
    line-height: 18px;
    text-align: center;
  }
</style>