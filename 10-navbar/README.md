# Navbar (Barra de Navegación)

## ¿Qué es el Navbar?

El **Navbar** es uno de los componentes más importantes de Bootstrap. Es una barra de navegación responsive que proporciona un encabezado de navegación para tu sitio web o aplicación, con soporte para branding, navegación, formularios de búsqueda y más.

## Características Principales

- **Responsive**: Se colapsa automáticamente en dispositivos móviles
- **Flexible**: Soporta logos, enlaces, dropdowns, formularios y más
- **Posicionamiento**: Puede ser fijo, sticky o estático
- **Temas**: Light y dark incluidos
- **Expandible**: Control de cuándo colapsar (sm, md, lg, xl, xxl)

## Estructura Básica

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" aria-controls="navbarNav" 
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

## Clases Principales

### Contenedor
- **`.navbar`**: Clase base necesaria
- **`.container-fluid`** o **`.container`**: Contenedor interno

### Expansión Responsive
- **`.navbar-expand-{breakpoint}`**: Cuándo expandir
  - `navbar-expand-sm`: Expandir desde 576px
  - `navbar-expand-md`: Expandir desde 768px
  - `navbar-expand-lg`: Expandir desde 992px
  - `navbar-expand-xl`: Expandir desde 1200px
  - `navbar-expand-xxl`: Expandir desde 1400px

### Temas
- **`.navbar-light`**: Navbar claro (texto oscuro)
- **`.navbar-dark`**: Navbar oscuro (texto claro)

### Backgrounds
- **`.bg-{color}`**: primary, secondary, dark, light, etc.

### Elementos
- **`.navbar-brand`**: Logo o nombre de la marca
- **`.navbar-nav`**: Contenedor de navegación
- **`.nav-item`**: Cada elemento del menú
- **`.nav-link`**: Enlaces de navegación
- **`.navbar-toggler`**: Botón hamburguesa
- **`.navbar-collapse`**: Contenido colapsable

## Navbar con Logo (Brand)

### Solo Texto
```html
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Mi Sitio</a>
  </div>
</nav>
```

### Con Imagen
```html
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      Mi Sitio
    </a>
  </div>
</nav>
```

## Navbar Completo con Links

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Mi Sitio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNavAltMarkup">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>
```

## Navbar con Dropdown

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNavDropdown">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" 
             role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

## Navbar con Formulario de Búsqueda

```html
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Buscar</button>
    </form>
  </div>
</nav>
```

## Navbar Completo (con todo)

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <!-- Logo -->
    <a class="navbar-brand" href="#">
      <img src="logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
      Mi Sitio
    </a>
    
    <!-- Toggler para móvil -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarMain">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <!-- Contenido colapsable -->
    <div class="collapse navbar-collapse" id="navbarMain">
      <!-- Links de navegación (izquierda) -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sobre Nosotros</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" 
             role="button" data-bs-toggle="dropdown">
            Servicios
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Web Development</a></li>
            <li><a class="dropdown-item" href="#">Mobile Apps</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Consultoría</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contacto</a>
        </li>
      </ul>
      
      <!-- Búsqueda -->
      <form class="d-flex me-2">
        <input class="form-control me-2" type="search" placeholder="Buscar">
        <button class="btn btn-outline-light" type="submit">Buscar</button>
      </form>
      
      <!-- Botón de login (derecha) -->
      <button class="btn btn-light">Login</button>
    </div>
  </div>
</nav>
```

## Posicionamiento del Navbar

### Fixed Top (Fijo arriba)
```html
<nav class="navbar fixed-top navbar-light bg-light">
  <!-- Contenido -->
</nav>

<!-- Añade padding al body para compensar -->
<style>
  body {
    padding-top: 56px;
  }
</style>
```

### Fixed Bottom (Fijo abajo)
```html
<nav class="navbar fixed-bottom navbar-light bg-light">
  <!-- Contenido -->
</nav>
```

### Sticky Top (Se queda arriba al hacer scroll)
```html
<nav class="navbar sticky-top navbar-light bg-light">
  <!-- Contenido -->
</nav>
```

## Alineación de Contenido

### Links a la derecha
```html
<div class="collapse navbar-collapse">
  <ul class="navbar-nav ms-auto">
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
  </ul>
</div>
```

### Links centrados
```html
<div class="collapse navbar-collapse justify-content-center">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
  </ul>
</div>
```

### Distribuidos (logo izq, links centro, button der)
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
      </ul>
      <button class="btn btn-primary">Login</button>
    </div>
  </div>
</nav>
```

## Colores y Temas

### Navbar Dark (Oscuro)
```html
<nav class="navbar navbar-dark bg-dark">
  <!-- Contenido -->
</nav>

<nav class="navbar navbar-dark bg-primary">
  <!-- Contenido -->
</nav>

<nav class="navbar navbar-dark" style="background-color: #e3f2fd;">
  <!-- Contenido -->
