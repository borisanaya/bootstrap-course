# Ejercicio 10: Aplicación Completa Multi-Componente (Proyecto Final)

## Objetivo del Ejercicio

Crear una **aplicación web completa** que integre todos los componentes de Bootstrap aprendidos en el curso. Este es el proyecto final que demuestra el dominio completo de Bootstrap 5.

---

## Enunciado

Debes crear una aplicación de gestión de eventos con las siguientes características:

### Requisitos Completos:

1. **Navbar sticky** con:
   - Logo "EventHub"
   - Links: Eventos, Crear Evento, Mis Reservas
   - Botón de notificaciones con badge (offcanvas)
   - Avatar con dropdown (Perfil, Configuración, Cerrar sesión)

2. **Hero Section** con:
   - Título y descripción
   - Barra de búsqueda
   - Imagen de fondo

3. **Tabs de categorías de eventos**:
   - Todos
   - Música
   - Deportes  
   - Conferencias
   - Social

4. **Grid de 9 cards de eventos** (3x3):
   - Imagen del evento
   - Título, fecha, ubicación
   - Badge de categoría
   - Botón "Ver detalles" que abre modal

5. **Modal de detalles del evento** con:
   - Tabs internos (Descripción, Ubicación, Comentarios)
   - Información completa
   - Botón "Reservar"

6. **Offcanvas de notificaciones** (desde la derecha):
   - List group con 5 notificaciones
   - Iconos y timestamps
   - Botón "Marcar todas como leídas"

7. **Toast de confirmación** cuando se reserva un evento

8. **Footer** con:
   - Enlaces
   - Redes sociales
   - Copyright

---

## Resultado Esperado

Una aplicación web completa y funcional que integra:
- Navbar con offcanvas y dropdown
- Hero section atractiva
- Sistema de tabs para filtrar
- Grid responsive de cards
- Modal con tabs internos
- Offcanvas de notificaciones
- Toasts de confirmación
- Todo responsive y con buen diseño

---

## Componentes Bootstrap Utilizados

✅ Navbar con dropdown  
✅ Offcanvas  
✅ Tabs  
✅ Cards  
✅ Grid System  
✅ Modals con tabs  
✅ Toasts  
✅ List Groups  
✅ Badges  
✅ Forms  
✅ Buttons  
✅ Icons  

---

## Conceptos Aprendidos

Este ejercicio final integra TODOS los conceptos aprendidos:

✅ Componentes de navegación avanzada  
✅ Layouts responsive complejos  
✅ Modales y paneles laterales  
✅ Sistema de notificaciones  
✅ Feedback visual completo  
✅ Integración de múltiples componentes  
✅ JavaScript para interactividad  
✅ Diseño profesional y coherente  

---

## Tutorial Paso a Paso

