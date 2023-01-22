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
              :category="button.category"
              :color="button.color"
          >
            <component :is="button.icon.component" :iconName="button.icon.name"/>
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
  import iconsLibrary from "../Icons/iconsLibrary.js";

  const listTitle = '(Button Multi-Sized)';

  const cardTitles = ['mobile', 'desktop'];

  const buttons = [
    {
      id: Math.floor(Math.random() * 100000),
      color: 'primary',
      icon: iconsLibrary.arrowLeft,
      category: 'buttonWithIcon'
    },
    {
      id: Math.floor(Math.random() * 100000),
      color: 'danger',
      icon: iconsLibrary.close,
      category: 'buttonWithIcon'
    },
    {
      id: Math.floor(Math.random() * 100000),
      color: 'help',
      icon: iconsLibrary.help,
      category: 'buttonWithIcon'
    },
    {
      id: Math.floor(Math.random() * 100000),
      color: 'primary',
      icon: iconsLibrary.chevronRight,
      category: 'buttonWithIcon'
    },
    {
      id: Math.floor(Math.random() * 100000),
      color: 'danger',
      icon: iconsLibrary.googlePlusG,
      category: 'buttonWithIcon'
    },
    {
      id: Math.floor(Math.random() * 100000),
      color: 'info',
      icon: iconsLibrary.vk,
      category: 'buttonWithIcon'
    },
    {
      id: Math.floor(Math.random() * 100000),
      color: 'action',
      icon: iconsLibrary.odnoklassniki,
      category: 'buttonWithIcon'
    },
    {
      id: Math.floor(Math.random() * 100000),
      color: 'primary',
      icon: iconsLibrary.pencilReverseY,
      category: 'buttonWithIcon'
    }
  ]

</script>

<style scoped lang="scss">
  .buttonCardWrapper {
    display: flex;
    justify-content: space-around;
  }

</style>