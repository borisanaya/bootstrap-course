# Sistema de Cuadrícula (Grid System) en Bootstrap 5

## ¿Qué es el Sistema de Cuadrícula?

El **sistema de cuadrícula** (Grid System) de Bootstrap es un sistema de diseño flexible y potente basado en **Flexbox** que permite crear diseños responsive de manera sencilla. Utiliza una serie de contenedores, filas y columnas para organizar y alinear el contenido.

### Características principales

- **Sistema de 12 columnas:** Cada fila se divide en 12 columnas virtuales
- **Responsive por defecto:** Se adapta automáticamente a diferentes tamaños de pantalla
- **Basado en Flexbox:** Proporciona alineación flexible y distribución del espacio
- **Mobile-first:** Diseñado para móviles primero, escalando hacia arriba
- **Anidable:** Puedes crear grids dentro de otros grids

## Estructura Básica

El sistema de cuadrícula tiene 3 componentes principales:

```html
<div class="container">        <!-- 1. Contenedor -->
  <div class="row">            <!-- 2. Fila -->
    <div class="col">          <!-- 3. Columna -->
      Contenido
    </div>
  </div>
</div>
```

### 1. Contenedor (Container)
- Envuelve todo el sistema de grid
- Proporciona padding y alineación
- Tipos: `.container`, `.container-fluid`, `.container-{breakpoint}`

### 2. Fila (Row)
- Agrupa columnas horizontalmente
- Usa `.row`
- Elimina el padding lateral del contenedor
- Las columnas deben estar dentro de una fila

### 3. Columna (Col)
- El contenido va dentro de las columnas
- Usa clases `.col-*`
- Máximo 12 columnas por fila
- Se adaptan según los breakpoints

## Sistema de 12 Columnas

Bootstrap divide cada fila en **12 columnas virtuales**. Puedes combinarlas para crear diferentes diseños:

```
|1|2|3|4|5|6|7|8|9|10|11|12|  ← 12 columnas disponibles
```

**Ejemplos:**
- `.col-12` = 1 columna a ancho completo (12/12)
- `.col-6` = 2 columnas de igual tamaño (6/12 cada una)
- `.col-4` = 3 columnas de igual tamaño (4/12 cada una)
- `.col-3` = 4 columnas de igual tamaño (3/12 cada una)

## Clases de Columnas

### Columnas de Ancho Automático

#### `.col`
Todas las columnas tienen el mismo ancho automáticamente:

```html
<div class="row">
  <div class="col">Columna 1</div>
  <div class="col">Columna 2</div>
  <div class="col">Columna 3</div>
</div>
```
Resultado: 3 columnas de igual ancho (33.33% cada una)

### Columnas con Ancho Específico

#### `.col-{número}`
Define cuántas columnas (de 12) ocupará:

```html
<div class="row">
  <div class="col-8">Columna ancha (8/12 = 66.67%)</div>
  <div class="col-4">Columna estrecha (4/12 = 33.33%)</div>
</div>
```

### Columnas Responsive

#### `.col-{breakpoint}-{número}`
Define diferentes anchos según el tamaño de pantalla:

```html
<div class="row">
  <div class="col-12 col-md-6 col-lg-4">
    <!-- Móvil: 100% ancho (12/12) -->
    <!-- Tablet: 50% ancho (6/12) -->
    <!-- Escritorio: 33.33% ancho (4/12) -->
  </div>
</div>
```

**Breakpoints disponibles:**
- `col-` → Todos los tamaños (< 576px)
- `col-sm-` → ≥ 576px
- `col-md-` → ≥ 768px
- `col-lg-` → ≥ 992px
- `col-xl-` → ≥ 1200px
- `col-xxl-` → ≥ 1400px

## Ejemplos Prácticos

### Ejemplo 1: Dos Columnas Iguales

```html
<div class="container">
  <div class="row">
    <div class="col-6">Primera columna (50%)</div>
    <div class="col-6">Segunda columna (50%)</div>
  </div>
</div>
```

### Ejemplo 2: Tres Columnas Iguales

```html
<div class="container">
  <div class="row">
    <div class="col-4">Columna 1 (33.33%)</div>
    <div class="col-4">Columna 2 (33.33%)</div>
    <div class="col-4">Columna 3 (33.33%)</div>
  </div>
</div>
```

### Ejemplo 3: Diseño Sidebar + Content

```html
<div class="container">
  <div class="row">
    <div class="col-3">Sidebar (25%)</div>
    <div class="col-9">Contenido principal (75%)</div>
  </div>
</div>
```

### Ejemplo 4: Columnas Responsive

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-3">
      Artículo 1
    </div>
    <div class="col-12 col-md-6 col-lg-3">
      Artículo 2
    </div>
    <div class="col-12 col-md-6 col-lg-3">
      Artículo 3
    </div>
    <div class="col-12 col-md-6 col-lg-3">
      Artículo 4
    </div>
  </div>
