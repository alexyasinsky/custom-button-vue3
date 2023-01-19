<template>
  <default-column :title='listTitle'>
    <div 
      v-for="button in buttons" 
      :key="button.id"
      class="buttonCardWrapper"
    >
      <button-card card-title-small="mobile">
          <custom-button
          category="buttonWithIcon"
          :variant="button.variant"
          :size="button.size"
          :color="button.color"
          :className="button.className"
        >
        <template v-slot:title 
            v-if='button.title' 
            :class="button.iconClassName"
          >
            {{button.title}}
        </template>
          <font-awesome-icon 
            v-if="button.icon" 
            :icon="button.icon"
            :class="button.iconClassName"
          />
        </custom-button>
      </button-card>
      <button-card  card-title-small="desktop">
          <custom-button
          category="buttonWithIcon"
          :variant="button.variant"
          :size="button.size"
          :color="button.color"
          :className="button.className"
        >
          <p 
            v-if='button.title' 
            :class="button.iconClassName"
          >
            {{button.title}}
          </p>
          <font-awesome-icon 
            v-if="button.icon" 
            :icon="button.icon"
            :class="button.iconClassName"
          />
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
  name: "ButtonWithIconColumn",
  components: {
    DefaultColumn,
    CustomButton,
    ButtonCard
  },
  data() {
    return {
      listTitle: '(Button Multi-Sized)',
      buttons: [
        {
          id: 'leftArrowIcon',
          icon: "fa-solid fa-arrow-left",
          iconClassName: 'icon',
          className: 'btn__primary',
        },
        {
          id: 'closeIcon',
          title: '+',
          iconClassName: 'icon__close',
          className: 'btn__danger'
        },
        {
          id: 'helpIcon',
          title: '?',
          iconClassName: 'icon__help',
          className: 'btn__help'
        },
        {
          id: 'chevronRight',
          icon: "fa-solid fa-chevron-right",
          iconClassName: 'icon',
          className: 'btn__primary'
        },
        {
          id: 'googlePlusIcon',
          icon: 'fa-brands fa-google-plus-g',
          iconClassName: 'icon',
          className: 'btn__danger'
        },
        {
          id: 'vkIcon',
          icon: 'fa-brands fa-vk',
          iconClassName: 'icon',
          className: 'btn__info'
        },
        {
          id: 'odnoklassnikiIcon',
          icon: 'fa-brands fa-odnoklassniki',
          iconClassName: 'icon',
          className: 'btn__action'

        },
        {
          id: 'pencilIcon',
          icon: "fa-solid fa-pencil",
          iconClassName: 'icon icon__pencil',
          className: 'btn__primary'
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
    height: 25px;
    &__close {
      font-size: 50px;
      transform: rotate(-45deg);
      font-weight: 900;
      line-height: 30px;
    }
    &__help {
      font-size: 36px;
      transform: rotate(20deg);
      font-weight: 900;
      line-height: 30px;
    }
    &__pencil {
      transform: rotateY(180deg);

    }
  }
</style>