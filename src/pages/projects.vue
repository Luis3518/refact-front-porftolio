<template>
  <div class="projects">
    <!-- Hero Section -->
    <section class="hero hero-small">
      <div class="container">
        <h1>Mis <span class="highlight">Proyectos</span></h1>
        <p class="subtitle">Explora las soluciones que he desarrollado en diferentes sectores</p>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="section">
      <div class="container">
        <ProjectsGrid />
      </div>
    </section>

    <!-- Technologies Overview -->
    <section class="section">
      <div class="container">
        <h2 class="text-center" style="margin-bottom: 3rem;">Tecnologías Utilizadas</h2>
        <div class="tech-overview">
          <div class="tech-group">
            <h3>Frontend</h3>
            <div class="tech-list">
              <span class="tech-item">Vue.js</span>
              <span class="tech-item">React</span>
              <span class="tech-item">Angular</span>
              <span class="tech-item">TypeScript</span>
            </div>
          </div>
          
          <div class="tech-group">
            <h3>Backend</h3>
            <div class="tech-list">
              <span class="tech-item">Node.js</span>
              <span class="tech-item">Python</span>
              <span class="tech-item">Laravel</span>
              <span class="tech-item">.NET Core</span>
            </div>
          </div>
          
          <div class="tech-group">
            <h3>Database</h3>
            <div class="tech-list">
              <span class="tech-item">PostgreSQL</span>
              <span class="tech-item">MongoDB</span>
              <span class="tech-item">Redis</span>
              <span class="tech-item">SQL Server</span>
            </div>
          </div>
          
          <div class="tech-group">
            <h3>DevOps</h3>
            <div class="tech-list">
              <span class="tech-item">Docker</span>
              <span class="tech-item">AWS</span>
              <span class="tech-item">CI/CD</span>
              <span class="tech-item">Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section">
      <div class="container">
        <div class="card text-center">
          <h2>¿Interesado en algún proyecto?</h2>
          <p>
            Si quieres saber más detalles sobre algún proyecto específico 
            o discutir una colaboración, estaré encantado de conversar contigo.
          </p>
          <a href="mailto:luis.m.rodriguez@outlook.com" class="btn btn-primary">
            <i class="fas fa-envelope"></i>
            Hablemos del proyecto
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import { useAnalytics } from '../composables/useAnalytics.js'
import ProjectsGrid from '../components/ProjectsGrid.vue'

export default {
  name: 'ProjectsPage',
  components: {
    ProjectsGrid
  },
  setup() {
    // Analytics tracking automático
    useAnalytics()

    useHead({
      title: 'Proyectos - Luis Miguel Rodriguez',
      meta: [
        {
          name: 'description',
          content: 'Explora los proyectos de desarrollo de software de Luis Miguel Rodriguez: sistemas financieros, gestión portuaria, criptomonedas, bots y más.'
        },
        {
          property: 'og:title',
          content: 'Proyectos - Luis Miguel Rodriguez'
        },
        {
          property: 'og:description',
          content: 'Portfolio de proyectos en sistemas financieros, gestión portuaria, DevOps, criptomonedas y automatización'
        }
      ]
    })
  },
  methods: {
    showDemo(projectType) {
      // Track analytics
      if (window.gtag) {
        window.gtag('event', 'project_demo_click', {
          'project_type': projectType
        })
      }
      
      // Here you would implement demo functionality
      alert(`Demo del proyecto ${projectType} - Funcionalidad en desarrollo`)
    }
  }
}
</script>

<style scoped>
.tech-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-xl);
}

.tech-group h3 {
  color: var(--color-heading);
  margin-bottom: var(--spacing-lg);
  text-align: center;
}

.tech-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.tech-list .tech-item {
  padding: var(--spacing-md);
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  text-align: center;
  transition: all 0.3s ease;
}

.tech-list .tech-item:hover {
  border-color: var(--color-primary);
  background: var(--color-primary);
  color: white;
}

.text-center {
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .tech-overview {
    grid-template-columns: 1fr;
  }
}
</style>
