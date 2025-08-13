<template>
  <div class="projects-grid">
    <!-- 1. Sistemas B2C Automotores -->
    <div class="project-card">
      <div class="project-header">
        <div class="project-icon">
          <i class="fas fa-car"></i>
        </div>
        <div class="project-meta">
          <h3>Sistemas B2C Automotores</h3>
          <span class="project-status status-development">En desarrollo</span>
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
          <span class="project-status status-development">En desarrollo</span>
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
          <span class="project-status status-active">Activo</span>
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
</template>

<script>
export default {
  name: 'ProjectsGrid',
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
