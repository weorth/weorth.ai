
export { useI18n } from '@/i18n/stores/i18n'

import i18nComponent from '@/i18n/components/i18nComponent.vue'

export const createI18n = app => {
  // eslint-disable-next-line vue/multi-word-component-names
  app.component('w-i18n', i18nComponent)
}
