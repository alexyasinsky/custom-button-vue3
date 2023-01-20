<template>
  <default-column :title='listTitle'>
    <div v-for="button in buttons" :key="button.id">
      <button-card :card-title="button.cardTitle">
        <custom-button
            :variant="button.variant"
            :href="button.href"
            category="buttonWithWidget"
            :className="button.className"
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
      buttons: [
        {
          id: Math.floor(Math.random() * 100000),
          cardTitle: '(Timer)',
          buttonTitle: 'Повторное письмо',
          variant: 'text',
          className: 'btn__disabled',
        }
      ],
    }
  },
  

}
</script>

<style scoped lang="scss">
  

</style>