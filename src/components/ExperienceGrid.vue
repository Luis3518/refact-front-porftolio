<template>
  <div class="experience-grid">
    <div class="experience-card" v-for="(exp, idx) in experiences" :key="idx">
      <div class="experience-header">
        <div class="experience-icon">
          <i :class="exp.icon"></i>
        </div>
        <div class="experience-meta">
          <h3>{{ exp.title }}</h3>
          <span v-if="exp.years" class="experience-years">{{ exp.years }}</span>
        </div>
      </div>
      <p class="experience-description">
        {{ exp.description }}
      </p>
      <div class="experience-skills">
        <div v-for="(skill, sidx) in exp.skills" :key="sidx" class="skill-item">
          <i :class="skill.icon"></i>
          <span>{{ skill.text }}</span>
        </div>
      </div>
      <div class="experience-tech">
        <span v-for="(tech, tidx) in exp.techs" :key="tidx" class="tech-tag">{{ tech }}</span>
      </div>
      
      <!-- Botón collapsible al final de la tarjeta -->
      <div class="more-info-container">
        <transition name="fade" mode="out-in">
          <button v-if="!infoOpen[idx]" key="more-btn" class="more-info-toggle" @click="toggleInfo(idx)">
            <span>Más info</span>
            <i class="fas fa-chevron-down"></i>
          </button>
          
          <div v-else key="extra-info" class="experience-extra">
            <p>{{ exp.extra }}</p>
            <button class="less-info-btn" @click="toggleInfo(idx)">
              <span>Menos info</span>
              <i class="fas fa-chevron-up"></i>
            </button>
          </div>
        </transition>
      </div>
    </div>
  <!-- cierre correcto del template -->
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'ExperienceGrid',
  data() {
    return {
      infoOpen: reactive([false, false, false, false, false, false]),
      experiences: [
        {
          icon: 'fas fa-chalkboard-teacher',
          title: 'Educación y Capacitación',
          years: '+10 años',
          description: 'Profesor de informática en educación técnica. Formación de nuevos profesionales en programación, bases de datos, redes y seguridad informática.',
          extra: 'Trabaje en varias escuelas técnicas, siendo la 35 en la que mas tareas desempeñé, algunas de ellas son: Administrador de red, referente informático, coordinador de área, profesor de las siguientes materias: taller, prácticas profesionalizantes, administración de sistemas y redes.',
          skills: [
            { icon: 'fas fa-users', text: 'Gestión de Aula' },
            { icon: 'fas fa-laptop-code', text: 'Programación' },
            { icon: 'fas fa-network-wired', text: 'Redes' },
            { icon: 'fas fa-shield-alt', text: 'Seguridad IT' }
          ],
          techs: ['Metodologías', 'Didáctica', 'Evaluación', 'Tutoría']
        },
        {
          icon: 'fas fa-code',
          title: 'Desarrollo de Software Full-Stack',
          years: '+5 años',
          description: 'Experiencia integral en desarrollo web y aplicaciones empresariales. Especializado en arquitecturas modernas, APIs RESTful, bases de datos e interoperabilidad de sistemas gubernamentales.',
          extra: 'Trabaje en proyectos personales, de forma freelance y en VUCE (Ventanilla Única de Comercio Exterior) desarrollando soluciones para la interoperabilidad entre sistemas gubernamentales, sistema de gestión portuaria (Nereo), utilizando tecnologías modernas, implemetando soluciones alternativas a problemas complejos y mejores prácticas de desarrollo. Algunos de los hitos destacados son: implementación de interoperabilidad entre distintos subsistemas de SENASA y el portal VUCE, implementación de sistema nereo en varios puertos a lo largo del pais permitiendo digitalizar y agilizar procesos que antes eran manuales y en papel.',
          skills: [
            { icon: 'fab fa-vuejs', text: 'Vue.js / React' },
            { icon: 'fab fa-laravel', text: 'Laravel / Node.js' },
            { icon: 'fas fa-database', text: 'MySQL' },
            { icon: 'fab fa-git-alt', text: 'Git / CI/CD' }
          ],
          techs: ['JavaScript', 'PHP', 'Python', 'Docker', 'Azure']
        },
        {
          icon: 'fas fa-chart-line',
          title: 'Análisis de Datos y sistemas financieros',
          years: null,
          description: 'Experiencia en análisis, visualización y gestión de datos. Desarrollo de dashboards de analíticas interactivas. ',
          extra: 'Desarrollo de dashboards con Looker Studio, Google Analytics y Power BI. Experiencia en análisis, visualización y gestión de datos enfocados en finanzas e inversiones. Automatización mediante scripts para seguimiento financiero. Procesos ETL, modelado de datos y clustering para identificar patrones y optimizar decisiones.',
          skills: [
            { icon: 'fas fa-chart-bar', text: 'Integración de datos' },
            { icon: 'fas fa-robot', text: 'ETL' },
            { icon: 'fas fa-calculator', text: 'Visualización y Reporting' },
            { icon: 'fas fa-coins', text: 'Análisis financiero' }
          ],
          techs: ['Python', 'Looker Studio', 'Google Analytics', 'Excel', 'JavaScript']
        },
        {
          icon: 'fas fa-server',
          title: 'DevOps y Infraestructura',
          years: null,
          description: 'Administración de servidores, automatización de despliegues y gestión de infraestructura selfhosted. Implementación de pipelines CI/CD y monitoreo de aplicaciones en producción.',
          extra: 'Administración de servidores Active Directory y migraciones a VMware. Automatización de despliegues con Jenkins y Cloudflare. Implementación de infraestructura selfhosted (Nextcloud). Configuración desde cero de servidores Debian con iptables y Squid para filtrado web. Containerización de aplicaciones y microservicios con Docker. Certificación AZ-900 para tecnologías cloud de Azure.',
          skills: [
            { icon: 'fab fa-docker', text: 'Containerización' },
            { icon: 'fas fa-cloud', text: 'Sysadmin' },
            { icon: 'fas fa-cogs', text: 'Automatización' },
            { icon: 'fas fa-chart-pie', text: 'Monitoreo' }
          ],
          techs: ['Docker', 'Azure', 'Linux', 'Nginx']
        },
        {
          icon: 'fas fa-shield-alt',
          title: 'Seguridad Informática',
          years: null,
          description: 'Especialización en seguridad de la información. Implementación de protocolos de seguridad, auditorías de código, pentesting y gestión de vulnerabilidades.',
          extra: 'Diplomatura en Seguridad Informática UTN con enfoque en seguridad ofensiva y defensiva mediante pruebas en entornos reales. Pentesting profesional en VUCE y proyectos freelance con análisis y explotación de vulnerabilidades web usando Burp Suite y OWASP ZAP. Gestión integral de contraseñas, clasificación de activos y creación de políticas de seguridad a medida. Planificación de respuesta ante incidentes basada en ISO 27001. Reporting técnico y asesoramiento en seguridad para organizaciones.',
          skills: [
            { icon: 'fas fa-lock', text: 'Seguridad Apps' },
            { icon: 'fas fa-bug', text: 'Pentesting Web' },
            { icon: 'fas fa-key', text: 'Gestión Contraseñas' },
            { icon: 'fas fa-shield-alt', text: 'Políticas ISO 27001' },
            { icon: 'fas fa-file-alt', text: 'Reporting Técnico' },
            { icon: 'fas fa-exclamation-triangle', text: 'Respuesta Incidentes' }
          ],
          techs: ['OWASP', 'Burp Suite', 'OWASP ZAP', 'ISO 27001', 'Firewalls', 'Backup']
        },
        {
          icon: 'fas fa-tasks',
          title: 'Gestión de Proyectos',
          years: null,
          description: 'Liderazgo de equipos de desarrollo y gestión de proyectos tecnológicos. Experiencia en metodologías ágiles, planificación de recursos y coordinación con stakeholders.',
          extra: 'Liderazgo de proyectos tecnológicos extracurriculares en el ámbito educativo, gestionando equipos multidisciplinarios de estudiantes. Experiencia freelance como líder técnico en equipos de desarrollo del sector privado. Implementación de metodologías ágiles con coordinación activa de stakeholders. Mi combinación de experiencia técnica y docente me proporciona un enfoque sólido para roles de liderazgo.',
          skills: [
            { icon: 'fas fa-users-cog', text: 'Liderazgo' },
            { icon: 'fas fa-calendar-alt', text: 'Planificación' },
            { icon: 'fas fa-handshake', text: 'Stakeholders' },
            { icon: 'fas fa-chart-gantt', text: 'Metodologías' }
          ],
          techs: ['Scrum', 'Kanban', 'Jira', 'Trello', 'Slack']
        }
      ]
    }
  },
  methods: {
    toggleInfo(idx) {
      console.log('Toggling info for index:', idx);
      console.log('Current state:', this.infoOpen[idx]);
      this.infoOpen[idx] = !this.infoOpen[idx];
      console.log('New state:', this.infoOpen[idx]);
    }
  }
}
</script>

