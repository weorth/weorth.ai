
<script setup>
import { computed } from 'vue'

const year = computed(() => (new Date()).getUTCFullYear())
</script>

<template>
  <div class="footer">
    <div class="copyright">
      <w-i18n t="copyright" /> &copy; {{ year }}, Weorth, LLC
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  @include flex(column, center, begin);

  background: $light;
  border-top: 1px solid darken($light, 10%);
  flex: 1;
  padding: 2rem 0;
}
</style>
