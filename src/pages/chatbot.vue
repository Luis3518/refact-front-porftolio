<template>
  <div class="chatbot-page">
    <!-- Header Section -->
    <section class="chatbot-header section">
      <div class="container">
        <div class="card text-center">
          <h1>
            <i class="fas fa-robot"></i>
            Asistente Virtual
          </h1>
          <p class="subtitle">¡Hola! Soy tu asistente virtual. Pregúntame lo que necesites.</p>
        </div>
      </div>
    </section>

    <!-- Chat Container -->
    <section class="chat-section section">
      <div class="container">
        <div class="chat-container">
          
          <!-- Messages Area -->
          <div class="messages-area" ref="messagesArea">
            <div v-if="messages.length === 0" class="welcome-message">
              <div class="bot-avatar">
                <i class="fas fa-robot"></i>
              </div>
              <div class="message-content">
                <p>¡Bienvenido! Soy tu asistente virtual. Puedes preguntarme sobre:</p>
                <ul>
                  <li>Información sobre Luis Rodriguez</li>
                  <li>Sus proyectos y experiencia</li>
                  <li>Habilidades técnicas</li>
                  <li>Información de contacto</li>
                </ul>
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
                <p>{{ message.text }}</p>
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
                  placeholder="Escribe tu mensaje..."
                  class="chat-input"
                  :disabled="isTyping"
                  ref="chatInput"
                />
                <button 
                  type="submit" 
                  class="send-button"
                  :disabled="!currentMessage.trim() || isTyping"
                >
                  <i class="fas fa-paper-plane"></i>
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

export default {
  name: 'ChatbotPage',
  setup() {
    const messages = ref([])
    const currentMessage = ref('')
    const isTyping = ref(false)
    const messagesArea = ref(null)
    const chatInput = ref(null)
    
    const quickSuggestions = ref([
      { id: 1, text: "¿Quién es Luis Rodriguez?" },
      { id: 2, text: "¿Cuál es su experiencia?" },
      { id: 3, text: "¿Qué proyectos ha realizado?" },
      { id: 4, text: "¿Cómo puedo contactarlo?" }
    ])

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

    const addMessage = (text, isUser = false) => {
      const message = {
        id: Date.now() + Math.random(),
        text,
        isUser,
        timestamp: Date.now()
      }
      messages.value.push(message)
      scrollToBottom()
    }

    const simulateTyping = async () => {
      isTyping.value = true
      scrollToBottom()
      // Simulate typing delay
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))
      isTyping.value = false
    }

    const getBotResponse = (userMessage) => {
      // Por ahora siempre responde "hola" como solicitaste
      return "¡Hola! 👋 Gracias por tu mensaje. Esta funcionalidad está en desarrollo y pronto podrás conversar conmigo de manera más avanzada."
    }

    const sendMessage = async () => {
      if (!currentMessage.value.trim()) return

      const userText = currentMessage.value.trim()
      currentMessage.value = ''
      
      // Add user message
      addMessage(userText, true)
      
      // Simulate bot typing
      await simulateTyping()
      
      // Add bot response
      const botResponse = getBotResponse(userText)
      addMessage(botResponse, false)
    }

    const sendQuickMessage = async (text) => {
      currentMessage.value = text
      await sendMessage()
    }

    onMounted(() => {
      if (chatInput.value) {
        chatInput.value.focus()
      }
    })

    return {
      messages,
      currentMessage,
      isTyping,
      messagesArea,
      chatInput,
      quickSuggestions,
      formatTime,
      sendMessage,
      sendQuickMessage
    }
  }
}
</script>

<style scoped>
.chatbot-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

.chatbot-header .subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  margin: 0;
}

.chat-section {
  padding: 0;
}

.chat-container {
  max-width: 800px;
  margin: 0 auto;
  height: 70vh;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.messages-area {
  flex: 1;
  padding: var(--spacing-lg);
  overflow-y: auto;
  background: #f8f9fa;
}

.welcome-message {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: white;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
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
  background: var(--color-primary, #007bff);
  color: white;
  border-radius: 18px 18px 5px 18px;
}

.bot-message .message-content {
  background: white;
  color: var(--color-text);
  border-radius: 18px 18px 18px 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.message-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-primary, #007bff);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1rem;
}

.user-message .message-avatar {
  background: var(--color-secondary, #6c757d);
}

.bot-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--color-primary, #007bff);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.2rem;
}

.message-content {
  max-width: 70%;
  padding: var(--spacing-md) var(--spacing-lg);
  position: relative;
}

.message-content p {
  margin: 0;
  line-height: 1.5;
}

.message-content ul {
  margin: var(--spacing-sm) 0 0 0;
  padding-left: var(--spacing-lg);
}

.message-content li {
  margin-bottom: var(--spacing-xs);
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
  background: white;
  border-top: 1px solid #e9ecef;
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
  border: 2px solid #e9ecef;
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
}

.chat-input:focus {
  border-color: var(--color-primary, #007bff);
}

.chat-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.send-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--color-primary, #007bff);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;
}

.send-button:hover:not(:disabled) {
  background: var(--color-primary-dark, #0056b3);
  transform: scale(1.05);
}

.send-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.quick-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.quick-action-btn {
  padding: var(--spacing-sm) var(--spacing-md);
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
}

.quick-action-btn:hover {
  background: var(--color-primary, #007bff);
  color: white;
  border-color: var(--color-primary, #007bff);
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