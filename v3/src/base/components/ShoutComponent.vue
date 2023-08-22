
<script setup>
</script>

<template>
  <div class="shout">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.shout {
  @include flex(column, center, space-around);

  background-color: $dark;
  color: $light;
  padding: 2rem 0;
  text-align: center;
}
</style>
