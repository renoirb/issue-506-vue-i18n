import ValueDate from './components/ValueDate.vue'
import ValueNumber from './components/ValueNumber.vue'

export { ValueDate, ValueNumber }

function install(Vue) {
  Vue.component('value-date', ValueDate)
  Vue.component('value-number', ValueNumber)
}

export default { install }
