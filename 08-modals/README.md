# Modals (Ventanas Modales)

## ¿Qué son los Modals?

Los **Modals** son ventanas de diálogo superpuestas que aparecen sobre el contenido principal de la página. Son perfectos para mostrar información importante, solicitar confirmaciones, o presentar formularios sin abandonar la página actual.

## Características Principales

- **Overlay oscuro**: Fondo semitransparente que enfoca la atención
- **Tamaños flexibles**: Small, default, large, extra large
- **Centrado vertical**: Opción para centrar verticalmente
- **Scrollable**: Contenido desplazable si es muy largo
- **Backdrop estático**: Prevenir cierre al hacer clic fuera
- **Accesible**: Soporte completo para teclado y lectores de pantalla

## Estructura Básica

```html
<!-- Botón para abrir el modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Abrir Modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Título del Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Contenido del modal...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>
```

## Clases Principales

### Contenedor Principal
- **`.modal`**: Contenedor principal del modal
- **`.fade`**: Añade efecto de desvanecimiento

### Estructura del Modal
- **`.modal-dialog`**: Contenedor del contenido
- **`.modal-content`**: Contenido real del modal
- **`.modal-header`**: Encabezado con título y botón de cierre
- **`.modal-body`**: Cuerpo principal del contenido
- **`.modal-footer`**: Pie con botones de acción

### Elementos
- **`.modal-title`**: Título del modal
- **`.btn-close`**: Botón de cierre (X)

### Modificadores de Tamaño
- **`.modal-sm`**: Modal pequeño
- **`.modal-lg`**: Modal grande
- **`.modal-xl`**: Modal extra grande

### Modificadores de Posición
- **`.modal-dialog-centered`**: Centrado verticalmente
- **`.modal-dialog-scrollable`**: Contenido scrollable
- **`.modal-fullscreen`**: Pantalla completa

## Atributos Data

### Para abrir el modal:
- **`data-bs-toggle="modal"`**: Activa el comportamiento del modal
- **`data-bs-target="#modalId"`**: Especifica qué modal abrir

### Para cerrar el modal:
- **`data-bs-dismiss="modal"`**: Cierra el modal

## Tamaños de Modal

### Modal Pequeño
```html
<div class="modal fade" id="smallModal">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <!-- Contenido -->
    </div>
  </div>
</div>
```

### Modal Grande
```html
<div class="modal fade" id="largeModal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <!-- Contenido -->
    </div>
  </div>
</div>
```

### Modal Extra Grande
```html
<div class="modal fade" id="xlModal">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <!-- Contenido -->
    </div>
  </div>
</div>
```

## Modal Centrado Verticalmente

```html
<div class="modal fade" id="centeredModal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal Centrado</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        Este modal está centrado verticalmente
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
```

## Modal Scrollable

Para contenido largo que necesita scroll dentro del modal:

```html
<div class="modal fade" id="scrollableModal">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal con Scroll</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <p>Contenido muy largo...</p>
        <p>Más contenido...</p>
        <!-- Mucho más contenido -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
```

## Modal Pantalla Completa

### Siempre pantalla completa
```html
<div class="modal fade" id="fullscreenModal">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <!-- Contenido -->
    </div>
  </div>
</div>
```

### Pantalla completa en breakpoints específicos
```html
<!-- Pantalla completa debajo de sm -->
<div class="modal-dialog modal-fullscreen-sm-down">

<!-- Pantalla completa debajo de md -->
<div class="modal-dialog modal-fullscreen-md-down">

<!-- Pantalla completa debajo de lg -->
<div class="modal-dialog modal-fullscreen-lg-down">

<!-- Pantalla completa debajo de xl -->
<div class="modal-dialog modal-fullscreen-xl-down">

<!-- Pantalla completa debajo de xxl -->
<div class="modal-dialog modal-fullscreen-xxl-down">
```

## Modal con Formulario

```html
<div class="modal fade" id="formModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Nuevo Usuario</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <form id="userForm">
          <div class="mb-3">
            <label for="userName" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="userName" required>
          </div>
          <div class="mb-3">
            <label for="userEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="userEmail" required>
          </div>
          <div class="mb-3">
            <label for="userRole" class="form-label">Rol</label>
            <select class="form-select" id="userRole">
              <option value="user">Usuario</option>
              <option value="admin">Administrador</option>
            </select>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="submit" form="userForm" class="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>
```

## Modal de Confirmación

```html
<div class="modal fade" id="confirmModal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-danger text-white">
        <h5 class="modal-title">
          <i class="bi bi-exclamation-triangle me-2"></i>Confirmar Eliminación
        </h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <p>¿Estás seguro de que deseas eliminar este elemento?</p>
        <p class="text-muted mb-0">Esta acción no se puede deshacer.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-danger">Eliminar</button>
      </div>
    </div>
  </div>
</div>
```

## Modal sin Backdrop Dismissible

```html
<button type="button" class="btn btn-primary" 
        data-bs-toggle="modal" 
        data-bs-target="#staticModal" 
        data-bs-backdrop="static" 
        data-bs-keyboard="false">
  Modal Estático
</button>

<div class="modal fade" id="staticModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- No se puede cerrar haciendo clic fuera o con ESC -->
      <div class="modal-body">
        Este modal solo se cierra con el botón
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
```

## Casos de Uso Comunes

