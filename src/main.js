import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import { createHead } from '@vueuse/head'
import './style.css'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
    const head = createHead()
    app.use(head)
    
    // Global error handler for API calls
    if (isClient) {
      window.addEventListener('unhandledrejection', (event) => {
        console.error('Error en llamada al backend:', event.reason)
      })
    }
  }
)
