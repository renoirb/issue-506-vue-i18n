import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import { loadLocaleMessages, loadDateTimeFormats } from '@tests/unit/i18n'

Vue.use(VueI18n)

Vue.config.productionTip = false

Vue.filter('dateify', function dateifyClosure(epoch) {
  return new Date(epoch)
})

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: loadLocaleMessages(),
  dateTimeFormats: loadDateTimeFormats(),
})

const rootVue = new Vue({
  render: h => h(App),
  i18n,
})

rootVue.$mount('#app')

if (window) {
  window.rootVue = rootVue
}
