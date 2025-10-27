<template>
  <div class="actospublicos-page">
    <div class="container">
      <div class="project-layout">
        <!-- Header compacto -->
        <div class="project-header">
          <div class="header-left">
            <div class="project-icon-compact">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="header-info">
              <h1>Actos Públicos Plus</h1>
              <p class="subtitle">Plataforma reestructurada de actos públicos docentes de CABA</p>
              <div class="meta-tags">
                <span class="meta-badge status-active">
                  <i class="fas fa-check-circle"></i>
                  Activo
                </span>
                <span class="meta-badge">
                  <i class="fas fa-school"></i>
                  Gobierno de CABA
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
                <strong>Actos Públicos Plus</strong> es una plataforma reestructurada que mejora significativamente la experiencia de los actos públicos docentes de la Ciudad Autónoma de Buenos Aires. Focalizando en UX y agregando funcionalidades que la plataforma oficial no posee, permite a los docentes gestionar sus inscripciones de manera más eficiente, recibir notificaciones en tiempo real y acceder a un dashboard personalizado con toda su información relevante. La plataforma integra tecnologías modernas como Vue.js, Python, Supabase y PostgreSQL para ofrecer una experiencia superior tanto en rendimiento como en usabilidad.
              </p>
            </div>

            <!-- Video -->
            <div class="content-box video-box">
              <div class="box-header">
                <i class="fas fa-play-circle"></i>
                <h2>Demo de la Plataforma</h2>
              </div>
              <div class="video-wrapper-compact">
                <div class="video-placeholder">
                  <div class="placeholder-content">
                    <i class="fas fa-play-circle"></i>
                    <p>Demo próximamente disponible</p>
                    <small>Video demostrativo de las funcionalidades principales</small>
                  </div>
                </div>
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
                    <i class="fab fa-vuejs"></i>
                    Vue.js
                  </span>
                  <span class="tech-tag">
                    <i class="fab fa-python"></i>
                    Python
                  </span>
                  <span class="tech-tag">
                    <i class="fas fa-rocket"></i>
                    Vite
                  </span>
                  <span class="tech-tag">
                    <i class="fas fa-database"></i>
                    Supabase
                  </span>
                  <span class="tech-tag">
                    <i class="fas fa-server"></i>
                    PostgreSQL
                  </span>
                </div>
                <div class="repo-status">
                  <div class="status-item">
                    <i class="fas fa-lock"></i>
                    <span>Repositorio Privado</span>
                  </div>
                  <small>Por políticas de la organización</small>
                </div>
              </div>
            </div>

            <!-- Funcionalidades principales -->
            <div class="content-box">
              <div class="box-header">
                <i class="fas fa-list-check"></i>
                <h2>Funcionalidades</h2>
              </div>
              <div class="features-list">
                <div class="feature-item-detailed">
                  <div class="feature-icon">
                    <i class="fas fa-user-check"></i>
                  </div>
                  <div class="feature-content">
                    <h4>Inscripciones Mejoradas</h4>
                    <p>Sistema optimizado de inscripción a concursos docentes con validación en tiempo real</p>
                  </div>
                </div>
                <div class="feature-item-detailed">
                  <div class="feature-icon">
                    <i class="fas fa-search"></i>
                  </div>
                  <div class="feature-content">
                    <h4>Búsqueda Avanzada</h4>
                    <p>Filtros inteligentes para encontrar concursos por materia, distrito y nivel</p>
                  </div>
                </div>
                <div class="feature-item-detailed">
                  <div class="feature-icon">
                    <i class="fas fa-bell"></i>
                  </div>
                  <div class="feature-content">
                    <h4>Notificaciones</h4>
                    <p>Alertas automáticas sobre nuevos concursos y cambios de estado</p>
                  </div>
                </div>
                <div class="feature-item-detailed">
                  <div class="feature-icon">
                    <i class="fas fa-chart-bar"></i>
                  </div>
                  <div class="feature-content">
                    <h4>Dashboard Personal</h4>
                    <p>Panel personalizado con historial y estadísticas de participación</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Características técnicas -->
            <div class="content-box">
              <div class="box-header">
                <i class="fas fa-cogs"></i>
                <h2>Características</h2>
              </div>
              <div class="features-compact">
                <div class="feature-tag">
                  <i class="fas fa-mobile-alt"></i>
                  Responsive
                </div>
                <div class="feature-tag">
                  <i class="fas fa-shield-alt"></i>
                  Seguro
                </div>
                <div class="feature-tag">
                  <i class="fas fa-tachometer-alt"></i>
                  Rápido
                </div>
                <div class="feature-tag">
                  <i class="fas fa-universal-access"></i>
                  Accesible
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
  name: 'ActosPublicosPage',
  setup() {
    useHead({
      title: 'Actos Públicos Plus - Plataforma Docente | Luis Miguel Rodríguez',
      meta: [
        {
          name: 'description',
          content: 'Plataforma reestructurada de actos públicos docentes de CABA con mejor UX y funcionalidades avanzadas. Desarrollado por Luis Miguel Rodríguez.'
        },
        {
          property: 'og:title',
          content: 'Actos Públicos Plus - Plataforma Docente'
        },
        {
          property: 'og:description',
          content: 'Plataforma mejorada para actos públicos docentes con funcionalidades avanzadas y mejor experiencia de usuario'
        }
      ]
    })

    return {}
  }
}
</script>

<style scoped>
.actospublicos-page {
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

/* Video placeholder */
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

.video-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-bg-tertiary), var(--color-bg-card));
}

.placeholder-content {
  text-align: center;
  color: var(--color-text-secondary);
}

.placeholder-content i {
  font-size: 3rem;
  margin-bottom: var(--spacing-md, 0.75rem);
  color: var(--color-accent-primary);
}

.placeholder-content p {
  font-size: var(--font-size-base, 1rem);
  font-weight: 600;
  margin: 0 0 var(--spacing-xs, 0.25rem) 0;
}

.placeholder-content small {
  font-size: var(--font-size-xs, 0.75rem);
  color: var(--color-text-muted);
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

.repo-status {
  padding: var(--spacing-md, 0.75rem);
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border-light);
  border-radius: var(--border-radius, 0.5rem);
  text-align: center;
}

.status-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm, 0.5rem);
  color: var(--color-text-secondary);
  font-weight: 500;
  margin-bottom: var(--spacing-xs, 0.25rem);
}

.status-item i {
  color: var(--color-accent-primary);
}

/* Funcionalidades detalladas */
.features-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg, 1rem);
}

.feature-item-detailed {
  display: flex;
  gap: var(--spacing-md, 0.75rem);
  padding: var(--spacing-md, 0.75rem);
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border-light);
  border-radius: var(--border-radius, 0.5rem);
  transition: all var(--transition-fast);
}

.feature-item-detailed:hover {
  border-color: var(--color-accent-primary);
  transform: translateY(-2px);
}

.feature-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius, 0.5rem);
  background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-icon i {
  font-size: 1.25rem;
  color: white;
}

.feature-content h4 {
  font-size: var(--font-size-base, 1rem);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 var(--spacing-xs, 0.25rem) 0;
}

.feature-content p {
  font-size: var(--font-size-xs, 0.75rem);
  color: var(--color-text-secondary);
  line-height: 1.4;
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

.btn-outline {
  background: transparent;
  color: var(--color-text-primary);
  border: 2px solid var(--color-border-medium);
}

.btn-outline:hover {
  background: var(--color-bg-card);
  border-color: var(--color-accent-primary);
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
  
  .actospublicos-page {
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