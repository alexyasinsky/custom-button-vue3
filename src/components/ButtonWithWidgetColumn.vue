<template>
  <default-column :title='listTitle'>
    <div v-for="button in buttons" :key="button.id">
      <button-card :card-title="button.cardTitle">
        <custom-button
            :variant="button.variant"
            :href="button.href"
            category="buttonWithWidget"
            :className="button.className"
        > 
          <p>{{button.buttonTitle}}</p>
          <vue-countdown 
            v-if="counting" 
            @end="onCountdownEnd" 
            :transform="transformSlotProps" 
            :time="3 * 60 * 1000" 
            v-slot="{ minutes, seconds }"
            class="timer"
          >
            {{ minutes }}:{{ seconds }} 
          </vue-countdown>
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
  name: "ButtonWithWidgetColumn",
  components: {
    DefaultColumn,
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
          className: 'btn__disabled',
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
  .timer {
    font-size: 18px;
    line-height: 24px;
    background: #DF3F3E;
    color: #FFFFFF;
    padding: 3px 6px;
    border-radius: 12px / 14px;
  }

</style>