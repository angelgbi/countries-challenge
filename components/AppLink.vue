<template>
  <component :is="setBinds.is" v-bind="setBinds.props">
    <slot></slot>
  </component>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  computed: {
    setBinds() {
      if (this.to.includes('http')) {
        return {
          is: 'a',
          props: {
            href: this.to,
            target: '_blank',
            rel: 'noopener',
          },
        }
      } else
        return {
          is: 'nuxt-link',
          props: {
            to: this.to,
            append: true,
          },
        }
    },
  },
}
</script>
