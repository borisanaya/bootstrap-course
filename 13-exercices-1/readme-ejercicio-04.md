# Ejercicio 04: Navegación Completa con Offcanvas

##  Objetivo del Ejercicio

Crear una **barra de navegación profesional** con menú desplegable (dropdown), offcanvas para móviles, y múltiples secciones de contenido. Este es uno de los componentes más importantes en cualquier sitio web.

---

##  Enunciado

Debes crear una página completa con navegación avanzada que incluya:

### Requisitos de Navegación:

1. **Navbar fija** en la parte superior con:
   - Logo/marca
   - Enlaces de navegación: Inicio, Servicios (dropdown), Acerca de, Contacto
   - Buscador (input de búsqueda)
   - Botón "Login" destacado

2. **Dropdown en "Servicios"** con 3 opciones:
   - Desarrollo Web
   - Diseño Gráfico
   - Marketing Digital

3. **Offcanvas para móviles**:
   - Menú lateral que se desliza desde la izquierda
   - Incluye todos los enlaces de navegación
   - Botón para cerrar

4. **4 Secciones de contenido**:
   - Hero section
   - Sección Servicios
   - Sección Acerca de
   - Sección Contacto

5. **Smooth scroll** al hacer clic en los enlaces

---

##  Resultado Esperado

Tu página debe:
- Tener un navbar fijo que permanece visible al hacer scroll
- Dropdown funcional en desktop
- Offcanvas lateral en móvil
- Navegación fluida entre secciones
- Responsive en todos los dispositivos

---

##  Tutorial Paso a Paso

### Paso 1: Estructura Base

Crea `ejercicio-04.html`:

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ejercicio 04 - Navegación Completa</title>
  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  
  <style>
    /* Smooth scroll */
    html {
      scroll-behavior: smooth;
    }
    
    /* Espaciado para navbar fijo */
    body {
      padding-top: 76px;
    }
    
    /* Altura de secciones */
    section {
      min-height: 100vh;
      padding: 80px 0;
    }
    
    .hero-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
  </style>
</head>
<body>

  <!-- Aquí irá el navbar -->
  
  <!-- Aquí irán las secciones -->

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**CSS importante:**
- `scroll-behavior: smooth`: Scroll suave al navegar
- `padding-top: 76px`: Compensa la altura del navbar fijo
- `min-height: 100vh`: Cada sección ocupa al menos toda la pantalla

---

### Paso 2: Crear el Navbar Base

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <!-- Aquí irá el contenido del navbar -->
  </div>
</nav>
```

**Clases del navbar:**
- `navbar`: Clase base
- `navbar-expand-lg`: Se expande (horizontal) en pantallas large (≥992px)
- `navbar-dark`: Texto claro (para fondo oscuro)
- `bg-dark`: Fondo oscuro
- `fixed-top`: Fijo en la parte superior

**Alternativas:**
- `navbar-light bg-light`: Navbar claro
- `sticky-top`: Fijo solo cuando haces scroll
- `fixed-bottom`: Fijo en la parte inferior

---

### Paso 3: Añadir Logo y Botón Toggle

Dentro del `container`:

```html
<div class="container">
  <!-- Logo/Marca -->
  <a class="navbar-brand" href="#inicio">
    <strong>Mi Sitio</strong>
  </a>
  
  <!-- Botón toggle para móvil -->
  <button class="navbar-toggler" 
          type="button" 
          data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <!-- Aquí irá el offcanvas -->
