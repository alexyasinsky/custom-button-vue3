<template>
  <default-column :title='listTitle'>
    <div v-for="button in buttons" :key="button.id">
      <button-card :card-title="button.cardTitle">
        <custom-button
            :category="category"
            :color="button.color"
        >
            {{button.buttonTitle}}
            <timer-widget minutesProp="3" />
        </custom-button>
      </button-card>
    </div>

  </default-column>
</template>

<script setup>

import DefaultColumn from './CustomColumn.vue';
import CustomButton from "../CustomButton.vue";
import ButtonCard from "../CustomButtonCard.vue";
import TimerWidget from '../Widgets/TimerWidget.vue';



const listTitle = '(Button Timer)';

const category = 'buttonWithWidget';

const buttons = [
      {
        id: Math.floor(Math.random() * 100000),
        cardTitle: '(Timer)',
        buttonTitle: 'Повторное письмо',
        color: 'disabled',
      }
      ]
</script>

<style scoped lang="scss">
  

</style>