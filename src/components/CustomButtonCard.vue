<template>
  <div class="buttonCard">
    <h3 v-if="cardTitle">{{cardTitle}}</h3>
    <p v-if='cardTitleSmall'>{{cardTitleSmall}}</p>
    <slot></slot>
  </div>
</template>

<script setup>

  const props = defineProps({
    cardTitle: String,
    cardTitleSmall: String
  })

</script>

<style scoped lang="scss">
  .buttonCard {
    display: block;
    width: fit-content;
    margin: 0 5px 16px;

    h3 {
      text-align: left;
    }

    p {
      font-size: 14px;
      text-align: center;
    }
  }
  
</style>