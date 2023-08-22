
<script setup>
import { ref } from 'vue'

const links = ref([
  { to: '/', t: 'home' },
  { to: '/contact', t: 'contact' },
  { to: '/products', t: 'products' },
  { to: '/services', t: 'services' },
])
</script>

<template>
  <w-row class="header" between>
    <w-logo />
    <w-links>
      <w-link v-for="link in links" :key="link.t" :to="link.to">
        <w-i18n :t="link.t" />
      </w-link>
    </w-links>
  </w-row>
</template>

<style lang="scss" scoped>
.header {
  background-color: $light;
  border-bottom: 1px solid darken($light, 10%);
  height: 5rem;
  padding: 0 2rem;

  .link {
    color: $secondary;
    text-transform: uppercase;

    &:hover {
      color: $primary;
    }

    &.active {
      color: $primary;
      font-weight: bold;
    }
  }
}
</style>
