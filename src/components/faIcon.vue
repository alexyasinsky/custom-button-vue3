<template>
  <font-awesome-icon
      :icon="icons[iconName].icon"
      :class="getClassName"
  />
</template>

<script>
export default {
  name: 'faIcon',
  props: {
    iconName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      icons: {
        'arrowLeft': {
          icon: "fa-solid fa-arrow-left",
        },

        'chevronRight': {
          icon: "fa-solid fa-chevron-right",
        },

        'googlePlusG': {
          icon: 'fa-brands fa-google-plus-g',
        },

        vk: {
          icon: 'fa-brands fa-vk',
        },

        odnoklassniki: {
          icon: 'fa-brands fa-odnoklassniki',
        },

        pencilReverseY: {
          icon: "fa-solid fa-pencil",
          className: 'icon reverse_y'
        }

      }
    }
  },

  computed: {
    getClassName() {
      return `icon + ${this.icons[this.iconName].className}`
    }
  }
}
</script>

<style lang="scss" scoped>

  .reverse {
    &_y {
      transform: rotateY(180deg);
    }
  }

  .icon {
    height: 20px;
  }

  .btn__btnWithIcon {

    .icon {
      height: 20px;
    }

    @media (max-width: 639px) {
      .icon {
        height: 16px;
      }
    }
  }

</style>