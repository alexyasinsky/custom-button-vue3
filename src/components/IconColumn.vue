<template>
  <default-column :title='listTitle'>
    <div v-for="button in buttons" :key="button.id">
      <button-card>
        <custom-button
            category="icon"
            :variant="button.variant"
            :size="button.size"
        >
          <template 
            v-if="button.title" 
            v-slot:title
          >
            <p 
              :class="button.className"
            >
              {{button.title}}
            </p>
          </template>  
          <template  
            v-if="button.icon" 
            v-slot:icon
          >
            <font-awesome-icon 
              :icon="button.icon"
              :class="button.className"
            />
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
  name: "IconColumn",
  components: {
    DefaultColumn,
    CustomButton,
    ButtonCard
  },
  data() {
    return {
      listTitle: '(Icon)',
      buttons: [
        {
          id: Math.floor(Math.random() * 100000),
          icon: "fa-solid fa-arrow-left",
          className: 'icon'
        },
        {
          id: Math.floor(Math.random() * 100000),
          title: '+',
          className: 'icon icon__close'
        },
        {
          id: Math.floor(Math.random() * 100000),
          title: '?',
          className: 'icon icon__help'
        },
        {
          id: Math.floor(Math.random() * 100000),
          icon: "fa-solid fa-chevron-right",
          className: 'icon'
        },
        {
          id: Math.floor(Math.random() * 100000),
          icon: 'fa-brands fa-google-plus-g',
          className: 'icon'
        },
        {
          id: Math.floor(Math.random() * 100000),
          icon: 'fa-brands fa-vk',
          className: 'icon'
        },
        {
          id: Math.floor(Math.random() * 100000),
          icon: 'fa-brands fa-odnoklassniki',
          className: 'icon'
        },
        {
          id: Math.floor(Math.random() * 100000),
          icon: "fa-solid fa-pencil",
          className: 'icon icon__pencil'
        }

      ]
    }
  }

}
</script>

<style scoped lang="scss">
  .icon {
    height: 20px;
    &__close {
      font-family: 'Nunito', sans-serif;
      font-size: 35px;
      transform: rotate(-45deg);
      font-weight: 900;
      line-height: 30px;
      margin-left: -12px;
    }
    &__help {
      font-family: 'Nunito', sans-serif;
      font-size: 25px;
      transform: rotate(20deg);
      font-weight: 900;
      line-height: 30px;
    }
    &__pencil {
      transform: rotateY(180deg);

    }
  }
</style>