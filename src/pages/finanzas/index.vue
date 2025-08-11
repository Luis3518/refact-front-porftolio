<template>
  <div class="finanzas">
    <PageHeader 
      title="Soluciones Financieras" 
      subtitle="Herramientas y aplicaciones especializadas para el sector financiero"
      variant="primary"
    />

    <PageSection background="default">
      <div class="grid grid-2">
        <BaseCard title="Filobono" variant="feature">
          <p class="text-light mb-lg">
            Sistema completo de gestión de bonos financieros con capacidades de
            filtrado avanzado, visualización de datos y análisis de rendimiento.
          </p>
          
          <div class="features mb-lg">
            <ul class="feature-list">
              <li>Filtros dinámicos por múltiples criterios</li>
              <li>Visualización de datos en tiempo real</li>
              <li>Análisis de tendencias y rendimiento</li>
              <li>Exportación de reportes</li>
            </ul>
          </div>
          
          <template #footer>
            <BaseButton to="/finanzas/filobono" variant="success" block>
              Acceder a Filobono
            </BaseButton>
          </template>
        </BaseCard>

        <BaseCard title="Dashboard Financiero" variant="feature">
          <p class="text-light mb-lg">
            Panel de control integral para monitoreo de indicadores financieros,
            métricas de rendimiento y análisis de mercado.
          </p>
          
          <div class="features mb-lg">
            <ul class="feature-list">
              <li>Métricas en tiempo real</li>
              <li>Gráficos interactivos</li>
              <li>Alertas personalizables</li>
              <li>Integración con APIs externas</li>
            </ul>
          </div>
          
          <template #footer>
            <BaseButton variant="secondary" disabled block>
              Próximamente
            </BaseButton>
          </template>
        </BaseCard>
      </div>
    </PageSection>

    <PageSection 
      title="Tecnologías Utilizadas"
      subtitle="Stack tecnológico optimizado para el desarrollo financiero"
      background="white"
    >
      <div class="grid grid-4">
        <BaseCard title="Frontend" variant="info" compact>
          <p class="text-center text-primary font-medium">Vue.js 3, Vite, SSG</p>
        </BaseCard>
        
        <BaseCard title="Optimización" variant="info" compact>
          <p class="text-center text-primary font-medium">Lazy Loading, Code Splitting</p>
        </BaseCard>
        
        <BaseCard title="Integración" variant="info" compact>
          <p class="text-center text-primary font-medium">REST APIs, Error Handling</p>
        </BaseCard>
        
        <BaseCard title="Deploy" variant="info" compact>
          <p class="text-center text-primary font-medium">Static Hosting, CDN</p>
        </BaseCard>
      </div>
    </PageSection>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import { useAnalytics } from '../../composables/useAnalytics.js'
import PageHeader from '../../components/PageHeader.vue'
import PageSection from '../../components/PageSection.vue'
import BaseCard from '../../components/BaseCard.vue'
import BaseButton from '../../components/BaseButton.vue'

export default {
  name: 'FinanzasPage',
  components: {
    PageHeader,
    PageSection,
    BaseCard,
    BaseButton
  },
  setup() {
    // Analytics tracking automático
    useAnalytics()

    useHead({
      title: 'Finanzas - Portfolio',
      meta: [
        {
          name: 'description',
          content: 'Soluciones financieras desarrolladas con Vue.js - Filobono y más herramientas especializadas'
        }
      ]
    })
  }
}
</script>

<style scoped>
.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  padding: var(--spacing-sm) 0;
  color: var(--color-text);
  font-weight: var(--font-weight-medium);
  position: relative;
  padding-left: var(--spacing-lg);
}

.feature-list li::before {
  content: "✓";
  color: var(--color-success);
  font-weight: bold;
  position: absolute;
  left: 0;
  top: var(--spacing-sm);
}
</style>
