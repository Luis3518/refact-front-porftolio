<template>
  <div class="card" :class="[variant, { 'card-compact': compact, 'card-hover': hover }]">
    <div v-if="$slots.header || title" class="card-header">
      <slot name="header">
        <h3 v-if="title" class="m-0">{{ title }}</h3>
      </slot>
    </div>
    
    <div class="card-body">
      <slot></slot>
    </div>
    
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: '',
      validator: (value) => ['', 'feature', 'project', 'info'].includes(value)
    },
    compact: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: true
    }
  }
}
</script>
