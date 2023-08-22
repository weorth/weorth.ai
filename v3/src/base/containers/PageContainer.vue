
<script setup>
</script>

<template>
  <div class="page">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.page {
  @include flex(column, begin, begin);

  background-color: $light;
  flex: 1;
  overflow: hidden;
}
</style>
