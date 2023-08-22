
<script setup>
import { ref } from 'vue'

const products = ref(['videns', 'simplesia'])
</script>

<template>
  <w-col full>
    <w-container>
      <w-title><w-i18n t="products" /></w-title>
      <w-col class="product">
        <w-product v-for="prod in products" :key="prod" :name="prod" />
      </w-col>
    </w-container>
  </w-col>
</template>

<style lang="scss" scoped>
.product {
  margin: 2rem 0;
}
</style>
