export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/index.vue')
  },
  {
    path: '/chatbot',
    name: 'Chatbot',
    component: () => import('./pages/chatbot.vue')
  },
  {
    path: '/projectsdevs',
    name: 'ProjectsDevs',
    component: () => import('./pages/projectsdevs.vue')
  },
  // Rutas de análisis de datos
  {
    path: '/dataanalisys',
    name: 'DataAnalisys',
    component: () => import('./pages/dataanalisys/index.vue')
  },
  {
    path: '/dataanalisys/filobono',
    name: 'Filobono',
    component: () => import('./pages/dataanalisys/filobono.vue')
  }
]
