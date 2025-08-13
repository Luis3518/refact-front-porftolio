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
        <div class="projects-grid">
          <!-- 1. Sistemas B2C Automotores -->
          <div class="project-card">
            <div class="project-header">
              <div class="project-icon">
                <i class="fas fa-car"></i>
              </div>
              <div class="project-meta">
                <h3>Sistemas B2C Automotores</h3>
                <span class="project-status">En desarrollo</span>
              </div>
            </div>
            
            <p class="project-description">
              Plataformas digitales para concesionarias automotrices con enfoque B2C. 
              Incluye catálogos en línea, configuradores de vehículos, CRM de ventas 
              y sistemas de gestión de inventario especializados.
            </p>
            
            <div class="project-features">
              <div class="feature-item">
                <i class="fas fa-shopping-cart"></i>
                <span>Catálogo Online</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-cogs"></i>
                <span>Configurador 3D</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-handshake"></i>
                <span>CRM Ventas</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-warehouse"></i>
                <span>Gestión Inventario</span>
              </div>
            </div>
            
            <div class="project-tech">
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">Laravel</span>
              <span class="tech-tag">MySQL</span>
              <span class="tech-tag">Three.js</span>
              <span class="tech-tag">Redis</span>
            </div>
            
            <div class="project-actions">
              <button class="btn btn-primary" disabled>
                <i class="fas fa-clock"></i>
                Próximamente
              </button>
            </div>
          </div>

          <!-- 2. Sistemas de Gestión Portuaria -->
          <div class="project-card">
            <div class="project-header">
              <div class="project-icon">
                <i class="fas fa-ship"></i>
              </div>
              <div class="project-meta">
                <h3>Sistemas de Gestión Portuaria</h3>
                <span class="project-status">En desarrollo</span>
              </div>
            </div>
            
            <p class="project-description">
              Sistema integral de control y monitoreo para operaciones portuarias. 
              Gestión de contenedores, tracking GPS en tiempo real, logística marítima 
              y coordinación de flota naviera.
            </p>
            
            <div class="project-features">
              <div class="feature-item">
                <i class="fas fa-map-marked-alt"></i>
                <span>GPS Tracking</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-boxes"></i>
                <span>Container Management</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-clock"></i>
                <span>Real-time Monitor</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-users"></i>
                <span>Fleet Management</span>
              </div>
            </div>
            
            <div class="project-tech">
              <span class="tech-tag">React</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">MongoDB</span>
              <span class="tech-tag">Socket.io</span>
              <span class="tech-tag">Leaflet</span>
            </div>
            
            <div class="project-actions">
              <button class="btn btn-primary" disabled>
                <i class="fas fa-clock"></i>
                Próximamente
              </button>
            </div>
          </div>

          <!-- 3. Ingeniería de Datos y Finanzas -->
          <div class="project-card">
            <div class="project-header">
              <div class="project-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <div class="project-meta">
                <h3>Ingeniería de Datos y Finanzas</h3>
                <span class="project-status">Activo</span>
              </div>
            </div>
            
            <p class="project-description">
              Suite completa de herramientas financieras con ingeniería de datos avanzada. 
              Incluye análisis de bonos, trading automatizado, dashboards en tiempo real 
              y sistemas de gestión de riesgo.
            </p>
            
            <div class="project-features">
              <div class="feature-item">
                <i class="fas fa-chart-bar"></i>
                <span>Dashboard Analytics</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-robot"></i>
                <span>Trading Bots</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-shield-alt"></i>
                <span>Risk Management</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-database"></i>
                <span>Data Engineering</span>
              </div>
            </div>
            
            <div class="project-tech">
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">Python</span>
              <span class="tech-tag">PostgreSQL</span>
              <span class="tech-tag">Chart.js</span>
              <span class="tech-tag">WebSockets</span>
            </div>
            
            <div class="project-actions">
              <router-link to="/finanzas" class="btn btn-primary">
                <i class="fas fa-eye"></i>
                Ver Proyectos
              </router-link>
              <a href="#" class="btn btn-secondary" @click.prevent="showDemo('finanzas')">
                <i class="fas fa-play"></i>
                Demo
              </a>
            </div>
          </div>
        </div>
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
          <router-link to="/contact" class="btn btn-primary">
            <i class="fas fa-envelope"></i>
            Hablemos del proyecto
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import { useAnalytics } from '../composables/useAnalytics.js'

export default {
  name: 'ProjectsPage',
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
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxxl);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.project-card {
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.project-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.project-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: var(--color-primary);
  color: white;
  border-radius: var(--border-radius);
  font-size: 1.5rem;
}

.project-meta h3 {
  color: var(--color-heading);
  margin: 0 0 var(--spacing-xs) 0;
  font-size: 1.25rem;
  line-height: 1.3;
}

.project-status {
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--color-success);
  color: white;
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  font-weight: var(--font-weight-medium);
}

.project-status:contains("En desarrollo") {
  background: var(--color-warning);
}

.project-status:contains("Planificado") {
  background: var(--color-info);
}

.project-description {
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg); /* Reducir espacio para consistencia */
  flex-grow: 1; /* Permite que la descripción se expanda si es necesario */
}

.project-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg); /* Consistencia con description */
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-text);
  font-size: 0.9rem;
}

.feature-item i {
  color: var(--color-primary);
  width: 16px;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.tech-tag {
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--color-bg-alt);
  color: var(--color-text);
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  border: 1px solid var(--color-border);
}

.project-actions {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
  margin-top: auto;
}

.project-actions .btn {
  flex: 1;
  min-width: 120px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
}

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
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-features {
    grid-template-columns: 1fr;
  }
  
  .project-actions {
    flex-direction: column;
  }
  
  .tech-overview {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .project-header {
    flex-direction: column;
    text-align: center;
  }
  
  .project-icon {
    align-self: center;
  }
}
</style>
