# Portfolio Luis Miguel Rodriguez - Vue.js SSG

Portfolio profesional desarrollado con Vue.js y Vite SSG, especializado en desarrollo de software, sistemas financieros y soluciones tecnológicas modernas.

## 🚀 Características

- **Framework:** Vue.js 3 con Composition API
- **Build Tool:** Vite con soporte SSG
- **Rutas:** Vue Router con lazy loading
- **Estilos:** CSS moderno con gradientes y tema oscuro
- **Analytics:** Sistema personalizado de tracking (solo eventos)
- **Optimización:** Code splitting, minificación, compresión
- **Deploy:** Optimizado para hosting estático
- **Privacidad:** Sistema de analytics mínimo sin cookies

## 📁 Estructura del Proyecto

```
src/
├── pages/              # Páginas principales
│   ├── index.vue       # Página de inicio
│   ├── about.vue       # Sobre mí
│   ├── projects.vue    # Proyectos
│   └── finanzas/       # Sección financiera
│       ├── index.vue   # Landing financiera
│       └── filobono.vue # Gestión de bonos
├── composables/        # Composables Vue
│   └── useAnalytics.js # Sistema de analytics
├── components/         # Componentes reutilizables
│   ├── BaseButton.vue
│   ├── BaseCard.vue
│   ├── ContactSection.vue
│   ├── PageHeader.vue
│   ├── PageSection.vue
│   └── ProjectsGrid.vue
├── App.vue            # Componente principal
├── main.js            # Punto de entrada
├── router.js          # Configuración de rutas
└── style.css          # Estilos globales
```

## 📊 Sistema de Analytics

El portfolio incluye un sistema de analytics **ultra-ligero** que respeta la privacidad del usuario:

### Configuración
Crea un archivo `.env` en la raíz del proyecto:

```env
# Analytics Configuration
VITE_ANALYTICS_API_URL=http://localhost:4000/track

# Para producción:
# VITE_ANALYTICS_API_URL=https://your-analytics-api.com/track
```

### Eventos Trackeados
- **page_visit**: Automático al cargar cualquier página
- **click_CV**: Manual al hacer clic en "Descargar CV"
- **form_submit**: Manual al enviar formularios
- **project_view**: Manual al visualizar proyectos

### Payload Mínimo
El sistema **SOLO** envía el nombre del evento:

```json
{
  "event": "page_visit"
}
```

> **Privacidad:** No se incluyen timestamps, user agent, referrer, cookies o datos personales.

### Uso en Componentes
```javascript
import { useAnalytics } from '../composables/useAnalytics.js'

export default {
  setup() {
    // Auto-tracking de visitas (automático)
    const { trackCVClick, trackFormSubmit } = useAnalytics()
    
    const downloadCV = () => {
      trackCVClick()
      // Lógica de descarga...
    }
    
    return { downloadCV }
  }
}
```

## 🛠️ Instalación y Desarrollo

### Prerequisitos
- Node.js 16+ 
- npm o yarn

### Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción (SSG)
npm run build

# Previsualizar build
npm run preview

# Generar sitio estático
npm run generate
```

## 🌐 Rutas Disponibles

- `/` - Página principal del portfolio
- `/finanzas` - Landing de la sección financiera
- `/finanzas/filobono` - Sistema de gestión de bonos con filtros

## 🎯 Funcionalidades Principales

### Filobono
- Sistema de gestión de bonos financieros
- Filtros dinámicos por tipo, vencimiento, rating y rendimiento
- Consumo de datos via API (con manejo de errores)
- Visualización responsive de resultados

### Optimizaciones
- Lazy loading de componentes
- Code splitting automático
- Minificación y compresión
- SEO optimizado con meta tags dinámicos

## 🚀 Deploy y Hosting

El proyecto está optimizado para deploy en múltiples plataformas de hosting estático:

### Cloudflare Pages (Recomendado)
```bash
npm run build
# Subir carpeta dist/ - No necesita configuración especial
```

### Netlify
```bash
npm run build
# Arrastrar carpeta dist/ a Netlify
# O crear netlify.toml para configuración avanzada
```

### Vercel
```bash
npm run build
# Conectar repositorio o subir dist/
# Opcional: crear vercel.json para configuración
```

### GitHub Pages
```bash
npm run build
# Configurar GitHub Actions (.github/workflows/) 
# O subir dist/ a rama gh-pages
```

### Archivos de Configuración de Deploy
Para configuraciones avanzadas, crear según la plataforma:

- **Netlify**: `netlify.toml`, `_redirects`
- **Vercel**: `vercel.json`
- **GitHub Pages**: `.github/workflows/deploy.yml`
- **Cloudflare Pages**: No requiere configuración especial

## 🔧 Configuración de API

Para conectar con un backend real, modificar las llamadas fetch en:
- `src/pages/finanzas/filobono.vue` (función `loadData`)

Ejemplo:
```javascript
const response = await fetch('https://api.ejemplo.com/bonos')
const data = await response.json()
```

## 📦 Tecnologías Utilizadas

- Vue.js 3
- Vite
- Vue Router
- @vueuse/head (SEO)
- vite-ssg (Static Site Generation)
- CSS3 con Flexbox y Grid

## 🎨 Diseño

- Diseño responsive mobile-first
- Paleta de colores profesional
- Transiciones y animaciones suaves
- Componentes reutilizables

## 📈 Performance y Optimización

- **Lazy loading**: Rutas y componentes cargados bajo demanda
- **Code splitting**: División automática del código por secciones
- **Minificación**: Assets optimizados para producción
- **Compresión**: Gzip/Brotli habilitado
- **Analytics ligero**: Sin impacto en performance (solo eventos)

## 🔍 SEO y Metadatos

- Meta tags dinámicos por página
- URLs amigables y semánticas
- Sitemap automático (SSG)
- Open Graph tags para redes sociales
- Structured data para motores de búsqueda

## 🔒 Privacidad y Cumplimiento

- **Sin cookies**: El sistema no utiliza cookies de ningún tipo
- **Datos mínimos**: Solo se trackean nombres de eventos
- **GDPR friendly**: No se recopilan datos personales
- **Transparente**: Código abierto y auditable
- **Opt-out fácil**: Deshabilitar analytics modificando `.env`

---

Desarrollado con ❤️ usando Vue.js y Vite