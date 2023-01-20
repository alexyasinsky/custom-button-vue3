<template>
  <default-column :title='listTitle'>
    <div 
      v-for="button in buttons" 
      :key="button.id"
      class="buttonCardWrapper"
    >
      <button-card  card-title-small="mobile">
        <custom-button
          :category="button.category"
          :color="button.color"
        >
          <template 
            v-if="button.title" 
            v-slot:title 
            >
            <p 
              :class="button.iconClassName"
            >
              {{button.title}}
            </p>
          </template>
          <template 
            v-if="button.customIcon" 
            v-slot:customIcon 
            >
            <custom-icon :name="button.customIcon"/>
          </template>
          <template 
            v-if="button.icon"  
            v-slot:icon
          >
            <font-awesome-icon 
              :icon="button.icon"
              :class="button.iconClassName"
            />
          </template>  
        </custom-button>
      </button-card>
      <button-card  card-title-small="desktop">
        <custom-button
          :category="button.category"
          :color="button.color"
        >
          <template 
            v-if="button.title" 
            v-slot:title 
            >
            <p 
              :class="button.iconClassName"
            >
              {{button.title}}
            </p>
          </template>
          <template 
            v-if="button.customIcon" 
            v-slot:customIcon 
            >
            <custom-icon :name="button.customIcon"/>
          </template>
          <template 
            v-if="button.icon"  
            v-slot:icon
          >
            <font-awesome-icon 
              :icon="button.icon"
              :class="button.iconClassName"
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
import CustomIcon from './CustomIcon.vue';

export default {
  name: "ButtonWithIconColumn",
  components: {
    DefaultColumn,
    CustomButton,
    ButtonCard,
    CustomIcon
  },
  data() {
    return {
      listTitle: '(Button Multi-Sized)',
      buttons: [
        {
          id: 'leftArrowIcon',
          icon: "fa-solid fa-arrow-left",
          iconClassName: 'icon',
          color: 'primary',
          category: "buttonWithIcon"
        },
        {
          id: 'closeIcon',
          customIcon: 'close',
          iconClassName: 'icon',
          color: 'danger',
          category: "buttonWithIcon"
        },
        {
          id: 'helpIcon',
          customIcon: 'help',
          color: 'help',
          category: "buttonWithIcon"
        },
        {
          id: 'chevronRight',
          icon: "fa-solid fa-chevron-right",
          iconClassName: 'icon',
          color: 'primary',
          category: "buttonWithIcon"
        },
        {
          id: 'googlePlusIcon',
          icon: 'fa-brands fa-google-plus-g',
          iconClassName: 'icon',
          color: 'danger',
          category: "buttonWithIcon"
        },
        {
          id: 'vkIcon',
          icon: 'fa-brands fa-vk',
          iconClassName: 'icon',
          color: 'info',
          category: "buttonWithIcon"
        },
        {
          id: 'odnoklassnikiIcon',
          icon: 'fa-brands fa-odnoklassniki',
          iconClassName: 'icon',
          color: 'action',
          category: "buttonWithIcon"

        },
        {
          id: 'pencilIcon',
          icon: "fa-solid fa-pencil",
          iconClassName: 'icon icon__pencil',
          color: 'primary',
          category: "buttonWithIcon"
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
  .icon {
    height: 20px;
    &__pencil {
      transform: rotateY(180deg);
    }
  }

  @media (max-width: 639px) {
  .icon {
    height: 16px;
  }
}
</style>