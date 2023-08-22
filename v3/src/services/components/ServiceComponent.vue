
<script setup>
defineProps({
  id: { required: true, type: Number },
})
</script>

<template>
  <w-card>
    <h3><w-i18n :t="`serviceList.${id}.n`" /></h3>
    <p><w-i18n :t="`serviceList.${id}.d`" /></p>
  </w-card>
</template>

<style lang="scss" scoped>
.card {
  height: 100%;
  width: 100%;
}
</style>
