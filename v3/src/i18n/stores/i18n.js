
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useI18n = defineStore('i18n', () => {
  const country = ref('us')
  const language = ref('en')
  const locale = computed(() => `${language.value}_${country.value}`)
  const translations = ref({})

  function register(locale, translationsMap) {
    if (!translations.value[locale]) {
      translations.value[locale] = {}
    }

    translations.value[locale] = Object.assign(translations.value[locale], translationsMap)
  }

  function select(locale) {
    const parts = locale.split('_')
    country.value = parts[1]
    language.value = parts[0]
  }

  function translate(token) {
    if (!translations.value[locale.value]) {
      throw new Error(`unable to find locale: ${locale.value}`)
    }

    if (!token) return undefined;
    const tokens = token.split('.')

    const data = translations.value[locale.value]
    const message = tokens.reduce((prev, key) => prev && prev[key], data)

    return message || `*${locale.value}:${token}*`
  }

  return {
    country,
    language,
    locale,
    register,
    select,
    translate,
  }
})
