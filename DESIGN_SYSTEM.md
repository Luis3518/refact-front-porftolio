# Sistema de Estilos Desacoplado

Este proyecto utiliza un sistema de estilos completamente desacoplado que permite fácil mantenimiento y consistencia visual en todas las páginas.

## 📁 Estructura de Estilos

```
src/
├── style.css           # Variables CSS y estilos base
├── styles/
│   ├── themes.css      # Temas y componentes especializados
│   └── utilities.css   # Clases utilitarias
└── components/         # Componentes reutilizables
    ├── PageHeader.vue
    ├── PageSection.vue
    ├── BaseCard.vue
    └── BaseButton.vue
```

## 🎨 Sistema de Variables CSS

### Colores
```css
--color-primary: #3498db
--color-secondary: #95a5a6
--color-success: #27ae60
--color-warning: #f39c12
--color-error: #e74c3c
```

### Espaciado
```css
--spacing-xs: 0.25rem
--spacing-sm: 0.5rem
--spacing-md: 1rem
--spacing-lg: 1.5rem
--spacing-xl: 2rem
--spacing-2xl: 3rem
--spacing-3xl: 4rem
```

### Tipografía
```css
--font-size-xs: 0.75rem
--font-size-sm: 0.875rem
--font-size-base: 1rem
--font-size-lg: 1.125rem
--font-size-xl: 1.25rem
--font-size-2xl: 1.5rem
--font-size-3xl: 2rem
--font-size-4xl: 2.5rem
```

## 🧩 Componentes Base

### PageHeader
Encabezado reutilizable para todas las páginas:
```vue
<PageHeader 
  title="Título de la Página" 
  subtitle="Descripción opcional"
  variant="primary|success|hero"
  is-hero="boolean"
>
  <template #actions>
    <BaseButton>Acción</BaseButton>
  </template>
</PageHeader>
```

### PageSection
Sección con contenedor y espaciado consistente:
```vue
<PageSection 
  title="Título de Sección"
  subtitle="Descripción"
  background="default|white|light"
  size="sm|normal|lg"
>
  <!-- Contenido -->
</PageSection>
```

### BaseCard
Tarjeta reutilizable con variantes:
```vue
<BaseCard 
  title="Título"
  variant="feature|project|info"
  compact="boolean"
>
  <!-- Contenido -->
  <template #footer>
    <BaseButton>Acción</BaseButton>
  </template>
</BaseCard>
```

### BaseButton
Botón con múltiples variantes:
```vue
<BaseButton 
  variant="primary|secondary|success|warning|error"
  size="sm|normal|lg"
  outline="boolean"
  block="boolean"
  to="/ruta"
>
  Texto del Botón
</BaseButton>
```

## 🎯 Clases Utilitarias

### Layout y Grid
```css
.container           /* Contenedor principal */
.grid               /* Grid básico */
.grid-2             /* Grid de 2 columnas responsivo */
.grid-3             /* Grid de 3 columnas responsivo */
.grid-4             /* Grid de 4 columnas responsivo */
.flex               /* Flexbox */
.items-center       /* Alinear verticalmente */
.justify-between    /* Espacio entre elementos */
```

### Espaciado
```css
.m-0, .mt-sm, .mb-lg    /* Márgenes */
.p-0, .pt-sm, .pb-lg    /* Padding */
.gap-sm, .gap-md        /* Gap en grids/flex */
```

### Tipografía
```css
.text-xs, .text-lg      /* Tamaños de texto */
.font-light, .font-bold /* Peso de fuente */
.text-primary           /* Colores */
.text-center            /* Alineación */
```

### Estados
```css
.loading               /* Estado de carga */
.error                 /* Estado de error */
.success               /* Estado de éxito */
.no-results           /* Sin resultados */
```

## 🌈 Temas

### Tema por Defecto
El tema principal del portfolio con azules y grises.

### Tema Finanzas
```css
[data-theme="finance"] {
  --color-primary: #2563eb;
  --color-success: #059669;
}
```

### Tema Corporativo
```css
[data-theme="corporate"] {
  --color-primary: #1f2937;
  --color-secondary: #6b7280;
}
```

## 📱 Responsive Design

El sistema incluye clases responsive automáticas:

```css
/* Mobile first */
.grid-3 /* Se convierte en 1 columna en móvil */

/* Clases específicas */
.sm\:hidden    /* Ocultar en móviles */
.md\:flex      /* Flex en tablets+ */
.lg\:grid      /* Grid en desktop+ */
```

## 🛠️ Componentes Especializados

### Rating Financiero
```css
.financial-rating.aaa  /* Rating AAA */
.financial-rating.aa   /* Rating AA */
.financial-rating.a    /* Rating A */
.financial-rating.bbb  /* Rating BBB */
```

### Métricas
```css
.metric-card    /* Tarjeta de métrica */
.metric-value   /* Valor principal */
.metric-label   /* Etiqueta descriptiva */
```

### Filtros
```css
.filter-section  /* Sección de filtros */
.filter-grid     /* Grid de campos */
.filter-field    /* Campo individual */
.filter-actions  /* Botones de acción */
```

## 🎭 Animaciones

### Transiciones Base
```css
.fade-enter-active      /* Fade in/out */
.slide-up-enter-active  /* Slide up */
.bounce-enter-active    /* Bounce effect */
```

### Estados Hover
```css
.hover\:scale-105      /* Escalar al hover */
.hover\:-translate-y-2 /* Mover hacia arriba */
.hover\:shadow-lg      /* Sombra al hover */
```

## 📋 Uso Recomendado

### 1. Estructura de Página
```vue
<template>
  <div class="page-name">
    <PageHeader title="..." subtitle="..." variant="primary">
      <template #actions>
        <BaseButton to="...">Acción</BaseButton>
      </template>
    </PageHeader>

    <PageSection title="..." background="default">
      <div class="grid grid-3">
        <BaseCard variant="project">
          <!-- Contenido -->
        </BaseCard>
      </div>
    </PageSection>
  </div>
</template>
```

### 2. Estilos Mínimos en Componentes
```vue
<style scoped>
/* Solo estilos específicos del componente */
.special-component {
  /* Usar variables CSS */
  border-left: 4px solid var(--color-primary);
}

/* Evitar duplicar estilos que ya existen en utilities */
</style>
```

### 3. Consistencia
- Usar componentes base siempre que sea posible
- Aplicar clases utilitarias antes que CSS custom
- Mantener las variables CSS para colores y espaciado
- Respetar la jerarquía tipográfica establecida

## 🔧 Mantenimiento

### Agregar Nuevos Colores
1. Definir en `:root` en `style.css`
2. Crear clases utilitarias en `utilities.css`
3. Documentar el cambio

### Crear Nuevos Componentes
1. Usar props para personalización
2. Aplicar slots para flexibilidad
3. Extender variantes existentes
4. Mantener accesibilidad

### Modificar Temas
1. Editar variables en `themes.css`
2. Probar en todas las páginas
3. Verificar contraste y legibilidad

Este sistema garantiza consistencia visual, facilita el mantenimiento y permite escalabilidad del proyecto.
