<template>
  <component 
    :is="tag" 
    class="btn" 
    :class="[
      `btn-${variant}`,
      `btn-${size}`,
      { 'btn-outline': outline, 'btn-block': block }
    ]"
    :to="to"
    :href="href"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'success', 'warning', 'error'].includes(value)
    },
    size: {
      type: String,
      default: 'normal',
      validator: (value) => ['sm', 'normal', 'lg'].includes(value)
    },
    outline: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: null
    },
    href: {
      type: String,
      default: null
    }
  },
  computed: {
    tag() {
      if (this.to) return 'router-link'
      if (this.href) return 'a'
      return 'button'
    }
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    }
  }
}
</script>