</div>
```

**Componentes:**
- `navbar-brand`: Logo o nombre del sitio
- `navbar-toggler`: Botón hamburguesa (solo visible en móvil)
- `data-bs-toggle="offcanvas"`: Activa el offcanvas
- `data-bs-target="#offcanvasNavbar"`: Qué offcanvas abrir

---

### Paso 4: Crear el Offcanvas

Después del botón toggle:

```html
<!-- Offcanvas (menú lateral para móvil) -->
<div class="offcanvas offcanvas-start" 
     tabindex="-1" 
     id="offcanvasNavbar">
  
  <!-- Header del offcanvas -->
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Mi Sitio</h5>
    <button type="button" 
            class="btn-close text-reset" 
            data-bs-dismiss="offcanvas"></button>
  </div>
  
  <!-- Body del offcanvas -->
  <div class="offcanvas-body">
    <!-- Aquí irá el menú de navegación -->
  </div>
  
</div>
```

**Estructura del offcanvas:**
- `offcanvas`: Clase base
- `offcanvas-start`: Se desliza desde la izquierda
- `offcanvas-header`: Cabecera con título y botón cerrar
- `offcanvas-body`: Contenido del menú
- `btn-close`: Botón X para cerrar

**Otras opciones:**
- `offcanvas-end`: Desde la derecha
- `offcanvas-top`: Desde arriba
- `offcanvas-bottom`: Desde abajo

---

### Paso 5: Crear el Menú de Navegación

Dentro del `offcanvas-body`:

```html
<div class="offcanvas-body">
  <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
    
    <!-- Inicio -->
    <li class="nav-item">
      <a class="nav-link active" href="#inicio">Inicio</a>
    </li>
    
    <!-- Servicios (con dropdown) -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" 
         href="#" 
         id="navbarDropdown" 
         role="button" 
         data-bs-toggle="dropdown">
        Servicios
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#servicios">Desarrollo Web</a></li>
        <li><a class="dropdown-item" href="#servicios">Diseño Gráfico</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#servicios">Marketing Digital</a></li>
      </ul>
    </li>
    
    <!-- Acerca de -->
    <li class="nav-item">
      <a class="nav-link" href="#acerca">Acerca de</a>
    </li>
    
    <!-- Contacto -->
    <li class="nav-item">
      <a class="nav-link" href="#contacto">Contacto</a>
    </li>
    
  </ul>
  
  <!-- Buscador y botón login -->
  <div class="d-flex">
    <input class="form-control me-2" 
           type="search" 
           placeholder="Buscar">
    <button class="btn btn-outline-light">Login</button>
  </div>
</div>
```

**Componentes del menú:**
- `navbar-nav`: Lista de navegación
- `nav-item`: Cada elemento del menú
- `nav-link`: Enlace de navegación
- `active`: Marca el enlace activo
- `dropdown`: Contenedor para menú desplegable
- `dropdown-toggle`: Enlace que abre el dropdown
- `dropdown-menu`: Menú desplegable
- `dropdown-item`: Cada opción del dropdown
- `dropdown-divider`: Línea separadora

---

### Paso 6: Crear la Hero Section

Después del `</nav>`:

```html
<!-- Hero Section -->
<section id="inicio" class="hero-section d-flex align-items-center">
  <div class="container text-center">
    <h1 class="display-1 fw-bold mb-4">Bienvenido a Mi Sitio</h1>
    <p class="lead mb-4">
      Creamos soluciones digitales innovadoras para tu negocio
    </p>
    <a href="#servicios" class="btn btn-light btn-lg me-3">Ver Servicios</a>
    <a href="#contacto" class="btn btn-outline-light btn-lg">Contactar</a>
  </div>
