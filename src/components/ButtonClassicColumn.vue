<template>
  <default-column :title='listTitle'>
    <div 
      v-for="button in buttons" 
      :key="button.id"
    >
      <button-card :card-title="button.cardTitle">
        <custom-button
          :variant="button.variant"
          :size="button.size"
          :color="button.color"
          :className="button.className"
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
          className: 'btn__primary',
        },
        {
          cardTitle: '(Secondary)',
          id: Math.floor(Math.random() * 100000),
          title: 'Отправить письмо',
          className: 'btn__secondary'
        },
        {
          cardTitle: '(Warning)',
          id: Math.floor(Math.random() * 100000),
          title: 'Отправить письмо',
          className: 'btn__warning'
        },
        {
          cardTitle: '(Disabled)',
          id: Math.floor(Math.random() * 100000),
          title: 'Отправить письмо',
          className: 'btn__disabled'
        },
        {
          cardTitle: '(Info)',
          id: Math.floor(Math.random() * 100000),
          title: 'Отправить письмо',
          className: 'btn__info'
        },
        {
          cardTitle: '(Danger)',
          id: Math.floor(Math.random() * 100000),
          title: 'Отправить письмо',
          className: 'btn__danger'
        },
        {
          cardTitle: '(Action)',
          id: Math.floor(Math.random() * 100000),
          title: 'Отправить письмо',
          className: 'btn__action'

        }
      ]
    }
  }

}
</script>

<style scoped lang="scss">

</style>