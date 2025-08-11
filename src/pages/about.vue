<template>
  <div class="about">
    <!-- Hero Section -->
    <section class="hero hero-small">
      <div class="container">
        <h1>Sobre <span class="highlight">Mí</span></h1>
        <p class="subtitle">Conoce mi trayectoria y especialización</p>
      </div>
    </section>

    <!-- Bio Section -->
    <section class="section">
      <div class="container">
        <div class="grid grid-2 align-items-start">
          <div>
            <h2>Mi Historia</h2>
            <p class="text-large">
              Soy un desarrollador de software apasionado por crear soluciones tecnológicas 
              que resuelvan problemas reales. Con más de 5 años de experiencia en el desarrollo 
              full-stack, me he especializado en sistemas financieros, gestión portuaria y 
              tecnologías blockchain.
            </p>
            <p>
              Mi enfoque se centra en escribir código limpio, crear arquitecturas escalables 
              y mantenerme al día con las últimas tecnologías. Me motiva especialmente trabajar 
              en proyectos que combinan innovación tecnológica con impacto positivo en los negocios.
            </p>
            <p>
              Cuando no estoy programando, disfruto de investigar nuevas tecnologías, 
              contribuir a proyectos open source y compartir conocimiento con la comunidad 
              de desarrolladores.
            </p>
          </div>
          
          <div class="bio-image">
            <img src="/fotoperfil.svg" alt="Luis Miguel Rodriguez" class="profile-image-large">
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="section">
      <div class="container">
        <h2 class="text-center" style="margin-bottom: 3rem;">Especialización & Skills</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <div class="skill-icon">
              <i class="fas fa-laptop-code"></i>
            </div>
            <h3>Desarrollo de Software</h3>
            <p>Desarrollo full-stack con enfoque en aplicaciones web modernas y APIs robustas.</p>
            <div class="skills-tags">
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">TypeScript</span>
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">React</span>
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Python</span>
            </div>
          </div>

          <div class="skill-category">
            <div class="skill-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>Sistemas Financieros</h3>
            <p>Experiencia en desarrollo de plataformas financieras, análisis de datos y reportes.</p>
            <div class="skills-tags">
              <span class="skill-tag">FinTech</span>
              <span class="skill-tag">Analytics</span>
              <span class="skill-tag">Trading Bots</span>
              <span class="skill-tag">Payment Systems</span>
              <span class="skill-tag">Risk Management</span>
            </div>
          </div>

          <div class="skill-category">
            <div class="skill-icon">
              <i class="fas fa-ship"></i>
            </div>
            <h3>Gestión Portuaria</h3>
            <p>Sistemas de control y monitoreo para operaciones portuarias y logística marítima.</p>
            <div class="skills-tags">
              <span class="skill-tag">IoT</span>
              <span class="skill-tag">Real-time Systems</span>
              <span class="skill-tag">Logistics</span>
              <span class="skill-tag">Fleet Management</span>
              <span class="skill-tag">GPS Tracking</span>
            </div>
          </div>

          <div class="skill-category">
            <div class="skill-icon">
              <i class="fas fa-server"></i>
            </div>
            <h3>DevOps</h3>
            <p>Automatización de procesos, CI/CD, infraestructura como código y monitoreo.</p>
            <div class="skills-tags">
              <span class="skill-tag">Docker</span>
              <span class="skill-tag">Kubernetes</span>
              <span class="skill-tag">AWS</span>
              <span class="skill-tag">CI/CD</span>
              <span class="skill-tag">Monitoring</span>
            </div>
          </div>

          <div class="skill-category">
            <div class="skill-icon">
              <i class="fab fa-bitcoin"></i>
            </div>
            <h3>Criptomonedas</h3>
            <p>Desarrollo de aplicaciones DeFi, bots de trading y análisis de blockchain.</p>
            <div class="skills-tags">
              <span class="skill-tag">Blockchain</span>
              <span class="skill-tag">Smart Contracts</span>
              <span class="skill-tag">DeFi</span>
              <span class="skill-tag">Trading Bots</span>
              <span class="skill-tag">Web3</span>
            </div>
          </div>

          <div class="skill-category">
            <div class="skill-icon">
              <i class="fas fa-robot"></i>
            </div>
            <h3>Bots & Agentes</h3>
            <p>Automatización inteligente, chatbots y sistemas de procesamiento automático.</p>
            <div class="skills-tags">
              <span class="skill-tag">AI/ML</span>
              <span class="skill-tag">Automation</span>
              <span class="skill-tag">Chatbots</span>
              <span class="skill-tag">RPA</span>
              <span class="skill-tag">APIs</span>
            </div>
          </div>

          <div class="skill-category">
            <div class="skill-icon">
              <i class="fas fa-landmark"></i>
            </div>
            <h3>Servicios del Estado</h3>
            <p>Sistemas para administración pública, transparencia y gestión ciudadana.</p>
            <div class="skills-tags">
              <span class="skill-tag">E-Government</span>
              <span class="skill-tag">Security</span>
              <span class="skill-tag">Compliance</span>
              <span class="skill-tag">Data Privacy</span>
              <span class="skill-tag">Accessibility</span>
            </div>
          </div>

          <div class="skill-category">
            <div class="skill-icon">
              <i class="fas fa-home"></i>
            </div>
            <h3>Self-hosted Solutions</h3>
            <p>Implementación y mantenimiento de servicios propios para mayor control y privacidad.</p>
            <div class="skills-tags">
              <span class="skill-tag">Self-hosting</span>
              <span class="skill-tag">Linux</span>
              <span class="skill-tag">Networking</span>
              <span class="skill-tag">Security</span>
              <span class="skill-tag">Backup</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="section">
      <div class="container">
        <h2 class="text-center" style="margin-bottom: 3rem;">Stack Tecnológico</h2>
        <div class="tech-stack">
          <div class="tech-category">
            <h3>Frontend</h3>
            <div class="tech-icons">
              <div class="tech-item">
                <i class="fab fa-vuejs"></i>
                <span>Vue.js</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-react"></i>
                <span>React</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-js"></i>
                <span>JavaScript</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-css3-alt"></i>
                <span>CSS3</span>
              </div>
            </div>
          </div>

          <div class="tech-category">
            <h3>Backend</h3>
            <div class="tech-icons">
              <div class="tech-item">
                <i class="fab fa-node-js"></i>
                <span>Node.js</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-python"></i>
                <span>Python</span>
              </div>
              <div class="tech-item">
                <i class="fas fa-database"></i>
                <span>PostgreSQL</span>
              </div>
              <div class="tech-item">
                <i class="fas fa-leaf"></i>
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          <div class="tech-category">
            <h3>DevOps</h3>
            <div class="tech-icons">
              <div class="tech-item">
                <i class="fab fa-docker"></i>
                <span>Docker</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-aws"></i>
                <span>AWS</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-git-alt"></i>
                <span>Git</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-linux"></i>
                <span>Linux</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section">
      <div class="container">
        <div class="card text-center">
          <h2>¿Quieres colaborar?</h2>
          <p>
            Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. 
            Si tienes una idea o necesitas ayuda con algún desarrollo, hablemos.
          </p>
          <div class="cta-actions">
            <router-link to="/projects" class="btn btn-secondary">
              <i class="fas fa-eye"></i>
              Ver Proyectos
            </router-link>
            <router-link to="/contact" class="btn btn-primary">
              <i class="fas fa-envelope"></i>
              Contactar
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'

