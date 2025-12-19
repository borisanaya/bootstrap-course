# Ejercicio 08: Sistema de Tabs con Filtros y Offcanvas

## Objetivo del Ejercicio

Crear una página de galería de productos con **Tabs** para categorías, **Offcanvas** para filtros avanzados, y **Cards** para mostrar los productos.

---

## Enunciado

Debes crear una tienda online con las siguientes características:

### Requisitos:

1. **Navbar** con:
   - Logo de la tienda
   - Botón de carrito con badge (contador)
   - Botón para abrir filtros (offcanvas)

2. **Tabs de categorías**:
   - Todos (mostrar todos los productos)
   - Electrónica
   - Ropa
   - Hogar
   
3. **12 Cards de productos** (3 por categoría):
   - Imagen
   - Nombre del producto
   - Precio
   - Botón "Añadir al carrito"
   
4. **Offcanvas lateral** (desde la izquierda) con filtros:
   - Rango de precio (input range)
   - Ordenar por (select: Precio bajo, Precio alto, Nombre)
   - Rating (checkboxes con estrellas)
   - Botón "Aplicar filtros"

5. **Grid responsive**:
   - Desktop: 3 columnas
   - Tablet: 2 columnas
   - Móvil: 1 columna

---

## Resultado Esperado

- Al cambiar de tab, mostrar solo productos de esa categoría
- Offcanvas se abre desde la izquierda con opciones de filtrado
- Cards con hover effect
- Botones funcionales que actualicen el badge del carrito

---

## Componentes Bootstrap Utilizados

- **Navbar** - Navegación principal
- **Tabs** - Categorías de productos
- **Offcanvas** - Filtros lateral
- **Cards** - Productos
- **Badges** - Contador de carrito
- **Forms** - Controles de filtros
- **Grid System** - Layout responsive

---

## Conceptos Aprendidos

✅ Navegación con tabs  
✅ Offcanvas para filtros  
✅ Galería de productos responsive  
✅ Badges dinámicos  
✅ Integración de múltiples componentes  

---

## Tutorial Paso a Paso

### Paso 1: Estructura HTML Básica

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ejercicio 08 - Tienda Online</title>
  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
  
  <style>
    body { padding-top: 56px; }
    
    .product-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .product-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    }
    
    .product-img {
      height: 200px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
      color: white;
    }
  </style>
</head>
<body>

  <!-- Aquí irá el contenido -->

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**¿Qué hemos hecho?**
- `padding-top: 56px`: Compensar navbar fijo
- Efectos hover para las cards de productos
- Imágenes simuladas con gradientes

---

### Paso 2: Navbar con Carrito y Filtros

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">
      <i class="bi bi-shop me-2"></i>MiTienda
    </a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <button class="btn btn-outline-light me-2" data-bs-toggle="offcanvas" 
                  data-bs-target="#filtersOffcanvas">
            <i class="bi bi-funnel"></i> Filtros
          </button>
        </li>
        <li class="nav-item">
          <button class="btn btn-primary position-relative">
            <i class="bi bi-cart3"></i> Carrito
            <span class="position-absolute top-0 start-100 translate-middle badge 
                         rounded-pill bg-danger" id="cartBadge">0</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

**Explicación:**
- Badge con `position-absolute` para contador del carrito
- Botón para abrir offcanvas de filtros
- Navbar responsive con collapse

---

### Paso 3: Tabs de Categorías

```html
<div class="container mt-4">
  <h1 class="text-center mb-4">Nuestros Productos</h1>
  
  <ul class="nav nav-pills justify-content-center mb-4" id="categoryTabs">
    <li class="nav-item">
      <button class="nav-link active" data-bs-toggle="pill" data-category="all">
        Todos
      </button>
    </li>
    <li class="nav-item">
      <button class="nav-link" data-bs-toggle="pill" data-category="electronics">
        Electrónica
      </button>
    </li>
    <li class="nav-item">
      <button class="nav-link" data-bs-toggle="pill" data-category="clothing">
        Ropa
      </button>
    </li>
    <li class="nav-item">
      <button class="nav-link" data-bs-toggle="pill" data-category="home">
        Hogar
      </button>
    </li>
  </ul>
</div>
```

**Conceptos:**
- `nav-pills`: Estilo de píldoras para las tabs
- `data-category`: Atributo personalizado para filtrado
- `justify-content-center`: Centrar las tabs

---

### Paso 4: Grid de Productos

