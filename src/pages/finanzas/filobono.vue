<template>
  <div class="filobono">
    <section class="header">
      <div class="container">
        <h1>Filobono</h1>
        <p>Sistema de gestión de bonos financieros</p>
        <router-link to="/finanzas" class="btn btn-secondary">← Volver a Finanzas</router-link>
      </div>
    </section>

    <section class="filters">
      <div class="container">
        <div class="card">
          <h2>Filtros</h2>
          <div class="filter-grid">
            <div class="filter-group">
              <label for="tipo">Tipo de Bono:</label>
              <select id="tipo" v-model="filters.tipo" @change="applyFilters">
                <option value="">Todos</option>
                <option value="corporativo">Corporativo</option>
                <option value="gubernamental">Gubernamental</option>
                <option value="municipal">Municipal</option>
              </select>
            </div>

            <div class="filter-group">
              <label for="vencimiento">Vencimiento:</label>
              <select id="vencimiento" v-model="filters.vencimiento" @change="applyFilters">
                <option value="">Todos</option>
                <option value="corto">Corto plazo (< 2 años)</option>
                <option value="medio">Medio plazo (2-10 años)</option>
                <option value="largo">Largo plazo (> 10 años)</option>
              </select>
            </div>

            <div class="filter-group">
              <label for="rating">Rating:</label>
              <select id="rating" v-model="filters.rating" @change="applyFilters">
                <option value="">Todos</option>
                <option value="AAA">AAA</option>
                <option value="AA">AA</option>
                <option value="A">A</option>
                <option value="BBB">BBB</option>
              </select>
            </div>

            <div class="filter-group">
              <label for="rendimiento">Rendimiento mínimo (%):</label>
              <input 
                id="rendimiento" 
                type="number" 
                v-model.number="filters.rendimientoMin" 
                @input="applyFilters"
                step="0.1"
                min="0"
                placeholder="Ej: 3.5"
              >
            </div>
          </div>

          <div class="filter-actions">
            <button @click="clearFilters" class="btn btn-secondary">Limpiar Filtros</button>
            <button @click="loadData" class="btn">Actualizar Datos</button>
          </div>
        </div>
      </div>
    </section>

    <section class="results">
      <div class="container">
        <div class="results-header">
          <h2>Resultados</h2>
          <span class="results-count">{{ filteredBonos.length }} bonos encontrados</span>
        </div>

        <div v-if="loading" class="loading">
          <p>Cargando datos financieros...</p>
        </div>

        <div v-else-if="error" class="error">
          <p>{{ error }}</p>
          <button @click="loadData" class="btn">Reintentar</button>
        </div>

        <div v-else-if="filteredBonos.length === 0" class="no-results">
          <p>No se encontraron bonos que cumplan con los criterios seleccionados.</p>
        </div>

        <div v-else class="bonos-grid">
          <Transition name="fade" appear>
            <div class="grid grid-3">
              <div 
                v-for="bono in filteredBonos" 
                :key="bono.id" 
                class="card bono-card"
              >
                <div class="bono-header">
                  <h3>{{ bono.nombre }}</h3>
                  <span class="rating" :class="getRatingClass(bono.rating)">
                    {{ bono.rating }}
                  </span>
                </div>
                
                <div class="bono-details">
                  <div class="detail-item">
                    <span class="label">Tipo:</span>
                    <span class="value">{{ bono.tipo }}</span>
                  </div>
                  
                  <div class="detail-item">
                    <span class="label">Vencimiento:</span>
                    <span class="value">{{ formatDate(bono.vencimiento) }}</span>
                  </div>
                  
                  <div class="detail-item">
                    <span class="label">Rendimiento:</span>
                    <span class="value rendimiento">{{ bono.rendimiento }}%</span>
                  </div>
                  
                  <div class="detail-item">
                    <span class="label">Valor:</span>
                    <span class="value">{{ formatCurrency(bono.valor) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useHead } from '@vueuse/head'

export default {
  name: 'FilobonoPage',
  setup() {
    useHead({
      title: 'Filobono - Sistema de Bonos',
      meta: [
        {
          name: 'description',
          content: 'Sistema de gestión de bonos financieros con filtros avanzados y análisis de rendimiento'
        }
      ]
    })

    // Estado reactivo
    const bonos = ref([])
    const loading = ref(false)
    const error = ref(null)
    const filters = ref({
      tipo: '',
      vencimiento: '',
      rating: '',
      rendimientoMin: null
    })

    // Datos de ejemplo (simula respuesta del backend)
    const generateSampleData = () => {
      const tipos = ['corporativo', 'gubernamental', 'municipal']
      const ratings = ['AAA', 'AA', 'A', 'BBB']
      const nombres = [
        'Bono Nacional 2025', 'Corporativo XYZ', 'Municipal Buenos Aires',
        'Tesoro Nacional', 'Empresa ABC Corp', 'Ciudad de Córdoba',
        'Bono Verde Sustentable', 'Infraestructura Nacional'
      ]

      return Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        nombre: nombres[i % nombres.length] + ` ${i + 1}`,
        tipo: tipos[Math.floor(Math.random() * tipos.length)],
        rating: ratings[Math.floor(Math.random() * ratings.length)],
        rendimiento: +(Math.random() * 8 + 1).toFixed(2),
        valor: Math.floor(Math.random() * 1000000 + 100000),
        vencimiento: new Date(2024 + Math.floor(Math.random() * 10), 
                             Math.floor(Math.random() * 12), 
                             Math.floor(Math.random() * 28) + 1)
      }))
    }

    // Simular llamada al backend
    const loadData = async () => {
      loading.value = true
      error.value = null

      try {
        // Simular delay de red
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // En un caso real, esto sería:
        // const response = await fetch('/api/bonos')
        // const data = await response.json()
        
        bonos.value = generateSampleData()
      } catch (err) {
        error.value = 'Error al cargar los datos financieros. Verifique su conexión.'
        console.error('Error en llamada al backend:', err)
      } finally {
        loading.value = false
      }
    }

    // Filtros computados
    const filteredBonos = computed(() => {
      let result = bonos.value

      if (filters.value.tipo) {
        result = result.filter(bono => bono.tipo === filters.value.tipo)
      }

      if (filters.value.rating) {
        result = result.filter(bono => bono.rating === filters.value.rating)
      }

      if (filters.value.rendimientoMin !== null && filters.value.rendimientoMin !== '') {
        result = result.filter(bono => bono.rendimiento >= filters.value.rendimientoMin)
      }

      if (filters.value.vencimiento) {
        const now = new Date()
        result = result.filter(bono => {
          const years = (bono.vencimiento - now) / (365 * 24 * 60 * 60 * 1000)
          
          switch (filters.value.vencimiento) {
            case 'corto': return years < 2
            case 'medio': return years >= 2 && years <= 10
            case 'largo': return years > 10
            default: return true
          }
        })
      }

      return result
    })

    // Métodos
    const applyFilters = () => {
      // Los filtros se aplican automáticamente via computed
    }

    const clearFilters = () => {
      filters.value = {
        tipo: '',
        vencimiento: '',
        rating: '',
        rendimientoMin: null
      }
    }

    const getRatingClass = (rating) => {
      return `rating-${rating.toLowerCase()}`
    }

    const formatDate = (date) => {
      return date.toLocaleDateString('es-ES')
    }

    const formatCurrency = (amount) => {
      return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR'
      }).format(amount)
    }

    // Cargar datos al montar el componente
    onMounted(() => {
      loadData()
    })

    return {
      bonos,
      loading,
      error,
      filters,
      filteredBonos,
      loadData,
      applyFilters,
      clearFilters,
      getRatingClass,
      formatDate,
      formatCurrency
    }
  }
}
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
  color: white;
  padding: 3rem 0;
  text-align: center;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 300;
}

