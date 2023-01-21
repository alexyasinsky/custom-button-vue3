<template>
  <font-awesome-icon
      :icon="icons[iconName].icon"
      :class="getClassName"
  />
</template>

<script setup>

  import {computed} from "vue";

  const props = defineProps({
    iconName: {
      type: String,
      required: true
    }
  });

  const icons = {
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
      className: 'reverse_y'
    }

  }

  const getClassName = computed(()=>{
    return `icon ${icons[props.iconName].className}`
  })
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