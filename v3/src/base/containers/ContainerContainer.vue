
<script setup>
</script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  @include flex(column, begin, begin);

  margin: 0 auto;
  max-width: 98vw;
  padding: 2rem 0;
  width: 98vw;

  @media (min-width: $sm) {
    max-width: 98vw;
    width: 98vw;
  }

  @media (min-width: $md) {
    max-width: 90vw;
    width: 90vw;
  }

  @media (min-width: $lg) {
    max-width: 80vw;
    width: 80vw;
  }
}
</style>
