<template>
  <section id="contacto" class="contact-section section">
    <div class="container">
      <div class="card text-center">
        <h2>Contacto</h2>
        <p class="contact-subtitle">¿Tienes un proyecto en mente? Conversemos sobre cómo puedo ayudarte</p>
        <div class="contact-actions">
          <a href="mailto:luis.m.rodriguez@outlook.com" class="btn btn-primary">
            <i class="fas fa-envelope"></i>
            Enviar Email
          </a>
          <router-link to="/chatbot" class="btn btn-secondary">
            <i class="fas fa-robot"></i>
            Asistente Virtual
          </router-link>
          <a href="https://www.linkedin.com/in/luis-rodriguez3518/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin-in"></i>
            LinkedIn
          </a>
          <a href="https://github.com/Luis3518" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i>
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    showProjectsLink: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.contact-section {
  background: var(--color-bg-secondary, #f8f9fa);
}

.contact-subtitle {
  color: var(--color-text-secondary);
  font-size: 1.1rem;
  margin-bottom: var(--spacing-xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-actions {
  display: flex;
  gap: var(--spacing-lg);
  justify-content: center;
  flex-wrap: wrap;
  margin-top: var(--spacing-xl);
}

.secondary-actions {
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--color-border-light);
}

.project-link {
  color: var(--color-accent-primary);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: color 0.3s ease;
}

.project-link:hover {
  color: var(--color-accent-secondary);
}

.project-link i {
  margin-left: var(--spacing-sm);
  transition: transform 0.3s ease;
}

.project-link:hover i {
  transform: translateX(3px);
}

.text-center {
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .contact-actions .btn {
    width: 100%;
    max-width: 250px;
  }
}
</style>
