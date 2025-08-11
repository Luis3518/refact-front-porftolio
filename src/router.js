export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/index.vue')
  },
  {
    path: '/finanzas',
    name: 'Finanzas',
    component: () => import('./pages/finanzas/index.vue')
  },
  {
    path: '/finanzas/filobono',
    name: 'Filobono',
    component: () => import('./pages/finanzas/filobono.vue')
  }
]
