<template>
  <div class="filobono">
    <PageHeader 
      title="Filobono" 
      subtitle="Sistema de gestión de bonos financieros"
      variant="success"
    >
      <template #actions>
        <BaseButton to="/finanzas" variant="secondary" outline>
          ← Volver a Finanzas
        </BaseButton>
      </template>
    </PageHeader>

    <PageSection title="Filtros de Búsqueda" background="light">
      <BaseCard>
        <div class="grid grid-4">
          <div class="filter-group">
            <label for="tipo" class="filter-label">Tipo de Bono:</label>
            <select id="tipo" v-model="filters.tipo" @change="applyFilters" class="filter-input">
              <option value="">Todos</option>
              <option value="corporativo">Corporativo</option>
              <option value="gubernamental">Gubernamental</option>
              <option value="municipal">Municipal</option>
            </select>
          </div>

          <div class="filter-group">
            <label for="vencimiento" class="filter-label">Vencimiento:</label>
            <select id="vencimiento" v-model="filters.vencimiento" @change="applyFilters" class="filter-input">
              <option value="">Todos</option>
              <option value="corto">Corto plazo (< 2 años)</option>
              <option value="medio">Medio plazo (2-10 años)</option>
              <option value="largo">Largo plazo (> 10 años)</option>
            </select>
          </div>

          <div class="filter-group">
            <label for="rating" class="filter-label">Rating:</label>
            <select id="rating" v-model="filters.rating" @change="applyFilters" class="filter-input">
              <option value="">Todos</option>
              <option value="AAA">AAA</option>
              <option value="AA">AA</option>
              <option value="A">A</option>
              <option value="BBB">BBB</option>
            </select>
          </div>

          <div class="filter-group">
            <label for="rendimiento" class="filter-label">Rendimiento mínimo (%):</label>
            <input 
              id="rendimiento" 
              type="number" 
              v-model.number="filters.rendimientoMin" 
              @input="applyFilters"
              step="0.1"
              min="0"
              placeholder="Ej: 3.5"
              class="filter-input"
            >
          </div>
        </div>

        <template #footer>
          <div class="flex justify-center gap-md">
            <BaseButton @click="clearFilters" variant="secondary">
              Limpiar Filtros
            </BaseButton>
            <BaseButton @click="loadData" variant="primary">
              Actualizar Datos
            </BaseButton>
          </div>
        </template>
      </BaseCard>
    </PageSection>

    <PageSection background="default">
      <div class="flex justify-between items-center mb-xl">
        <h2 class="text-2xl font-light text-primary">Resultados</h2>
        <span class="text-muted">{{ filteredBonos.length }} bonos encontrados</span>
      </div>

      <div v-if="loading" class="loading">
        <p>Cargando datos financieros...</p>
      </div>

      <div v-else-if="error" class="error">
        <p>{{ error }}</p>
        <BaseButton @click="loadData" variant="primary" class="mt-md">
          Reintentar
        </BaseButton>
      </div>

      <div v-else-if="filteredBonos.length === 0" class="no-results">
        <p>No se encontraron bonos que cumplan con los criterios seleccionados.</p>
      </div>

      <Transition name="fade" appear v-else>
        <div class="grid grid-3">
          <BaseCard 
            v-for="bono in filteredBonos" 
            :key="bono.id" 
            variant="project"
            class="bono-card"
          >
            <template #header>
              <div class="flex justify-between items-center">
                <h3 class="text-lg font-medium text-primary m-0">{{ bono.nombre }}</h3>
                <span class="rating" :class="getRatingClass(bono.rating)">
                  {{ bono.rating }}
                </span>
              </div>
            </template>
            
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
                <span class="value text-success font-bold">{{ bono.rendimiento }}%</span>
              </div>
              
              <div class="detail-item">
                <span class="label">Valor:</span>
                <span class="value font-medium">{{ formatCurrency(bono.valor) }}</span>
              </div>
            </div>
          </BaseCard>
        </div>
      </Transition>
    </PageSection>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { useAnalytics } from '../../composables/useAnalytics.js'
import PageHeader from '../../components/PageHeader.vue'
import PageSection from '../../components/PageSection.vue'
import BaseCard from '../../components/BaseCard.vue'
import BaseButton from '../../components/BaseButton.vue'

export default {
  name: 'FilobonoPage',
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
.filter-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.filter-label {
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  font-size: var(--font-size-sm);
}

.filter-input {
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-base);
  transition: border-color var(--transition-normal);
}

.filter-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
}

.bono-card {
  transition: all var(--transition-normal);
}

.bono-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.rating {
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
}

.rating-aaa { 
  background-color: var(--color-success); 
  color: var(--color-white); 
}

.rating-aa { 
  background-color: #2ecc71; 
  color: var(--color-white); 
}

.rating-a { 
  background-color: var(--color-warning); 
  color: var(--color-white); 
}

.rating-bbb { 
  background-color: #e67e22; 
  color: var(--color-white); 
}

.bono-details {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--color-border);
}

.detail-item:last-child {
  border-bottom: none;
}

.label {
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
}

.value {
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}

@media (max-width: 768px) {
  .grid-4 {
    grid-template-columns: 1fr;
  }
  
  .flex.justify-between {
    flex-direction: column;
    gap: var(--spacing-md);
    align-items: flex-start;
  }
  
  .flex.justify-center {
    flex-direction: column;
  }
}
</style>
