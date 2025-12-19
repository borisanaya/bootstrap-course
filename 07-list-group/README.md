# List Group (Grupos de Lista)

## ¿Qué son los List Groups?

Los **List Groups** son componentes de Bootstrap diseñados para mostrar series de contenido relacionado de manera flexible y potente. Son perfectos para crear listas interactivas, menús de navegación, y mostrar información estructurada.

## Características Principales

- **Flexibles**: Pueden contener texto, badges, iconos y más
- **Interactivos**: Soporte para items clickeables y estados activos
- **Variantes contextuales**: Diferentes colores para diferentes tipos de contenido
- **Responsive**: Se adaptan a cualquier tamaño de pantalla
- **Personalizables**: Fáciles de estilizar y extender

## Estructura Básica

```html
<ul class="list-group">
  <li class="list-group-item">Primer item</li>
  <li class="list-group-item">Segundo item</li>
  <li class="list-group-item">Tercer item</li>
  <li class="list-group-item">Cuarto item</li>
  <li class="list-group-item">Quinto item</li>
</ul>
```

## Clases Principales

### Contenedor
- **`.list-group`**: Clase base del contenedor de la lista

### Items
- **`.list-group-item`**: Clase para cada elemento de la lista
- **`.active`**: Item activo/seleccionado
- **`.disabled`**: Item deshabilitado

### Modificadores
- **`.list-group-flush`**: Elimina bordes y esquinas redondeadas
- **`.list-group-horizontal`**: Lista horizontal
- **`.list-group-numbered`**: Lista numerada

### Variantes de Color
- **`.list-group-item-{color}`**: primary, secondary, success, danger, warning, info, light, dark

## List Group con Items Activos y Deshabilitados

```html
<ul class="list-group">
  <li class="list-group-item active" aria-current="true">Item activo</li>
  <li class="list-group-item">Item normal</li>
  <li class="list-group-item">Otro item</li>
  <li class="list-group-item disabled" aria-disabled="true">Item deshabilitado</li>
</ul>
```

## List Group con Enlaces

```html
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    Enlace activo
  </a>
  <a href="#" class="list-group-item list-group-item-action">Enlace 2</a>
  <a href="#" class="list-group-item list-group-item-action">Enlace 3</a>
  <a href="#" class="list-group-item list-group-item-action disabled">Enlace deshabilitado</a>
</div>
```

**Nota**: Usa `.list-group-item-action` para añadir efectos hover y estados activos a items clickeables.

## List Group con Botones

```html
<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active">
    Botón activo
  </button>
  <button type="button" class="list-group-item list-group-item-action">Botón 2</button>
  <button type="button" class="list-group-item list-group-item-action">Botón 3</button>
  <button type="button" class="list-group-item list-group-item-action" disabled>
    Botón deshabilitado
  </button>
</div>
```

## List Group Flush (sin bordes)

Perfecto para insertar dentro de cards:

```html
<ul class="list-group list-group-flush">
  <li class="list-group-item">Item 1</li>
  <li class="list-group-item">Item 2</li>
  <li class="list-group-item">Item 3</li>
</ul>
```

## List Group Numerado

```html
<ol class="list-group list-group-numbered">
  <li class="list-group-item">Primer paso</li>
  <li class="list-group-item">Segundo paso</li>
  <li class="list-group-item">Tercer paso</li>
</ol>
```

## List Group Horizontal

```html
<!-- Horizontal en todos los tamaños -->
<ul class="list-group list-group-horizontal">
  <li class="list-group-item">Item 1</li>
  <li class="list-group-item">Item 2</li>
  <li class="list-group-item">Item 3</li>
</ul>

<!-- Horizontal solo en tablet y superior -->
<ul class="list-group list-group-horizontal-md">
  <li class="list-group-item">Item 1</li>
  <li class="list-group-item">Item 2</li>
  <li class="list-group-item">Item 3</li>
</ul>
```

Breakpoints disponibles: `-sm`, `-md`, `-lg`, `-xl`, `-xxl`

## Variantes de Color Contextuales

```html
<ul class="list-group">
  <li class="list-group-item">Item por defecto</li>
  <li class="list-group-item list-group-item-primary">Item primary</li>
  <li class="list-group-item list-group-item-secondary">Item secondary</li>
  <li class="list-group-item list-group-item-success">Item success</li>
  <li class="list-group-item list-group-item-danger">Item danger</li>
  <li class="list-group-item list-group-item-warning">Item warning</li>
  <li class="list-group-item list-group-item-info">Item info</li>
  <li class="list-group-item list-group-item-light">Item light</li>
  <li class="list-group-item list-group-item-dark">Item dark</li>
</ul>
```

## List Group con Badges

```html
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Mensajes
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Notificaciones
    <span class="badge bg-danger rounded-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Tareas
    <span class="badge bg-success rounded-pill">5</span>
  </li>
</ul>
```

## List Group con Contenido Personalizado

```html
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Título del item</h5>
      <small>Hace 3 días</small>
    </div>
    <p class="mb-1">Este es el contenido del item de la lista.</p>
    <small>Información adicional aquí.</small>
  </a>
  
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Otro título</h5>
      <small class="text-muted">Hace 5 días</small>
    </div>
    <p class="mb-1">Más contenido interesante.</p>
    <small class="text-muted">Más detalles.</small>
  </a>
</div>
```

## List Group con Checkboxes

