# Ejercicio 02: Galería de Productos Responsive

## Objetivo del Ejercicio

Crear una **galería de productos responsive** usando el **Sistema Grid de Bootstrap**. Aprenderás a organizar múltiples elementos en una cuadrícula que se adapta automáticamente a diferentes tamaños de pantalla.

---

## Enunciado

Debes crear una página con una galería de 6 productos organizados en una cuadrícula responsive.

### Requisitos:

1. **Título principal** centrado: "Nuestros Productos"
2. **6 tarjetas de producto** con la siguiente información cada una:
   - Imagen del producto
   - Nombre del producto
   - Precio
   - Botón "Añadir al carrito"

3. **Distribución responsive**:
   - **Móvil** (< 768px): 1 tarjeta por fila
   - **Tablet** (≥ 768px): 2 tarjetas por fila
   - **Desktop** (≥ 992px): 3 tarjetas por fila

4. **Todas las tarjetas deben tener la misma altura** (height uniform)

5. **Espacio entre tarjetas** (gutters)

---

## Resultado Esperado

Tu galería debe:
- Mostrar 6 productos en una cuadrícula
- Adaptarse automáticamente al tamaño de pantalla
- Todas las tarjetas con la misma altura
- Espacio uniforme entre tarjetas
- Hover effect en las tarjetas

---

## Tutorial Paso a Paso

### Paso 1: Crear la Estructura Base

Crea `ejercicio-02.html` con la estructura básica:

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ejercicio 02 - Galería de Productos</title>
  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  
  <style>
    body {
      padding: 40px 0;
    }
    .card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
  </style>
</head>
<body class="bg-light">

  <!-- Aquí irá el contenido -->

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Nota sobre el CSS:**
- `padding: 40px 0`: Espaciado arriba y abajo del body
- `transition`: Anima el hover effect
- `transform` y `box-shadow`: Efecto de elevación al pasar el mouse

---

### Paso 2: Crear el Contenedor y Título

```html
<body class="bg-light">
  <div class="container">
    <h1 class="text-center mb-5">Nuestros Productos</h1>
    
    <!-- Aquí irá la galería -->
  </div>
</body>
```

**¿Qué hemos hecho?**
- `container`: Centra el contenido y limita el ancho máximo
- `text-center`: Centra el título
- `mb-5`: Margin bottom grande (3rem = 48px)

---

### Paso 3: Crear la Fila (Row)

Dentro del container, después del título:

```html
<div class="row g-4">
  <!-- Aquí irán las columnas con las tarjetas -->
</div>
```

**¿Qué es `row`?**
- Componente fundamental del sistema Grid de Bootstrap
- Contiene columnas (`col`)
- `g-4`: Gutter (espacio entre columnas) de 1.5rem

**Otros valores de gutter:**
- `g-0`: Sin espacio
- `g-1`: Espacio pequeño
- `g-2`, `g-3`: Espacios intermedios
- `g-4`, `g-5`: Espacios grandes

---

### Paso 4: Crear la Primera Columna

Dentro del `row`, añade la primera columna:

```html
<div class="row g-4">
  <div class="col-lg-4 col-md-6">
    <!-- Aquí irá la tarjeta -->
  </div>
</div>
```

**¿Qué significan estas clases?**
- `col-lg-4`: En pantallas grandes (≥ 992px), ocupa 4/12 columnas (33.33%)
- `col-md-6`: En pantallas medianas (≥ 768px), ocupa 6/12 columnas (50%)
- **Sin prefijo**: En móvil (< 768px), ocupa 12/12 columnas (100%)

**Resultado:**
- **Desktop**: 3 tarjetas por fila (12 ÷ 4 = 3)
- **Tablet**: 2 tarjetas por fila (12 ÷ 6 = 2)
- **Móvil**: 1 tarjeta por fila (12 ÷ 12 = 1)

---

### Paso 5: Crear la Tarjeta

Dentro de la columna:

```html
<div class="col-lg-4 col-md-6">
  <div class="card h-100 border-0 shadow-sm">
    <img src="https://via.placeholder.com/400x300/28a745/ffffff?text=Producto+1" 
         class="card-img-top" 
         alt="Producto 1">
    <div class="card-body">
      <h5 class="card-title">Laptop Gaming</h5>
      <p class="card-text text-muted">Procesador Intel i7, 16GB RAM</p>
      <div class="d-flex justify-content-between align-items-center">
        <span class="h5 mb-0 text-primary">€1,299</span>
        <a href="#" class="btn btn-primary btn-sm">Añadir</a>
      </div>
    </div>
  </div>
</div>
```

