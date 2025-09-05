<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content-centered">
          <div class="hero-text-centered">
            <h1>
              ¡Hola! Soy <span class="highlight">Luis</span>
            </h1>
            <p class="subtitle">Técnico en computación, profesor de informática, licenciado en sistemas de la información y especialista en seguridad informática</p>
            <p class="description">
              Me gusta buscar soluciones innovadoras en sistemas de distintas áreas. Con experiencia en educación, desarrollo de software full-stack 
              y automatización de procesos.
            </p>
            
            <div class="hero-actions">
              <a href="#experiencia" class="btn btn-primary" data-track="view-experience">
                <i class="fas fa-briefcase"></i>
                Ver Experiencia
              </a>
              <a href="/CV Luis Rodriguez.pdf" class="btn btn-secondary" download @click="trackCVClick" data-track="download-cv">
                <i class="fas fa-download"></i>
                Descargar CV
              </a>
            </div>
            
            <div class="hero-socials">
              <a href="mailto:luis.m.rodriguez@outlook.com" class="social-link" title="Email" data-track="email">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="https://www.linkedin.com/in/luis-rodriguez3518/" class="social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer" data-track="linkedin">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Luis3518" class="social-link" title="GitHub" target="_blank" rel="noopener noreferrer" data-track="github">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Preview Section -->
    <section id="sobre-mi" class="section">
      <div class="container">
        <div class="grid grid-2">
          <div class="card">
            <h2>Sobre mí</h2>
            <p>
              Informático con más de 10 años de experiencia brindando 
              soluciones tecnológicas para diversos sectores.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experiencia" class="section">
      <div class="container">
        <h2 class="text-center" style="margin-bottom: 3rem;">Mi Experiencia</h2>
        <ExperienceGrid />
      </div>
    </section>

    <!-- Contact Section -->
    <ContactSection />

  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import { useAnalytics } from '../composables/useAnalytics.js'
import ExperienceGrid from '../components/ExperienceGrid.vue'
import ContactSection from '../components/ContactSection.vue'

export default {
  name: 'HomePage',
  components: {
    ExperienceGrid,
    ContactSection
  },
  setup() {
    const { trackCVClick } = useAnalytics()

    useHead({
      title: 'Luis Miguel Rodríguez - Desarrollador de Software',
      meta: [
        {
          name: 'description',
          content: 'Portfolio profesional de Luis Miguel Rodríguez, desarrollador de software con experiencia en educación, sistemas financieros, DevOps y seguridad informática'
        },
        {
          property: 'og:title',
          content: 'Luis Miguel Rodríguez - Desarrollador de Software'
        },
        {
          property: 'og:description',
          content: 'Especialista en desarrollo de software con experiencia en educación, sistemas financieros, DevOps y soluciones innovadoras'
        },
        {
          property: 'og:type',
          content: 'website'
        }
      ]
    })

    return {
      trackCVClick
    }
  }
}
</script>

<style scoped>
.skills-preview {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin: var(--spacing-xl) 0;
  justify-content: center;
}

.text-center {
  text-align: center;
}

/* Ajustes específicos para mobile */
@media (max-width: 768px) {
  .skills-preview {
    justify-content: center;
  }
}
</style>
