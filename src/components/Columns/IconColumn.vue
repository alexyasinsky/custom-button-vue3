<template>
  <default-column :title='listTitle'>
    <div v-for="button in buttons" :key="button.id">
      <button-card>
        <custom-button
            :category="category"
        >
            <component :is="button.component" :iconName="button.icon"/>
        </custom-button>
      </button-card>
    </div>

  </default-column>
</template>

<script setup>

import DefaultColumn from './CustomColumn.vue';
import CustomButton from "../CustomButton.vue";
import ButtonCard from "../CustomButtonCard.vue";
import CustomIcon from '../Icons/CustomIcon.vue';
import FaIcon from "../Icons/faIcon.vue";


const listTitle = '(Icon)';
const category =  'icon';
const buttons = [
        {
          id: Math.floor(Math.random() * 100000),
          icon: 'arrowLeft',
          component: FaIcon

        },
        {
          id: Math.floor(Math.random() * 100000),
          icon: 'close',
          component: CustomIcon
        },
        {
          id: Math.floor(Math.random() * 100000),
          icon: 'help',
          component: CustomIcon
        },
        {
          id: Math.floor(Math.random() * 100000),
          icon: 'chevronRight',
          component: FaIcon
        },
        {
          id: Math.floor(Math.random() * 100000),
          icon: 'googlePlusG',
          component: FaIcon
        },
        {
          id: Math.floor(Math.random() * 100000),
          icon: 'vk',
          component: FaIcon
        },
        {
          id: Math.floor(Math.random() * 100000),
          icon: 'odnoklassniki',
          component: FaIcon
        },
        {
          id: Math.floor(Math.random() * 100000),
          icon: "pencilReverseY",
          component: FaIcon
        }

      ]

</script>

<style scoped lang="scss">

</style>