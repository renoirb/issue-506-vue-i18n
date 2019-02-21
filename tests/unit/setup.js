import Vue from 'vue'
import vueTestUtils from '@vue/test-utils'
import VueI18n from 'vue-i18n'
import { loadLocaleMessages, loadDateTimeFormats } from './i18n'

/**
 * Copy-Pasta and edited partially from Chris Fritz’s amazing work.
 *
 * https://github.com/chrisvfritz/vue-enterprise-boilerplate/blob/b63fbf2145e89ec6fc53169b7438c42e7cca4c6c/tests/unit/setup.js
 */

Vue.config.productionTip = false

// https://vue-test-utils.vuejs.org/api/#mount
global.mount = vueTestUtils.mount

// https://vue-test-utils.vuejs.org/api/#shallowmount
global.shallowMount = vueTestUtils.shallowMount

global.createLocalVue = vueTestUtils.createLocalVue

// A helper for creating Vue component mocks
global.createComponentMocks = ({ i18n, mocks, router, style, stubs }) => {
  // Use a local version of Vue, to avoid polluting the global
  // Vue and thereby affecting other tests.
  // https://vue-test-utils.vuejs.org/api/#createlocalvue
  const localVue = vueTestUtils.createLocalVue()
  const returnOptions = {
    localVue,
  }

  // https://vue-test-utils.vuejs.org/api/options.html#stubs
  returnOptions.stubs = stubs || {}
  // https://vue-test-utils.vuejs.org/api/options.html#mocks
  returnOptions.mocks = mocks || {}

  // If using `router: true`, we'll automatically stub out
  // components from Vue Router.
  if (router) {
    returnOptions.stubs['router-link'] = true
    returnOptions.stubs['router-view'] = true
  }

  // If a `style` object is provided, mock some styles.
  if (style) {
    returnOptions.mocks.$style = style
  }

  /**
   * Converts a `i18n` option shaped like:
   *
   * ```
   * {
   *   locale: 'fr',
   *   fallbackLocale: 'en',
   *   messages: {en: {hello:'Hi'}, fr: {hello:'Bonjour'}}
   * }
   * ```
   */
  if (i18n) {
    if (!Reflect.has(i18n, 'messages')) {
      i18n.messages = loadLocaleMessages()
    }
    if (!Reflect.has(i18n, 'dateTimeFormats')) {
      i18n.dateTimeFormats = loadDateTimeFormats()
    }
    const vueIntlCtor = {
      locale: 'en',
      fallbackLocale: 'en',
      ...i18n,
    }
    localVue.use(VueI18n)
    returnOptions.i18n = new VueI18n(vueIntlCtor)
  }

  return returnOptions
}
