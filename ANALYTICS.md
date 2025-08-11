# Sistema de Analytics - Portfolio Luis Miguel Rodriguez

Este portfolio incluye un sistema de analytics personalizado para trackear eventos importantes como visitas a páginas y descargas de CV.

## Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con la siguiente configuración:

```env
# Analytics Configuration
ANALYTICS_API_URL=http://localhost:4000/track

# Para producción, cambiar por tu URL real:
# ANALYTICS_API_URL=https://your-analytics-api.com/track
```

### API Endpoint

El sistema envía eventos a tu endpoint de analytics configurado. El payload incluye:

```json
{
  "event": "page_visit",
  "timestamp": "2025-08-11T10:16:36.000Z",
  "page": "/",
  "userAgent": "Mozilla/5.0...",
  "title": "Luis Miguel Rodriguez - Desarrollador de Software",
  "referrer": "https://google.com"
}
```

## Eventos Trackeados

### Automáticos
- **page_visit**: Se ejecuta automáticamente al cargar cualquier página
  - Incluye: título de página, referrer, user agent

### Manuales
- **click_CV**: Cuando se hace clic en "Descargar CV"
- **form_submit**: Cuando se envía el formulario de contacto
- **project_view**: Cuando se visualiza un proyecto específico

## Uso en Componentes

```javascript
import { useAnalytics } from '../composables/useAnalytics.js'

export default {
  setup() {
    const { trackEvent, trackCVClick, trackFormSubmit } = useAnalytics()
    
    // Tracking automático de visitas se ejecuta al montar el componente
    
    // Tracking manual
    const downloadCV = () => {
      trackCVClick()
      // Lógica de descarga...
    }
    
    return { downloadCV }
  }
}
```

## Estructura de Archivos

```
├── .env                              # Configuración de variables
├── public/
│   └── analytics.js                  # Script legacy (opcional)
├── src/
│   └── composables/
│       └── useAnalytics.js          # Composable principal de analytics
└── src/pages/
    ├── index.vue                     # Página principal con tracking de CV
    ├── about.vue                     # Auto-tracking de visitas
    ├── projects.vue                  # Auto-tracking de visitas
    ├── contact.vue                   # Auto-tracking + form submit
    └── finanzas/
        ├── index.vue                 # Auto-tracking de visitas
        └── filobono.vue              # Auto-tracking de visitas
```

## Servidor de Analytics (Ejemplo)

Para desarrollo local, puedes usar este servidor simple en Node.js:

```javascript
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.post('/track', (req, res) => {
  console.log('Analytics Event:', req.body)
  
  // Aquí guardarías en tu base de datos
  // db.analytics.insert(req.body)
  
  res.json({ success: true })
})

app.listen(4000, () => {
  console.log('Analytics server running on port 4000')
})
```

## Configuración de Producción

1. **Cambia la URL** en `.env` por tu endpoint real
2. **Implementa el servidor** de analytics en tu backend
3. **Configura CORS** para permitir requests desde tu dominio
4. **Almacena los eventos** en una base de datos (MongoDB, PostgreSQL, etc.)

## Debugging

El sistema incluye logs en la consola para debugging:

```javascript
console.log('Analytics event tracked:', eventName, payload)
```

En caso de errores, se muestran en la consola sin afectar la experiencia del usuario.

## Privacidad

- No se almacenan cookies
- Solo se trackean eventos específicos del comportamiento del usuario
- Se incluye user agent solo para propósitos de analytics básicos
- Cumple con prácticas básicas de privacidad