</div>
```

**Comportamiento:**
- **Móvil (< 768px):** 1 columna por fila (apiladas)
- **Tablet (≥ 768px):** 2 columnas por fila
- **Escritorio (≥ 992px):** 4 columnas por fila

### Ejemplo 5: Grid Anidado

```html
<div class="container">
  <div class="row">
    <div class="col-8">
      Columna principal
      
      <!-- Grid anidado -->
      <div class="row">
        <div class="col-6">Sub-columna 1</div>
        <div class="col-6">Sub-columna 2</div>
      </div>
    </div>
    <div class="col-4">Sidebar</div>
  </div>
</div>
```

## Clases Útiles de Row

### `.row-cols-{número}`
Define cuántas columnas por fila sin especificar en cada `.col`:

```html
<div class="row row-cols-3">
  <div class="col">Item 1</div>
  <div class="col">Item 2</div>
  <div class="col">Item 3</div>
  <div class="col">Item 4</div> <!-- Pasa a la siguiente fila -->
</div>
```

### `.row-cols-{breakpoint}-{número}`
Columnas por fila responsive:

```html
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
  <div class="col">Item 1</div>
  <div class="col">Item 2</div>
  <div class="col">Item 3</div>
  <div class="col">Item 4</div>
</div>
```

**Comportamiento:**
- **Móvil:** 1 columna por fila
- **Tablet:** 2 columnas por fila
- **Escritorio:** 4 columnas por fila

## Gutters (Espaciado entre Columnas)

Los **gutters** son los espacios horizontales y verticales entre columnas.

### Gutters Horizontales

#### `.gx-{0-5}`
Controla el espacio horizontal entre columnas:

```html
<div class="row gx-5"> <!-- Mucho espacio horizontal -->
  <div class="col-6">Columna 1</div>
  <div class="col-6">Columna 2</div>
</div>

<div class="row gx-0"> <!-- Sin espacio horizontal -->
  <div class="col-6">Columna 1</div>
  <div class="col-6">Columna 2</div>
</div>
```

### Gutters Verticales

#### `.gy-{0-5}`
Controla el espacio vertical entre filas:

```html
<div class="row gy-4"> <!-- Espacio vertical entre filas -->
  <div class="col-6">Columna 1</div>
  <div class="col-6">Columna 2</div>
  <div class="col-6">Columna 3</div>
  <div class="col-6">Columna 4</div>
</div>
```

### Gutters en Ambas Direcciones

#### `.g-{0-5}`
Controla espacios horizontal y vertical simultáneamente:

```html
<div class="row g-3">
  <div class="col-4">Columna 1</div>
  <div class="col-4">Columna 2</div>
  <div class="col-4">Columna 3</div>
</div>
```

**Valores disponibles:** 0, 1, 2, 3, 4, 5
- `0` = Sin espacio
- `1` = 0.25rem (4px)
- `2` = 0.5rem (8px)
- `3` = 1rem (16px) - **Por defecto**
- `4` = 1.5rem (24px)
- `5` = 3rem (48px)

## Alineación

### Alineación Vertical (en la fila)

```html
<!-- Arriba -->
<div class="row align-items-start">
  <div class="col">Columna</div>
</div>

<!-- Centro -->
<div class="row align-items-center">
  <div class="col">Columna</div>
</div>

<!-- Abajo -->
<div class="row align-items-end">
  <div class="col">Columna</div>
</div>
```

### Alineación Vertical (columna individual)

```html
<div class="row">
  <div class="col align-self-start">Arriba</div>
  <div class="col align-self-center">Centro</div>
  <div class="col align-self-end">Abajo</div>
</div>
```

### Alineación Horizontal

```html
<!-- Izquierda (por defecto) -->
<div class="row justify-content-start">
  <div class="col-4">Columna</div>
</div>

<!-- Centro -->
<div class="row justify-content-center">
  <div class="col-4">Columna</div>
</div>

<!-- Derecha -->
<div class="row justify-content-end">
  <div class="col-4">Columna</div>
</div>

<!-- Espacio entre columnas -->
<div class="row justify-content-between">
  <div class="col-4">Columna 1</div>
  <div class="col-4">Columna 2</div>
</div>

<!-- Espacio alrededor -->
<div class="row justify-content-around">
  <div class="col-4">Columna 1</div>
  <div class="col-4">Columna 2</div>
</div>
```

## Offset (Desplazamiento)

Mueve columnas hacia la derecha usando `.offset-{breakpoint}-{número}`:

```html
<div class="row">
  <div class="col-4 offset-4">
    Centrada (4 columnas de ancho, desplazada 4 espacios)
  </div>
</div>

<div class="row">
  <div class="col-3 offset-3">Desplazada 3</div>
  <div class="col-3 offset-3">Desplazada 3</div>
</div>
```

### Offset Responsive

```html
<div class="row">
  <div class="col-12 col-md-6 offset-md-3">
    <!-- Móvil: Ancho completo, sin offset -->
    <!-- Tablet+: 6 columnas de ancho, centrada con offset de 3 -->
  </div>