</nav>
```

### Navbar Light (Claro)
```html
<nav class="navbar navbar-light bg-light">
  <!-- Contenido -->
</nav>

<nav class="navbar navbar-light" style="background-color: #e3f2fd;">
  <!-- Contenido -->
</nav>
```

## Navbar con Offcanvas (Móvil)

Para un menú lateral en lugar del dropdown:

```html
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Offcanvas navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Menú</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav flex-grow-1">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
```

## Casos de Uso Comunes

1. **Header principal**: Navegación del sitio web
2. **Dashboard**: Navegación de aplicación
3. **E-commerce**: Logo, categorías, búsqueda, carrito
4. **Blog**: Logo, categorías, búsqueda
5. **Portfolio**: Navegación entre secciones
6. **Admin panel**: Menú de administración

## Personalización con CSS

```css
/* Navbar con sombra */
.navbar {
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
}

/* Efecto de transparencia que cambia al scroll */
.navbar {
  transition: background-color 0.3s ease;
}

.navbar.scrolled {
  background-color: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(10px);
}

/* Links con efecto hover personalizado */
.navbar-nav .nav-link {
  position: relative;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease;
}

.navbar-nav .nav-link:hover::after {
  width: 100%;
}

/* Navbar con gradiente */
.navbar-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Animación del toggler */
.navbar-toggler {
  transition: transform 0.3s ease;
}

.navbar-toggler:hover {
  transform: scale(1.1);
}
```

## JavaScript

### Cambiar navbar al hacer scroll
```javascript
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
```

### Cerrar navbar al hacer clic en un link (móvil)
```javascript
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', function() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse);
      bsCollapse.hide();
    }
  });
});
```

### Navbar transparente que se vuelve sólido
```javascript
const navbar = document.querySelector('.navbar');

// Hacer navbar transparente inicialmente
navbar.style.backgroundColor = 'transparent';

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#ffffff';
    navbar.classList.remove('navbar-dark');
    navbar.classList.add('navbar-light');
  } else {
    navbar.style.backgroundColor = 'transparent';
    navbar.classList.remove('navbar-light');
    navbar.classList.add('navbar-dark');
  }
});
```

### Smooth scroll al hacer clic
```javascript
document.querySelectorAll('.navbar-nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
```

## Ejemplos Avanzados

### E-commerce Navbar
```html
<nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
  <div class="container">
    <a class="navbar-brand fw-bold" href="#">
      <img src="logo.png" width="40" alt=""> TiendaOnline
    </a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarStore">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarStore">
      <ul class="navbar-nav me-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
            Categorías
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Electrónica</a></li>
            <li><a class="dropdown-item" href="#">Ropa</a></li>
            <li><a class="dropdown-item" href="#">Hogar</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Ofertas</a>
        </li>
      </ul>
      
      <form class="d-flex me-3">
        <input class="form-control" type="search" placeholder="Buscar productos">
        <button class="btn btn-outline-primary ms-2" type="submit">
          <i class="bi bi-search"></i>
        </button>
      </form>
      
      <div class="d-flex">
        <a href="#" class="btn btn-outline-secondary me-2">
          <i class="bi bi-person"></i> Login
        </a>
        <a href="#" class="btn btn-primary position-relative">
          <i class="bi bi-cart3"></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            3
          </span>
        </a>
      </div>
    </div>
  </div>
</nav>
```

## Mejores Prácticas

1. **Mobile first**: Diseña primero para móvil
2. **Logo visible**: Asegúrate de que el logo siempre sea visible
3. **Máximo 7 items**: No sobrecargues el navbar con demasiados links
4. **CTA destacado**: El botón principal debe resaltar
5. **Contraste**: Asegura buen contraste entre texto y fondo
6. **Sticky cuando sea apropiado**: No todos los navbars necesitan ser fixed
7. **Accesibilidad**: Usa `aria-labels` y estructura semántica
8. **Performance**: Minimiza animaciones pesadas

## Accesibilidad

```html
<nav class="navbar navbar-expand-lg" aria-label="Navegación principal">
  <div class="container-fluid">
    <a class="navbar-brand" href="/" aria-label="Ir a página principal">
      <img src="logo.png" alt="Logo de Mi Sitio">
    </a>
    <button class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarMain"
            aria-controls="navbarMain" 
            aria-expanded="false" 
            aria-label="Alternar menú de navegación">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Resto del contenido -->
  </div>
</nav>
```

## Ventajas

✅ **Responsive automático**: Se adapta a todos los dispositivos  
✅ **Flexible**: Soporta múltiples elementos y configuraciones  
✅ **Accesible**: Diseñado con accesibilidad en mente  
✅ **Fácil de usar**: Implementación simple con clases  
✅ **Personalizable**: Fácil de estilizar según la marca  

## Recursos

- [Documentación oficial Bootstrap Navbar](https://getbootstrap.com/docs/5.0/components/navbar/)
- Ver ejemplos en: `index.html`