```html
<div class="row g-4 mb-5" id="productsGrid">
  <!-- Producto 1 - Electrónica -->
  <div class="col-12 col-md-6 col-lg-4 product-item" data-category="electronics">
    <div class="card product-card h-100">
      <div class="product-img">
        <i class="bi bi-laptop"></i>
      </div>
      <div class="card-body">
        <span class="badge bg-primary mb-2">Electrónica</span>
        <h5 class="card-title">Laptop Pro 15"</h5>
        <p class="text-muted">Potente laptop para profesionales</p>
        <div class="d-flex justify-content-between align-items-center">
          <h4 class="text-primary mb-0">€999</h4>
          <button class="btn btn-primary btn-sm" onclick="addToCart(this)">
            <i class="bi bi-cart-plus"></i> Añadir
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Producto 2 - Electrónica -->
  <div class="col-12 col-md-6 col-lg-4 product-item" data-category="electronics">
    <div class="card product-card h-100">
      <div class="product-img">
        <i class="bi bi-phone"></i>
      </div>
      <div class="card-body">
        <span class="badge bg-primary mb-2">Electrónica</span>
        <h5 class="card-title">Smartphone XYZ</h5>
        <p class="text-muted">Última generación de smartphones</p>
        <div class="d-flex justify-content-between align-items-center">
          <h4 class="text-primary mb-0">€699</h4>
          <button class="btn btn-primary btn-sm" onclick="addToCart(this)">
            <i class="bi bi-cart-plus"></i> Añadir
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Producto 3 - Electrónica -->
  <div class="col-12 col-md-6 col-lg-4 product-item" data-category="electronics">
    <div class="card product-card h-100">
      <div class="product-img">
        <i class="bi bi-headphones"></i>
      </div>
      <div class="card-body">
        <span class="badge bg-primary mb-2">Electrónica</span>
        <h5 class="card-title">Auriculares Premium</h5>
        <p class="text-muted">Sonido de alta calidad</p>
        <div class="d-flex justify-content-between align-items-center">
          <h4 class="text-primary mb-0">€149</h4>
          <button class="btn btn-primary btn-sm" onclick="addToCart(this)">
            <i class="bi bi-cart-plus"></i> Añadir
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Producto 4 - Ropa -->
  <div class="col-12 col-md-6 col-lg-4 product-item" data-category="clothing">
    <div class="card product-card h-100">
      <div class="product-img">
        <i class="bi bi-bag"></i>
      </div>
      <div class="card-body">
        <span class="badge bg-success mb-2">Ropa</span>
        <h5 class="card-title">Chaqueta de Cuero</h5>
        <p class="text-muted">Estilo y comodidad</p>
        <div class="d-flex justify-content-between align-items-center">
          <h4 class="text-primary mb-0">€89</h4>
          <button class="btn btn-primary btn-sm" onclick="addToCart(this)">
            <i class="bi bi-cart-plus"></i> Añadir
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Agregar más productos similares para las categorías Ropa y Hogar -->
  <!-- Total: 12 productos (3 por categoría) -->
</div>
```

**Explicación:**
- Grid responsive: `col-12 col-md-6 col-lg-4` (1, 2, 3 columnas)
- `data-category`: Identificar categoría para filtrado
- `h-100`: Todas las cards con la misma altura

---

### Paso 5: Offcanvas de Filtros

```html
<div class="offcanvas offcanvas-start" id="filtersOffcanvas" tabindex="-1">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">
      <i class="bi bi-funnel me-2"></i>Filtros
    </h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  
  <div class="offcanvas-body">
    <!-- Filtro de precio -->
    <div class="mb-4">
      <label class="form-label"><strong>Rango de Precio</strong></label>
      <input type="range" class="form-range" min="0" max="1000" 
             value="1000" id="priceRange">
      <div class="d-flex justify-content-between">
        <small>€0</small>
        <small id="priceValue">€1000</small>
      </div>
    </div>
    
    <!-- Ordenar por -->
    <div class="mb-4">
      <label class="form-label"><strong>Ordenar por</strong></label>
      <select class="form-select" id="sortBy">
        <option value="default">Por defecto</option>
        <option value="price-low">Precio: Menor a Mayor</option>
        <option value="price-high">Precio: Mayor a Menor</option>
        <option value="name">Nombre A-Z</option>
      </select>
    </div>
    
    <!-- Rating -->
    <div class="mb-4">
      <label class="form-label"><strong>Valoración</strong></label>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="stars5">
        <label class="form-check-label" for="stars5">
          <i class="bi bi-star-fill text-warning"></i>
          <i class="bi bi-star-fill text-warning"></i>
          <i class="bi bi-star-fill text-warning"></i>
          <i class="bi bi-star-fill text-warning"></i>
          <i class="bi bi-star-fill text-warning"></i>
          y más
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="stars4">
        <label class="form-check-label" for="stars4">
          <i class="bi bi-star-fill text-warning"></i>
          <i class="bi bi-star-fill text-warning"></i>
          <i class="bi bi-star-fill text-warning"></i>
          <i class="bi bi-star-fill text-warning"></i>
          <i class="bi bi-star text-warning"></i>
          y más
        </label>
      </div>
    </div>
    
    <button class="btn btn-primary w-100" onclick="applyFilters()">
      <i class="bi bi-check-circle"></i> Aplicar Filtros
    </button>
    <button class="btn btn-outline-secondary w-100 mt-2" onclick="resetFilters()">
      <i class="bi bi-arrow-counterclockwise"></i> Restablecer
    </button>
  </div>
</div>
```

