# Portfolio Frontend - Vue.js SSG

Este es un portfolio desarrollado con Vue.js y Vite configurado para Static Site Generation (SSG), especializado en soluciones financieras.

## 🚀 Características

- **Framework:** Vue.js 3 con Composition API
- **Build Tool:** Vite con soporte SSG
- **Rutas:** Vue Router con lazy loading
- **Optimización:** Code splitting, minificación, compresión
- **Deploy:** Optimizado para hosting estático (Cloudflare Pages, GitHub Pages, Netlify)

## 📁 Estructura del Proyecto

```
src/
├── pages/           # Páginas principales
│   ├── index.vue    # Página de inicio
│   └── finanzas/    # Sección de finanzas
│       ├── index.vue     # Landing de finanzas
│       └── filobono.vue  # Sistema Filobono
├── App.vue          # Componente principal
├── main.js          # Punto de entrada
├── router.js        # Configuración de rutas
└── style.css        # Estilos globales
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