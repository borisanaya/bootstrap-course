# Offcanvas (Panel Lateral)

## ¿Qué es el Offcanvas?

El **Offcanvas** es un componente de Bootstrap que muestra contenido oculto desde los bordes del viewport (pantalla). Es perfecto para crear menús laterales, paneles de navegación, carritos de compra, filtros y más, especialmente en dispositivos móviles.

## Características Principales

- **4 posiciones**: Izquierda, derecha, arriba, abajo
- **Overlay**: Fondo oscuro semitransparente
- **Backdrop**: Se puede cerrar haciendo clic fuera
- **Responsive**: Perfecto para menús móviles
- **Scrollable**: Contenido desplazable si es largo
- **Accesible**: Soporte para teclado y lectores de pantalla

## Estructura Básica

```html
<!-- Botón para abrir el offcanvas -->
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
  Abrir Offcanvas
</button>

<!-- Offcanvas -->
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Título del Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Contenido del offcanvas...</p>
  </div>
</div>
```

## Clases Principales

### Contenedor Principal
- **`.offcanvas`**: Clase base necesaria
- **`.offcanvas-{direction}`**: Posición del panel
  - `offcanvas-start`: Desde la izquierda
  - `offcanvas-end`: Desde la derecha
  - `offcanvas-top`: Desde arriba
  - `offcanvas-bottom`: Desde abajo

### Secciones
- **`.offcanvas-header`**: Encabezado con título y botón cerrar
- **`.offcanvas-title`**: Título del offcanvas
- **`.offcanvas-body`**: Contenido principal
- **`.btn-close`**: Botón de cierre

## Atributos Data

### Para abrir:
- **`data-bs-toggle="offcanvas"`**: Activa el comportamiento
- **`data-bs-target="#id"`**: Especifica qué offcanvas abrir

### Para cerrar:
- **`data-bs-dismiss="offcanvas"`**: Cierra el offcanvas

### Opciones:
- **`data-bs-backdrop="true|false|static"`**: Controla el backdrop
- **`data-bs-scroll="true"`**: Permite scroll del body
- **`data-bs-keyboard="false"`**: Deshabilita cierre con ESC

## Posiciones

### Desde la Izquierda (Start)
```html
<div class="offcanvas offcanvas-start" id="offcanvasLeft">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Offcanvas Izquierda</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    Contenido desde la izquierda
  </div>
</div>
```

### Desde la Derecha (End)
```html
<div class="offcanvas offcanvas-end" id="offcanvasRight">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Offcanvas Derecha</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    Contenido desde la derecha
  </div>
</div>
```

### Desde Arriba (Top)
```html
<div class="offcanvas offcanvas-top" id="offcanvasTop">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Offcanvas Arriba</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    Contenido desde arriba
  </div>
</div>
```

### Desde Abajo (Bottom)
```html
<div class="offcanvas offcanvas-bottom" id="offcanvasBottom">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Offcanvas Abajo</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    Contenido desde abajo
  </div>
</div>
```

## Offcanvas con Backdrop

### Backdrop Normal (default)
```html
<!-- Se cierra haciendo clic fuera -->
<div class="offcanvas offcanvas-start" id="offcanvasBackdrop">
  <!-- Contenido -->
</div>
```

### Backdrop Estático (no se cierra haciendo clic fuera)
```html
<button class="btn btn-primary" 
        data-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasStatic"
        data-bs-backdrop="static">
  Offcanvas Estático
</button>

<div class="offcanvas offcanvas-start" id="offcanvasStatic">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Solo se cierra con el botón</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    Este offcanvas solo se cierra con el botón X o ESC
  </div>
</div>
```

### Sin Backdrop
```html
<button class="btn btn-primary" 
        data-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasNoBackdrop"
        data-bs-backdrop="false">
  Sin Backdrop
</button>

<div class="offcanvas offcanvas-start" id="offcanvasNoBackdrop">
  <!-- Contenido -->
</div>
```

## Offcanvas con Scroll del Body

Permite hacer scroll en la página mientras el offcanvas está abierto:

```html
<button class="btn btn-primary" 
        data-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasScrolling"
        data-bs-scroll="true"
        data-bs-backdrop="false">
  Con Scroll
</button>

<div class="offcanvas offcanvas-start" id="offcanvasScrolling">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Offcanvas con scroll</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    Puedes hacer scroll en la página detrás
  </div>
</div>
```

## Offcanvas como Menú de Navegación

