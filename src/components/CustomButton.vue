<template>
  <div class="btn__wrapper">
    <a
      v-if="category==='link'"
      :href="href"
      ref="buttonClassName"
      :class='buttonClassName'
    >
      <slot></slot>
    </a>
    <button
      v-else
      @click="handler"
      ref="buttonClassName"
      :class='buttonClassName'
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup>

import {onMounted, ref} from "vue";

  const props = defineProps({
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
  })

  let buttonClassName = ref('');

  onMounted(()=> {
    switch (props.category) {
      case 'link':
        buttonClassName = 'btn__link';
        break;
      case 'icon':
        buttonClassName = 'btn__icon';
        break;
      case 'buttonWithIcon':
        buttonClassName = `btn__color_${props.color} btn__btnWithIcon`;
        break;
      case 'buttonWithWidget':
        buttonClassName = `btn__color_${props.color} btn__btnWithWidget`;
        break;
      case 'buttonClassic':
        buttonClassName = `btn__color_${props.color} btn__classic`;
        break;
    }
  })

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
