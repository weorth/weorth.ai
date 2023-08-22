
// Components
import ActionComponent from '@/base/components/ActionComponent.vue'
import AnimationComponent from '@/base/components/AnimationComponent.vue'
import ButtonComponent from '@/base/components/ButtonComponent.vue'
import IconComponent from '@/base/components/IconComponent.vue'
import LinkComponent from '@/base/components/LinkComponent.vue'
import LogoComponent from '@/base/components/LogoComponent.vue'
import ShoutComponent from '@/base/components/ShoutComponent.vue'
import TitleComponent from '@/base/components/TitleComponent.vue'

// Containers
import BodyContainer from '@/base/containers/BodyContainer.vue'
import CardContainer from '@/base/containers/CardContainer.vue'
import ColumnContainer from '@/base/containers/ColumnContainer.vue'
import ContainerContainer from '@/base/containers/ContainerContainer.vue'
import FooterContainer from '@/base/containers/FooterContainer.vue'
import HeaderContainer from '@/base/containers/HeaderContainer.vue'
import HeroContainer from '@/base/containers/HeroContainer.vue'
import LinksContainer from '@/base/containers/LinksContainer.vue'
import PageContainer from '@/base/containers/PageContainer.vue'
import RowContainer from '@/base/containers/RowContainer.vue'

// Pages
import AboutPage from '@/base/pages/AboutPage.vue'
import ContactPage from '@/base/pages/ContactPage.vue'
import IndexPage from '@/base/pages/IndexPage.vue'
import PrivacyPage from '@/base/pages/PrivacyPage.vue'
import TermsPage from '@/base/pages/TermsPage.vue'

// Translations
import en_us from '@/base/translations/en_us'
import pt_br from '@/base/translations/pt_br'

export const createBase = (app) => {
  // Add components
  app.component('w-action', ActionComponent)
  app.component('w-animation', AnimationComponent)
  app.component('w-button', ButtonComponent)
  app.component('w-icon', IconComponent)
  app.component('w-link', LinkComponent)
  app.component('w-logo', LogoComponent)
  app.component('w-shout', ShoutComponent)
  app.component('w-title', TitleComponent)

  // Add containers
  app.component('w-body', BodyContainer)
  app.component('w-card', CardContainer)
  app.component('w-col', ColumnContainer)
  app.component('w-container', ContainerContainer)
  app.component('w-footer', FooterContainer)
  app.component('w-header', HeaderContainer)
  app.component('w-hero', HeroContainer)
  app.component('w-links', LinksContainer)
  app.component('w-page', PageContainer)
  app.component('w-row', RowContainer)

  // Setup routes
  const routes = [
    { path: '/', component: IndexPage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage },
    { path: '/privacy', component: PrivacyPage },
    { path: '/terms', component: TermsPage },
  ]

  // Setup translations
  const translations = {
    en_us,
    pt_br,
  }

  return [ routes, translations ]
}
