
<script setup>
defineProps({
  to: { required: true, type: String },
})
</script>

<template>
  <router-link class="link" :to="to">
    <slot />
  </router-link>
</template>

<style lang="scss">
a, .link {
  color: $primary;
  margin: 0 1rem;
  text-decoration: none;

  &:active, &:visited {
    color: $primary;
  }

  &:hover {
    color: $secondary;
  }

  &:last-child {
    margin-right: 0;
  }

  &.active {
    font-weight: bold;
  }
}
</style>
