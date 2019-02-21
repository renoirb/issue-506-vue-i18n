# Testing number formatting

It is related to kazupon/vue-i18n#506

There are two issues this repository should highlight:

- How to properly format numbers using _vue-i18n_ (or use Runtime’s [`Intl.NumberFormat`][intl-number-format])
- How to properly format and adjust dates using _vue-i18n_, (or use Runtime’s [`Intl.DateTimeFormat`][intl-date-time-format])

What this repository contains:

1. `yarn test` and see the failing test related to [kazupon/vue-i18n#506][issue-506]
1. `yarn serve` and see in a Web Browser
1. `yarn build` to create a library

Known issues:

- Sample is unfinished, but Unit test DO fail for use-case [kazupon/vue-i18n#506][issue-506]

[intl-number-format]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
[intl-date-time-format]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
[issue-506]: https://github.com/kazupon/vue-i18n/issues/506
