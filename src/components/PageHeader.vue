<template>
  <section class="page-header" :class="[variant, { 'hero': isHero }]">
    <div class="container">
      <h1 class="page-title">{{ title }}</h1>
      <p v-if="subtitle" class="page-subtitle">{{ subtitle }}</p>
      <div v-if="$slots.actions" class="mt-xl">
        <slot name="actions"></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'success', 'hero'].includes(value)
    },
    isHero: {
      type: Boolean,
      default: false
    }
  }
}
</script>
