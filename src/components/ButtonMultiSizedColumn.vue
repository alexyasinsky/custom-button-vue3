<template>
  <button-list :title='listTitle' class="button__list">
    <div 
      v-for="button in buttons" 
      :key="button.id"
      class="buttonCard"
    >
      <button-card :card-title-small="button.cardTitle">
        <custom-button
          category="buttonWithIcon"
          :variant="button.variant"
          :size="button.size"
          :color="button.color"

        >
          <p 
            v-if='button.title' 
            :class="button.className"
          >
            {{button.title}}
          </p>
          <font-awesome-icon 
            v-if="button.icon" 
            :icon="button.icon"
            :class="button.className"
          />
        </custom-button>
        <custom-button
          category="buttonWithIcon"
          :variant="button.variant"
          :size="button.size"
          :color="button.color"

        >
          <p 
            v-if='button.title' 
            :class="button.className"
          >
            {{button.title}}
          </p>
          <font-awesome-icon 
            v-if="button.icon" 
            :icon="button.icon"
            :class="button.className"
          />
        </custom-button>
      </button-card>
    </div>

  </button-list>
</template>

<script>

import ButtonList from "./ColumnTemplate.vue";
import CustomButton from "./CustomButton.vue";
import ButtonCard from "./ButtonCard.vue";

export default {
  name: "ButtonMultiSizedColumn",
  components: {
    ButtonList,
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
          color: 'primary',
        },
        {
          id: 'closeIcon',
          title: '+',
          className: 'icon__close',
          color: 'danger'
        },
        {
          id: 'helpIcon',
          title: '?',
          className: 'icon__help',
          color: 'help'
        },
        {
          id: 'chevronRight',
          icon: "fa-solid fa-chevron-right",
          color: 'primary'
        },
        {
          id: 'googlePlusIcon',
          icon: ['fa-brands', 'google-plus-g'],
          color: 'danger'
        },
        {
          id: 'vkIcon',
          icon: 'fa-brands fa-vk',
          color: 'info'
        },
        {
          id: 'odnoklassnikiIcon',
          icon: 'fa-brands fa-odnoklassniki',
          color: 'action'

        },
        {
          id: 'pencilIcon',
          icon: "fa-solid fa-pencil",
          className: 'icon__pencil',
          color: 'primary'
        }

      ]
    }
  }

}
</script>

<style scoped lang="scss">
  .buttonCard {
    display: flex;
  }
  .icon {
    &__close {
      font-size: 50px;
      transform: rotate(-45deg);
    }
    &__help {
      font-size: 36px;
      transform: rotate(20deg);
    }
    &__pencil {
      transform: rotateY(180deg);
    }
  }
</style>