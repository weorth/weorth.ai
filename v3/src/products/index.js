
// Components
import ProductComponent from '@/products/components/ProductComponent.vue'
import VidensComponent from '@/products/components/VidensComponent.vue'

// Pages
import IndexPage from '@/products/pages/IndexPage.vue'
import VidensPage from '@/products/pages/VidensPage.vue'

// Translations
import en_us from '@/products/translations/en_us'
import pt_br from '@/products/translations/pt_br'

export const createProducts = (app) => {
  // Add components
  app.component('w-product', ProductComponent)
  app.component('w-videns', VidensComponent)

  // Setup routes
  const routes = [
    { path: '/products', component: IndexPage },
    { path: '/products/videns', component: VidensPage },
  ]

  // Setup translations
  const translations = {
    en_us,
    pt_br,
  }

  return [ routes, translations ]
}
