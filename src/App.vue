<template>
  <div id="app">
    <nav class="navbar">
      <div class="container">
        <div class="nav-container">
          
          <ul class="nav-menu" :class="{ active: isMenuOpen }">
            <li><router-link to="/" class="nav-link" @click="handleNavClick('/')">Inicio</router-link></li>
            <li><a href="#sobre-mi" class="nav-link" @click.prevent="navigateToSection('sobre-mi')">Sobre mí</a></li>
            <li><a href="#experiencia" class="nav-link" @click.prevent="navigateToSection('experiencia')">Experiencia</a></li>
            <li><a href="#estudios" class="nav-link" @click.prevent="navigateToSection('estudios')">Académico</a></li>
            <li><a href="#contacto" class="nav-link" @click.prevent="navigateToSection('contacto')">Contacto</a></li>
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
        <div class="footer-content">
          <div class="footer-links">
            <router-link to="/" class="footer-link">Inicio</router-link>
            <router-link to="/chatbot" class="footer-link">
              <i class="fas fa-robot"></i>
              Asistente Virtual
            </router-link>
            <a href="#contacto" class="footer-link" @click.prevent="navigateToSection('contacto')">Contacto</a>
          </div>
          <p class="footer-copyright">&copy; {{ currentYear }} Luis Miguel Rodriguez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'App',
  setup() {
    const isMenuOpen = ref(false)
    const currentYear = computed(() => new Date().getFullYear())
    const router = useRouter()
    const route = useRoute()
    const isNavigatingToSection = ref(false) // Flag para evitar scroll automático

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    const closeMenu = () => {
      isMenuOpen.value = false
    }

    const handleNavClick = (to) => {
      // Si estamos navegando a la misma ruta, hacer scroll hacia arriba
      if (route.path === to) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
      closeMenu()
    }

    // Función para navegar a una sección con scroll
    const navigateToSection = async (sectionId) => {
      closeMenu()
      
      // Si no estamos en el home, navegar primero al home
      if (route.path !== '/') {
        // Activar flag para evitar scroll automático en el watch
        isNavigatingToSection.value = true
        
        await router.push('/')
        
        // Esperar a que la navegación se complete y el DOM se actualice
        await nextTick()
        
        // Esperar un poco más para asegurar que el componente esté montado
        setTimeout(() => {
          const targetSection = document.getElementById(sectionId)
          if (targetSection) {
            targetSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
          } else {
            console.warn(`No se encontró la sección: ${sectionId}`)
          }
          // Desactivar flag después de completar el scroll
          setTimeout(() => {
            isNavigatingToSection.value = false
          }, 500)
        }, 300)
      } else {
        // Si ya estamos en el home, solo hacer scroll
        const targetSection = document.getElementById(sectionId)
        if (targetSection) {
          targetSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        } else {
          console.warn(`No se encontró la sección: ${sectionId}`)
        }
      }
    }

    // Watch para detectar cambios de ruta y hacer scroll hacia arriba
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    const handleResize = () => {
      if (window.innerWidth > 768) {
        isMenuOpen.value = false
      }
    }

    const handleScroll = () => {
      // Smooth scroll para navegación con hash
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]')
        if (link) {
          e.preventDefault()
          const targetId = link.getAttribute('href').substring(1)
          const targetSection = document.getElementById(targetId)
          if (targetSection) {
            targetSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
            // Cerrar menú móvil si está abierto
            closeMenu()
          }
        }
      })
    }

    onMounted(() => {
      window.addEventListener('resize', handleResize)
      handleScroll()
    })

    // Watch para detectar cambios de ruta y hacer scroll hacia arriba
    watch(() => route.path, (newPath, oldPath) => {
      if (newPath !== oldPath) {
        // Solo hacer scroll al top si NO estamos navegando a una sección específica
        if (!isNavigatingToSection.value) {
          setTimeout(() => {
            scrollToTop()
          }, 100)
        }
      }
    })

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
    })

    return {
      isMenuOpen,
      currentYear,
      toggleMenu,
      closeMenu,
      handleNavClick,
      navigateToSection,
      scrollToTop
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
