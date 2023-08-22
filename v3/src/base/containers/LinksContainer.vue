
<script setup>
</script>

<template>
  <div class="links">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.links {
  @include flex(row, center, space-between);

  font-size: 1.25rem;
  font-weight: 600;
}
</style>
