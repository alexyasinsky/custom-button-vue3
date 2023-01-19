<template>
  <default-column :title='listTitle'>
    <div v-for="button in buttons" :key="button.id">
      <button-card :card-title="button.cardTitle">
        <custom-button
            :variant="button.variant"
            :category="button.buttonCategory"
            :href="button.href"
        >
          <p>{{button.buttonTitle}}</p>
        </custom-button>
      </button-card>
    </div>

  </default-column>
</template>

<script>

import DefaultColumn from './DefaultColumn.vue';
import CustomButton from "./CustomButton.vue";
import ButtonCard from "./ButtonCard.vue";

export default {
  name: "ButtonLinkColumn",
  components: {
    DefaultColumn,
    CustomButton,
    ButtonCard
  },
  data() {
    return {
      listTitle: '(Button Link)',
      buttons: [
        {
          id: Math.floor(Math.random() * 100000),
          cardTitle: '(Hover)',
          buttonTitle: 'Напомнить пин-код',
          variant: 'text',
          buttonCategory: 'link',
          href: '1234'
        },
        {
          id: Math.floor(Math.random() * 1000),
          cardTitle: '(Pressed)',
          buttonTitle: 'Напомнить пин-код',
          variant: 'text',
          buttonCategory: 'link',
        }
      ]
    }
  }

}
</script>

<style scoped lang="scss">

</style>