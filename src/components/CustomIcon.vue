<template>
  <p :class="icons[iconName].className">
    {{ icons[iconName].title }}
  </p>
</template>

<script>
export default {
  name: 'CustomIcon',
  props: {
    iconName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      icons: {
        'close' : {
          className: 'close',
          title: '+'
        },
        
        'help': {
          className: 'help',
          title: '?'
        },

      }
    }
  }
}
</script>

<style lang="scss" scoped>
  
  .close {
    font-family: 'Nunito', sans-serif;
    font-size: 35px;
    transform: rotate(-45deg);
    font-weight: 900;
    line-height: 30px;
    margin-left: -4px;
  }
  .help {
    font-family: 'Nunito', sans-serif;
    font-size: 30px;
    transform: rotate(20deg);
    font-weight: 900;
    line-height: 30px;
  }

  
  @media (max-width: 639px) {
    .btn__btnWithIcon {
      .close {
      font-size: 30px;
      margin-left: -1px;
    }

      .help{
        font-size: 25px;
      }
    }


  }
</style>