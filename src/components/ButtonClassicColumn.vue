<template>
  <button-list :title='listTitle' class="button__list">
    <div 
      v-for="button in buttons" 
      :key="button.id"
    >
      <button-card :card-title="button.cardTitle">
        <custom-button
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
  name: "ButtonClassicColumn",
  components: {
    ButtonList,
    CustomButton,
    ButtonCard
  },
  data() {
    return {
      listTitle: '(Button Classic)',
      buttons: [
        {
          cardTitle: '(Primary)',
          id: Math.floor(Math.random() * 100000),
          title: 'Отправить письмо',
          color: 'primary',
        },
        {
          cardTitle: '(Secondary)',
          id: Math.floor(Math.random() * 100000),
          title: 'Отправить письмо',
          color: 'secondary'
        },
        {
          cardTitle: '(Warning)',
          id: Math.floor(Math.random() * 100000),
          title: 'Отправить письмо',
          color: 'warning'
        },
        {
          cardTitle: '(Disabled)',
          id: Math.floor(Math.random() * 100000),
          title: 'Отправить письмо',
          color: 'disabled'
        },
        {
          cardTitle: '(Info)',
          id: Math.floor(Math.random() * 100000),
          title: 'Отправить письмо',
          color: 'info'
        },
        {
          cardTitle: '(Danger)',
          id: Math.floor(Math.random() * 100000),
          title: 'Отправить письмо',
          color: 'danger'
        },
        {
          cardTitle: '(Action)',
          id: Math.floor(Math.random() * 100000),
          title: 'Отправить письмо',
          color: 'action'

        }
      ]
    }
  }

}
</script>

<style scoped lang="scss">
</style>