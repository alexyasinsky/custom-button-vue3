<template>
  <default-column :title='listTitle'>
    <div v-for="button in buttons" :key="button.id">
      <button-card>
        <custom-button
            :category="category"
        >
          <template
              v-if="button.customIcon"
              v-slot:customIcon
          >
            <custom-icon :iconName="button.customIcon"/>
          </template>
          <template
              v-if="button.faIcon"
              v-slot:faIcon
          >
            <fa-icon :iconName="button.faIcon"/>
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
import CustomIcon from '../Icons/CustomIcon.vue';
import faIcon from "../Icons/faIcon.vue";


const listTitle = '(Icon)';
const category =  'icon';
const buttons = [
        {
          id: Math.floor(Math.random() * 100000),
          faIcon: 'arrowLeft'
        },
        {
          id: Math.floor(Math.random() * 100000),
          customIcon: 'close',
        },
        {
          id: Math.floor(Math.random() * 100000),
          customIcon: 'help'
        },
        {
          id: Math.floor(Math.random() * 100000),
          faIcon: 'chevronRight'
        },
        {
          id: Math.floor(Math.random() * 100000),
          faIcon: 'googlePlusG',
        },
        {
          id: Math.floor(Math.random() * 100000),
          faIcon: 'vk',
        },
        {
          id: Math.floor(Math.random() * 100000),
          faIcon: 'odnoklassniki',
        },
        {
          id: Math.floor(Math.random() * 100000),
          faIcon: "pencilReverseY",
        }

      ]

</script>

<style scoped lang="scss">

</style>