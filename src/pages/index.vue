<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>
              ¡Hola! Soy <span class="highlight">Luis</span>
            </h1>
            <p class="subtitle">Técnico en computación, profesor de informática, licenciado en sistemas de la información y especialista en seguridad informática Me gusta buscar soluciones innovadoras en sistemas de distintas áreas. Con experiencia en educación, desarrollo de software full-stack y automatización de procesos. Informático con más de 10 años de experiencia brindando soluciones tecnológicas para diversos sectores.</p>
            <p class="description">
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
          
          <div class="hero-visual">
            <div id="hero-images-container" class="images-container">
              <!-- Las imágenes se generarán aquí por JavaScript -->
            </div>
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

    <!-- Education Section -->
    <section id="estudios" class="section">
      <div class="container">
        <h2 class="text-center" style="margin-bottom: 3rem;">Estudios y Certificaciones</h2>
        <EducationGrid />
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
import EducationGrid from '../components/EducationGrid.vue'
import ContactSection from '../components/ContactSection.vue'
import { onMounted } from 'vue'
import '../composables/heroImages.js'

export default {
  name: 'HomePage',
  components: {
    ExperienceGrid,
    EducationGrid,
    ContactSection
  },
  setup() {
    const { trackCVClick } = useAnalytics()

    onMounted(() => {
      // Inicializar las imágenes del hero
      if (window.initHeroImages) {
        window.initHeroImages()
      }
    })

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
/* Hero Layout */
.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl, 3rem);
  align-items: center;
  min-height: 80vh;
}

.hero-text {
  max-width: 100%;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.images-container {
  width: 100%;
  max-width: 400px;
  height: 400px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}

.images-container svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Estilos específicos para los nodos del gráfico */
.node-group {
  transition: all 0.3s ease;
}

.node-group:hover {
  filter: brightness(1.2);
}

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
  .hero-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg, 2rem);
    text-align: center;
  }
  
  .hero-visual {
    order: -1;
  }
  
  .images-container {
    max-width: 300px;
    height: 300px;
    margin: 0 auto;
  }
  
  .skills-preview {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .images-container {
    max-width: 250px;
    height: 250px;
  }
}
</style>