<style scoped>
/* More info container and button */
.more-info-container {
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: var(--spacing-md);
}

.more-info-toggle {
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border-light);
  color: var(--color-text-secondary);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: 25px;
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  white-space: nowrap;
  font-weight: var(--font-weight-medium);
}

.more-info-toggle:hover {
  background: var(--color-accent-primary);
  color: var(--color-bg-primary);
  border-color: var(--color-accent-primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.more-info-toggle i {
  font-size: 0.9em;
  transition: transform 0.3s ease;
}

.experience-extra {
  background: var(--color-bg-tertiary);
  color: var(--color-text-secondary);
  border-radius: 15px;
  padding: var(--spacing-lg);
  font-size: var(--font-size-sm);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.experience-extra p {
  margin: 0 0 var(--spacing-md) 0;
  line-height: 1.5;
}

.less-info-btn {
  background: var(--color-accent-primary);
  border: 1px solid var(--color-accent-primary);
  color: var(--color-bg-primary);
  padding: var(--spacing-xs) var(--spacing-lg);
  border-radius: 20px;
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-weight: var(--font-weight-medium);
}

.less-info-btn:hover {
  background: var(--color-accent-secondary);
  border-color: var(--color-accent-secondary);
  transform: translateY(-1px);
}

/* Fade transition for extra info */
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.experience-card {
  background: linear-gradient(135deg, rgba(22, 22, 22, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-2xl);
  transition: all var(--transition-normal);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.experience-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.3);
  background: linear-gradient(135deg, rgba(22, 22, 22, 0.98) 0%, rgba(26, 26, 26, 0.98) 100%);
}

.experience-header {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.experience-icon {
  background: var(--gradient-primary);
  color: var(--color-text-primary);
  width: 50px;
  height: 50px;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-xl);
  flex-shrink: 0;
  box-shadow: var(--shadow);
}

.experience-meta h3 {
  margin: 0 0 var(--spacing-sm) 0;
  color: var(--color-text-primary);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  line-height: 1.3;
}

.experience-years {
  background: var(--color-accent-primary);
  color: var(--color-bg-primary);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: 15px;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.experience-description {
  color: var(--color-text-secondary);
  line-height: var(--line-height);
  margin-bottom: var(--spacing-xl);
  font-size: var(--font-size-base);
}

.experience-skills {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.skill-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.skill-item i {
  color: var(--color-accent-primary);
  width: 16px;
  text-align: center;
}

.experience-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.tech-tag {
  background: var(--color-bg-tertiary);
  color: var(--color-text-secondary);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: 20px;
  font-size: var(--font-size-xs);
  border: 1px solid var(--color-border-light);
  transition: all var(--transition-normal);
}

.tech-tag:hover {
  background: var(--color-accent-primary);
  color: var(--color-bg-primary);
  border-color: var(--color-accent-primary);
  transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .experience-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
  
  .experience-card {
    padding: var(--spacing-xl);
  }
  
  .experience-skills {
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
  }
  
  .experience-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--spacing-md);
  }
  
  .experience-meta h3 {
    font-size: var(--font-size-base);
  }
}

@media (max-width: 480px) {
  .experience-card {
    padding: var(--spacing-lg);
  }
  
  .experience-icon {
    width: 40px;
    height: 40px;
    font-size: var(--font-size-lg);
  }
  
  .tech-tag {
    font-size: 0.7rem;
    padding: var(--spacing-xs) var(--spacing-sm);
  }
}
</style>
