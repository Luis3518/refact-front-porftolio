# Portfolio Luis Miguel Rodriguez - Vue.js SSG

Portfolio profesional desarrollado con Vue.js y Vite SSG, especializado en desarrollo de software, sistemas financieros y soluciones tecnológicas modernas.

## 🚀 Características

- **Framework:** Vue.js 3 con Composition API
- **Build Tool:** Vite con soporte SSG
- **Rutas:** Vue Router con lazy loading
- **Estilos:** CSS moderno con gradientes y tema oscuro
- **Analytics:** Sistema personalizado de tracking
- **Optimización:** Code splitting, minificación, compresión
- **Deploy:** Optimizado para hosting estático

## 📁 Estructura del Proyecto

```
src/
├── pages/              # Páginas principales
│   ├── index.vue       # Página de inicio
│   ├── about.vue       # Sobre mí
│   ├── projects.vue    # Proyectos
│   ├── contact.vue     # Contacto
│   └── finanzas/       # Sección financiera (legacy)
├── composables/        # Composables Vue
│   └── useAnalytics.js # Sistema de analytics
├── components/         # Componentes reutilizables
├── App.vue            # Componente principal
├── main.js            # Punto de entrada
├── router.js          # Configuración de rutas
└── style.css          # Estilos globales
```

## 📊 Sistema de Analytics

El portfolio incluye un sistema de analytics personalizado para trackear eventos importantes:

- **Automático:** Visitas a páginas
- **Manual:** Descargas de CV, envío de formularios
- **Configurable:** Endpoint personalizable via `.env`

Ver documentación completa: [ANALYTICS.md](./ANALYTICS.md)

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

## 🚀 Deploy

El proyecto está optimizado para deploy en plataformas de hosting estático:

### Cloudflare Pages
```bash
npm run build
# Subir carpeta dist/
```

### GitHub Pages
```bash
npm run build
# Configurar GitHub Actions o subir dist/ a gh-pages
```

### Netlify
```bash
npm run build
# Arrastrar carpeta dist/ a Netlify
```

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

## 📈 Performance

- Lazy loading de rutas
- Code splitting por secciones
- Minificación de assets
- Optimización de imágenes
- Compresión Gzip/Brotli

## 🔍 SEO

- Meta tags dinámicos por página
- URLs amigables
- Sitemap automático (SSG)
- Open Graph tags

---

Desarrollado con ❤️ usando Vue.js y Vite