```html
<ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
    <label class="form-check-label" for="firstCheckbox">Primera tarea</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox">
    <label class="form-check-label" for="secondCheckbox">Segunda tarea</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox">
    <label class="form-check-label" for="thirdCheckbox">Tercera tarea</label>
  </li>
</ul>
```

## List Group con Iconos

```html
<ul class="list-group">
  <li class="list-group-item">
    <i class="bi bi-house-door me-2"></i> Inicio
  </li>
  <li class="list-group-item">
    <i class="bi bi-person me-2"></i> Perfil
  </li>
  <li class="list-group-item">
    <i class="bi bi-gear me-2"></i> Configuración
  </li>
  <li class="list-group-item">
    <i class="bi bi-box-arrow-right me-2"></i> Salir
  </li>
</ul>
```

## List Group dentro de Cards

```html
<div class="card">
  <div class="card-header">
    Características del Producto
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Pantalla 6.7" AMOLED</li>
    <li class="list-group-item">Cámara 108MP</li>
    <li class="list-group-item">Batería 5000mAh</li>
    <li class="list-group-item">5G Compatible</li>
  </ul>
  <div class="card-footer">
    <a href="#" class="btn btn-primary">Ver más detalles</a>
  </div>
</div>
```

## Casos de Uso Comunes

1. **Menús de navegación lateral**: Sidebars con enlaces
2. **Listas de tareas (To-do lists)**: Con checkboxes
3. **Notificaciones**: Con badges de conteo
4. **Timeline/Actividad**: Historial de acciones
5. **Configuraciones**: Opciones del usuario
6. **Contactos**: Lista de personas o empresas
7. **Características de producto**: En cards de productos

## Personalización con CSS

```css
/* Hover effect personalizado */
.list-group-item-action:hover {
  background-color: #f8f9fa;
  border-left: 4px solid #0d6efd;
  padding-left: 1.15rem;
  transition: all 0.3s ease;
}

/* Item seleccionado personalizado */
.list-group-item.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
}

/* Separadores más suaves */
.list-group-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

/* Animación al agregar items */
.list-group-item {
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

## JavaScript Interactivo

### Toggle de Item Activo
```javascript
const listItems = document.querySelectorAll('.list-group-item-action');

listItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remover active de todos
    listItems.forEach(i => i.classList.remove('active'));
    // Añadir active al clickeado
    this.classList.add('active');
  });
});
```

### Filtrar Lista
```javascript
function filterList(searchTerm) {
  const items = document.querySelectorAll('.list-group-item');
  
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchTerm.toLowerCase())) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
```

### Contador de Items Seleccionados
```javascript
const checkboxes = document.querySelectorAll('.list-group input[type="checkbox"]');
const counter = document.getElementById('selectedCount');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    const checked = document.querySelectorAll('.list-group input:checked').length;
    counter.textContent = `${checked} seleccionados`;
  });
});
```

## Ejemplos Avanzados

### Lista de Contactos
```html
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex align-items-center">
      <img src="avatar1.jpg" class="rounded-circle me-3" width="50" alt="Avatar">
      <div class="flex-grow-1">
        <div class="d-flex justify-content-between">
          <h6 class="mb-0">Juan Pérez</h6>
          <small class="text-muted">10:30 AM</small>
        </div>
        <p class="mb-0 text-muted">Hola, ¿cómo estás?</p>
      </div>
      <span class="badge bg-primary rounded-pill">3</span>
    </div>
  </a>
  <!-- Más contactos... -->
</div>
```

### Timeline de Actividades
```html
<ul class="list-group">
  <li class="list-group-item">
    <div class="d-flex">
      <div class="me-3">
        <span class="badge bg-success rounded-circle p-2">
          <i class="bi bi-check"></i>
        </span>
      </div>
      <div>
        <strong>Tarea completada</strong>
        <p class="mb-0 text-muted">Has completado "Diseño de mockups"</p>
        <small class="text-muted">Hace 5 minutos</small>
      </div>
    </div>
  </li>
  <!-- Más actividades... -->
</ul>
```

## Mejores Prácticas

1. **Usa enlaces o botones**: Para items interactivos, no uses `<li>` directamente
2. **Accesibilidad**: Incluye `aria-current="true"` en el item activo
3. **Consistencia**: Mantén la misma estructura en todos los items
4. **No sobrecargues**: Evita demasiado contenido en cada item
5. **Estados claros**: Asegúrate de que los estados (hover, active) sean visibles
6. **Responsive**: Considera list-group-horizontal para layouts mayores
7. **Semántica**: Usa `<ul>` para listas no ordenadas, `<ol>` para numeradas

## Combinaciones Útiles

### Sidebar de Navegación
```html
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">
    <i class="bi bi-speedometer2 me-2"></i> Dashboard
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <i class="bi bi-people me-2"></i> Usuarios
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <i class="bi bi-graph-up me-2"></i> Estadísticas
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <i class="bi bi-gear me-2"></i> Configuración
  </a>
</div>
```

## Ventajas

✅ **Versatilidad**: Múltiples usos y configuraciones  
✅ **Organización**: Estructura clara del contenido  
✅ **Interactividad**: Soporte nativo para acciones  
✅ **Responsive**: Adaptable a cualquier pantalla  
✅ **Personalizable**: Fácil de estilizar  

## Recursos

- [Documentación oficial Bootstrap List Group](https://getbootstrap.com/docs/5.0/components/list-group/)
- Ver ejemplos en: `index.html`
