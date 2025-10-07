<template>
  <div class="mecacloud-page">
    <div class="container">
      <div class="project-layout">
        <!-- Header compacto -->
        <div class="project-header">
          <div class="header-left">
            <div class="project-icon-compact">
              <i class="fas fa-cloud"></i>
            </div>
            <div class="header-info">
              <h1>MecaCloud</h1>
              <p class="subtitle">Plataforma SaaS para PyMEs del sector automotriz argentino</p>
              <div class="meta-tags">
                <span class="meta-badge status-active">
                  <i class="fas fa-check-circle"></i>
                  Activo
                </span>
                <span class="meta-badge">
                  <i class="fas fa-graduation-cap"></i>
                  Trabajo Final - UPalermo
                </span>
              </div>
          </div>
        </div>
        <div class="header-actions">
          <router-link to="/projects" class="btn btn-outline">
            <i class="fas fa-arrow-left"></i>
            Volver
          </router-link>
        </div>
      </div>        <!-- Grid de 2 columnas -->
        <div class="content-grid">
          <!-- Columna Izquierda -->
          <div class="left-column">
            <!-- Descripción -->
            <div class="content-box">
              <div class="box-header">
                <i class="fas fa-info-circle"></i>
                <h2>Descripción</h2>
              </div>
              <p class="description-text">
                <strong>Mecacloud</strong> es una plataforma SaaS desarrollada para optimizar la gestión de pequeñas empresas del sector automotriz argentino, como talleres, gomerías y lubricentros. Basada en Odoo Community, integra funciones de CRM, inventario, agenda, portal de clientes y comunicación por WhatsApp, ofreciendo una solución accesible y adaptable a las necesidades locales. El proyecto surgió como una propuesta real para un negocio y evolucionó hasta convertirse en mi trabajo final de la Facultad de Ingeniería de la Universidad de Palermo.
              </p>
            </div>

            <!-- Video -->
            <div class="content-box video-box">
              <div class="box-header">
                <i class="fas fa-play-circle"></i>
                <h2>Video de Presentación</h2>
              </div>
              <div class="video-wrapper-compact">
                <iframe 
                  src="https://www.youtube.com/embed/eGFSqUEPRAU" 
                  frameborder="0" 
                  allowfullscreen>
                </iframe>
              </div>
            </div>
          </div>

          <!-- Columna Derecha -->
          <div class="right-column">
            <!-- Repositorio -->
            <div class="content-box">
              <div class="box-header">
                <i class="fab fa-github"></i>
                <h2>Repositorio</h2>
              </div>
              <div class="repo-compact">
                <div class="tech-tags-compact">
                  <span class="tech-tag">
                    <i class="fab fa-python"></i>
                    Python
                  </span>
                  <span class="tech-tag">
                    <i class="fas fa-database"></i>
                    PostgreSQL
                  </span>
                  <span class="tech-tag">
                    <i class="fab fa-js"></i>
                    JavaScript
                  </span>
                  <span class="tech-tag">
                    <i class="fas fa-code"></i>
                    XML
                  </span>
                  <span class="tech-tag">
                    <i class="fab fa-docker"></i>
                    Docker
                  </span>
                </div>
                <a href="https://github.com/Luis3518/odoo17-services/tree/main" class="btn btn-primary btn-block" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-github"></i>
                  Ver en GitHub
                </a>
              </div>
            </div>

            <!-- Paper -->
            <div class="content-box">
              <div class="box-header">
                <i class="fas fa-file-alt"></i>
                <h2>Documentación</h2>
              </div>
              <div class="paper-compact">
                <div class="paper-preview-compact">
                  <div class="paper-icon-small">
                    <i class="fas fa-file-pdf"></i>
                  </div>
                  <div class="paper-info-compact">
                    <h3>Proyecto MecaCloud</h3>
                    <p class="paper-meta-compact">
                      <span><i class="fas fa-user"></i> Luis M. Rodríguez</span>
                      <span><i class="fas fa-building"></i> UPalermo</span>
                    </p>
                  </div>
                </div>
                <p class="paper-description">
                  Trabajo final de la carrera de Ingeniería. Documento completo sobre el desarrollo e implementación del sistema ERP para PyMEs del sector automotriz.
                </p>
                <a href="/Proyecto Mecacloud.pdf" class="btn btn-primary btn-block" download>
                  <i class="fas fa-download"></i>
                  Descargar Paper (PDF)
                </a>
              </div>
            </div>

            <!-- Características clave -->
            <div class="content-box">
              <div class="box-header">
                <i class="fas fa-star"></i>
                <h2>Características</h2>
              </div>
              <div class="features-compact">
                <div class="feature-tag">
                  <i class="fas fa-users"></i>
                  B2C
                </div>
                <div class="feature-tag">
                  <i class="fas fa-chart-line"></i>
                  Data
                </div>
                <div class="feature-tag">
                  <i class="fas fa-car"></i>
                  Talleres
                </div>
                <div class="feature-tag">
                  <i class="fas fa-wrench"></i>
                  Servicios
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'