```html
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav">
  <i class="bi bi-list"></i> Menú
</button>

<div class="offcanvas offcanvas-start" id="offcanvasNav">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Menú de Navegación</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body p-0">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <a href="#" class="text-decoration-none text-dark">
          <i class="bi bi-house-door me-2"></i>Inicio
        </a>
      </li>
      <li class="list-group-item">
        <a href="#" class="text-decoration-none text-dark">
          <i class="bi bi-person me-2"></i>Perfil
        </a>
      </li>
      <li class="list-group-item">
        <a href="#" class="text-decoration-none text-dark">
          <i class="bi bi-gear me-2"></i>Configuración
        </a>
      </li>
      <li class="list-group-item">
        <a href="#" class="text-decoration-none text-dark">
          <i class="bi bi-box-arrow-right me-2"></i>Salir
        </a>
      </li>
    </ul>
  </div>
</div>
```

## Offcanvas con Navbar

Integración perfecta con navbar responsive:

```html
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Mi Sitio</a>
    <button class="navbar-toggler" type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="offcanvas offcanvas-end" id="offcanvasNavbar">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Menú</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3">
          <input class="form-control me-2" type="search" placeholder="Buscar">
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </div>
</nav>
```

## Casos de Uso Comunes

1. **Menú móvil**: Navegación principal en dispositivos pequeños
2. **Carrito de compras**: Ver productos añadidos al carrito
3. **Filtros**: Opciones de filtrado en e-commerce
4. **Notificaciones**: Panel de notificaciones
5. **Configuración**: Opciones de usuario
6. **Chat**: Ventana de chat lateral
7. **Dashboard sidebar**: Menú lateral en admin panels

## JavaScript

### Abrir/cerrar programáticamente
```javascript
// Obtener el offcanvas
const offcanvasElement = document.getElementById('myOffcanvas');
const offcanvas = new bootstrap.Offcanvas(offcanvasElement);

// Mostrar
offcanvas.show();

// Ocultar
offcanvas.hide();

// Toggle
offcanvas.toggle();
```

### Eventos del Offcanvas
```javascript
const myOffcanvas = document.getElementById('myOffcanvas');

// Antes de mostrarse
myOffcanvas.addEventListener('show.bs.offcanvas', function (event) {
  console.log('Offcanvas está por mostrarse');
});

// Cuando se ha mostrado completamente
myOffcanvas.addEventListener('shown.bs.offcanvas', function (event) {
  console.log('Offcanvas completamente visible');
});

// Antes de ocultarse
myOffcanvas.addEventListener('hide.bs.offcanvas', function (event) {
  console.log('Offcanvas está por ocultarse');
  // Puedes prevenir el cierre
  // event.preventDefault();
});

// Cuando se ha ocultado completamente
myOffcanvas.addEventListener('hidden.bs.offcanvas', function (event) {
  console.log('Offcanvas completamente oculto');
});
```

### Cargar contenido dinámicamente
```javascript
const offcanvasElement = document.getElementById('dynamicOffcanvas');

offcanvasElement.addEventListener('show.bs.offcanvas', async function (event) {
  const button = event.relatedTarget;
  const userId = button.getAttribute('data-user-id');
  
  // Mostrar loading
  const body = this.querySelector('.offcanvas-body');
  body.innerHTML = '<div class="text-center"><div class="spinner-border"></div></div>';
  
  // Cargar datos
  const response = await fetch(`/api/users/${userId}`);
  const user = await response.json();
  
  // Actualizar contenido
  body.innerHTML = `
    <h6>${user.name}</h6>
    <p>${user.email}</p>
  `;
});
```

## Ejemplos Avanzados

### Carrito de Compras
```html
<button class="btn btn-primary position-relative" 
        data-bs-toggle="offcanvas" 
        data-bs-target="#cartOffcanvas">
  <i class="bi bi-cart3"></i>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    3
  </span>
</button>

<div class="offcanvas offcanvas-end" id="cartOffcanvas">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Carrito de Compras</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    <!-- Items del carrito -->
    <div class="d-flex align-items-center mb-3 border-bottom pb-3">
      <img src="product1.jpg" width="60" class="me-3" alt="">
      <div class="flex-grow-1">
        <h6 class="mb-1">Producto 1</h6>
        <small class="text-muted">€29.99</small>
      </div>
      <button class="btn btn-sm btn-outline-danger">
        <i class="bi bi-trash"></i>
      </button>
    </div>
    
    <!-- Más items... -->
    
    <div class="mt-auto">
      <div class="d-flex justify-content-between mb-3">
        <strong>Total:</strong>
        <strong>€89.97</strong>
      </div>
      <button class="btn btn-primary w-100">Proceder al Pago</button>
    </div>
  </div>
</div>
```

