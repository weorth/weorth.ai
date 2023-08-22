
// Components
import ServiceComponent from '@/services/components/ServiceComponent.vue'

// Pages
import IndexPage from '@/services/pages/IndexPage.vue'

// Translations
import en_us from '@/services/translations/en_us'
import pt_br from '@/services/translations/pt_br'

export const createServices = (app) => {
  // Add components
  app.component('w-service', ServiceComponent)

  // Setup routes
  const routes = [
    { path: '/services', component: IndexPage },
  ]

  // Setup translations
  const translations = {
    en_us,
    pt_br,
  }

  return [ routes, translations ]
}
