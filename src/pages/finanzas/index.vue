<template>
  <div class="finanzas">
    <section class="header">
      <div class="container">
        <h1>Soluciones Financieras</h1>
        <p>Herramientas y aplicaciones especializadas para el sector financiero</p>
      </div>
    </section>

    <section class="content">
      <div class="container">
        <div class="grid grid-2">
          <div class="card feature-card">
            <h2>Filobono</h2>
            <p>
              Sistema completo de gestión de bonos financieros con capacidades de
              filtrado avanzado, visualización de datos y análisis de rendimiento.
            </p>
            <div class="features">
              <ul>
                <li>✓ Filtros dinámicos por múltiples criterios</li>
                <li>✓ Visualización de datos en tiempo real</li>
                <li>✓ Análisis de tendencias y rendimiento</li>
                <li>✓ Exportación de reportes</li>
              </ul>
            </div>
            <router-link to="/finanzas/filobono" class="btn">Acceder a Filobono</router-link>
          </div>

          <div class="card feature-card">
            <h2>Dashboard Financiero</h2>
            <p>
              Panel de control integral para monitoreo de indicadores financieros,
              métricas de rendimiento y análisis de mercado.
            </p>
            <div class="features">
              <ul>
                <li>✓ Métricas en tiempo real</li>
                <li>✓ Gráficos interactivos</li>
                <li>✓ Alertas personalizables</li>
                <li>✓ Integración con APIs externas</li>
              </ul>
            </div>
            <button class="btn btn-secondary" disabled>Próximamente</button>
          </div>
        </div>

        <div class="info-section">
          <div class="card">
            <h2>Tecnologías Utilizadas</h2>
            <div class="tech-grid">
              <div class="tech-item">
                <h3>Frontend</h3>
                <p>Vue.js 3, Vite, SSG</p>
              </div>
              <div class="tech-item">
                <h3>Optimización</h3>
                <p>Lazy Loading, Code Splitting</p>
              </div>
              <div class="tech-item">
                <h3>Integración</h3>
                <p>REST APIs, Error Handling</p>
              </div>
              <div class="tech-item">
                <h3>Deploy</h3>
                <p>Static Hosting, CDN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'

export default {
  name: 'FinanzasPage',
  setup() {
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
.header {
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  color: white;
  padding: 3rem 0;
  text-align: center;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 300;
}

.header p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.content {
  padding: 4rem 0;
}

.feature-card {
  text-align: left;
}

.feature-card h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.features {
  margin: 2rem 0;
}

.features ul {
  list-style: none;
  padding: 0;
}

.features li {
  padding: 0.5rem 0;
  color: #27ae60;
  font-weight: 500;
}

.info-section {
  margin-top: 3rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.tech-item {
  text-align: center;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
}

.tech-item h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.tech-item p {
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .header {
    padding: 2rem 0;
  }
  
  .header h1 {
    font-size: 2rem;
  }
  
  .content {
    padding: 2rem 0;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
  }
}
</style>