### Panel de Filtros
```html
<button class="btn btn-outline-primary" 
        data-bs-toggle="offcanvas" 
        data-bs-target="#filtersOffcanvas">
  <i class="bi bi-funnel"></i> Filtros
</button>

<div class="offcanvas offcanvas-start" id="filtersOffcanvas">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Filtrar Productos</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    <!-- Categorías -->
    <h6>Categoría</h6>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="cat1">
      <label class="form-check-label" for="cat1">Electrónica</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="cat2">
      <label class="form-check-label" for="cat2">Ropa</label>
    </div>
    
    <hr>
    
    <!-- Rango de precio -->
    <h6>Precio</h6>
    <label for="priceRange" class="form-label">€0 - €1000</label>
    <input type="range" class="form-range" id="priceRange" min="0" max="1000">
    
    <hr>
    
    <!-- Marca -->
    <h6>Marca</h6>
    <select class="form-select">
      <option>Todas las marcas</option>
      <option>Samsung</option>
      <option>Apple</option>
      <option>Sony</option>
    </select>
    
    <div class="mt-4">
      <button class="btn btn-primary w-100">Aplicar Filtros</button>
      <button class="btn btn-outline-secondary w-100 mt-2">Limpiar</button>
    </div>
  </div>
</div>
```

### Panel de Notificaciones
```html
<button class="btn btn-outline-primary position-relative" 
        data-bs-toggle="offcanvas" 
        data-bs-target="#notificationsOffcanvas">
  <i class="bi bi-bell"></i>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    5
  </span>
</button>

<div class="offcanvas offcanvas-end" id="notificationsOffcanvas">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Notificaciones</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body p-0">
    <div class="list-group list-group-flush">
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h6 class="mb-1">Nueva mensaje</h6>
          <small>Hace 3 min</small>
        </div>
        <p class="mb-1">Tienes un nuevo mensaje de Juan</p>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h6 class="mb-1">Actualización disponible</h6>
          <small class="text-muted">Hace 1 hora</small>
        </div>
        <p class="mb-1">Nueva versión de la app disponible</p>
      </a>
      <!-- Más notificaciones... -->
    </div>
  </div>
</div>
```

## Personalización con CSS

```css
/* Ancho personalizado */
.offcanvas-custom-width {
  width: 400px;
}

/* Offcanvas con sombra */
.offcanvas {
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
}

/* Header con gradiente */
.offcanvas-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.offcanvas-header .btn-close {
  filter: invert(1);
}

/* Animación personalizada */
.offcanvas-start {
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Backdrop más oscuro */
.offcanvas-backdrop {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Offcanvas con bordes redondeados */
.offcanvas-end {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
```

## Mejores Prácticas

1. **Posición apropiada**: 
   - Usa `start` (izq) para navegación
   - Usa `end` (der) para carritos/acciones
2. **Mobile first**: Perfecto para menús móviles
3. **No anides offcanvas**: Evita abrir un offcanvas desde otro
4. **Contenido conciso**: No sobrecargues con demasiada información
5. **Cierre intuitivo**: Proporciona múltiples formas de cerrar
6. **Loading states**: Muestra spinners si cargas datos
7. **Accesibilidad**: Usa atributos ARIA apropiados
8. **Performance**: Carga contenido solo cuando sea necesario

## Accesibilidad

```html
<div class="offcanvas offcanvas-start" 
     id="accessibleOffcanvas" 
     tabindex="-1" 
     aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">Título Descriptivo</h5>
    <button type="button" 
            class="btn-close" 
            data-bs-dismiss="offcanvas" 
            aria-label="Cerrar"></button>
  </div>
  <div class="offcanvas-body">
    Contenido accesible
  </div>
</div>
```

## Ventajas

✅ **Ahorra espacio**: Contenido oculto hasta que se necesita  
✅ **Mobile-friendly**: Perfecto para dispositivos móviles  
✅ **Versatil**: Múltiples usos y configuraciones  
✅ **No invasivo**: No interfiere con el contenido principal  
✅ **Fácil de implementar**: Simple sintaxis con data attributes  

## Recursos

- [Documentación oficial Bootstrap Offcanvas](https://getbootstrap.com/docs/5.0/components/offcanvas/)
- Ver ejemplos en: `index-1.html`, `index-2.html`, `index-3.html`
