
<script setup>
</script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  @include box;
  @include flex(column, center, space-around);

  background-color: $light;
  margin: 1rem;
  padding: 2rem;
}
</style>
