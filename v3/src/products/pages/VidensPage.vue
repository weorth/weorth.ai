
<script setup>
import { ref } from 'vue'

const items = ref(['description', 'applications', 'portal', 'installation'])
</script>

<template>
  <w-col full>
    <w-container>
      <w-title><w-i18n t="videns.title" /></w-title>
      <w-col class="item">
        <w-videns v-for="item in items" :key="item" :name="item" />
      </w-col>
    </w-container>
    <w-action>
      <w-row around>
        <w-col around>
          <h2><w-i18n t="button.slogan" /></h2>
          <w-button href="/preorder"><w-i18n t="button.name" /></w-button>
        </w-col>
      </w-row>
    </w-action>
  </w-col>
</template>

<style lang="scss" scoped>
.item {
  margin: 2rem 0;
}
</style>