export default {
  name: 'AboutPage',
  setup() {
    useHead({
      title: 'Sobre Mí - Luis Miguel Rodriguez',
      meta: [
        {
          name: 'description',
          content: 'Conoce la trayectoria profesional de Luis Miguel Rodriguez, desarrollador de software especializado en sistemas financieros, DevOps y tecnologías blockchain.'
        },
        {
          property: 'og:title',
          content: 'Sobre Mí - Luis Miguel Rodriguez'
        },
        {
          property: 'og:description',
          content: 'Desarrollador full-stack con más de 5 años de experiencia en sistemas financieros, gestión portuaria y DevOps'
        }
      ]
    })
  }
}
</script>

<style scoped>
.text-large {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-xl);
}

.bio-image {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.profile-image-large {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxxl);
}

.skill-category {
  text-align: center;
  padding: var(--spacing-xl);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-lg);
  background: var(--color-card-bg);
  transition: all 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.skill-icon {
  font-size: 3rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
}

.skill-category h3 {
  color: var(--color-heading);
  margin-bottom: var(--spacing-lg);
}

.skill-category p {
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xl);
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  justify-content: center;
}

.tech-stack {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
}

.tech-category h3 {
  text-align: center;
  color: var(--color-heading);
  margin-bottom: var(--spacing-xl);
}

.tech-icons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  background: var(--color-card-bg);
  transition: all 0.3s ease;
}

.tech-item:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary);
}

.tech-item i {
  font-size: 2rem;
  color: var(--color-primary);
}

.tech-item span {
  font-size: 0.9rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}

.cta-actions {
  display: flex;
  gap: var(--spacing-lg);
  justify-content: center;
  flex-wrap: wrap;
  margin-top: var(--spacing-xl);
}

.text-center {
  text-align: center;
}

.align-items-start {
  align-items: flex-start;
}

/* Responsive */
@media (max-width: 768px) {
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-actions .btn {
    width: 100%;
    max-width: 250px;
  }
  
  .tech-icons {
    grid-template-columns: 1fr;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
