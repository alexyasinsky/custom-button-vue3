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
    </div>
  </default-column>
</template>

<script>

import DefaultColumn from './DefaultColumn.vue';
import CustomButton from "./CustomButton.vue";
import ButtonCard from "./ButtonCard.vue";
import CustomIcon from './CustomIcon.vue';
import faIcon from "./faIcon.vue";

export default {
  name: "ButtonWithIconColumn",
  components: {
    DefaultColumn,
    CustomButton,
    ButtonCard,
    CustomIcon,
    faIcon
  },
  data() {
    return {
      listTitle: '(Button Multi-Sized)',

      cardTitles: [
          'mobile',
          'desktop'
      ],

      category: 'buttonWithIcon',

      buttons: [
        {
          id: Math.floor(Math.random() * 100000),
          color: 'primary',
          faIcon: 'arrowLeft',
        },
        {
          id: Math.floor(Math.random() * 100000),
          customIcon: 'close',
          color: 'danger',
        },
        {
          id: Math.floor(Math.random() * 100000),
          customIcon: 'help',
          color: 'help',
        },
        {
          id: Math.floor(Math.random() * 100000),
          color: 'primary',
          faIcon: 'chevronRight',
        },
        {
          id: Math.floor(Math.random() * 100000),
          color: 'danger',
          faIcon: 'googlePlusG',
        },
        {
          id: Math.floor(Math.random() * 100000),
          color: 'info',
          faIcon: 'vk',
        },
        {
          id: Math.floor(Math.random() * 100000),
          color: 'action',
          faIcon: 'odnoklassniki',

        },
        {
          id: Math.floor(Math.random() * 100000),
          color: 'primary',
          faIcon: 'pencilReverseY',
        }

      ]
    }
  }

}
</script>

<style scoped lang="scss">
  .buttonCardWrapper {
    display: flex;
    justify-content: space-around;
  }

</style>