<template>
  <div class="projects-devs-page">
    <section class="section">
      <div class="container">
        <div class="page-header">
          <h1 class="text-center">Proyectos de Desarrollo</h1>
          <p class="subtitle text-center">
            Soluciones empresariales y proyectos de software desarrollados a medida.
          </p>
        </div>

        <div class="projects-grid">
          <!-- 1. MecaCloud - Proyecto Odoo -->
          <div class="project-card">
            <div class="project-header">
              <div class="project-icon">
                <i class="fas fa-cloud"></i>
              </div>
              <div class="project-meta">
                <h3>MecaCloud</h3>
                <span class="project-status status-active">Activo</span>
              </div>
            </div>
            
            <p class="project-description">
              Plataforma SaaS desarrollada para optimizar la gestión de pequeñas empresas del sector automotriz argentino, como talleres, gomerías y lubricentros. Basada en Odoo Community, integra funciones de CRM, inventario, agenda, portal de clientes y comunicación por WhatsApp.
            </p>
            
            <div class="project-features">
              <div class="feature-item">
                <i class="fas fa-users"></i>
                <span>B2C</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-chart-line"></i>
                <span>Data</span>
              </div>

              <div class="feature-item">
                <i class="fas fa-car"></i>
                <span>Talleres</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-wrench"></i>
                <span>Servicios</span>
              </div>

            </div>
            
            <div class="project-tech">
              <span class="tech-tag">Odoo</span>
              <span class="tech-tag">Python</span>
              <span class="tech-tag">PostgreSQL</span>
              <span class="tech-tag">XML</span>
              <span class="tech-tag">JavaScript</span>
            </div>
            
            <div class="project-actions">
              <router-link to="/mecacloud" class="btn btn-primary">
                <i class="fas fa-eye"></i>
                Ver Proyecto
              </router-link>
            </div>
          </div>

          <!-- 2. E-Commerce Platform -->
          <div class="project-card">
            <div class="project-header">
              <div class="project-icon">
                <i class="fas fa-store"></i>
              </div>
              <div class="project-meta">
                <h3>E-Commerce Platform</h3>
                <span class="project-status status-development">En desarrollo</span>
              </div>
            </div>
            
            <p class="project-description">
              Plataforma de comercio electrónico escalable con carrito de compras, 
              pasarela de pagos integrada, gestión de productos, sistema de 
              reseñas y panel de administración completo.
            </p>
            
            <div class="project-features">
              <div class="feature-item">
                <i class="fas fa-shopping-bag"></i>
                <span>Carrito</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-credit-card"></i>
                <span>Pagos Online</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-star"></i>
                <span>Reseñas</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-truck"></i>
                <span>Envíos</span>
              </div>
            </div>
            
            <div class="project-tech">
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">Express</span>
              <span class="tech-tag">MongoDB</span>
              <span class="tech-tag">Stripe</span>
            </div>
            
            <div class="project-actions">
              <button class="btn btn-primary" disabled>
                <i class="fas fa-clock"></i>
                Próximamente
              </button>
            </div>
          </div>

          <!-- 3. Task Management System -->
          <div class="project-card">
            <div class="project-header">
              <div class="project-icon">
                <i class="fas fa-tasks"></i>
              </div>
              <div class="project-meta">
                <h3>Task Management System</h3>
                <span class="project-status status-active">Activo</span>
              </div>
            </div>
            
            <p class="project-description">
              Sistema colaborativo de gestión de tareas al estilo Kanban con 
              tableros personalizables, asignación de equipos, seguimiento de 
              tiempo y reportes de productividad en tiempo real.
            </p>
            
            <div class="project-features">
              <div class="feature-item">
                <i class="fas fa-columns"></i>
                <span>Kanban Board</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-user-friends"></i>
                <span>Colaboración</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-clock"></i>
                <span>Time Tracking</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-chart-bar"></i>
                <span>Analytics</span>
              </div>
            </div>
            
            <div class="project-tech">
              <span class="tech-tag">React</span>
              <span class="tech-tag">TypeScript</span>
              <span class="tech-tag">Firebase</span>
              <span class="tech-tag">Tailwind</span>
              <span class="tech-tag">Zustand</span>
            </div>
            
            <div class="project-actions">
              <button class="btn btn-primary" @click="showDemo('taskmanager')">
                <i class="fas fa-eye"></i>
                Ver Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import { useAnalytics } from '../composables/useAnalytics.js'

export default {
  name: 'ProjectsDevsPage',
  setup() {
    useHead({
      title: 'Proyectos de Desarrollo - Luis Miguel Rodríguez',
      meta: [
        {
          name: 'description',
          content: 'Proyectos de desarrollo de software incluyendo sistemas ERP, plataformas e-commerce y herramientas de gestión'
        },
        {
          property: 'og:title',
          content: 'Proyectos de Desarrollo - Luis Miguel Rodríguez'
        },
        {
          property: 'og:description',
          content: 'Soluciones empresariales y proyectos de software desarrollados con tecnologías modernas'
        }
      ]
    })

    return {}
  },
  methods: {
    showDemo(projectType) {
      // Track analytics
      if (window.gtag) {
        window.gtag('event', 'project_demo_click', {
          'project_type': projectType
        })
      }
      
      alert(`Demo del proyecto ${projectType} - Funcionalidad en desarrollo`)
    },
    showInfo(projectType) {
      // Track analytics
      if (window.gtag) {
        window.gtag('event', 'project_info_click', {
          'project_type': projectType
        })
      }
      
      alert(`Información detallada del proyecto ${projectType} - Funcionalidad en desarrollo`)
    }
  }
}
</script>

