<template>
  <default-column :title='listTitle'>
    <div 
      v-for="button in buttons" 
      :key="button.id"
    >
      <button-card :card-title="button.cardTitle">
        <custom-button
          :color="button.color"
          :category="button.category"
        >
          {{button.title}}
        </custom-button>
      </button-card>
    </div>

  </default-column>
</template>

<script setup>

  import DefaultColumn from './CustomColumn.vue';
  import CustomButton from "../CustomButton.vue";
  import ButtonCard from "../CustomButtonCard.vue";

  const listTitle = '(Button Classic)';
  const buttons = [
    {
      cardTitle: '(Primary)',
      id: Math.floor(Math.random() * 100000),
      title: 'Отправить письмо',
      color: 'primary',
      category: 'buttonClassic'
    },
    {
      cardTitle: '(Secondary)',
      id: Math.floor(Math.random() * 100000),
      title: 'Отправить письмо',
      color: 'secondary',
      category: 'buttonClassic'
    },
    {
      cardTitle: '(Warning)',
      id: Math.floor(Math.random() * 100000),
      title: 'Отправить письмо',
      color: 'warning',
      category: 'buttonClassic'
    },
    {
      cardTitle: '(Disabled)',
      id: Math.floor(Math.random() * 100000),
      title: 'Отправить письмо',
      color: 'disabled',
      category: 'buttonClassic'
    },
    {
      cardTitle: '(Info)',
      id: Math.floor(Math.random() * 100000),
      title: 'Отправить письмо',
      color: 'info',
      category: 'buttonClassic'
    },
    {
      cardTitle: '(Danger)',
      id: Math.floor(Math.random() * 100000),
      title: 'Отправить письмо',
      color: 'danger',
      category: 'buttonClassic'
    },
    {
      cardTitle: '(Action)',
      id: Math.floor(Math.random() * 100000),
      title: 'Отправить письмо',
      color: 'action',
      category: 'buttonClassic'
    }
  ];
</script>

<style scoped lang="scss">

</style>