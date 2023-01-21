<template>
  <default-column :title='listTitle'>
    <div v-for="button in buttons" :key="button.id">
      <button-card :card-title="button.cardTitle">
        <custom-button
            :category="category"
            :color="button.color"
        > 
          <template v-slot:title>
            {{button.buttonTitle}}
            <timer-widget minutesProp="3" />
          </template>    
          
        </custom-button>
      </button-card>
    </div>

  </default-column>
</template>

<script>

import DefaultColumn from './DefaultColumn.vue';
import CustomButton from "./CustomButton.vue";
import ButtonCard from "./ButtonCard.vue";
import TimerWidget from './TimerWidget.vue';

export default {
  name: "ButtonWithWidgetColumn",
  components: {
    DefaultColumn,
    CustomButton,
    ButtonCard,
    TimerWidget
  },
  data() {
    return {
      listTitle: '(Button Timer)',

      category: 'buttonWithWidget',

      buttons: [
        {
          id: Math.floor(Math.random() * 100000),
          cardTitle: '(Timer)',
          buttonTitle: 'Повторное письмо',
          color: 'disabled',
        }
      ],
    }
  },
  

}
</script>

<style scoped lang="scss">
  

</style>