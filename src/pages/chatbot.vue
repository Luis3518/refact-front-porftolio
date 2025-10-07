<template>
  <div class="chatbot-page">
    <!-- Header Section -->
    <section class="chatbot-header section">
      <div class="container">
        <div class="card text-center">
          <h1>
            <i class="fas fa-robot robot-icon" @click="robotClick" ref="robotIcon"></i>
            Bot
          </h1>
          <p class="subtitle">Hola! Soy un bot creado por Luis Rodriguez. Pregúntame lo que necesites.</p>
        </div>
      </div>
    </section>

    <!-- Health Status -->
    <div v-if="isHealthy === false" class="health-error-container">
      <div class="container">
        <div class="health-error-card">
          <div class="error-icon">
            <i class="fas fa-tools"></i>
          </div>
          <div class="error-content">
            <h3>Funcionalidad Temporalmente No Disponible</h3>
            <p>Por el momento, el chatbot no está disponible.</p>
            <p class="error-message">Estamos trabajando para restablecer el servicio lo antes posible.</p>
            <p class="contact-alternative">Mientras tanto, puedes contactarme directamente a través de mis redes sociales o correo electrónico.</p>
            <div class="button-group">
              <button 
                @click="checkHealth" 
                class="retry-button"
                :class="{ 'checking': isCheckingHealth }"
                :disabled="isCheckingHealth"
              >
                <i class="fas fa-sync-alt" :class="{ 'fa-spin': isCheckingHealth }"></i>
                {{ isCheckingHealth ? 'Verificando...' : 'Verificar Disponibilidad' }}
              </button>
              <button 
                @click="goToContact" 
                class="contact-button"
              >
                <i class="fas fa-envelope"></i>
                Ir a Contacto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading Health Check -->
    <div v-else-if="isHealthy === null" class="health-loading-container">
      <div class="container">
        <div class="health-loading-card">
          <div class="loading-icon">
            <i class="fas fa-heartbeat fa-pulse"></i>
          </div>
          <div class="loading-content">
            <h3>Verificando Servicio...</h3>
            <p>Comprobando si el chatbot está disponible...</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Chat Container -->
    <section v-else class="chat-section section">
      <div class="container">
        <div class="chat-container">
          
          <!-- Messages Area -->
          <div class="messages-area" ref="messagesArea">
            <div v-if="messages.length === 0" class="welcome-message">
              <div class="bot-avatar">
                <i class="fas fa-robot"></i>
              </div>
              <div class="message-content">
                <p>¡Hola! 👋 Soy un chatbot inteligente creado por Luis Rodriguez. Utilizo el modelo gemini-2.0-flash. El endpoint esta alojado como worker en Cloudflare. Puedes preguntarme sobre:</p>
                <ul>
                  <li>Información personal y profesional de Luis Rodriguez</li>
                  <li>Sus proyectos y experiencia laboral</li>
                  <li>Habilidades técnicas y competencias</li>
                  <li>Información de contacto</li>
                  <li>Formas de contactarte directamente con Luis</li>
                  <li>Cualquier duda sobre su trayectoria profesional</li>
                </ul>
                <p>¡Pregúntame lo que necesites saber! 🚀</p>
              </div>
            </div>
            
            <div 
              v-for="message in messages" 
              :key="message.id" 
              class="message" 
              :class="{ 'user-message': message.isUser, 'bot-message': !message.isUser }"
            >
              <div class="message-avatar">
                <i :class="message.isUser ? 'fas fa-user' : 'fas fa-robot'"></i>
              </div>
              <div class="message-content">
                <div v-html="renderMarkdown(message.text)"></div>
                <span class="message-time">{{ formatTime(message.timestamp) }}</span>
              </div>
            </div>
            
            <!-- Typing Indicator -->
            <div v-if="isTyping" class="message bot-message typing">
              <div class="message-avatar">
                <i class="fas fa-robot"></i>
              </div>
              <div class="message-content">
                <div class="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Input Area -->
          <div class="input-area">
            <form @submit.prevent="sendMessage" class="chat-form">
              <div class="input-container">
                <input
                  v-model="currentMessage"
                  type="text"
                  :placeholder="isConnecting ? 'Conectando con IA...' : 'Escribe tu mensaje...'"
                  class="chat-input"
                  :disabled="isTyping || isConnecting"
                  ref="chatInput"
                />
                <button 
                  type="submit" 
                  class="send-button"
                  :disabled="!currentMessage.trim() || isTyping || isConnecting"
                  :class="{ 'connecting': isConnecting }"
                >
                  <i v-if="!isConnecting" class="fas fa-paper-plane"></i>
                  <i v-else class="fas fa-spinner fa-spin"></i>
                </button>
              </div>
            </form>
            
            <!-- Quick Actions -->
            <div class="quick-actions" v-if="messages.length === 0">
              <button 
                v-for="suggestion in quickSuggestions" 
                :key="suggestion.id"
                @click="sendQuickMessage(suggestion.text)"
                class="quick-action-btn"
              >
                {{ suggestion.text }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

export default {
  name: 'ChatbotPage',
  setup() {
    const router = useRouter()
    const messages = ref([])
    const currentMessage = ref('')
    const isTyping = ref(false)
    const isConnecting = ref(false)
    const isHealthy = ref(null) // null = checking, true = healthy, false = unhealthy
    const healthError = ref('')
    const isCheckingHealth = ref(false)
    const messagesArea = ref(null)
    const chatInput = ref(null)
    const robotIcon = ref(null)
    let audioContext = null

    const initAudioContext = () => {
      if (!audioContext) {
        try {
          audioContext = new (window.AudioContext || window.webkitAudioContext)()
        } catch (e) {
          console.error('Web Audio API is not supported in this browser', e)
        }
      }
      if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume()
      }
    }
    
    const quickSuggestions = ref([
      { id: 1, text: "¿Quién es Luis Rodriguez?" },
      { id: 2, text: "¿Cuál es su experiencia?" },
      { id: 3, text: "¿Qué proyectos ha realizado?" },
      { id: 4, text: "¿Cómo puedo contactarlo?" }
    ])

    const renderMarkdown = (text) => {
      if (!text) return ''
      const rawHtml = marked(text, { breaks: true, gfm: true })
      return DOMPurify.sanitize(rawHtml)
    }

    const formatTime = (timestamp) => {
      return new Date(timestamp).toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
      })
    }

    const scrollToBottom = () => {
      nextTick(() => {
        if (messagesArea.value) {
          messagesArea.value.scrollTop = messagesArea.value.scrollHeight
        }
      })
    }

    const checkHealth = async () => {
      try {
        isCheckingHealth.value = true
        
        const healthUrl = import.meta.env.VITE_CHATBOT_HEALTH_URL
        
        if (!healthUrl) {
          throw new Error('URL de health check no configurada')
        }

        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 segundos timeout

        const response = await fetch(healthUrl, {
          method: 'GET',
          signal: controller.signal
        })

        clearTimeout(timeoutId)

        if (!response.ok) {
          throw new Error(`Health check falló: HTTP ${response.status}`)
        }

        const data = await response.json()
        
        // Verificar que la respuesta indique que el servicio está saludable
        if (data.status === 'ok' || data.healthy === true || response.status === 200) {
          isHealthy.value = true
          healthError.value = ''
        } else {
          throw new Error('El servicio reporta estado no saludable')
        }
        
      } catch (error) {
        console.error('Error en health check:', error)
        isHealthy.value = false
        
        if (error.name === 'AbortError') {
          healthError.value = 'El servicio no responde (timeout)'
        } else {
          healthError.value = error.message || 'Error de conexión'
        }
      } finally {
        // Mantener el estado "checking" por al menos 1 segundo para mostrar la animación
        setTimeout(() => {
          isCheckingHealth.value = false
        }, 1000)
      }
    }

    const playNotificationSound = () => {
      if (!audioContext) {
        console.warn('AudioContext not initialized. Sound will not play.')
        return
      }

      try {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()
        
        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)
        
        // Configurar el sonido: una nota agradable
        oscillator.type = 'sine'
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime) // Frecuencia inicial
        oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1)
        
        // Configurar el volumen con fade out
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)
        
        // Reproducir el sonido
        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.2)
      } catch (error) {
        console.error('Error al reproducir sonido:', error)
      }
    }

    const addMessage = (text, isUser = false) => {
      const message = {
        id: Date.now() + Math.random(),
        text,
        isUser,
        timestamp: Date.now()
      }
      messages.value.push(message)
      scrollToBottom()
      
      // Reproducir sonido solo para mensajes del bot
      if (!isUser) {
        playNotificationSound()
      }
    }

    const simulateTyping = async () => {
      isTyping.value = true
      scrollToBottom()
      // Simulate typing delay
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))
      isTyping.value = false
    }

    const getBotResponse = async (userMessage) => {
      try {
        isConnecting.value = true
        const apiUrl = import.meta.env.VITE_CHATBOT_API_URL
        
        if (!apiUrl) {
          throw new Error('URL del chatbot no configurada')
        }

        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 30000) // 30 segundos timeout

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: userMessage
          }),
          signal: controller.signal
        })

        clearTimeout(timeoutId)

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`)
        }

        const data = await response.json()
        return data.response || 'Disculpa, en este momento no puedo procesar tu consulta. Por favor, intenta nuevamente.'
        
      } catch (error) {
        console.error('Error al obtener respuesta del chatbot:', error)
        
        if (error.name === 'AbortError') {
          return 'El servicio está tardando más de lo esperado. Por favor, intenta nuevamente en unos momentos.'
        }
        
        return 'Por el momento no puedo responder tu consulta. Te invito a contactarme directamente a través de mis redes sociales o correo electrónico que encontrarás en la sección de contacto.'
      } finally {
        isConnecting.value = false
      }
    }

    const sendMessage = async () => {
      if (!currentMessage.value.trim()) return

      // Initialize AudioContext on first user interaction
      initAudioContext()

      const userText = currentMessage.value.trim()
      currentMessage.value = ''
      
      // Add user message
      addMessage(userText, true)
      
      // Show typing indicator
      isTyping.value = true
      scrollToBottom()
      
      // Get bot response from AI
      const botResponse = await getBotResponse(userText)
      
      // Hide typing indicator
      isTyping.value = false
      
      // Add bot response
      addMessage(botResponse, false)
    }

    const sendQuickMessage = async (text) => {
      // Initialize AudioContext on first user interaction
      initAudioContext()
      currentMessage.value = text
      await sendMessage()
    }

    const robotClick = () => {
      if (robotIcon.value) {
        robotIcon.value.classList.add('clicked')
        setTimeout(() => {
          robotIcon.value.classList.remove('clicked')
        }, 600)
      }
    }

    const goToContact = async () => {
      // Navegar al home
      await router.push('/')
      
      // Esperar a que la navegación se complete y el DOM se actualice
      await nextTick()
      
      // Esperar un poco más para asegurar que el componente esté montado
      setTimeout(() => {
        const contactSection = document.getElementById('contacto')
        if (contactSection) {
          contactSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        } else {
          console.warn('No se encontró la sección de contacto')
        }
      }, 300)
    }

    onMounted(() => {
      checkHealth()
      if (chatInput.value) {
        chatInput.value.focus()
      }
    })

    return {
      messages,
      currentMessage,
      isTyping,
      isConnecting,
      isHealthy,
      healthError,
      isCheckingHealth,
      messagesArea,
      chatInput,
      robotIcon,
      quickSuggestions,
      formatTime,
      sendMessage,
      sendQuickMessage,
      checkHealth,
      renderMarkdown,
      robotClick,
      goToContact
    }
  }
}
</script>

<style scoped>
.chatbot-page {
  min-height: 100vh;
  background: var(--gradient-background);
  padding-top: var(--navbar-height);
}

.chatbot-header {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: var(--spacing-xl) 0;
}

.chatbot-header h1 {
  color: white;
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
}

.chatbot-header h1 i {
  animation: float 3s ease-in-out infinite, glow 2s ease-in-out infinite;
  display: inline-block;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.chatbot-header h1 i:hover {
  transform: scale(1.2) rotate(15deg);
  animation: float 3s ease-in-out infinite, glow 1s ease-in-out infinite;
}

.chatbot-header h1 i.clicked {
  animation: spin360 0.6s ease-in-out, glow 0.6s ease-in-out;
}

.chatbot-header .subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  margin: 0;
  text-align: center;
}

.chat-section {
  padding: 0;
}

.chat-container {
  max-width: 800px;
  margin: 0 auto;
  height: 70vh;
  background: linear-gradient(135deg, rgba(22, 22, 22, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.messages-area {
  flex: 1;
  padding: var(--spacing-lg);
  overflow-y: auto;
  background: transparent;
}

.welcome-message {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(34, 34, 34, 0.8) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  color: var(--color-text-primary);
}

.message {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  animation: fadeInUp 0.3s ease;
}

.user-message {
  flex-direction: row-reverse;
}

.user-message .message-content {
  background: linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 100%);
  color: white;
  border-radius: 18px 18px 5px 18px;
  box-shadow: 0 4px 16px rgba(0, 212, 255, 0.3);
}

.bot-message .message-content {
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(34, 34, 34, 0.9) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-text-primary);
  border-radius: 18px 18px 18px 5px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.message-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1rem;
  box-shadow: 0 4px 16px rgba(0, 212, 255, 0.3);
}

.user-message .message-avatar {
  background: linear-gradient(135deg, var(--color-accent-tertiary) 0%, var(--color-accent-primary) 100%);
  box-shadow: 0 4px 16px rgba(34, 197, 94, 0.3);
}

.bot-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.2rem;
  box-shadow: 0 4px 16px rgba(0, 212, 255, 0.3);
}

.message-content {
  max-width: 70%;
  padding: var(--spacing-md) var(--spacing-lg);
  position: relative;
}

.message-content > div {
  overflow-wrap: break-word;
  word-wrap: break-word;
}

.message-content p {
  margin: 0 0 var(--spacing-sm) 0;
  line-height: 1.5;
}

.message-content p:last-child {
  margin-bottom: 0;
}

.message-content ul {
  margin: var(--spacing-md) 0;
  margin-bottom: var(--spacing-md);
  padding-left: 2.5rem;
  list-style-position: outside;
}

.message-content ol {
  margin: var(--spacing-md) 0;
  margin-bottom: var(--spacing-md);
  padding-left: 2.5rem;
  list-style-position: outside;
}

.message-content li {
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
}

.message-content li:last-child {
  margin-bottom: 0;
}

.message-time {
  font-size: 0.75rem;
  opacity: 0.7;
  display: block;
  margin-top: var(--spacing-xs);
}

.typing-indicator {
  display: flex;
  gap: 4px;
  align-items: center;
  height: 20px;
}

.typing-indicator span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-text-secondary);
  animation: typing 1.4s infinite ease-in-out;
}

.typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
.typing-indicator span:nth-child(2) { animation-delay: -0.16s; }

.input-area {
  padding: var(--spacing-lg);
  background: linear-gradient(135deg, rgba(22, 22, 22, 0.9) 0%, rgba(26, 26, 26, 0.9) 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.chat-form {
  margin-bottom: var(--spacing-md);
}

.input-container {
  display: flex;
  gap: var(--spacing-sm);
  align-items: center;
}

.chat-input {
  flex: 1;
  padding: var(--spacing-md) var(--spacing-lg);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  font-size: 1rem;
  background: rgba(26, 26, 26, 0.8);
  color: var(--color-text-primary);
  outline: none;
  transition: all 0.3s ease;
}

.chat-input:focus {
  border-color: var(--color-accent-primary);
  box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.2);
}

.chat-input::placeholder {
  color: var(--color-text-muted);
}

.chat-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.send-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 100%);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  box-shadow: 0 4px 16px rgba(0, 212, 255, 0.3);
}

.send-button:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 212, 255, 0.4);
}

.send-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.send-button.connecting {
  background: linear-gradient(135deg, var(--color-accent-secondary) 0%, var(--color-accent-primary) 100%);
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 4px 16px rgba(0, 212, 255, 0.3);
  }
  50% {
    box-shadow: 0 4px 20px rgba(0, 212, 255, 0.6);
  }
}

/* Health Check Styles */
.health-error-container, .health-loading-container {
  padding: var(--spacing-xl) 0;
}

.health-error-card, .health-loading-card {
  max-width: 600px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(22, 22, 22, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: var(--spacing-xl);
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.health-error-card {
  border-color: rgba(239, 68, 68, 0.3);
}

.error-icon, .loading-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-lg);
  font-size: 2rem;
}

.error-icon {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%);
  border: 2px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
}

.loading-icon {
  background: linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 100%);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.error-content h3, .loading-content h3 {
  color: var(--color-text-primary);
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
}

.error-content p, .loading-content p {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-sm);
}

.error-message {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  margin: var(--spacing-md) 0;
  font-weight: 500;
}

.contact-alternative {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  margin: var(--spacing-md) 0;
  padding: var(--spacing-md);
  background: rgba(0, 212, 255, 0.05);
  border-left: 3px solid var(--color-accent-primary);
  border-radius: 4px;
}

.button-group {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
  margin-top: var(--spacing-md);
}

.retry-button, .contact-button {
  background: linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 100%);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.contact-button {
  background: linear-gradient(135deg, var(--color-accent-tertiary) 0%, #059669 100%);
}

.retry-button:hover:not(:disabled), .contact-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
}

.contact-button:hover {
  box-shadow: 0 8px 25px rgba(34, 197, 94, 0.4);
}

.retry-button:disabled {
  opacity: 0.8;
  cursor: not-allowed;
}

.retry-button.checking {
  background: linear-gradient(135deg, var(--color-accent-secondary) 0%, var(--color-accent-primary) 100%);
  animation: pulse 1.5s infinite;
}

.quick-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.quick-action-btn {
  padding: var(--spacing-sm) var(--spacing-md);
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(34, 34, 34, 0.8) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
}

.quick-action-btn:hover {
  background: linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 100%);
  color: white;
  border-color: var(--color-accent-primary);
  box-shadow: 0 4px 16px rgba(0, 212, 255, 0.3);
  transform: translateY(-2px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes glow {
  0%, 100% {
    filter: drop-shadow(0 0 5px rgba(0, 212, 255, 0.5));
  }
  50% {
    filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.8));
  }
}

@keyframes spin360 {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.3);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

@keyframes typing {
  0%, 80%, 100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .chatbot-header h1 {
    font-size: 2rem;
  }
  
  .chat-container {
    height: 80vh;
    border-radius: 15px;
    margin: var(--spacing-md);
  }
  
  .message-content {
    max-width: 85%;
  }
  
  .quick-actions {
    flex-direction: column;
  }
  
  .quick-action-btn {
    text-align: center;
  }
  
  .button-group {
    flex-direction: column;
  }
  
  .retry-button, .contact-button {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .chatbot-header {
    padding: var(--spacing-lg) 0;
  }
  
  .chatbot-header h1 {
    font-size: 1.8rem;
    flex-direction: column;
    gap: var(--spacing-sm);
  }
  
  .chat-container {
    height: 85vh;
    border-radius: 10px;
    margin: var(--spacing-sm);
  }
  
  .messages-area {
    padding: var(--spacing-md);
  }
  
  .input-area {
    padding: var(--spacing-md);
  }
}
</style>