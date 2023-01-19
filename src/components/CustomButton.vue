<template>
  <div class="btn__wrapper">
    <a
      v-if="category==='link'"
      :href="href"
      class='btn__link'
    >
      <slot></slot>
    </a>
    <button
        v-else
        @click="handler"
        :class='buttonClassName'
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    handler: {
      type: Function,
      default: ()=> {}
    },
    variant: {
      type: String
    },
    color: {
      type: String
    },
    category: {
      type: String
    },
    href: {
      type: String,
      default: '#'
    },
    className: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      buttonClassName: ''
    }
  },
  methods: {
  },
  mounted() {
    switch (this.category) {
      case 'icon':
        this.buttonClassName = this.className + ' btn__icon'
        break;
      case 'buttonWithIcon':
        this.buttonClassName = this.className + ' btn__btnWithIcon'
        break;
      case 'buttonWithWidget':
        this.buttonClassName = this.className + ' btn__btnWithWidget'
        break;
      default:
        this.buttonClassName = this.className + ' btn__classic'
    }
  }
}
</script>
<style scoped lang="scss">

.btn {
  &__wrapper {
    margin: 8px 0;
  }
  &__link {
    text-transform: none !important;
    font-size: 16px;
    line-height: 18px;
    padding: 0;
    color: #767679;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &:visited {
      color: #C4296C;
    }
  }
  &__icon {
    display: flex;
    align-items: center;
    font-style: normal;
    text-align: center;
    margin-bottom: 30px;
    font-size: 25px;
  }
  &__btnWithIcon {
    width: 60px;
  }
  &__btnWithWidget {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 40px;
    width: 350px;
  }
  &__classic {
    width: 270px;

  }
  &__primary {
    background: #702C7E;
  }
  &__secondary {
    background: #C4296C;
  }
  &__danger {
    background: #DF3F3E;
  }
  &__warning {
    background: #F4BA46;
  }
  &__disabled {
    background: #EFEFEF;
  }
  &__info {
    background: #0083B6;
  }
  &__action {
    background: #ED732E;
  }
  &__help {
    background: #6DD1B0;
  }
}

@media (max-width: 639px) {
  .btn {
    &__btnWithIcon {
      width: 52px;
    }
  }
}


</style>
