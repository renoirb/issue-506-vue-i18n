import ValueDate from '@/components/ValueDate'

describe('ValueDate', () => {
  it('Exports a valid component', () => {
    expect(ValueDate).toBeAComponent()
  })

  it('Accept DateTimeFormat as argument', async () => {
    let variant = 'time'
    let locale = 'de-DE'

    const { localVue, i18n } = createComponentMocks({
      i18n: {
        locale,
      },
    })
    const value = 1550632495000
    const valueTime = '22:14:55'
    const datetime = '2019-02-20T03:14:55.000Z'

    const wrapper = mount(ValueDate, {
      propsData: { value, variant },
      localVue,
      i18n,
    })

    expect(wrapper.html()).toMatchSnapshot()
    expect(i18n.getDateTimeFormat(locale)).toMatchSnapshot()
    expect(wrapper.vm.value).toBe(value)
    expect(wrapper.text()).toBe(valueTime)
    expect(wrapper.attributes('datetime')).toBe(datetime)

    wrapper.setProps({ value, variant: 'long', timeZone: 'America/Fortaleza' })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.setProps({ value, variant: 'full', timeZone: 'Europe/Berlin' })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()

    locale = 'fr-CA'
    i18n.locale = locale
    variant = 'fooBarBazz'
    const timeZone = 'America/Montreal'
    const anotherFormat = {
      fooBarBazz: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        timeZone,
      },
    }
    i18n.mergeDateTimeFormat(locale, anotherFormat)

    wrapper.setProps({ value, variant: 'long', timeZone })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
