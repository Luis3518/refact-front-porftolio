<template>
  <div class="contact">
    <!-- Hero Section -->
    <section class="hero hero-small">
      <div class="container">
        <h1>Contacta<span class="highlight">me</span></h1>
        <p class="subtitle">Hablemos sobre tu próximo proyecto</p>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="section">
      <div class="container">
        <div class="contact-content">
          <!-- Contact Form -->
          <div class="contact-form-wrapper">
            <h2>Envíame un mensaje</h2>
            <p class="form-description">
              Completa el formulario y te responderé lo antes posible. 
              También puedes contactarme directamente por email o redes sociales.
            </p>
            
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label for="name">Nombre *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required 
                  placeholder="Tu nombre completo"
                >
              </div>
              
              <div class="form-group">
                <label for="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required 
                  placeholder="tu@email.com"
                >
              </div>
              
              <div class="form-group">
                <label for="company">Empresa</label>
                <input 
                  type="text" 
                  id="company" 
                  v-model="form.company" 
                  placeholder="Nombre de tu empresa (opcional)"
                >
              </div>
              
              <div class="form-group">
                <label for="project">Tipo de Proyecto</label>
                <select id="project" v-model="form.projectType">
                  <option value="">Selecciona una opción</option>
                  <option value="web-development">Desarrollo Web</option>
                  <option value="financial-systems">Sistemas Financieros</option>
                  <option value="mobile-app">Aplicación Móvil</option>
                  <option value="automation">Automatización</option>
                  <option value="crypto">Proyecto Crypto/Blockchain</option>
                  <option value="consulting">Consultoría Técnica</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="budget">Presupuesto Estimado</label>
                <select id="budget" v-model="form.budget">
                  <option value="">Selecciona un rango</option>
                  <option value="under-5k">Menos de $5,000</option>
                  <option value="5k-15k">$5,000 - $15,000</option>
                  <option value="15k-50k">$15,000 - $50,000</option>
                  <option value="50k-plus">Más de $50,000</option>
                  <option value="discuss">A discutir</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Mensaje *</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required 
                  rows="6"
                  placeholder="Cuéntame sobre tu proyecto, objetivos, timeline y cualquier detalle relevante..."
                ></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary btn-lg" :disabled="isSubmitting">
                <i class="fas fa-paper-plane" v-if="!isSubmitting"></i>
                <i class="fas fa-spinner fa-spin" v-if="isSubmitting"></i>
                {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="contact-info">
            <div class="contact-card">
              <h3>Información de Contacto</h3>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:luismiguel@ejemplo.com" data-track="email-click">
                    luismiguel@ejemplo.com
                  </a>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="contact-details">
                  <h4>Teléfono</h4>
                  <a href="tel:+1234567890" data-track="phone-click">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-details">
                  <h4>Ubicación</h4>
                  <p>Disponible para trabajo remoto<br>Base: América Latina</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="contact-details">
                  <h4>Disponibilidad</h4>
                  <p>Lun - Vie: 9:00 AM - 6:00 PM<br>Respuesta en 24 horas</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="social-card">
              <h3>Sígueme en</h3>
              <div class="social-links">
                <a href="https://linkedin.com/in/luismiguelrodriguez" 
                   class="social-link linkedin" 
                   target="_blank" 
                   title="LinkedIn"
                   data-track="linkedin-click">
                  <i class="fab fa-linkedin-in"></i>
                  <span>LinkedIn</span>
                </a>
                
                <a href="https://github.com/luismiguelrodriguez" 
                   class="social-link github" 
                   target="_blank" 
                   title="GitHub"
                   data-track="github-click">
                  <i class="fab fa-github"></i>
                  <span>GitHub</span>
                </a>
                
                <a href="https://twitter.com/luismigueldev" 
                   class="social-link twitter" 
                   target="_blank" 
                   title="Twitter"
                   data-track="twitter-click">
                  <i class="fab fa-twitter"></i>
                  <span>Twitter</span>
                </a>
                
                <a href="https://t.me/luismigueldev" 
                   class="social-link telegram" 
                   target="_blank" 
                   title="Telegram"
                   data-track="telegram-click">
                  <i class="fab fa-telegram"></i>
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            <!-- Response Time -->
            <div class="response-card">
              <div class="response-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div>
                <h4>Tiempo de Respuesta</h4>
                <p>Generalmente respondo dentro de las primeras 24 horas. 
                   Para proyectos urgentes, contáctame por teléfono o Telegram.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section">
      <div class="container">
        <h2 class="text-center" style="margin-bottom: 3rem;">Preguntas Frecuentes</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h3>¿Trabajas de forma remota?</h3>
            <p>
              Sí, trabajo principalmente de forma remota con clientes de toda América Latina. 
              Utilizo herramientas de comunicación modernas para mantener una colaboración efectiva.
            </p>
          </div>
          
          <div class="faq-item">
            <h3>¿Cuál es tu proceso de trabajo?</h3>
            <p>
              Comenzamos con una consulta inicial para entender tus necesidades, seguido de 
              propuesta detallada, desarrollo iterativo con feedback continuo y soporte post-lanzamiento.
            </p>
          </div>
          
          <div class="faq-item">
            <h3>¿Ofreces mantenimiento post-proyecto?</h3>
            <p>
              Sí, ofrezco servicios de mantenimiento, actualizaciones y soporte técnico 
              continuo para asegurar que tu proyecto siga funcionando óptimamente.
            </p>
          </div>
          
          <div class="faq-item">
            <h3>¿Trabajas con equipos existentes?</h3>
            <p>
              Absolutamente. Tengo experiencia integrándome con equipos de desarrollo existentes, 
              siguiendo sus metodologías y estándares de código.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import { useAnalytics } from '../composables/useAnalytics.js'

export default {
  name: 'ContactPage',
  setup() {
    // Analytics tracking automático
    const { trackFormSubmit } = useAnalytics()

    useHead({
      title: 'Contacto - Luis Miguel Rodriguez',
      meta: [
        {
          name: 'description',
          content: 'Contacta a Luis Miguel Rodriguez para tu próximo proyecto de desarrollo de software. Especialista en sistemas financieros, DevOps y soluciones innovadoras.'
        },
        {
          property: 'og:title',
          content: 'Contacto - Luis Miguel Rodriguez'
        },
        {
          property: 'og:description',
          content: 'Hablemos sobre tu proyecto. Desarrollador especializado en sistemas financieros y tecnologías modernas.'
        }
      ]
    })

    const form = ref({
      name: '',
      email: '',
      company: '',
      projectType: '',
      budget: '',
      message: ''
    })

    const isSubmitting = ref(false)

    const submitForm = async () => {
      isSubmitting.value = true
      
      try {
        // Track form submission
        trackFormSubmit('contact_form')
        
        // Here you would implement actual form submission
        // For now, we'll simulate it
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        alert('¡Mensaje enviado correctamente! Te responderé pronto.')
        
        // Reset form
        form.value = {
          name: '',
          email: '',
          company: '',
          projectType: '',
          budget: '',
          message: ''
        }
        
      } catch (error) {
        alert('Error al enviar el mensaje. Por favor, intenta nuevamente.')
      } finally {
        isSubmitting.value = false
      }
    }

    return {
      form,
      isSubmitting,
      submitForm
    }
  }
}
</script>

<style scoped>
.contact-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-xxxl);
  margin-bottom: var(--spacing-xxxl);
}

