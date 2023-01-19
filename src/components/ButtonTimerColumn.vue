<template>
  <button-list :title='listTitle'>
    <div v-for="button in buttons" :key="button.id">
      <button-card :card-title="button.cardTitle">
        <custom-button
            :variant="button.variant"
            :href="button.href"
            category="buttonWithWidget"
        > 
          <p>{{button.buttonTitle}}</p>
          <vue-countdown v-if="counting" @end="onCountdownEnd" :transform="transformSlotProps" :time="3 * 60 * 1000" v-slot="{ minutes, seconds }">
            {{ minutes }} : {{ seconds }} 
          </vue-countdown>
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
  name: "ButtonTimerColumn",
  components: {
    ButtonList,
    CustomButton,
    ButtonCard
  },
  data() {
    return {
      listTitle: '(ButtonTimer)',
      buttons: [
        {
          id: Math.floor(Math.random() * 100000),
          cardTitle: '(Timer)',
          buttonTitle: 'Повторное письмо',
          variant: 'text',
          color: 'disabled',
        }
      ],
      counting: true
    }
  },
  methods: {
    onCountdownEnd: function () {
      this.counting = false;
    },
    transformSlotProps(props) {
      const formattedProps = {};

      Object.entries(props).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value);
      });

      return formattedProps;
    },
  }

}
</script>

<style scoped lang="scss">

</style>