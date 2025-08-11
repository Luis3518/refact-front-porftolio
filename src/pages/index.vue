<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>
              Hola, soy <span class="highlight">Luis Miguel Rodriguez</span>
            </h1>
            <p class="subtitle">Desarrollador de Software & Especialista en Sistemas</p>
            <p class="description">
              Apasionado por crear soluciones tecnológicas innovadoras en sistemas financieros, 
              gestión portuaria, DevOps y criptomonedas. Con experiencia en desarrollo full-stack 
              y automatización de procesos.
            </p>
            
            <div class="hero-actions">
              <router-link to="/projects" class="btn btn-primary" data-track="view-projects">
                <i class="fas fa-eye"></i>
                Ver Proyectos
              </router-link>
              <a href="/CV Luis Rodriguez.pdf" class="btn btn-secondary" download data-track="download-cv">
                <i class="fas fa-download"></i>
                Descargar CV
              </a>
            </div>
            
            <div class="hero-socials">
              <a href="mailto:luismiguel@ejemplo.com" class="social-link" title="Email" data-track="email">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="https://linkedin.com/in/luismiguelrodriguez" class="social-link" title="LinkedIn" target="_blank" data-track="linkedin">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/luismiguelrodriguez" class="social-link" title="GitHub" target="_blank" data-track="github">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
          
          <div class="hero-image">
            <img src="/fotoperfil.svg" alt="Luis Miguel Rodriguez" class="profile-image">
          </div>
        </div>
      </div>
    </section>

    <!-- About Preview Section -->
    <section class="section">
      <div class="container">
        <div class="grid grid-2">
          <div class="card">
            <h2>Sobre mí</h2>
            <p>
              Desarrollador de software con más de 5 años de experiencia creando 
              soluciones tecnológicas para diversos sectores. Me especializo en 
              arquitecturas escalables y tecnologías modernas.
            </p>
            <router-link to="/about" class="project-link">
              Conocer más <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
          
          <div class="card">
            <h2>Especialización</h2>
            <div class="skills-preview">
              <span class="skill-tag">Desarrollo de Software</span>
              <span class="skill-tag">Sistemas Financieros</span>
              <span class="skill-tag">DevOps</span>
              <span class="skill-tag">Criptomonedas</span>
            </div>
            <router-link to="/about" class="project-link">
              Ver todas las skills <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="section">
      <div class="container">
        <h2 class="text-center" style="margin-bottom: 3rem;">Proyectos Destacados</h2>
        <div class="grid grid-3">
          <div class="project-card">
            <div class="icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>Sistemas Financieros</h3>
            <p>Plataformas de gestión financiera, análisis de datos y reportes automatizados.</p>
            <div class="project-tags">
              <span class="tag">Vue.js</span>
              <span class="tag">Python</span>
              <span class="tag">PostgreSQL</span>
            </div>
            <router-link to="/projects" class="project-link">
              Ver proyecto <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>

          <div class="project-card">
            <div class="icon">
              <i class="fas fa-ship"></i>
            </div>
            <h3>Gestión Portuaria</h3>
            <p>Sistemas de control y monitoreo para operaciones portuarias y logística marítima.</p>
            <div class="project-tags">
              <span class="tag">React</span>
              <span class="tag">Node.js</span>
              <span class="tag">MongoDB</span>
            </div>
            <router-link to="/projects" class="project-link">
              Ver proyecto <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>

          <div class="project-card">
            <div class="icon">
              <i class="fab fa-bitcoin"></i>
            </div>
            <h3>Criptomonedas</h3>
            <p>Bots de trading, análisis de mercado y herramientas de gestión de portafolios crypto.</p>
            <div class="project-tags">
              <span class="tag">Python</span>
              <span class="tag">APIs</span>
              <span class="tag">Machine Learning</span>
            </div>
            <router-link to="/projects" class="project-link">
              Ver proyecto <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>
        
        <div class="text-center" style="margin-top: 3rem;">
          <router-link to="/projects" class="btn btn-secondary">
            Ver todos los proyectos <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section class="section">
      <div class="container">
        <div class="card text-center">
          <h2>¿Tienes un proyecto en mente?</h2>
          <p>
            Estoy disponible para nuevos proyectos y colaboraciones. 
            Hablemos sobre cómo puedo ayudarte a materializar tus ideas.
          </p>
          <router-link to="/contact" class="btn btn-primary">
            <i class="fas fa-envelope"></i>
            Contactar
          </router-link>
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
      title: 'Luis Miguel Rodriguez - Desarrollador de Software',
      meta: [
        {
          name: 'description',
          content: 'Portfolio profesional de Luis Miguel Rodriguez, desarrollador de software especializado en sistemas financieros, gestión portuaria, DevOps y criptomonedas'
        },
        {
          property: 'og:title',
          content: 'Luis Miguel Rodriguez - Desarrollador de Software'
        },
        {
          property: 'og:description',
          content: 'Especialista en desarrollo de software con experiencia en sistemas financieros, DevOps y soluciones innovadoras'
        },
        {
          property: 'og:type',
          content: 'website'
        }
      ]
    })
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
  .hero-socials {
    justify-content: center;
  }
  
  .skills-preview {
    justify-content: center;
  }
}
</style>