.contact-form-wrapper h2 {
  color: var(--color-heading);
  margin-bottom: var(--spacing-lg);
}

.form-description {
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xl);
  line-height: 1.6;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.form-group label {
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  background: var(--color-input-bg);
  color: var(--color-text);
  font-family: var(--font-family);
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.contact-card,
.social-card,
.response-card {
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
}

.contact-card h3,
.social-card h3 {
  color: var(--color-heading);
  margin-bottom: var(--spacing-xl);
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--color-primary);
  color: white;
  border-radius: var(--border-radius);
  flex-shrink: 0;
}

.contact-details h4 {
  color: var(--color-heading);
  margin: 0 0 var(--spacing-xs) 0;
  font-size: 0.9rem;
}

.contact-details a {
  color: var(--color-primary);
  text-decoration: none;
}

.contact-details a:hover {
  text-decoration: underline;
}

.contact-details p {
  color: var(--color-text-light);
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.social-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-text);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.social-link i {
  font-size: 1.2rem;
  width: 20px;
}

.response-card {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg);
}

.response-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--color-info);
  color: white;
  border-radius: var(--border-radius);
  flex-shrink: 0;
}

.response-card h4 {
  color: var(--color-heading);
  margin: 0 0 var(--spacing-sm) 0;
}

.response-card p {
  color: var(--color-text-light);
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

.faq-item {
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
}

.faq-item h3 {
  color: var(--color-heading);
  margin-bottom: var(--spacing-lg);
}

.faq-item p {
  color: var(--color-text-light);
  line-height: 1.6;
  margin: 0;
}

.text-center {
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
  
  .social-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .contact-item {
    flex-direction: column;
    text-align: center;
  }
  
  .response-card {
    flex-direction: column;
    text-align: center;
  }
  
  .social-links {
    grid-template-columns: 1fr;
  }
}
</style>