</div>
```

## Orden de Columnas

Cambia el orden visual con `.order-{número}` (0-5):

```html
<div class="row">
  <div class="col order-3">Primero en HTML, tercero visualmente</div>
  <div class="col order-1">Segundo en HTML, primero visualmente</div>
  <div class="col order-2">Tercero en HTML, segundo visualmente</div>
</div>
```

### Orden Responsive

```html
<div class="row">
  <div class="col-12 col-md-6 order-2 order-md-1">
    <!-- Móvil: segundo -->
    <!-- Tablet+: primero -->
  </div>
  <div class="col-12 col-md-6 order-1 order-md-2">
    <!-- Móvil: primero -->
    <!-- Tablet+: segundo -->
  </div>
</div>
```

## Casos de Uso Comunes

### 1. Layout de Página Completa

```html
<div class="container">
  <!-- Header -->
  <div class="row">
    <div class="col-12">
      <header>Encabezado</header>
    </div>
  </div>
  
  <!-- Content + Sidebar -->
  <div class="row">
    <div class="col-md-8">
      <main>Contenido principal</main>
    </div>
    <div class="col-md-4">
      <aside>Sidebar</aside>
    </div>
  </div>
  
  <!-- Footer -->
  <div class="row">
    <div class="col-12">
      <footer>Pie de página</footer>
    </div>
  </div>
</div>
```

### 2. Galería de Imágenes

```html
<div class="container">
  <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
    <div class="col"><img src="img1.jpg" class="img-fluid"></div>
    <div class="col"><img src="img2.jpg" class="img-fluid"></div>
    <div class="col"><img src="img3.jpg" class="img-fluid"></div>
    <div class="col"><img src="img4.jpg" class="img-fluid"></div>
    <!-- Más imágenes... -->
  </div>
</div>
```

### 3. Tarjetas de Productos

```html
<div class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
    <div class="col">
      <div class="card">
        <img src="producto1.jpg" class="card-img-top">
        <div class="card-body">
          <h5>Producto 1</h5>
          <p>$99.99</p>
        </div>
      </div>
    </div>
    <!-- Más productos... -->
  </div>
</div>
```

### 4. Formulario con Columnas

```html
<div class="container">
  <form>
    <div class="row g-3">
      <div class="col-md-6">
        <label>Nombre</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-md-6">
        <label>Apellido</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-12">
        <label>Dirección</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-md-6">
        <label>Ciudad</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-md-4">
        <label>Estado</label>
        <select class="form-control">...</select>
      </div>
      <div class="col-md-2">
        <label>Código Postal</label>
        <input type="text" class="form-control">
      </div>
    </div>
  </form>
</div>
```

## Mejores Prácticas

1. **Siempre usa un contenedor:** El grid debe estar dentro de `.container` o `.container-fluid`

2. **Las columnas deben estar dentro de filas:** Nunca coloques `.col` directamente en el contenedor

3. **No excedas 12 columnas por fila:** Si sumas más de 12, las columnas extra saltarán a la siguiente línea

4. **Mobile-first:** Define primero para móviles, luego añade breakpoints mayores
   ```html
   <!-- ✓ Correcto -->
   <div class="col-12 col-md-6 col-lg-4"></div>
   
   <!-- ✗ Incorrecto -->
   <div class="col-lg-4 col-md-6 col-12"></div>
   ```

5. **Usa `.row-cols-*` para grids uniformes:** Es más limpio que repetir la clase en cada columna

6. **Prueba en diferentes tamaños:** Usa las herramientas de desarrollo (F12 → Responsive mode)

7. **Combina con utilidades de Bootstrap:** Margin, padding, display, etc.

8. **Anida con cuidado:** Cada grid anidado debe tener su propia `.row`

## Resumen Rápido

```html
<!-- Estructura básica -->
<div class="container">
  <div class="row">
    <div class="col-{breakpoint}-{número}">Contenido</div>
  </div>
</div>

<!-- Breakpoints -->
col-     → < 576px (móvil)
col-sm-  → ≥ 576px
col-md-  → ≥ 768px
col-lg-  → ≥ 992px
col-xl-  → ≥ 1200px
col-xxl- → ≥ 1400px

<!-- Sistema de 12 columnas -->
.col-12  → 100% ancho
.col-6   → 50% ancho
.col-4   → 33.33% ancho
.col-3   → 25% ancho

<!-- Espaciado -->
.g-0 a .g-5    → Ambas direcciones
.gx-0 a .gx-5  → Horizontal
.gy-0 a .gy-5  → Vertical
```

## Recursos Adicionales

- [Documentación oficial - Grid System](https://getbootstrap.com/docs/5.0/layout/grid/)
- [Documentación oficial - Columns](https://getbootstrap.com/docs/5.0/layout/columns/)
- [Documentación oficial - Gutters](https://getbootstrap.com/docs/5.0/layout/gutters/)
