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
    path: '/projects',
    name: 'Projects',
    component: () => import('./pages/projects/index.vue')
  },
  {
    path: '/projects/mecacloud',
    name: 'MecaCloud',
    component: () => import('./pages/projects/mecacloud.vue')
  },
  {
    path: '/projects/actospublicos',
    name: 'ActosPublicos',
    component: () => import('./pages/projects/actospublicos.vue')
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
