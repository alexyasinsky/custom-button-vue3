<template>
  <default-column :title='listTitle'>
    <div v-for="button in buttons" :key="button.id">
      <button-card>
        <custom-button
            :category="button.category"
        >
            <component :is="button.icon.component" :iconName="button.icon.name"/>
        </custom-button>
      </button-card>
    </div>

  </default-column>
</template>

<script setup>

import DefaultColumn from './CustomColumn.vue';
import CustomButton from "../CustomButton.vue";
import ButtonCard from "../CustomButtonCard.vue";
import iconsLibrary from "../Icons/iconsLibrary.js";


const listTitle = '(Icon)';
const buttons = [
        {
          id: Math.floor(Math.random() * 100000),
          icon: iconsLibrary.arrowLeft,
          category: 'icon'
        },
        {
          id: Math.floor(Math.random() * 100000),
          icon: iconsLibrary.close,
          category: 'icon'
        },
        {
          id: Math.floor(Math.random() * 100000),
          icon: iconsLibrary.help,
          category: 'icon'
        },
        {
          id: Math.floor(Math.random() * 100000),
          icon: iconsLibrary.chevronRight,
          category: 'icon'
        },
        {
          id: Math.floor(Math.random() * 100000),
          icon: iconsLibrary.googlePlusG,
          category: 'icon'
        },
        {
          id: Math.floor(Math.random() * 100000),
          icon: iconsLibrary.vk,
          category: 'icon'
        },
        {
          id: Math.floor(Math.random() * 100000),
          icon: iconsLibrary.odnoklassniki,
          category: 'icon'
        },
        {
          id: Math.floor(Math.random() * 100000),
          icon: iconsLibrary.pencilReverseY,
          category: 'icon'
        }

      ]

</script>

<style scoped lang="scss">

</style>