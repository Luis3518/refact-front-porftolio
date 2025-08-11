<template>
  <div id="app">
    <nav class="navbar">
      <div class="container">
        <div class="nav-container">
          <router-link to="/" class="nav-logo">LMR</router-link>
          
          <ul class="nav-menu" :class="{ active: isMenuOpen }">
            <li><router-link to="/" class="nav-link" @click="closeMenu">Inicio</router-link></li>
            <li><router-link to="/about" class="nav-link" @click="closeMenu">Sobre mí</router-link></li>
            <li><router-link to="/projects" class="nav-link" @click="closeMenu">Proyectos</router-link></li>
            <li><router-link to="/contact" class="nav-link" @click="closeMenu">Contacto</router-link></li>
          </ul>
          
          <button class="nav-toggle" @click="toggleMenu" aria-label="Toggle menu">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
    
    <main class="main-content">
      <router-view />
    </main>
    
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ currentYear }} Luis Miguel Rodriguez. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'

export default {
  name: 'App',
  setup() {
    const isMenuOpen = ref(false)
    const currentYear = computed(() => new Date().getFullYear())

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    const closeMenu = () => {
      isMenuOpen.value = false
    }

    const handleResize = () => {
      if (window.innerWidth > 768) {
        isMenuOpen.value = false
      }
    }

    const handleScroll = () => {
      // Smooth scroll para navegación
      const links = document.querySelectorAll('.nav-link[href^="#"]')
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault()
          const targetId = link.getAttribute('href').substring(1)
          const targetSection = document.getElementById(targetId)
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' })
          }
        })
      })
    }

    onMounted(() => {
      // DEBUG: Validación de variables de entorno
      console.log('=== DEBUG: Environment Variables ===')
      console.log('VITE_ANALYTICS_API_URL:', import.meta.env.VITE_ANALYTICS_API_URL)
      console.log('Mode:', import.meta.env.MODE)
      console.log('All env vars:', import.meta.env)
      
      if (import.meta.env.VITE_ANALYTICS_API_URL) {
        console.log('✅ Analytics URL loaded correctly')
      } else {
        console.warn('⚠️ Analytics URL not found, using default')
      }
      console.log('=====================================')

      window.addEventListener('resize', handleResize)
      handleScroll()
      
      // Analytics tracking para enlaces importantes
      const trackLink = (linkName) => {
        // Aquí se podría integrar Google Analytics
        console.log(`Tracking: ${linkName} clicked`)
      }

      // Tracking para CV y LinkedIn
      document.addEventListener('click', (e) => {
        if (e.target.closest('[data-track]')) {
          const trackName = e.target.closest('[data-track]').dataset.track
          trackLink(trackName)
        }
      })
    })

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
    })

    return {
      isMenuOpen,
      currentYear,
      toggleMenu,
      closeMenu
    }
  }
}
</script>

<style scoped>
.main-content {
  min-height: calc(100vh - var(--navbar-height) - 80px);
}

@media (max-width: 768px) {
  .nav-menu.active + .nav-toggle i::before {
    content: "\f00d"; /* fa-times */
  }
}
</style>