**Conceptos:**
- `offcanvas-start`: Panel desde la izquierda
- `form-range`: Input tipo slider
- Checkboxes con estrellas para rating

---

### Paso 6: JavaScript - Filtrar por Categoría

```html
<script>
let cartCount = 0;

// Filtrar productos por categoría (tabs)
document.querySelectorAll('#categoryTabs button').forEach(btn => {
  btn.addEventListener('click', function() {
    const category = this.getAttribute('data-category');
    
    document.querySelectorAll('.product-item').forEach(item => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
</script>
```

**Explicación:**
- Escuchar clicks en todas las tabs
- Mostrar/ocultar productos según categoría
- `category === 'all'`: Mostrar todos los productos

---

### Paso 7: JavaScript - Añadir al Carrito

```javascript
// Añadir al carrito
function addToCart(button) {
  cartCount++;
  document.getElementById('cartBadge').textContent = cartCount;
  
  // Efecto visual
  button.innerHTML = '<i class="bi bi-check"></i> Añadido';
  button.classList.remove('btn-primary');
  button.classList.add('btn-success');
  button.disabled = true;
  
  // Opcional: Toast de confirmación
  showToast('Producto añadido al carrito');
}

// Toast opcional
function showToast(message) {
  // Implementar toast si se desea
  console.log(message);
}
```

**Conceptos:**
- Incrementar contador del carrito
- Cambiar estilo del botón tras añadir
- Deshabilitar botón para evitar duplicados

---

### Paso 8: JavaScript - Aplicar Filtros

```javascript
// Actualizar precio en tiempo real
document.getElementById('priceRange').addEventListener('input', function() {
  document.getElementById('priceValue').textContent = '€' + this.value;
});

// Aplicar filtros
function applyFilters() {
  const maxPrice = parseInt(document.getElementById('priceRange').value);
  const sortBy = document.getElementById('sortBy').value;
  
  alert(`Filtros aplicados:\nPrecio máximo: €${maxPrice}\nOrdenar por: ${sortBy}`);
  
  // Aquí implementarías la lógica de filtrado real
  // Por simplicidad, solo mostramos un mensaje
}

// Restablecer filtros
function resetFilters() {
  document.getElementById('priceRange').value = 1000;
  document.getElementById('priceValue').textContent = '€1000';
  document.getElementById('sortBy').value = 'default';
  document.querySelectorAll('.form-check-input').forEach(cb => cb.checked = false);
}
</script>
```

**Explicación:**
- Actualizar valor del slider en tiempo real
- Función para aplicar filtros (puede extenderse)
- Restablecer todos los filtros a valores por defecto

---

## Componentes Bootstrap Utilizados

1. **Navbar** - Navegación principal con carrito
2. **Tabs (Pills)** - Filtrar por categorías
3. **Offcanvas** - Panel lateral de filtros
4. **Cards** - Mostrar productos
5. **Grid System** - Layout responsive
6. **Badges** - Contador del carrito y categorías
7. **Forms** - Inputs de filtros (range, select, checkbox)
8. **Buttons** - Acciones

---

## Mejoras Opcionales

1. **Carrito completo**: Modal que muestre los productos añadidos
2. **Búsqueda**: Input para buscar productos por nombre
3. **Favoritos**: Botón de corazón para guardar favoritos
4. **Paginación**: Dividir productos en múltiples páginas
5. **Imágenes reales**: Reemplazar iconos con imágenes de productos
6. **LocalStorage**: Persistir carrito entre sesiones

---

## Desafíos Adicionales

1. Implementar filtrado real por precio (ocultar productos fuera del rango)
2. Ordenar productos dinámicamente según el select
3. Añadir animaciones al cambiar de categoría
4. Crear modal de detalle de producto al hacer clic en la card
5. Implementar un sistema de wishlist (lista de deseos)

---

## Conceptos Aprendidos

✅ Navegación con tabs (pills)  
✅ Offcanvas para filtros laterales  
✅ Galería de productos responsive  
✅ Badges dinámicos con JavaScript  
✅ Integración de múltiples componentes  
✅ Filtrado y ordenamiento de elementos  
✅ Efectos visuales y feedback al usuario  