<style scoped>
.projects-devs-page {
  min-height: 100vh;
  padding-top: var(--navbar-height, 70px);
}

.page-header {
  margin-bottom: var(--spacing-5xl, 6rem);
  padding-top: var(--spacing-4xl, 4rem);
}

.page-header h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: var(--spacing-lg, 1rem);
  background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-header .subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--color-text-secondary);
  max-width: 800px;
  margin: 0 auto;
}

.text-center {
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-2xl, 2rem);
  margin-bottom: var(--spacing-5xl, 6rem);
}

.project-card {
  background: var(--gradient-card, linear-gradient(135deg, var(--color-bg-card) 0%, var(--color-bg-tertiary) 100%));
  border: 1px solid var(--color-border-light, #2a2a2a);
  border-radius: var(--border-radius-xl, 1rem);
  padding: var(--spacing-2xl, 2rem);
  transition: all var(--transition-normal, 0.3s ease);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl, 1.5rem);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-glow, 0 0 20px rgba(0, 212, 255, 0.3));
  border-color: var(--color-accent-primary, #00d4ff);
}

.project-header {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg, 1rem);
}

.project-icon {
  width: 60px;
  height: 60px;
  border-radius: var(--border-radius-lg, 0.75rem);
  background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.project-icon i {
  font-size: 1.75rem;
  color: white;
}

.project-meta {
  flex: 1;
}

.project-meta h3 {
  font-size: var(--font-size-xl, 1.25rem);
  font-weight: 600;
  margin-bottom: var(--spacing-sm, 0.5rem);
  color: var(--color-text-primary, #ffffff);
}

.project-status {
  display: inline-block;
  padding: var(--spacing-xs, 0.25rem) var(--spacing-md, 0.75rem);
  border-radius: var(--border-radius-sm, 0.375rem);
  font-size: var(--font-size-xs, 0.75rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-active {
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.status-development {
  background: rgba(245, 158, 11, 0.2);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.project-description {
  color: var(--color-text-secondary, #e0e0e0);
  line-height: 1.6;
  font-size: var(--font-size-sm, 0.875rem);
}

.project-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg, 1rem);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm, 0.5rem);
  padding: var(--spacing-sm, 0.5rem);
  background: var(--color-bg-tertiary, #1a1a1a);
  border-radius: var(--border-radius, 0.5rem);
  border: 1px solid var(--color-border-light, #2a2a2a);
}

.feature-item i {
  color: var(--color-accent-primary, #00d4ff);
  font-size: var(--font-size-sm, 0.875rem);
}

.feature-item span {
  font-size: var(--font-size-xs, 0.75rem);
  color: var(--color-text-secondary, #e0e0e0);
  font-weight: 500;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm, 0.5rem);
}

.tech-tag {
  padding: var(--spacing-xs, 0.25rem) var(--spacing-md, 0.75rem);
  background: var(--color-bg-tertiary, #1a1a1a);
  border: 1px solid var(--color-border-medium, #333333);
  border-radius: var(--border-radius, 0.5rem);
  font-size: var(--font-size-xs, 0.75rem);
  color: var(--color-text-secondary, #e0e0e0);
  font-weight: 500;
  transition: all var(--transition-fast, 0.15s ease);
}

.tech-tag:hover {
  background: var(--color-accent-primary, #00d4ff);
  color: var(--color-bg-primary, #0a0a0a);
  border-color: var(--color-accent-primary, #00d4ff);
}

.project-actions {
  display: flex;
  gap: var(--spacing-lg, 1rem);
  margin-top: auto;
}

.btn {
  width: 100%;
  padding: var(--spacing-lg, 1rem) var(--spacing-xl, 1.5rem);
  border: none;
  border-radius: var(--border-radius, 0.5rem);
  font-size: var(--font-size-base, 1rem);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast, 0.15s ease);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm, 0.5rem);
  text-decoration: none;
}

.btn-primary {
  background: var(--gradient-accent, linear-gradient(90deg, #0369a1 0%, #0284c7 50%, #0ea5e9 100%));
  color: white;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 212, 255, 0.4);
}

.btn-secondary {
  background: var(--color-bg-tertiary, #1a1a1a);
  color: var(--color-text-primary, #ffffff);
  border: 1px solid var(--color-border-medium, #333333);
}

.btn-secondary:hover:not(:disabled) {
  background: var(--color-bg-card, #161616);
  border-color: var(--color-accent-primary, #00d4ff);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Responsive */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl, 2rem);
  }
  
  .project-features {
    grid-template-columns: 1fr;
  }
  
  .project-actions {
    flex-direction: column;
  }
  
  .page-header {
    margin-bottom: var(--spacing-3xl, 3rem);
    padding-top: var(--spacing-2xl, 2rem);
  }
}
</style>
