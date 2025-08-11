**Framework:** Vue.js (Vite con Vue) en modo **SSG (Static Site Generation)**.

**Rutas principales:**
- `/` → Página principal del portfolio.
- `/finanzas` → Landing general para la sección de finanzas.
- `/finanzas/filobono` → Vista de Filobono con filtros.

**Características:**
- Generación estática para todas las páginas.
- Consumo de datos (JSON de finanzas) mediante `fetch` a un endpoint del backend.
- Uso de lazy loading en componentes pesados para mejorar tiempo de carga.
- Minificación y compresión (Gzip/Brotli) habilitada en build.
- Preparado para deploy en hosting estático (Cloudflare Pages, GitHub Pages, Netlify).
- Si las llamadas al backend fallan, que lo muestre en la consola.