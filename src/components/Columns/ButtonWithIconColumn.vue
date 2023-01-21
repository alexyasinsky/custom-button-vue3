<template>
  <default-column :title='listTitle'>
    <div 
      v-for="button in buttons" 
      :key="button.id"
      class="buttonCardWrapper"
    >
      <div
        v-for="title in cardTitles"
        :key="Math.floor(Math.random() * 100000)"
      >
        <button-card  :card-title-small="title">
          <custom-button
              :category="category"
              :color="button.color"
          >
            <component :is="button.component" :iconName="button.icon"/>
          </custom-button>
        </button-card>
      </div>
    </div>
  </default-column>
</template>

<script setup>

  import DefaultColumn from './CustomColumn.vue';
  import CustomButton from "../CustomButton.vue";
  import ButtonCard from "../CustomButtonCard.vue";
  import CustomIcon from '../Icons/CustomIcon.vue';
  import FaIcon from "../Icons/faIcon.vue";


  const listTitle = '(Button Multi-Sized)';

  const cardTitles = ['mobile', 'desktop'];

  const category = 'buttonWithIcon';

  const buttons = [
    {
      id: Math.floor(Math.random() * 100000),
      color: 'primary',
      icon: 'arrowLeft',
      component: FaIcon
    },
    {
      id: Math.floor(Math.random() * 100000),
      icon: 'close',
      color: 'danger',
      component: CustomIcon
    },
    {
      id: Math.floor(Math.random() * 100000),
      icon: 'help',
      color: 'help',
      component: CustomIcon
    },
    {
      id: Math.floor(Math.random() * 100000),
      color: 'primary',
      icon: 'chevronRight',
      component: FaIcon
    },
    {
      id: Math.floor(Math.random() * 100000),
      color: 'danger',
      icon: 'googlePlusG',
      component: FaIcon
    },
    {
      id: Math.floor(Math.random() * 100000),
      color: 'info',
      icon: 'vk',
      component: FaIcon
    },
    {
      id: Math.floor(Math.random() * 100000),
      color: 'action',
      icon: 'odnoklassniki',
      component: FaIcon
    },
    {
      id: Math.floor(Math.random() * 100000),
      color: 'primary',
      icon: 'pencilReverseY',
      component: FaIcon
    }
  ]

</script>

<style scoped lang="scss">
  .buttonCardWrapper {
    display: flex;
    justify-content: space-around;
  }

</style>