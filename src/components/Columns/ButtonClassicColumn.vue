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
  ];
</script>

<style scoped lang="scss">

</style>