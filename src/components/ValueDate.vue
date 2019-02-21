<template>
  <time
    :datetime="datetime"
    :data-variant="variant"
    :data-value="value"
    :data-locale="locale"
    :data-alternate="alternate"
    :data-time-zone="timeZone"
  >
    <!-- or v-text="$d(value, variant, locale)" -->
    {{ $d(value, variant, locale) }}
  </time>
</template>

<script>
// @vue/component
export default {
  name: 'ValueDate',
  props: {
    value: {
      type: Number,
      required: true,
    },
    variant: {
      type: String,
      default: 'full',
    },
    timeZone: {
      type: String,
      default: 'America/Montreal',
    },
  },
  computed: {
    datetime() {
      const value = this.value
      return new Date(value).toISOString()
    },
    locale() {
      return this.$i18n.locale
    },
    alternate() {
      const value = this.value
      const variant = this.variant
      const locale = this.locale
      const formats = this.$i18n.getDateTimeFormat(locale)
      // console.log(`getDateTimeFormat(${locale})`, formats)
      const timeZone = this.timeZone
      const options = {
        timeZone,
        ...formats[variant],
      }
      return new Date(value).toLocaleString(locale, options)
    },
  },
}
</script>