1. **Formularios**: Crear/editar sin cambiar de página
2. **Confirmaciones**: Confirmar acciones importantes (eliminar, salir)
3. **Alertas**: Mostrar mensajes importantes
4. **Galerías de imágenes**: Lightbox para fotos
5. **Términos y condiciones**: Mostrar textos largos
6. **Login/Registro**: Autenticación sin redirección
7. **Detalles de productos**: Información expandida

## JavaScript

### Abrir modal programáticamente
```javascript
// Obtener el modal
const myModal = new bootstrap.Modal(document.getElementById('myModal'));

// Mostrar el modal
myModal.show();

// Ocultar el modal
myModal.hide();

// Toggle (alternar)
myModal.toggle();
```

### Eventos del Modal
```javascript
const modalElement = document.getElementById('myModal');

// Antes de mostrarse
modalElement.addEventListener('show.bs.modal', function (event) {
  console.log('Modal está por mostrarse');
});

// Cuando se ha mostrado completamente
modalElement.addEventListener('shown.bs.modal', function (event) {
  console.log('Modal completamente visible');
  // Buen momento para hacer focus en un input
  document.getElementById('myInput').focus();
});

// Antes de ocultarse
modalElement.addEventListener('hide.bs.modal', function (event) {
  console.log('Modal está por ocultarse');
});

// Cuando se ha ocultado completamente
modalElement.addEventListener('hidden.bs.modal', function (event) {
  console.log('Modal completamente oculto');
  // Limpiar el contenido del modal
});
```

### Pasar datos al modal
```javascript
const exampleModal = document.getElementById('exampleModal');
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Botón que disparó el modal
  const button = event.relatedTarget;
  
  // Extraer datos del botón
  const recipient = button.getAttribute('data-bs-recipient');
  
  // Actualizar el contenido del modal
  const modalTitle = exampleModal.querySelector('.modal-title');
  const modalBodyInput = exampleModal.querySelector('.modal-body input');
  
  modalTitle.textContent = `Nuevo mensaje para ${recipient}`;
  modalBodyInput.value = recipient;
});
```

## Ejemplos Avanzados

### Modal con Tabs
```html
<div class="modal fade" id="tabsModal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Configuración</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#general">General</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#security">Seguridad</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#privacy">Privacidad</a>
          </li>
        </ul>
        <div class="tab-content mt-3">
          <div id="general" class="tab-pane active">
            <p>Configuración general...</p>
          </div>
          <div id="security" class="tab-pane fade">
            <p>Configuración de seguridad...</p>
          </div>
          <div id="privacy" class="tab-pane fade">
            <p>Configuración de privacidad...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Modal con Loading
```javascript
function showLoadingModal() {
  const modalHTML = `
    <div class="modal fade" id="loadingModal" data-bs-backdrop="static">
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-body text-center">
            <div class="spinner-border text-primary mb-3" role="status">
              <span class="visually-hidden">Cargando...</span>
            </div>
            <p class="mb-0">Procesando...</p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  const modal = new bootstrap.Modal(document.getElementById('loadingModal'));
  modal.show();
  
  return modal;
}

// Uso
const loadingModal = showLoadingModal();
// Hacer algo...
setTimeout(() => {
  loadingModal.hide();
}, 2000);
```

## Personalización con CSS

```css
/* Backdrop más oscuro */
.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Animación personalizada */
.modal.fade .modal-dialog {
  transition: transform 0.4s ease-out;
  transform: scale(0.7);
}

.modal.show .modal-dialog {
  transform: scale(1);
}

/* Modal con sombra */
.modal-content {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

/* Header personalizado */
.modal-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-bottom: none;
}

.modal-header .btn-close {
  filter: invert(1);
}

/* Bordes redondeados */
.modal-content {
  border-radius: 15px;
  overflow: hidden;
}
```

## Mejores Prácticas

1. **IDs únicos**: Cada modal debe tener un ID único
2. **Accesibilidad**: 
   - Usa `aria-labelledby` y `aria-hidden`
   - Incluye `tabindex="-1"` en el modal
3. **Focus management**: El foco debe ir al modal al abrirse
4. **Cierre intuitivo**: Proporciona múltiples formas de cerrar (X, botón, ESC)
5. **No anides modals**: Evita abrir un modal desde otro modal
6. **Contenido conciso**: No sobrecargues el modal con demasiado contenido
7. **Mobile-friendly**: Usa modal-fullscreen para móviles cuando sea necesario
8. **Loading states**: Muestra spinners durante operaciones async

## Accesibilidad

```html
<!-- Ejemplo completo con accesibilidad -->
<div class="modal fade" 
     id="accessibleModal" 
     tabindex="-1" 
     aria-labelledby="accessibleModalLabel" 
     aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="accessibleModalLabel">Título Descriptivo</h5>
        <button type="button" 
                class="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Cerrar"></button>
      </div>
      <div class="modal-body">
        Contenido accesible
      </div>
    </div>
  </div>
</div>
```

## Ventajas

✅ **No invasivo**: No requiere cambiar de página  
✅ **Enfoque**: Centra la atención en una tarea específica  
✅ **Versatil**: Múltiples tamaños y configuraciones  
✅ **Accesible**: Soporte para teclado y lectores de pantalla  
✅ **Responsive**: Se adapta a todos los dispositivos  

## Recursos

- [Documentación oficial Bootstrap Modal](https://getbootstrap.com/docs/5.0/components/modal/)
- Ver ejemplos en: `index.html` y `modal-form.html`
- Guía adicional en: `modal-form.md`
