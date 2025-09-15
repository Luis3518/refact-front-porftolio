<template>
  <div class="about-container">
    <div class="card text-center">
      <p class="about-text">
        Técnico en computación, profesor de informática, licenciado en sistemas de la información y especialista en seguridad informática. Llevo 14 años de experiencia brindando soluciones tecnológicas para diversos sectores.
      </p>
      <p class="about-text">
        Me gusta buscar soluciones innovadoras en sistemas de distintas áreas, combinando mi experiencia en educación con el desarrollo de software y la automatización de procesos para crear valor real.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutGrid'
}
</script>

<style scoped>
.about-container {
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-xl, 3rem);
}

.card {
  max-width: 800px;
  width: 100%;
}

.about-text {
  color: var(--color-text-secondary, #a1a1aa);
  line-height: 1.8;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  margin-bottom: var(--spacing-lg, 2rem);
}

.about-text:last-child {
  margin-bottom: 0;
}

.text-center {
  text-align: center;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card {
    text-align: left;
  }
  
  .about-text {
    font-size: clamp(0.95rem, 3vw, 1.1rem);
    line-height: 1.7;
  }
}

@media (max-width: 480px) {
  .about-text {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: var(--spacing-md, 1.5rem);
  }
}
</style>