export default {
  name: 'MecaCloudPage',
  setup() {
    useHead({
      title: 'MecaCloud - ERP Odoo | Luis Miguel Rodríguez',
      meta: [
        {
          name: 'description',
          content: 'Sistema ERP integral basado en Odoo para gestión empresarial completa. Desarrollado por Luis Miguel Rodríguez.'
        },
        {
          property: 'og:title',
          content: 'MecaCloud - Sistema ERP Odoo'
        },
        {
          property: 'og:description',
          content: 'Sistema ERP integral basado en Odoo para gestión empresarial completa'
        }
      ]
    })

    return {}
  }
}
</script>

<style scoped>
.mecacloud-page {
  min-height: 100vh;
  height: 100vh;
  padding: var(--navbar-height, 70px) 0 0;
  overflow: hidden;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-layout {
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--navbar-height, 70px));
  padding: var(--spacing-lg, 1rem) 0;
}

/* Header compacto */
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg, 1rem) 0;
  border-bottom: 2px solid var(--color-border-light);
  margin-bottom: var(--spacing-lg, 1rem);
}

.header-left {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg, 1rem);
}

.project-icon-compact {
  width: 70px;
  height: 70px;
  border-radius: var(--border-radius-lg, 0.75rem);
  background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.project-icon-compact i {
  font-size: 2rem;
  color: white;
}

.header-info h1 {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  margin: 0 0 var(--spacing-xs, 0.25rem) 0;
  color: var(--color-text-primary);
}

.header-info .subtitle {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: var(--color-text-secondary);
  margin: 0 0 var(--spacing-sm, 0.5rem) 0;
}

.meta-tags {
  display: flex;
  gap: var(--spacing-sm, 0.5rem);
  flex-wrap: wrap;
}

.meta-badge {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs, 0.25rem);
  padding: var(--spacing-xs, 0.25rem) var(--spacing-sm, 0.5rem);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-light);
  border-radius: var(--border-radius-sm, 0.375rem);
  font-size: var(--font-size-xs, 0.75rem);
  color: var(--color-text-secondary);
}

.meta-badge.status-active {
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
  border-color: rgba(34, 197, 94, 0.3);
}

.header-actions {
  flex-shrink: 0;
}

/* Grid de 2 columnas */
.content-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: var(--spacing-lg, 1rem);
  flex: 1;
  overflow: hidden;
}

.left-column,
.right-column {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg, 1rem);
  overflow-y: auto;
  padding-right: var(--spacing-sm, 0.5rem);
}

/* Scrollbar personalizado */
.left-column::-webkit-scrollbar,
.right-column::-webkit-scrollbar {
  width: 6px;
}

.left-column::-webkit-scrollbar-track,
.right-column::-webkit-scrollbar-track {
  background: var(--color-bg-tertiary);
  border-radius: 3px;
}

.left-column::-webkit-scrollbar-thumb,
.right-column::-webkit-scrollbar-thumb {
  background: var(--color-border-medium);
  border-radius: 3px;
}

.left-column::-webkit-scrollbar-thumb:hover,
.right-column::-webkit-scrollbar-thumb:hover {
  background: var(--color-accent-primary);
}

/* Content Boxes */
.content-box {
  background: var(--gradient-card);
  border: 1px solid var(--color-border-light);
  border-radius: var(--border-radius-lg, 0.75rem);
  padding: var(--spacing-lg, 1rem);
  display: flex;
  flex-direction: column;
}

.video-box {
  flex: 1;
  min-height: 0;
}

.box-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm, 0.5rem);
  margin-bottom: var(--spacing-md, 0.75rem);
  padding-bottom: var(--spacing-sm, 0.5rem);
  border-bottom: 1px solid var(--color-border-light);
}

