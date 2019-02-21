<script>
export default {
  name: 'ValueNumber',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    formattedAs: {
      type: String,
      default: 'locale',
    },
  },
  computed: {
    formatted() {
      const locale = this.$i18n.locale
      const value = this.value
      const formattedAs = String(this.formattedAs).toLowerCase()
      if (formattedAs === 'int') {
        // Maybe we want just an integer, even though we might have a float
        return Number(value).toFixed(0)
      } else if (formattedAs === 'string') {
        return String(value)
      } else if (formattedAs === 'locale') {
        /**
         * Format number according to ECMA and ISO conventions.
         * https://www.ecma-international.org/ecma-402/1.0/#sec-11.3.2
         * http://cldr.unicode.org/
         */
        let formatter
        if (this.normalizedNumberFormatOptions !== null) {
          formatter = new Intl.NumberFormat(
            locale,
            this.normalizedNumberFormatOptions
          )
        } else {
          formatter = new Intl.NumberFormat(locale)
        }
        return formatter.format(Number(value))
      }

      return value
    },
  },
  render(createElement) {
    const value = this.value
    const locale = this.$i18n.locale

    const formatted = this.formatted
    const formattedAs = String(this.formattedAs).toLowerCase()

    const attrs = {
      'data-value': String(value),
      'data-value-component': 'number',
      'data-formatted-as': formattedAs,
      'data-locale': locale,
    }
    if (this.normalizedNumberFormatOptions !== null) {
      attrs['data-number-format-options'] = JSON.stringify(
        this.normalizedNumberFormatOptions
      )
    }

    const slots = Object.keys(this.$slots).reduce(
      (arr, key) => arr.concat(this.$slots[key]),
      []
    )
    slots.push(formatted)
    return createElement(
      'span',
      {
        attrs: {
          ...this.$attrs,
          ...attrs,
        },
        props: this.$props,
        on: this.$listeners,
      },
      slots
    )
  },
}
</script>
