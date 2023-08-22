
<script setup>
defineProps({
  around: Boolean,
  between: Boolean,
  center: Boolean,
  evenly: Boolean,
  full: Boolean,
})
</script>

<template>
  <div :class="['column', { around, between, center, evenly, full }]">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.column {
  @include flex(column, begin, begin);

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
}
</style>
