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
          <!-- Finanzas Project -->
          <div class="project-card featured">
            <div class="project-header">
              <div class="project-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <div class="project-meta">
                <h3>Sistemas Financieros</h3>
                <span class="project-status">Activo</span>
              </div>
            </div>
            
            <p class="project-description">
              Plataformas completas de gestión financiera incluyendo análisis de datos, 
              reportes automatizados, sistemas de trading y herramientas de inversión.
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
                <i class="fas fa-mobile-alt"></i>
                <span>Mobile Ready</span>
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
                Ver Proyecto
              </router-link>
              <a href="#" class="btn btn-secondary" @click.prevent="showDemo('finanzas')">
                <i class="fas fa-play"></i>
                Demo
              </a>
            </div>
          </div>

          <!-- Portuaria Project -->
          <div class="project-card">
            <div class="project-header">
              <div class="project-icon">
                <i class="fas fa-ship"></i>
              </div>
              <div class="project-meta">
                <h3>Gestión Portuaria</h3>
                <span class="project-status">En desarrollo</span>
              </div>
            </div>
            
            <p class="project-description">
              Sistema integral de control y monitoreo para operaciones portuarias, 
              gestión de contenedores y logística marítima en tiempo real.
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

          <!-- Automotriz Project -->
          <div class="project-card">
            <div class="project-header">
              <div class="project-icon">
                <i class="fas fa-car"></i>
              </div>
              <div class="project-meta">
                <h3>Sector Automotriz</h3>
                <span class="project-status">Planificado</span>
              </div>
            </div>
            
            <p class="project-description">
              Soluciones para concesionarias, gestión de inventario, CRM especializado 
              y herramientas de análisis de ventas para el sector automotriz.
            </p>
            
            <div class="project-features">
              <div class="feature-item">
                <i class="fas fa-warehouse"></i>
                <span>Gestión Inventario</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-handshake"></i>
                <span>CRM Ventas</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-tools"></i>
                <span>Servicio Técnico</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-calculator"></i>
                <span>Cotizaciones</span>
              </div>
            </div>
            
            <div class="project-tech">
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">Laravel</span>
              <span class="tech-tag">MySQL</span>
              <span class="tech-tag">Redis</span>
            </div>
            
            <div class="project-actions">
              <button class="btn btn-secondary" disabled>
                <i class="fas fa-calendar"></i>
                2024 Q2
              </button>
            </div>
          </div>

          <!-- Estado Project -->
          <div class="project-card">
            <div class="project-header">
              <div class="project-icon">
                <i class="fas fa-landmark"></i>
              </div>
              <div class="project-meta">
                <h3>Servicios del Estado</h3>
                <span class="project-status">Activo</span>
              </div>
            </div>
            
            <p class="project-description">
              Plataformas digitales para administración pública, transparencia gubernamental, 
              gestión ciudadana y servicios públicos digitales.
            </p>
            
            <div class="project-features">
              <div class="feature-item">
                <i class="fas fa-users-cog"></i>
                <span>Gestión Ciudadana</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-eye"></i>
                <span>Transparencia</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-file-alt"></i>
                <span>Trámites Online</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-shield-alt"></i>
                <span>Seguridad</span>
              </div>
            </div>
            
            <div class="project-tech">
              <span class="tech-tag">Angular</span>
              <span class="tech-tag">.NET Core</span>
              <span class="tech-tag">SQL Server</span>
              <span class="tech-tag">OAuth</span>
            </div>
            
            <div class="project-actions">
              <button class="btn btn-success">
                <i class="fas fa-check"></i>
                Implementado
              </button>
            </div>
          </div>

          <!-- Cripto Project -->
          <div class="project-card">
            <div class="project-header">
              <div class="project-icon">
                <i class="fab fa-bitcoin"></i>
              </div>
              <div class="project-meta">
                <h3>Criptomonedas</h3>
                <span class="project-status">Activo</span>
              </div>
            </div>
            
            <p class="project-description">
              Bots de trading automatizado, análisis de mercado blockchain, 
              portfolio trackers y herramientas DeFi para gestión de criptoactivos.
            </p>
            
            <div class="project-features">
              <div class="feature-item">
                <i class="fas fa-robot"></i>
                <span>Trading Bots</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-chart-area"></i>
                <span>Market Analysis</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-wallet"></i>
                <span>Portfolio Tracker</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-coins"></i>
                <span>DeFi Tools</span>
              </div>
            </div>
            
            <div class="project-tech">
              <span class="tech-tag">Python</span>
              <span class="tech-tag">Web3.js</span>
              <span class="tech-tag">Binance API</span>
              <span class="tech-tag">Solidity</span>
            </div>
            
            <div class="project-actions">
              <button class="btn btn-primary" @click="showDemo('crypto')">
                <i class="fas fa-play"></i>
                Ver Demo
              </button>
            </div>
          </div>

          <!-- Bots Project -->
          <div class="project-card">
            <div class="project-header">
              <div class="project-icon">
                <i class="fas fa-robot"></i>
              </div>
              <div class="project-meta">
                <h3>Bots & Agentes</h3>
                <span class="project-status">Activo</span>
              </div>
            </div>
            
            <p class="project-description">
              Automatización inteligente, chatbots conversacionales, agentes de IA 
              y sistemas de procesamiento automático de datos y tareas.
            </p>
            
            <div class="project-features">
              <div class="feature-item">
                <i class="fas fa-comments"></i>
                <span>Chatbots</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-brain"></i>
                <span>AI Agents</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-cogs"></i>
                <span>RPA</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-api"></i>
                <span>API Integration</span>
              </div>
            </div>
            
            <div class="project-tech">
              <span class="tech-tag">Python</span>
              <span class="tech-tag">TensorFlow</span>
              <span class="tech-tag">OpenAI API</span>
              <span class="tech-tag">Selenium</span>
            </div>
            
            <div class="project-actions">
              <button class="btn btn-primary" @click="showDemo('bots')">
                <i class="fas fa-play"></i>
                Interactuar
              </button>
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
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxxl);
}

.project-card {
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.project-card.featured {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
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
  margin-bottom: var(--spacing-xl);
}

.project-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
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
  margin-bottom: var(--spacing-xl);
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
}

.project-actions .btn {
  flex: 1;
  min-width: 120px;
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
