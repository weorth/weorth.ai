
import '@/assets/styles/main.scss'

import { createApp } from 'vue'
import { createI18n, useI18n } from '@/i18n'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'

import { createBase } from '@/base'
import { createProducts } from '@/products'
import { createResearch } from '@/research'
import { createServices } from '@/services'

import App from '@/App.vue'

const app = createApp(App)

app.use(createPinia())
createI18n(app)

const i18n = useI18n()
i18n.select('en_us')

const modules = [
  createBase(app),
  createProducts(app),
  createResearch(app),
  createServices(app),
]

const history = createWebHashHistory()
let routes = []
for (let module of modules) {
  const [subRoutes, subTranslations] = module
  routes = [ ...routes, ...subRoutes ]
  for (let [locale, map] of Object.entries(subTranslations)) {
    i18n.register(locale, map)
  }
}

const router = createRouter({ history, routes })
app.use(router)

app.mount('#app')
