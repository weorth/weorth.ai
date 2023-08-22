
// Components
import ResearchComponent from '@/research/components/ResearchComponent.vue'

// Pages
import IndexPage from '@/research/pages/IndexPage.vue'

// Translations
import en_us from '@/research/translations/en_us'
import pt_br from '@/research/translations/pt_br'

export const createResearch = (app) => {
  // Add components
  app.component('w-research', ResearchComponent)

  // Setup routes
  const routes = [
    { path: '/research', component: IndexPage },
  ]

  // Setup translations
  const translations = {
    en_us,
    pt_br,
  }

  return [ routes, translations ]
}
