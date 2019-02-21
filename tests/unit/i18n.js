/**
 * @todo figure out how to really work with TimeZone conversion
 * Would adding timeZone key at runtime when this such data gets loaded?
 */
export const createDateTimeFormats = (locale = 'en-CA') => ({
  [locale]: {
    time: {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    },
    long: {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    },
    short: {
      // DD/MM/YYYY, hh:mm (AM|PM)
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    },
    shorter: {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    },
    full: {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
      timeZoneName: 'long',
    },
  },
})

export function loadLocaleMessages() {
  const de = require('../fixtures/de.json')
  const en = require('../fixtures/en.json')
  const fr = require('../fixtures/fr.json')

  return {
    'de-DE': de,
    'en-CA': en,
    'en-US': { ...en },
    'fr-CA': fr,
    'fr-FR': { ...fr },
  }
}

export function loadDateTimeFormats() {
  return {
    ...createDateTimeFormats('de-DE'),
    ...createDateTimeFormats('en-CA'),
    ...createDateTimeFormats('en-US'),
    ...createDateTimeFormats('fr-CA'),
    ...createDateTimeFormats('fr-FR'),
  }
}
