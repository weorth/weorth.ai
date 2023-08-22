
<script setup>
import { ref } from 'vue'

const animations = ref([2, 8, 14])
const count = ref(15)
</script>

<template>
  <w-col full>
    <w-container>
      <w-title><w-i18n t="services" /></w-title>
      <p><w-i18n t="service.intro" /></p>
      <w-row between wrap>
        <w-col around v-for="idx in count" :key="idx" class="service">
          <w-animation v-if="animations.includes(idx)" :src="`/animations/service${idx}.json`" />
          <w-service v-else :id="idx" />
        </w-col>
      </w-row>
      <p><w-i18n t="service.outro" /></p>
    </w-container>
  </w-col>
</template>

<style lang="scss" scoped>
.service {
  height: 16rem;
  margin: 2rem 1rem;
  width: 22rem;
}
</style>
