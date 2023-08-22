
<script setup>
import { computed } from 'vue'
import { useI18n } from '@/i18n'

const props = defineProps({
  locale: String,
  t: String,
})

const i18n = useI18n()
const isLocalePanel = computed(() => i18n.locale === props.locale)
const message = computed(() => i18n.translate(props.t))
</script>

<template>
  <span v-if="!!t">{{ message }}</span>
  <span v-else-if="isLocalePanel"><slot /></span>
</template>

<style lang="scss" scoped>
</style>
