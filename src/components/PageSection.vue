<template>
  <section class="section" :class="sectionClass">
    <div class="container">
      <div v-if="title || subtitle" class="text-center mb-xl">
        <h2 v-if="title" class="text-3xl font-light text-primary mb-md">{{ title }}</h2>
        <p v-if="subtitle" class="text-lg text-light">{{ subtitle }}</p>
      </div>
      
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageSection',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'normal',
      validator: (value) => ['sm', 'normal', 'lg'].includes(value)
    },
    background: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'white', 'light'].includes(value)
    }
  },
  computed: {
    sectionClass() {
      const classes = []
      
      if (this.size === 'sm') classes.push('section-sm')
      if (this.size === 'lg') classes.push('section-lg')
      
      if (this.background === 'white') classes.push('bg-white')
      if (this.background === 'light') classes.push('bg-light')
      
      return classes
    }
  }
}
</script>