**Clases importantes:**
- `h-100`: Height 100% (todas las tarjetas tendrán la misma altura)
- `border-0`: Sin borde
- `shadow-sm`: Sombra pequeña
- `d-flex justify-content-between`: Precio y botón separados
- `align-items-center`: Alineación vertical
- `mb-0`: Sin margin bottom en el precio

---

### Paso 6: Duplicar para Crear 6 Productos

Ahora copia la estructura de columna + tarjeta 5 veces más, cambiando:
- La imagen (color y texto)
- El nombre del producto
- La descripción
- El precio

**Productos sugeridos:**

1. **Laptop Gaming** - €1,299 (verde `#28a745`)
2. **Smartphone Pro** - €899 (azul `#007bff`)
3. **Tablet Ultra** - €549 (morado `#6f42c1`)
4. **Smartwatch** - €299 (cyan `#17a2b8`)
5. **Auriculares BT** - €149 (naranja `#fd7e14`)
6. **Cámara 4K** - €799 (rojo `#dc3545`)

**Ejemplo completo de la estructura:**

```html
<div class="row g-4">
  <!-- Producto 1 -->
  <div class="col-lg-4 col-md-6">
    <div class="card h-100 border-0 shadow-sm">
      <img src="https://via.placeholder.com/400x300/28a745/ffffff?text=Laptop" 
           class="card-img-top" alt="Laptop">
      <div class="card-body">
        <h5 class="card-title">Laptop Gaming</h5>
        <p class="card-text text-muted">Procesador Intel i7, 16GB RAM</p>
        <div class="d-flex justify-content-between align-items-center">
          <span class="h5 mb-0 text-primary">€1,299</span>
          <a href="#" class="btn btn-primary btn-sm">Añadir</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Producto 2 -->
  <div class="col-lg-4 col-md-6">
    <div class="card h-100 border-0 shadow-sm">
      <img src="https://via.placeholder.com/400x300/007bff/ffffff?text=Smartphone" 
           class="card-img-top" alt="Smartphone">
      <div class="card-body">
        <h5 class="card-title">Smartphone Pro</h5>
        <p class="card-text text-muted">Pantalla 6.5", Cámara 48MP</p>
        <div class="d-flex justify-content-between align-items-center">
          <span class="h5 mb-0 text-primary">€899</span>
          <a href="#" class="btn btn-primary btn-sm">Añadir</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Producto 3 -->
  <div class="col-lg-4 col-md-6">
    <div class="card h-100 border-0 shadow-sm">
      <img src="https://via.placeholder.com/400x300/6f42c1/ffffff?text=Tablet" 
           class="card-img-top" alt="Tablet">
      <div class="card-body">
        <h5 class="card-title">Tablet Ultra</h5>
        <p class="card-text text-muted">11 pulgadas, 128GB</p>
        <div class="d-flex justify-content-between align-items-center">
          <span class="h5 mb-0 text-primary">€549</span>
          <a href="#" class="btn btn-primary btn-sm">Añadir</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Producto 4 -->
  <div class="col-lg-4 col-md-6">
    <div class="card h-100 border-0 shadow-sm">
      <img src="https://via.placeholder.com/400x300/17a2b8/ffffff?text=Smartwatch" 
           class="card-img-top" alt="Smartwatch">
      <div class="card-body">
        <h5 class="card-title">Smartwatch</h5>
        <p class="card-text text-muted">Monitor de salud, GPS</p>
        <div class="d-flex justify-content-between align-items-center">
          <span class="h5 mb-0 text-primary">€299</span>
          <a href="#" class="btn btn-primary btn-sm">Añadir</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Producto 5 -->
  <div class="col-lg-4 col-md-6">
    <div class="card h-100 border-0 shadow-sm">
      <img src="https://via.placeholder.com/400x300/fd7e14/ffffff?text=Auriculares" 
           class="card-img-top" alt="Auriculares">
      <div class="card-body">
        <h5 class="card-title">Auriculares BT</h5>
        <p class="card-text text-muted">Cancelación de ruido activa</p>
        <div class="d-flex justify-content-between align-items-center">
          <span class="h5 mb-0 text-primary">€149</span>
          <a href="#" class="btn btn-primary btn-sm">Añadir</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Producto 6 -->
  <div class="col-lg-4 col-md-6">
    <div class="card h-100 border-0 shadow-sm">
      <img src="https://via.placeholder.com/400x300/dc3545/ffffff?text=Camara" 
           class="card-img-top" alt="Cámara">
      <div class="card-body">
        <h5 class="card-title">Cámara 4K</h5>
        <p class="card-text text-muted">Video 4K, Lente intercambiable</p>
        <div class="d-flex justify-content-between align-items-center">
          <span class="h5 mb-0 text-primary">€799</span>
          <a href="#" class="btn btn-primary btn-sm">Añadir</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## 🎨 Mejoras Opcionales

### 1. Añadir Badges de Descuento

En algunas tarjetas, añade un badge:

```html
<div class="card-body">
  <span class="badge bg-danger mb-2">-20%</span>
  <h5 class="card-title">Producto</h5>
  <!-- resto del contenido -->
