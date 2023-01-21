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
      <slot name="title"></slot>
      <slot name="faIcon"></slot>
      <slot name="customIcon"></slot>
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
    color: {
      type: String
    },
    category: {
      type: String
    },
    href: {
      type: String,
      default: '#'
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
        this.buttonClassName = 'btn__icon'
        break;
      case 'buttonWithIcon':
        this.buttonClassName = `btn__color_${this.color} btn__btnWithIcon`
        break;
      case 'buttonWithWidget':
        this.buttonClassName = `btn__color_${this.color} btn__btnWithWidget`
        break;
      default:
        this.buttonClassName = `btn__color_${this.color} btn__classic`
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

  }

  &__btnWithIcon {
    width: 60px;
  }

  &__btnWithWidget {
    display: flex;
    align-items: center;
    padding: 0 40px;
  }
  &__classic {
    padding: 0 40px;
  }
  &__color {
    &_primary {
      background: #702C7E;
    }
    &_secondary {
      background: #C4296C;
    }
    &_danger {
      background: #DF3F3E;
    }
    &_warning {
      background: #F4BA46;
    }
    &_disabled {
      background: #EFEFEF;
      color: #767679;
    }
    &_info {
      background: #0083B6;
    }
    &_action {
      background: #ED732E;
    }
    &_help {
      background: #6DD1B0;
    }
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
