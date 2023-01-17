<template>
  <button-list :title='listTitle' class="button__list">
    <div v-for="button in buttons" :key="button.id">
      <button-card :card-title-small="button.cardTitle">
        <custom-button
            :category="button.category"
            :variant="button.variant"
            :size="button.size"
            class="icon"
        >
          <p :class="button.className">{{button.title}}</p>
          <p v-if="button.faIcon"><v-icon>{{button.mdIcon}}</v-icon></p>
          <font-awesome-icon v-if="button.faIcon" :icon="button.faIcon"/>
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
          mdIcon: 'mdi-arrow-left-thick',
          category: 'icon',
          className: 'icon__mdi'
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
          mdIcon: 'mdi-chevron-right',
          category: 'icon',
          className: 'icon__mdi'
        },
        {
          id: 'vkIcon',
          faIcon: 'fa-brands fa-vk',
          category: 'icon',
          className: 'icon__mdi'
        }
      ]
    }
  }

}
</script>

<style scoped lang="scss">
  .icon {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 900;
    text-align: center;
    margin-bottom: 30px;
    &__mdi + .mdi {
      font-size: 35px;
    }
    &__close {
      font-size: 50px;
      transform: rotate(-45deg);
    }
    &__help {
      font-size: 36px;
      transform: rotate(20deg);
    }
  }
</style>