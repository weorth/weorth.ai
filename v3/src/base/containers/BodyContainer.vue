
<script setup>
</script>

<template>
  <div class="scrollable">
    <div class="body">
      <router-view />
      <w-footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body {
  @include flex(column, begin, begin);

  background-color: $background;
  flex: 1;
  min-height: min-content;
  z-index: 50;
}

.scrollable {
  @include flex(column, begin, begin);

  flex: 1;
  max-height: 90vh;
  max-height: calc(100vh - 5rem);
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