</div>
```

### 2. Añadir Rating (Estrellas)

Después del título:

```html
<div class="mb-2">
  <i class="text-warning">★★★★★</i>
  <small class="text-muted">(128)</small>
</div>
```

### 3. Añadir Stock

En la sección del precio:

```html
<div>
  <span class="h5 mb-0 text-primary">€1,299</span>
  <small class="d-block text-success">En stock</small>
</div>
```

### 4. Hacer las Imágenes Uniformes

En el `<style>`:

```css
.card-img-top {
  height: 250px;
  object-fit: cover;
}
```

---

## Entendiendo el Sistema Grid

### Breakpoints de Bootstrap:

| Breakpoint | Tamaño | Prefijo | Dispositivo |
|------------|--------|---------|-------------|
| Extra small | < 576px | (ninguno) | Móvil vertical |
| Small | ≥ 576px | `sm` | Móvil horizontal |
| Medium | ≥ 768px | `md` | Tablet |
| Large | ≥ 992px | `lg` | Desktop |
| Extra large | ≥ 1200px | `xl` | Desktop grande |
| XXL | ≥ 1400px | `xxl` | Desktop muy grande |

### Sistema de 12 Columnas:

Bootstrap divide el ancho en **12 columnas**. Ejemplos:

```html
<!-- 1 tarjeta por fila (100%) -->
<div class="col-12">...</div>

<!-- 2 tarjetas por fila (50% cada una) -->
<div class="col-6">...</div>

<!-- 3 tarjetas por fila (33.33% cada una) -->
<div class="col-4">...</div>

<!-- 4 tarjetas por fila (25% cada una) -->
<div class="col-3">...</div>
```

### Responsive Combinado:

```html
<div class="col-12 col-sm-6 col-md-4 col-lg-3">
  <!-- Móvil: 100% (1 por fila)
       Tablet: 50% (2 por fila)
       Desktop: 33% (3 por fila)
       Desktop grande: 25% (4 por fila) -->
</div>
```

---

## Errores Comunes

### Error 1: Las tarjetas no tienen la misma altura
**Problema**: Falta la clase `h-100`
**Solución**: Añade `h-100` a todas las tarjetas

### Error 2: No hay espacio entre tarjetas
**Problema**: Falta la clase `g-4` en el `row`
**Solución**: Añade `g-4` al div con clase `row`

### Error 3: En móvil se ven varias columnas apretadas
**Problema**: Especificaste solo `col-lg-4` sin `col-md-6`
**Solución**: Siempre define el comportamiento en tablet: `col-md-6`

### Error 4: Las imágenes tienen diferentes alturas
**Problema**: Las imágenes placeholder tienen diferentes proporciones
**Solución**: Usa CSS para fijar la altura:
```css
.card-img-top {
  height: 250px;
  object-fit: cover;
}
```

---

## Checklist Final

- [ ] 6 productos en total
- [ ] Clase `row g-4` para el contenedor de columnas
- [ ] Cada producto en `<div class="col-lg-4 col-md-6">`
- [ ] Cada tarjeta tiene `h-100`
- [ ] Todas las tarjetas tienen imagen, título, descripción, precio y botón
- [ ] El layout cambia según el tamaño de pantalla:
  - [ ] Móvil: 1 columna
  - [ ] Tablet: 2 columnas
  - [ ] Desktop: 3 columnas
- [ ] Hover effect funciona
- [ ] Todas las imágenes cargan correctamente

---

## Conceptos Aprendidos

En este ejercicio has aprendido:

 **Sistema Grid de Bootstrap** (`row`, `col`)
 **Breakpoints responsive** (`col-lg-4`, `col-md-6`)
 **Gutters** (espaciado entre columnas con `g-4`)
 **Altura uniforme** con `h-100`
 **Flexbox dentro de cards** (`d-flex`, `justify-content-between`)
 **Hover effects** con CSS
 **Placeholder images** para prototipos
 **Anidación de componentes** (cards dentro de columns dentro de rows)

---

## Siguiente Paso

¡Excelente! Has dominado el Grid System. En el **Ejercicio 03** crearás un formulario con validación en tiempo real, uno de los componentes más importantes en cualquier aplicación web.


