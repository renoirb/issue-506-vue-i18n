<template>
  <div id="app">
    <h1>ValueComponents</h1>
    <dl>
      <dt>Number</dt>
      <dd><em>raw</em>{{ number }}</dd>
      <dd>
        <em><tt>$n(...)</tt>&nbsp;</em>
        <code>{{ $n(number) }}</code>
      </dd>
      <dd>
        <em>result</em>
        <code><value-number :value="number"/></code>
      </dd>
      <dt>Date</dt>
      <dd>
        <em>raw&nbsp;</em>
        <code>{{ epoch }}</code>
      </dd>
      <dd>
        <em><tt>$t(...)</tt>&nbsp;</em>
        <code>{{ $t(now, variant) }}</code>
      </dd>
      <dd>
        <em>result&nbsp;</em>
        <value-date :value="epoch" :variant="variant" />
      </dd>
    </dl>
  </div>
</template>

<script>
import ValueDate from '@/components/ValueDate'
import ValueNumber from '@/components/ValueNumber'

// @vue/component
export default {
  components: {
    ValueDate,
    ValueNumber,
  },
  data() {
    const epoch = +new Date()
    return {
      number: 10000,
      epoch,
      variant: 'long',
      now: new Date(),
    }
  },
}
</script>
