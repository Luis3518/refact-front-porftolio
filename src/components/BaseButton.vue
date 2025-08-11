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

<style scoped>
.btn-block {
  display: block;
  width: 100%;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

.btn:disabled:hover {
  background-color: var(--color-primary);
  box-shadow: var(--shadow-md);
}

.btn-warning {
  background-color: var(--color-warning);
  color: var(--color-white);
}

.btn-error {
  background-color: var(--color-error);
  color: var(--color-white);
}
</style>
