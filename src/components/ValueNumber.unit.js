import ValueNumber from '@/components/ValueNumber'

const SampleComponent = {
  template: '<div><strong v-t="label" /><value-number :value="value" /></div>',
  components: { ValueNumber },
  props: {
    label: {
      type: String,
      default: 'Updates',
    },
    value: {
      type: Number,
      required: true,
    },
  },
}

describe('ValueNumber', () => {
  it('Exports a valid component', () => {
    expect(ValueNumber).toBeAComponent()
  })

  it('Accept locale as prop', async () => {
    let locale = 'de-DE'

    const { localVue, i18n } = createComponentMocks({
      i18n: {
        locale,
      },
    })

    const value = 10000

    const wrapper = mount(ValueNumber, {
      propsData: { value, locale },
      localVue,
      i18n,
    })

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.text()).toBe('10.000') // !!!!!
    expect(wrapper.vm.value).toBe(value)

    locale = 'fr-CA'
    i18n.locale = locale
    await wrapper.vm.$nextTick()
    wrapper.setProps({ value, locale })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Is possible to use in cunjunction with vue-i18n text translation', async () => {
    let locale = 'de-DE'

    const { localVue, i18n } = createComponentMocks({
      i18n: {
        locale,
      },
    })

    const value = 10000

    const wrapper = mount(SampleComponent, {
      propsData: { value, locale },
      localVue,
      i18n,
    })

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.vm.value).toBe(value)
  })
})