.box-header i {
  font-size: 1.25rem;
  color: var(--color-accent-primary);
}

.box-header h2 {
  font-size: var(--font-size-lg, 1.125rem);
  font-weight: 600;
  margin: 0;
  color: var(--color-text-primary);
}

/* Descripción */
.description-text {
  font-size: var(--font-size-sm, 0.875rem);
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin: 0;
  text-align: justify;
}

/* Video compacto */
.video-wrapper-compact {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  background: var(--color-bg-tertiary);
  border-radius: var(--border-radius, 0.5rem);
  overflow: hidden;
  border: 1px solid var(--color-border-light);
  min-height: 200px;
}

.video-wrapper-compact iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* Repositorio compacto */
.repo-compact {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md, 0.75rem);
}

.tech-tags-compact {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm, 0.5rem);
}

.tech-tag {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs, 0.25rem);
  padding: var(--spacing-xs, 0.25rem) var(--spacing-sm, 0.5rem);
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border-medium);
  border-radius: var(--border-radius-sm, 0.375rem);
  font-size: var(--font-size-xs, 0.75rem);
  color: var(--color-text-secondary);
  font-weight: 500;
  transition: all var(--transition-fast);
}

.tech-tag:hover {
  background: var(--color-accent-primary);
  color: var(--color-bg-primary);
  border-color: var(--color-accent-primary);
}

/* Paper compacto */
.paper-compact {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md, 0.75rem);
}

.paper-preview-compact {
  display: flex;
  gap: var(--spacing-md, 0.75rem);
  align-items: center;
}

.paper-icon-small {
  width: 50px;
  height: 60px;
  background: linear-gradient(135deg, #dc2626, #ef4444);
  border-radius: var(--border-radius-sm, 0.375rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.paper-icon-small i {
  font-size: 1.5rem;
  color: white;
}

.paper-info-compact h3 {
  font-size: var(--font-size-base, 1rem);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 var(--spacing-xs, 0.25rem) 0;
}

.paper-meta-compact {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs, 0.25rem);
  font-size: var(--font-size-xs, 0.75rem);
  color: var(--color-text-muted);
}

.paper-meta-compact span {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs, 0.25rem);
}

.paper-description {
  font-size: var(--font-size-xs, 0.75rem);
  line-height: 1.5;
  color: var(--color-text-secondary);
  margin: 0;
}

/* Características compactas */
.features-compact {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-sm, 0.5rem);
}

.feature-tag {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs, 0.25rem);
  padding: var(--spacing-sm, 0.5rem);
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border-light);
  border-radius: var(--border-radius-sm, 0.375rem);
  font-size: var(--font-size-xs, 0.75rem);
  color: var(--color-text-secondary);
  transition: all var(--transition-fast);
}

.feature-tag:hover {
  border-color: var(--color-accent-primary);
  transform: translateY(-2px);
}

.feature-tag i {
  color: var(--color-accent-primary);
}

/* Botones */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm, 0.5rem);
  padding: var(--spacing-sm, 0.5rem) var(--spacing-lg, 1rem);
  border: none;
  border-radius: var(--border-radius, 0.5rem);
  font-size: var(--font-size-sm, 0.875rem);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  text-decoration: none;
  white-space: nowrap;
}

.btn-primary {
  background: var(--gradient-accent);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 212, 255, 0.4);
}

.btn-secondary {
  background: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-medium);
}

.btn-secondary:hover {
  background: var(--color-bg-card);
  border-color: var(--color-accent-primary);
}

.btn-outline {
  background: transparent;
  color: var(--color-text-primary);
  border: 2px solid var(--color-border-medium);
}

.btn-outline:hover {
  background: var(--color-bg-card);
  border-color: var(--color-accent-primary);
}

.btn-block {
  width: 100%;
}

/* Responsive */
@media (max-width: 1200px) {
  .content-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 968px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .project-layout {
    height: auto;
  }
  
  .mecacloud-page {
    height: auto;
    overflow: auto;
  }
  
  .left-column,
  .right-column {
    overflow-y: visible;
  }
}

@media (max-width: 768px) {
  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-lg, 1rem);
  }
  
  .header-left {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .header-actions {
    width: 100%;
  }
  
  .btn-outline {
    width: 100%;
  }
  
  .features-compact {
    grid-template-columns: 1fr;
  }
}
</style>
