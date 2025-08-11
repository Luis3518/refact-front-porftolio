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

<style scoped>
.card.feature {
  border-left: 4px solid var(--color-primary);
}

.card.project {
  text-align: center;
  border-top: 3px solid var(--color-success);
}

.card.info {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.card.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}
</style>