</section>
```

**Clases especiales:**
- `display-1`: Título muy grande (display heading)
- `fw-bold`: Font weight bold
- `lead`: Texto destacado (más grande que el normal)
- `d-flex align-items-center`: Centra verticalmente el contenido

---

### Paso 7: Sección Servicios

```html
<!-- Sección Servicios -->
<section id="servicios" class="bg-light">
  <div class="container">
    <h2 class="text-center mb-5">Nuestros Servicios</h2>
    
    <div class="row g-4">
      <!-- Servicio 1 -->
      <div class="col-md-4">
        <div class="card h-100 text-center border-0 shadow">
          <div class="card-body p-4">
            <div class="fs-1 mb-3">💻</div>
            <h5 class="card-title">Desarrollo Web</h5>
            <p class="card-text">
              Sitios web modernos y aplicaciones responsive con las últimas tecnologías.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Servicio 2 -->
      <div class="col-md-4">
        <div class="card h-100 text-center border-0 shadow">
          <div class="card-body p-4">
            <div class="fs-1 mb-3">🎨</div>
            <h5 class="card-title">Diseño Gráfico</h5>
            <p class="card-text">
              Identidad visual, branding y diseños que destacan tu marca.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Servicio 3 -->
      <div class="col-md-4">
        <div class="card h-100 text-center border-0 shadow">
          <div class="card-body p-4">
            <div class="fs-1 mb-3">📱</div>
            <h5 class="card-title">Marketing Digital</h5>
            <p class="card-text">
              Estrategias de marketing que impulsan tu presencia online.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Nota sobre emojis:**
- `fs-1`: Font size 1 (muy grande)
- Puedes reemplazar emojis con iconos de Bootstrap Icons o Font Awesome

---

### Paso 8: Sección Acerca de

```html
<!-- Sección Acerca de -->
<section id="acerca">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6 mb-4 mb-lg-0">
        <img src="https://via.placeholder.com/600x400/667eea/ffffff?text=Nuestro+Equipo" 
             class="img-fluid rounded shadow" 
             alt="Equipo">
      </div>
      <div class="col-lg-6">
        <h2 class="mb-4">Acerca de Nosotros</h2>
        <p class="lead mb-4">
          Somos un equipo apasionado por la tecnología y el diseño.
        </p>
        <p>
          Con más de 10 años de experiencia, hemos ayudado a cientos de empresas 
          a transformar su presencia digital y alcanzar sus objetivos de negocio.
        </p>
        <ul class="list-unstyled">
          <li class="mb-2">✅ +500 proyectos completados</li>
          <li class="mb-2">✅ 98% clientes satisfechos</li>
          <li class="mb-2">✅ Equipo de 25+ profesionales</li>
        </ul>
        <a href="#contacto" class="btn btn-primary">Trabaja con Nosotros</a>
      </div>
    </div>
  </div>
</section>
```

**Layout de 2 columnas:**
- `col-lg-6`: 2 columnas en desktop (50% cada una)
- `align-items-center`: Alineación vertical
- `mb-4 mb-lg-0`: Margin bottom en móvil, sin margin en desktop

---

### Paso 9: Sección Contacto

```html
<!-- Sección Contacto -->
<section id="contacto" class="bg-light">
  <div class="container">
    <h2 class="text-center mb-5">Contáctanos</h2>
    
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="card border-0 shadow">
          <div class="card-body p-4">
            <form>
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Nombre">
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" placeholder="Email">
              </div>
              <div class="mb-3">
                <textarea class="form-control" rows="4" placeholder="Mensaje"></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-100">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### Paso 10: JavaScript Adicional (Opcional)

Para cerrar el offcanvas al hacer clic en un enlace:

```html
<script>
  // Cerrar offcanvas al hacer clic en un enlace
  document.querySelectorAll('.offcanvas-body .nav-link').forEach(link => {
    link.addEventListener('click', function() {
      const offcanvas = bootstrap.Offcanvas.getInstance(
        document.getElementById('offcanvasNavbar')
      );
      if (offcanvas) {
        offcanvas.hide();
      }
    });
  });
  
  // Marcar enlace activo según scroll
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.pageYOffset;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  });
</script>
```

**¿Qué hace este código?**
1. Cierra el offcanvas cuando haces clic en un enlace (mejor UX en móvil)
2. Marca automáticamente el enlace activo según la sección visible

---

##  Mejoras Opcionales

### 1. Cambiar Color del Navbar al Hacer Scroll

```javascript
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});
```

CSS:
```css
.navbar {
  transition: background-color 0.3s ease;
}

