<template>
  <button-list :title='listTitle' class="button__list">
    <div v-for="button in buttons">
      <button-card :card-title="button.cardTitle">
        <custom-button
            :title="button.buttonTitle"
            :variant="button.buttonVariant"
            :category="button.buttonCategory"
            :href="button.href"
        />
      </button-card>
    </div>

  </button-list>
</template>

<script>

import ButtonList from "./ButtonList.vue";
import CustomButton from "./CustomButton.vue";
import ButtonCard from "./ButtonCard.vue";

export default {
  name: "ButtonLink",
  components: {
    ButtonList,
    CustomButton,
    ButtonCard
  },
  data() {
    return {
      listTitle: '(ButtonLink)',
      buttons: [
        {
          cardTitle: '(Hover)',
          buttonTitle: 'Напомнить пин-код',
          buttonVariant: 'text',
          buttonCategory: 'link',
          href: '1234'
        },
        {
          cardTitle: '(Pressed)',
          buttonTitle: 'Напомнить пин-код',
          buttonVariant: 'text',
          buttonCategory: 'link',
        }
      ]
    }
  }

}
</script>

<style scoped lang="scss">
  .button {
    &__list {
      width: 260px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

  }
</style>