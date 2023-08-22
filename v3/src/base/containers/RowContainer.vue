
<script setup>
defineProps({
  around: Boolean,
  between: Boolean,
  center: Boolean,
  evenly: Boolean,
  full: Boolean,
  wrap: Boolean,
})
</script>

<template>
  <div :class="['row', { around, between, center, evenly, full, wrap }]">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.row {
  @include flex(row, begin, begin);

  @media (max-width: $sm) {
    flex-direction: column;
  }

  &.around {
    align-items: center;
    justify-content: space-around;
  }

  &.between {
    align-items: center;
    justify-content: space-between;
  }

  &.center {
    align-items: center;
    justify-content: center;
  }

  &.evenly {
    align-items: center;
    justify-content: space-evenly;
  }

  &.full {
    flex: 1;
  }

  &.wrap {
    flex-wrap: wrap;
  }
}
</style>