.navbar-scrolled {
  background-color: #000 !important;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
```

### 2. Agregar Badge de Notificaciones

```html
<li class="nav-item">
  <a class="nav-link" href="#contacto">
    Mensajes <span class="badge bg-danger">3</span>
  </a>
</li>
```

### 3. Mega Menu (Dropdown Grande)

```html
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
    Servicios
  </a>
  <div class="dropdown-menu p-4" style="width: 500px;">
    <div class="row">
      <div class="col-md-6">
        <h6>Desarrollo</h6>
        <a class="dropdown-item" href="#">Web Apps</a>
        <a class="dropdown-item" href="#">Mobile Apps</a>
      </div>
      <div class="col-md-6">
        <h6>Diseño</h6>
        <a class="dropdown-item" href="#">UI/UX</a>
        <a class="dropdown-item" href="#">Branding</a>
      </div>
    </div>
  </div>
</li>
```

---

##  Comportamiento Responsive

### Desktop (≥ 992px):
- Navbar horizontal
- Dropdown desplegable hacia abajo
- Todos los enlaces visibles
- Buscador en línea

### Tablet/Móvil (< 992px):
- Botón hamburguesa visible
- Navbar colapsa a offcanvas
- Menú lateral deslizable
- Dropdown se despliega verticalmente

---

##  Errores Comunes

### Error 1: El offcanvas no se abre
**Problema**: `data-bs-target` no coincide con el `id`
**Solución**: 
```html
<button data-bs-target="#offcanvasNavbar">...</button>
<div id="offcanvasNavbar">...</div>
```

### Error 2: Navbar no es fixed
**Problema**: Falta clase `fixed-top`
**Solución**: 
```html
<nav class="navbar ... fixed-top">
```

### Error 3: Dropdown no funciona
**Problema**: Falta Bootstrap JS
**Solución**: Verificar que está importado:
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
```

### Error 4: Smooth scroll no funciona
**Problema**: Falta CSS
**Solución**:
```css
html {
  scroll-behavior: smooth;
}
```

---

##  Checklist Final

- [ ] Navbar tiene clase `fixed-top`
- [ ] Navbar tiene `navbar-expand-lg`
- [ ] Botón toggle tiene `data-bs-toggle="offcanvas"`
- [ ] Offcanvas tiene el mismo `id` que el `data-bs-target`
- [ ] Offcanvas tiene `offcanvas-header` y `offcanvas-body`
- [ ] Menú de navegación dentro del offcanvas-body
- [ ] Dropdown funciona correctamente
- [ ] Todas las secciones tienen `id` único
- [ ] Los enlaces `href` coinciden con los `id` de las secciones
- [ ] Smooth scroll está activado
- [ ] Body tiene `padding-top` para el navbar fijo
- [ ] Responsive en móvil, tablet y desktop

---

##  Conceptos Aprendidos

En este ejercicio has aprendido:

 **Navbar completo** (`navbar`, `navbar-brand`, `navbar-nav`, `nav-item`, `nav-link`)
 **Navbar fijo** (`fixed-top`, `sticky-top`)
 **Offcanvas** (menú lateral deslizable)
 **Dropdown menus** (`dropdown`, `dropdown-toggle`, `dropdown-menu`)
 **Toggle para móviles** (`navbar-toggler`)
 **Smooth scroll** con CSS y navegación por anclas
 **Secciones de página** con `id` para navegación
 **JavaScript de Bootstrap** (interacciones automáticas)
 **Layout responsive** con breakpoints

---

##  Siguiente Paso

¡Increíble progreso! Has dominado uno de los componentes más complejos de Bootstrap. En el **Ejercicio 05** (final) combinarás todo lo aprendido para crear una mini landing page completa con navbar, hero, servicios, galería, testimonios, formulario y footer.


