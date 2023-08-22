
<script setup>
</script>

<template>
  <div class="title">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.title {
  @include fg-gradient(to right, $primary, $secondary);

  background-image: linear-gradient(to right, $secondary, $primary, $secondary);
  font-size: 2rem;
  font-weight: bold;
}
</style>
