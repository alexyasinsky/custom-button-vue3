<template>
  <default-column :title='listTitle'>
    <div v-for="button in buttons" :key="button.id">
      <button-card :card-title="button.cardTitle">
        <custom-button
            :category="button.category"
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

const buttons = [
      {
        id: Math.floor(Math.random() * 100000),
        cardTitle: '(Timer)',
        buttonTitle: 'Повторное письмо',
        color: 'disabled',
        category: 'buttonWithWidget'
      }
      ]
</script>

<style scoped lang="scss">
  

</style>