.filters {
  padding: 2rem 0;
  background-color: #f8f9fa;
}

.filter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.filter-group {
  display: flex;
  flex-direction: column;
}

.filter-group label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #2c3e50;
}

.filter-group select,
.filter-group input {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.filter-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.results {
  padding: 2rem 0;
}

.results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.results-count {
  color: #666;
  font-weight: 500;
}

.no-results {
  text-align: center;
  padding: 3rem;
  color: #666;
}

.bono-card {
  transition: transform 0.3s, box-shadow 0.3s;
}

.bono-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

.bono-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.bono-header h3 {
  color: #2c3e50;
  font-size: 1.1rem;
  margin: 0;
}

.rating {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
}

.rating-aaa { background-color: #27ae60; color: white; }
.rating-aa { background-color: #2ecc71; color: white; }
.rating-a { background-color: #f39c12; color: white; }
.rating-bbb { background-color: #e67e22; color: white; }

.bono-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.label {
  color: #666;
  font-size: 0.9rem;
}

.value {
  font-weight: 500;
  color: #2c3e50;
}

.rendimiento {
  color: #27ae60;
  font-weight: bold;
}

@media (max-width: 768px) {
  .header {
    padding: 2rem 0;
  }
  
  .header h1 {
    font-size: 2rem;
  }
  
  .filter-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-actions {
    flex-direction: column;
  }
  
  .results-header {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
