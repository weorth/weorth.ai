
<script setup>
</script>

<template>
  <div class="hero">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.hero {
  @include bg-gradient(135deg, $primary, $secondary);
}
</style>
