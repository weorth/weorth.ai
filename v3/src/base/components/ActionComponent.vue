
<script setup>
</script>

<template>
  <div class="action">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.action {
  @include bg-gradient(45deg, $primary, $secondary);
  @include flex(column, center, space-around);

  color: $light;
  font-size: 2rem;
  font-weight: 600;
  padding: 3em 0;
  text-align: center;
}
</style>
