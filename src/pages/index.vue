<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <h1 class="hero-title">Frontend Developer</h1>
        <p class="hero-subtitle">Especializado en Vue.js y soluciones financieras</p>
        <div class="hero-actions">
          <router-link to="/finanzas" class="btn">Ver Proyectos de Finanzas</router-link>
        </div>
      </div>
    </section>

    <section class="about">
      <div class="container">
        <div class="grid grid-2">
          <div class="card">
            <h2>Sobre mí</h2>
            <p>
              Desarrollador frontend con experiencia en Vue.js, especializado en crear
              aplicaciones web modernas y eficientes. Me enfoco en soluciones para el
              sector financiero con énfasis en rendimiento y experiencia de usuario.
            </p>
          </div>
          
          <div class="card">
            <h2>Tecnologías</h2>
            <ul class="tech-list">
              <li>Vue.js 3 + Composition API</li>
              <li>Vite + SSG</li>
              <li>JavaScript ES6+</li>
              <li>CSS3 + Responsive Design</li>
              <li>API Integration</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="projects">
      <div class="container">
        <h2>Proyectos Destacados</h2>
        <div class="grid grid-3">
          <div class="card project-card">
            <h3>Filobono</h3>
            <p>Sistema de gestión de bonos financieros con filtros avanzados y visualización de datos.</p>
            <router-link to="/finanzas/filobono" class="btn">Ver Proyecto</router-link>
          </div>
          
          <div class="card project-card">
            <h3>Dashboard Financiero</h3>
            <p>Panel de control para análisis de datos financieros en tiempo real.</p>
            <router-link to="/finanzas" class="btn">Ver Sección</router-link>
          </div>
          
          <div class="card project-card">
            <h3>Más Proyectos</h3>
            <p>Explora más soluciones financieras y herramientas de desarrollo.</p>
            <router-link to="/finanzas" class="btn btn-secondary">Explorar</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'

export default {
  name: 'HomePage',
  setup() {
    useHead({
      title: 'Portfolio - Frontend Developer',
      meta: [
        {
          name: 'description',
          content: 'Portfolio de desarrollador frontend especializado en Vue.js y soluciones financieras'
        }
      ]
    })
  }
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 300;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-actions {
  margin-top: 2rem;
}

.about, .projects {
  padding: 4rem 0;
}

.projects {
  background-color: white;
}

.tech-list {
  list-style: none;
  padding: 0;
}

.tech-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.tech-list li:last-child {
  border-bottom: none;
}

.project-card {
  text-align: center;
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.project-card p {
  margin-bottom: 1.5rem;
  color: #666;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero {
    padding: 2rem 0;
  }
  
  .about, .projects {
    padding: 2rem 0;
  }
}
</style>
