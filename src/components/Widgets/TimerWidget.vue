<template>
  <vue-countdown 
    v-if="counting" 
    @end="onCountdownEnd" 
    :transform="transformSlotProps" 
    :time="getTime" 
    v-slot="{ minutes, seconds }"
    class="timer"
  >
    {{ minutes }}:{{ seconds }} 
  </vue-countdown>
</template>

<script>
 export default {
  props: [
    'minutesProp'
  ],
  data() {
    return {
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
  },
  computed: {
    getTime() {
      return +this.minutesProp * 60 * 1000
    }
  }
 }

</script>

<style scoped lang="scss">
  .timer {
    font-size: 13px;
    width: 70px;
    line-height: 24px;
    background: #DF3F3E;
    color: #FFFFFF;
    padding: 3px 6px;
    border-radius: 12px / 14px;
    margin-left: 10px;
  }

</style>