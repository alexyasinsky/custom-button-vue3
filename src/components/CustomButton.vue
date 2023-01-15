
<template>
  <a
      v-if="category==='link'"
      :href="href"
      class='btn btn__link'
  >
    {{ title }}

  </a>
  <v-btn
      v-else
      :variant="variant"
      :color="color"
      @click="handler"
      :class="className"
  >
   {{ title }}
  </v-btn>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Untitled'
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
  }
</style>
