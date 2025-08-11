import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'minify'
  },
  build: {
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          finanzas: ['./src/pages/finanzas/index.vue', './src/pages/finanzas/filobono.vue']
        }
      }
    }
  },
  server: {
    compression: 'gzip'
  }
})