### Paso 1: Estructura HTML Básica y Estilos

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ejercicio 10 - EventHub App</title>
  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
  
  <style>
    body { padding-top: 56px; }
    
    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 60px 0;
    }
    
    .event-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
    }
    
    .event-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 24px rgba(0,0,0,0.2);
    }
    
    .event-img {
      height: 200px;
      background: linear-gradient(45deg, #667eea, #764ba2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 4rem;
    }
  </style>
</head>
<body>

  <!-- Contenedor de toasts -->
  <div class="toast-container position-fixed top-0 end-0 p-3" id="toastContainer"></div>

  <!-- Aquí irá el contenido -->

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**¿Qué hemos hecho?**
- Estilos CSS para hero con gradiente, efectos hover en cards
- Contenedor de toasts posicionado en esquina superior derecha
- `padding-top: 56px`: Compensar navbar fijo

---

### Paso 2: Navbar Completo con Offcanvas y Dropdown

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">
      <i class="bi bi-calendar-event me-2"></i>EventHub
    </a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Eventos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Crear Evento</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Mis Reservas</a>
        </li>
      </ul>
      
      <div class="d-flex align-items-center">
        <!-- Botón de notificaciones -->
        <button class="btn btn-outline-light me-3 position-relative" 
                data-bs-toggle="offcanvas" data-bs-target="#notificationsOffcanvas">
          <i class="bi bi-bell"></i>
          <span class="position-absolute top-0 start-100 translate-middle 
                       badge rounded-pill bg-danger">5</span>
        </button>
        
        <!-- Avatar con dropdown -->
        <div class="dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" 
             data-bs-toggle="dropdown">
            <i class="bi bi-person-circle fs-5"></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">
              <i class="bi bi-person me-2"></i>Mi Perfil
            </a></li>
            <li><a class="dropdown-item" href="#">
              <i class="bi bi-gear me-2"></i>Configuración
            </a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">
              <i class="bi bi-box-arrow-right me-2"></i>Cerrar Sesión
            </a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>
```

**Explicación:**
- Navbar fijo con `fixed-top`
- Badge en botón de notificaciones con `position-absolute`
- Dropdown alineado a la derecha con `dropdown-menu-end`
- Botón para abrir offcanvas de notificaciones

---

### Paso 3: Hero Section con Búsqueda

```html
<section class="hero">
  <div class="container text-center">
    <h1 class="display-4 fw-bold mb-3">Descubre Eventos Increíbles</h1>
    <p class="lead mb-4">Encuentra y reserva los mejores eventos cerca de ti</p>
    
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="input-group input-group-lg">
          <input type="text" class="form-control" 
                 placeholder="Buscar eventos...">
          <button class="btn btn-light" type="button">
            <i class="bi bi-search"></i> Buscar
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Conceptos:**
- Sección hero con fondo degradado (definido en CSS)
- Input group grande (`input-group-lg`)
- Diseño centrado y responsive

---

### Paso 4: Tabs de Categorías

```html
<div class="container mt-5">
  <ul class="nav nav-pills justify-content-center mb-4" id="categoryTabs">
    <li class="nav-item">
      <button class="nav-link active" data-bs-toggle="pill" data-category="all">
        Todos
      </button>
    </li>
    <li class="nav-item">
      <button class="nav-link" data-bs-toggle="pill" data-category="music">
        Música
      </button>
    </li>
    <li class="nav-item">
      <button class="nav-link" data-bs-toggle="pill" data-category="sports">
        Deportes
      </button>
    </li>
    <li class="nav-item">
      <button class="nav-link" data-bs-toggle="pill" data-category="conference">
        Conferencias
      </button>
    </li>
    <li class="nav-item">
      <button class="nav-link" data-bs-toggle="pill" data-category="social">
        Social
      </button>
    </li>
  </ul>
</div>
```

---

### Paso 5: Grid de Eventos (Cards)

```html
<div class="row g-4" id="eventsGrid">
  <!-- Evento 1 - Música -->
  <div class="col-md-6 col-lg-4 event-item" data-category="music">
    <div class="card event-card h-100" data-event="1">
      <div class="event-img">
        <i class="bi bi-music-note-beamed"></i>
      </div>
      <div class="card-body">
        <span class="badge bg-primary mb-2">Música</span>
        <h5 class="card-title">Concierto de Rock</h5>
        <p class="card-text text-muted">
          <i class="bi bi-calendar3 me-1"></i> 15 Ene 2024<br>
          <i class="bi bi-geo-alt me-1"></i> Madrid Arena
        </p>
        <button class="btn btn-primary btn-sm w-100">Ver Detalles</button>
      </div>
    </div>
  </div>
  
  <!-- Repetir estructura para 8 eventos más (3x3 grid) -->
  <!-- Variar: categoría (music, sports, conference, social), iconos, títulos -->
</div>
```

**Explicación:**
- Grid responsive: `col-md-6 col-lg-4` (2 columnas tablet, 3 desktop)
- Atributo `data-category` para filtrado
- Badge de categoría con colores contextuales
- Imágenes simuladas con iconos grandes

---

### Paso 6: Modal de Detalles con Tabs Internos

```html
<div class="modal fade" id="eventModal" tabindex="-1">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Detalles del Evento</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      
      <div class="modal-body">
        <!-- Tabs internos del modal -->
        <ul class="nav nav-tabs mb-3" role="tablist">
          <li class="nav-item">
            <button class="nav-link active" data-bs-toggle="tab" 
                    data-bs-target="#description">Descripción</button>
          </li>
          <li class="nav-item">
            <button class="nav-link" data-bs-toggle="tab" 
                    data-bs-target="#location">Ubicación</button>
          </li>
          <li class="nav-item">
            <button class="nav-link" data-bs-toggle="tab" 
                    data-bs-target="#comments">Comentarios</button>
          </li>
        </ul>
        
        <!-- Contenido de los tabs -->
        <div class="tab-content">
          <div class="tab-pane fade show active" id="description">
            <h4>Concierto de Rock</h4>
            <p class="text-muted">
              <i class="bi bi-calendar3 me-2"></i>15 de Enero, 2024 - 20:00h
            </p>
            <p>Disfruta de una noche inolvidable con los mejores grupos...</p>
          </div>
          
          <div class="tab-pane fade" id="location">
            <h5>Madrid Arena</h5>
            <p><i class="bi bi-geo-alt me-2"></i>Av. de Felipe II, s/n</p>
            <div class="bg-light p-5 text-center">
              <i class="bi bi-map display-1 text-muted"></i>
            </div>
          </div>
          
          <div class="tab-pane fade" id="comments">
            <h6>Comentarios (3)</h6>
            <div class="border-bottom pb-2 mb-2">
              <strong>Juan P.</strong> <small class="text-muted">Hace 2 días</small>
              <p class="mb-0">¡Increíble experiencia!</p>
            </div>
            <!-- Más comentarios... -->
          </div>
        </div>
      </div>
      
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" 
                data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" id="bookEventBtn">
          <i class="bi bi-check-circle me-2"></i>Reservar - €45
        </button>
      </div>
    </div>
  </div>
</div>
```

**Conceptos clave:**
- Modal con tamaño `modal-lg`
- **Tabs DENTRO del modal**: `nav-tabs` en `modal-body`
- Múltiples secciones de contenido: descripción, ubicación, comentarios

---

### Paso 7: Offcanvas de Notificaciones

```html
<div class="offcanvas offcanvas-end" id="notificationsOffcanvas">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">
      <i class="bi bi-bell me-2"></i>Notificaciones
    </h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  
  <div class="offcanvas-body p-0">
    <div class="list-group list-group-flush">
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex">
          <div class="me-3">
            <span class="badge bg-primary rounded-circle p-2">
              <i class="bi bi-ticket"></i>
            </span>
          </div>
          <div class="flex-grow-1">
            <strong>Nueva reserva confirmada</strong>
            <p class="mb-0 small text-muted">
              Tu reserva para "Concierto de Rock" está confirmada
            </p>
            <small class="text-muted">Hace 5 min</small>
          </div>
        </div>
      </a>
      
      <!-- 4 notificaciones más con diferentes iconos y colores -->
    </div>
    
    <div class="p-3">
      <button class="btn btn-outline-primary w-100">
        Marcar todas como leídas
      </button>
    </div>
  </div>
</div>
```

**Explicación:**
- `offcanvas-end`: Panel desde la derecha
- List group sin padding (`p-0` en body)
- Badges circulares con iconos contextuales
- Botón de acción al final

---

### Paso 8: Footer

```html
<footer class="bg-dark text-white mt-5 py-4">
  <div class="container">
    <div class="row">
      <div class="col-md-4 mb-3">
        <h5>EventHub</h5>
        <p class="text-muted">Descubre y reserva los mejores eventos</p>
      </div>
      <div class="col-md-4 mb-3">
        <h6>Enlaces</h6>
        <ul class="list-unstyled">
          <li><a href="#" class="text-muted text-decoration-none">Sobre Nosotros</a></li>
          <li><a href="#" class="text-muted text-decoration-none">Términos</a></li>
          <li><a href="#" class="text-muted text-decoration-none">Privacidad</a></li>
        </ul>
      </div>
      <div class="col-md-4 mb-3">
        <h6>Síguenos</h6>
        <a href="#" class="text-white me-3"><i class="bi bi-facebook fs-4"></i></a>
        <a href="#" class="text-white me-3"><i class="bi bi-twitter fs-4"></i></a>
        <a href="#" class="text-white"><i class="bi bi-instagram fs-4"></i></a>
      </div>
    </div>
    <hr class="text-muted">
    <p class="text-center text-muted mb-0">
      &copy; 2024 EventHub. Todos los derechos reservados.
    </p>
  </div>
</footer>
```

---

### Paso 9: JavaScript - Filtrar por Categoría

```html
<script>
const eventModal = new bootstrap.Modal(document.getElementById('eventModal'));

// Filtrar eventos por categoría
document.querySelectorAll('#categoryTabs button').forEach(btn => {
  btn.addEventListener('click', function() {
    const category = this.getAttribute('data-category');
    
    document.querySelectorAll('.event-item').forEach(item => {
      if (category === 'all' || 
          item.getAttribute('data-category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Abrir modal al hacer clic en card
document.querySelectorAll('.event-card').forEach(card => {
  card.addEventListener('click', function() {
    eventModal.show();
  });
});
</script>
```

---

### Paso 10: JavaScript - Reservar y Mostrar Toast

```javascript
// Reservar evento - mostrar toast
document.getElementById('bookEventBtn').addEventListener('click', function() {
  const toastHTML = `
    <div class="toast align-items-center text-white bg-success border-0" role="alert">
      <div class="d-flex">
        <div class="toast-body">
          <i class="bi bi-check-circle me-2"></i>
          ¡Reserva confirmada! Recibirás un email de confirmación.
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" 
                data-bs-dismiss="toast"></button>
      </div>
    </div>
  `;
  
  const container = document.getElementById('toastContainer');
  container.insertAdjacentHTML('beforeend', toastHTML);
  
  const toastElement = container.lastElementChild;
  const toast = new bootstrap.Toast(toastElement, { delay: 4000 });
  toast.show();
  
  toastElement.addEventListener('hidden.bs.toast', () => {
    toastElement.remove();
  });
  
  eventModal.hide();
});
</script>
```

**Explicación:**
- Crear toast dinámicamente al reservar
- Toast verde de éxito con auto-cierre (4 segundos)
- Cerrar modal automáticamente
- Limpieza del DOM al ocultar toast

---

## Componentes Bootstrap Utilizados

1. **Navbar** - Navegación principal con dropdown
2. **Offcanvas** - Panel de notificaciones
3. **Hero Section** - Sección destacada
4. **Tabs** - Filtrar categorías
5. **Cards** - Mostrar eventos
6. **Grid System** - Layout responsive
7. **Modal con Tabs** - Detalles del evento
8. **Toasts** - Notificaciones de confirmación
9. **List Group** - Notificaciones en offcanvas
10. **Footer** - Pie de página
11. **Badges** - Contadores y categorías
12. **Forms** - Búsqueda

---

## Mejoras Opcionales

1. **LocalStorage**: Guardar eventos favoritos
2. **Sistema de favoritos**: Botón de corazón en cards
3. **Búsqueda funcional**: Filtrar eventos por título
4. **Paginación**: Dividir eventos en múltiples páginas
5. **Dark mode**: Toggle para tema oscuro
6. **Animaciones**: Transiciones suaves con CSS
7. **Imágenes reales**: Reemplazar iconos con fotos

---

## Desafíos Adicionales

1. **Sistema de favoritos**: Botón de corazón en cada card
2. **Filtros avanzados**: Añadir filtros por fecha y precio
3. **Paginación**: Añadir paginación para más eventos
4. **Dark mode**: Toggle para modo oscuro
5. **Animaciones**: Añadir transiciones suaves
6. **LocalStorage**: Guardar eventos favoritos

---

## Conceptos Aprendidos (Proyecto Completo)

✅ **Integración completa** de todos los componentes Bootstrap  
✅ **Navbar avanzado** con offcanvas y dropdown  
✅ **Hero sections** atractivas con gradientes  
✅ **Tabs** para navegación y filtrado  
✅ **Grid responsive** con breakpoints  
✅ **Cards** con efectos hover  
✅ **Modals con tabs internos** (componentes anidados)  
✅ **Offcanvas** para paneles laterales  
✅ **Toasts dinámicos** con JavaScript  
✅ **List Groups** para listas estilizadas  
✅ **Forms** y validación  
✅ **Badges** dinámicos  
✅ **JavaScript** para interactividad  
✅ **Diseño profesional** y coherente  




