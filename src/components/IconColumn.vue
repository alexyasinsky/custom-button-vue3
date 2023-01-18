<template>
  <button-list :title='listTitle' class="button__list">
    <div v-for="button in buttons" :key="button.id">
      <button-card :card-title-small="button.cardTitle">
        <custom-button
            :category="button.category"
            :variant="button.variant"
            :size="button.size"

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
  name: "Icon",
  components: {
    ButtonList,
    CustomButton,
    ButtonCard
  },
  data() {
    return {
      listTitle: '(Icon)',
      buttons: [
        {
          id: 'leftArrowIcon',
          icon: "fa-solid fa-arrow-left",
          category: 'icon',
        },
        {
          id: 'closeIcon',
          title: '+',
          category: 'icon',
          className: 'icon__close'
        },
        {
          id: 'helpIcon',
          title: '?',
          category: 'icon',
          className: 'icon__help'
        },
        {
          id: 'chevronRight',
          icon: "fa-solid fa-chevron-right",
          category: 'icon',
        },
        {
          id: 'googlePlusIcon',
          icon: ['fa-brands', 'google-plus-g'],
          category: 'icon'
        },
        {
          id: 'vkIcon',
          icon: 'fa-brands fa-vk',
          category: 'icon',
        },
        {
          id: 'odnoklassnikiIcon',
          icon: 'fa-brands fa-odnoklassniki',
          category: 'icon',
        },
        {
          id: 'pencilIcon',
          icon: "fa-solid fa-pencil",
          category: 'icon',
          className: 'icon__pencil'
        }

      ]
    }
  }

}
</script>

<style scoped lang="scss">
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