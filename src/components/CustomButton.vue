<template>
  <a
      v-if="category==='link'"
      :href="href"
      class='btn btn__link'
  >
    <slot></slot>
  </a>
  <v-btn
      v-else-if="category==='icon'"
      @click="handler"
      size="large"
      variant="plain"
      class='btn btn__icon'
  >
    <slot></slot>
  </v-btn>

  <v-btn
      v-else
      @click="handler"
      size="large"
      variant="plain"
      class='btn btn__icon'
  >
    <slot></slot>
  </v-btn>
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
    }
  },

  data() {
    return {
      className: ''
    }
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">

.btn {
  font-family: 'Nunito', sans-serif;
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
}

</style>
