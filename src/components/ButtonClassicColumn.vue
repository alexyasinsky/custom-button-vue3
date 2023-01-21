<template>
  <default-column :title='listTitle'>
    <div 
      v-for="button in buttons" 
      :key="button.id"
    >
      <button-card :card-title="button.cardTitle">
        <custom-button
          :color="button.color"
        >
        <template v-slot:title>
          {{button.title}}
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

export default {
  name: "ButtonClassicColumn",
  components: {
    DefaultColumn,
    CustomButton,
    ButtonCard
  },
  data() {
    return {
      listTitle: '(Button Classic)',
      buttons: [
        {
          cardTitle: '(Primary)',
          id: Math.floor(Math.random() * 100000),
          title: 'Отправить письмо',
          color: 'primary',
        },
        {
          cardTitle: '(Secondary)',
          id: Math.floor(Math.random() * 100000),
          title: 'Отправить письмо',
          color: 'secondary'
        },
        {
          cardTitle: '(Warning)',
          id: Math.floor(Math.random() * 100000),
          title: 'Отправить письмо',
          color: 'warning'
        },
        {
          cardTitle: '(Disabled)',
          id: Math.floor(Math.random() * 100000),
          title: 'Отправить письмо',
          color: 'disabled'
        },
        {
          cardTitle: '(Info)',
          id: Math.floor(Math.random() * 100000),
          title: 'Отправить письмо',
          color: 'info'
        },
        {
          cardTitle: '(Danger)',
          id: Math.floor(Math.random() * 100000),
          title: 'Отправить письмо',
          color: 'danger'
        },
        {
          cardTitle: '(Action)',
          id: Math.floor(Math.random() * 100000),
          title: 'Отправить письмо',
          color: 'action'
        }
      ]
    }
  }

}
</script>

<style scoped lang="scss">

</style>