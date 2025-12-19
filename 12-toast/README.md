# Toasts (Notificaciones Emergentes)

## ¿Qué son los Toasts?

Los **Toasts** son notificaciones ligeras y no intrusivas diseñadas para imitar las notificaciones push que se han popularizado en sistemas operativos móviles y de escritorio. Son perfectas para mostrar mensajes breves que desaparecen automáticamente.

## Características Principales

- **No intrusivos**: Aparecen sin bloquear la interacción del usuario
- **Auto-dismiss**: Se cierran automáticamente después de un tiempo
- **Apilables**: Se pueden mostrar múltiples toasts
- **Posicionables**: Se pueden colocar en diferentes esquinas
- **Flexibles**: Pueden contener texto, iconos, imágenes y botones
- **Accesibles**: Compatibles con lectores de pantalla

## Estructura Básica

```html
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="icon.png" class="rounded me-2" alt="...">
    <strong class="me-auto">Bootstrap</strong>
    <small>Hace 11 mins</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    ¡Hola! Este es un mensaje toast.
  </div>
</div>
```

## Clases Principales

### Contenedor
- **`.toast`**: Clase base del toast
- **`.toast-container`**: Contenedor para agrupar múltiples toasts

### Secciones
- **`.toast-header`**: Encabezado con título, tiempo y botón cerrar
- **`.toast-body`**: Cuerpo del mensaje

### Modificadores
- **`.show`**: Hace visible el toast
- **`.fade`**: Añade efecto de transición
- **`.hide`**: Oculta el toast

### Colores
- **`.bg-{color}`**: primary, success, danger, warning, info
- **`.text-{color}`**: white, dark, muted

## Toast Básico con JavaScript

Para mostrar el toast, necesitas activarlo con JavaScript:

```html
<!-- HTML del toast -->
<div class="toast" id="myToast" role="alert" aria-live="polite" aria-atomic="true">
  <div class="toast-header">
    <strong class="me-auto">Notificación</strong>
    <small>Justo ahora</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
  </div>
  <div class="toast-body">
    ¡Operación completada con éxito!
  </div>
</div>

<!-- JavaScript -->
<script>
  const toast = new bootstrap.Toast(document.getElementById('myToast'));
  toast.show();
</script>
```

## Toast Solo con Body (sin header)

```html
<div class="toast align-items-center" role="alert">
  <div class="d-flex">
    <div class="toast-body">
      ¡Hola! Este es un toast simple.
    </div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast"></button>
  </div>
</div>
```

## Toasts con Colores

### Toast de Éxito
```html
<div class="toast align-items-center text-white bg-success border-0" role="alert">
  <div class="d-flex">
    <div class="toast-body">
      <i class="bi bi-check-circle me-2"></i>
      ¡Guardado correctamente!
    </div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
  </div>
</div>
```

### Toast de Error
```html
<div class="toast align-items-center text-white bg-danger border-0" role="alert">
  <div class="d-flex">
    <div class="toast-body">
      <i class="bi bi-exclamation-triangle me-2"></i>
      Error al guardar los cambios
    </div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
  </div>
</div>
```

### Toast de Advertencia
```html
<div class="toast align-items-center text-dark bg-warning border-0" role="alert">
  <div class="d-flex">
    <div class="toast-body">
      <i class="bi bi-exclamation-circle me-2"></i>
      Atención: Verifica los datos
    </div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast"></button>
  </div>
</div>
```

### Toast Informativo
```html
<div class="toast align-items-center text-white bg-info border-0" role="alert">
  <div class="d-flex">
    <div class="toast-body">
      <i class="bi bi-info-circle me-2"></i>
      Nueva actualización disponible
    </div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
  </div>
</div>
```

## Contenedor de Toasts (Toast Container)

Para posicionar toasts en la pantalla:

```html
<!-- Toast container en la esquina superior derecha -->
<div class="toast-container position-fixed top-0 end-0 p-3">
  <div class="toast" role="alert">
    <div class="toast-header">
      <strong class="me-auto">Notificación</strong>
      <small>Justo ahora</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
    </div>
    <div class="toast-body">
      Mensaje de notificación
    </div>
  </div>
</div>
```

## Posiciones del Toast Container

### Esquina Superior Derecha
```html
<div class="toast-container position-fixed top-0 end-0 p-3">
  <!-- Toasts -->
</div>
```

### Esquina Superior Izquierda
```html
<div class="toast-container position-fixed top-0 start-0 p-3">
  <!-- Toasts -->
</div>
```

### Esquina Inferior Derecha
```html
<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <!-- Toasts -->
</div>
```

### Esquina Inferior Izquierda
```html
<div class="toast-container position-fixed bottom-0 start-0 p-3">
  <!-- Toasts -->
</div>
```

### Centro Superior
```html
<div class="toast-container position-fixed top-0 start-50 translate-middle-x p-3">
  <!-- Toasts -->
</div>
```

### Centro de la Pantalla
```html
<div class="toast-container position-fixed top-50 start-50 translate-middle p-3">
  <!-- Toasts -->
</div>
```

## Toasts Apilables

```html
<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div class="toast show" role="alert">
    <div class="toast-header">
      <strong class="me-auto">Primer toast</strong>
      <small>Ahora</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
    </div>
    <div class="toast-body">
      Este es el primer mensaje
    </div>
  </div>
  
  <div class="toast show" role="alert">
    <div class="toast-header">
      <strong class="me-auto">Segundo toast</strong>
      <small>Ahora</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
    </div>
    <div class="toast-body">
      Este es el segundo mensaje
    </div>
  </div>
</div>
```

## JavaScript

### Crear y Mostrar Toast
```javascript
// Crear el toast
const toastElement = document.getElementById('myToast');
const toast = new bootstrap.Toast(toastElement);

// Mostrar
toast.show();

// Ocultar
toast.hide();

// Dispose (eliminar)
toast.dispose();
```

### Opciones de Configuración
```javascript
const toast = new bootstrap.Toast(toastElement, {
  animation: true,    // Habilitar animación (default: true)
  autohide: true,     // Auto-cerrar (default: true)
  delay: 5000        // Tiempo antes de auto-cerrar en ms (default: 5000)
});

toast.show();
```

### Eventos del Toast
```javascript
const toastElement = document.getElementById('myToast');

// Antes de mostrarse
toastElement.addEventListener('show.bs.toast', function () {
  console.log('Toast está por mostrarse');
});

// Cuando se ha mostrado
toastElement.addEventListener('shown.bs.toast', function () {
  console.log('Toast visible');
});

// Antes de ocultarse
toastElement.addEventListener('hide.bs.toast', function () {
  console.log('Toast está por ocultarse');
});

// Cuando se ha ocultado
toastElement.addEventListener('hidden.bs.toast', function () {
  console.log('Toast oculto');
  // Limpiar o remover el toast
});
```

### Función Helper para Crear Toasts Dinámicamente
```javascript
function showToast(message, type = 'info', duration = 5000) {
  // Colores según el tipo
  const colors = {
    success: 'bg-success text-white',
    error: 'bg-danger text-white',
    warning: 'bg-warning text-dark',
    info: 'bg-info text-white'
  };
  
  // Iconos según el tipo
  const icons = {
    success: 'bi-check-circle',
    error: 'bi-x-circle',
    warning: 'bi-exclamation-triangle',
    info: 'bi-info-circle'
  };
  
  // Crear el HTML del toast
  const toastHTML = `
    <div class="toast align-items-center ${colors[type]} border-0" role="alert">
      <div class="d-flex">
        <div class="toast-body">
          <i class="bi ${icons[type]} me-2"></i>
          ${message}
        </div>
        <button type="button" class="btn-close ${type === 'warning' ? '' : 'btn-close-white'} me-2 m-auto" 
                data-bs-dismiss="toast"></button>
      </div>
    </div>
  `;
  
  // Añadir al container
  const container = document.getElementById('toast-container');
  container.insertAdjacentHTML('beforeend', toastHTML);
  
  // Obtener el último toast añadido
  const toastElement = container.lastElementChild;
  
  // Crear y mostrar
  const toast = new bootstrap.Toast(toastElement, { delay: duration });
  toast.show();
  
  // Remover del DOM después de ocultarse
  toastElement.addEventListener('hidden.bs.toast', function () {
    toastElement.remove();
  });
}

// Uso
showToast('¡Guardado correctamente!', 'success');
showToast('Error al procesar', 'error');
showToast('Atención requerida', 'warning', 10000);
```

## Casos de Uso Comunes

1. **Confirmaciones**: "Guardado correctamente"
2. **Errores**: "No se pudo conectar al servidor"
3. **Notificaciones**: "Nuevo mensaje recibido"
4. **Progreso**: "Archivo subido 100%"
5. **Información**: "Actualización disponible"
6. **Advertencias**: "Sesión a punto de expirar"
7. **Acciones deshacer**: "Elemento eliminado. [Deshacer]"

## Ejemplos Avanzados

### Toast con Botón de Acción
```html
<div class="toast" role="alert">
  <div class="toast-body">
    Archivo eliminado.
    <div class="mt-2 pt-2 border-top">
      <button type="button" class="btn btn-primary btn-sm">Deshacer</button>
      <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Cerrar</button>
    </div>
  </div>
</div>
```

### Toast con Imagen
```html
<div class="toast" role="alert">
  <div class="toast-header">
    <img src="avatar.jpg" class="rounded me-2" width="20" height="20" alt="">
    <strong class="me-auto">Juan Pérez</strong>
    <small>Hace 5 min</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
  </div>
  <div class="toast-body">
    Te ha enviado un nuevo mensaje
  </div>
</div>
```

### Toast de Progreso
```html
<div class="toast" role="alert">
  <div class="toast-header">
    <strong class="me-auto">Subiendo archivo</strong>
    <small>75%</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
  </div>
  <div class="toast-body p-0">
    <div class="progress" style="height: 5px;">
      <div class="progress-bar" style="width: 75%"></div>
    </div>
  </div>
</div>
```

### Sistema de Notificaciones Completo
```javascript
class NotificationSystem {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      this.container = this.createContainer();
    }
  }
  
  createContainer() {
    const container = document.createElement('div');
    container.id = 'notification-container';
    container.className = 'toast-container position-fixed top-0 end-0 p-3';
    document.body.appendChild(container);
    return container;
  }
  
  show(message, options = {}) {
    const {
      type = 'info',
      title = 'Notificación',
      duration = 5000,
      icon = true
    } = options;
    
    const toast = this.createToast(message, type, title, icon);
    this.container.appendChild(toast);
    
    const bsToast = new bootstrap.Toast(toast, { delay: duration });
    bsToast.show();
    
    toast.addEventListener('hidden.bs.toast', () => toast.remove());
  }
  
  createToast(message, type, title, showIcon) {
    const colorClass = {
      success: 'bg-success',
      error: 'bg-danger',
      warning: 'bg-warning',
      info: 'bg-info'
    }[type] || 'bg-primary';
    
    const iconClass = {
      success: 'bi-check-circle-fill',
      error: 'bi-x-circle-fill',
      warning: 'bi-exclamation-triangle-fill',
      info: 'bi-info-circle-fill'
    }[type] || 'bi-bell-fill';
    
    const textClass = type === 'warning' ? 'text-dark' : 'text-white';
    const closeClass = type === 'warning' ? '' : 'btn-close-white';
    
    const toast = document.createElement('div');
    toast.className = `toast align-items-center ${textClass} ${colorClass} border-0`;
    toast.setAttribute('role', 'alert');
    
    toast.innerHTML = `
      <div class="d-flex">
        <div class="toast-body">
          ${showIcon ? `<i class="bi ${iconClass} me-2"></i>` : ''}
          <strong>${title}</strong>
          <div class="mt-1">${message}</div>
        </div>
        <button type="button" class="btn-close ${closeClass} me-2 m-auto" 
                data-bs-dismiss="toast"></button>
      </div>
    `;
    
    return toast;
  }
  
  success(message, title = 'Éxito') {
    this.show(message, { type: 'success', title });
  }
  
  error(message, title = 'Error') {
    this.show(message, { type: 'error', title });
  }
  
  warning(message, title = 'Advertencia') {
    this.show(message, { type: 'warning', title });
  }
  
  info(message, title = 'Información') {
    this.show(message, { type: 'info', title });
  }
}

// Uso
const notify = new NotificationSystem();
notify.success('Datos guardados correctamente');
notify.error('No se pudo completar la operación');
notify.warning('Tu sesión expirará en 5 minutos');
notify.info('Hay 3 nuevas notificaciones');
```

## Personalización con CSS

```css
/* Toast personalizado */
.toast {
  min-width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Animación personalizada */
.toast.show {
  animation: slideInRight 0.3s ease-out;
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Toast con borde izquierdo colorido */
.toast-success {
  border-left: 4px solid #28a745;
}

.toast-error {
  border-left: 4px solid #dc3545;
}

/* Header personalizado */
.toast-header {
  background-color: rgba(0, 0, 0, 0.03);
  font-weight: 600;
}

/* Efecto hover en el toast */
.toast:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
  transition: all 0.2s ease;
}
```

## Mejores Prácticas

1. **Mensajes concisos**: Mantén el texto breve y claro
2. **Auto-dismiss apropiado**: 
   - Mensajes informativos: 3-5 segundos
   - Errores importantes: 7-10 segundos o sin auto-dismiss
3. **Posicionamiento**: Esquina superior derecha es estándar
4. **No abuses**: No muestres demasiados toasts a la vez
5. **Iconos claros**: Usa iconos que refuercen el mensaje
6. **Accesibilidad**: Usa `aria-live` y `role="alert"`
7. **Responsive**: Asegura que se vean bien en móvil
8. **Contraste**: Asegura legibilidad en todos los colores

## Accesibilidad

```html
<!-- Toast accesible -->
<div class="toast" 
     role="alert" 
     aria-live="polite" 
     aria-atomic="true">
  <div class="toast-body">
    Mensaje importante que será leído por lectores de pantalla
  </div>
</div>

<!-- Para mensajes urgentes usa aria-live="assertive" -->
<div class="toast" 
     role="alert" 
     aria-live="assertive" 
     aria-atomic="true">
  <div class="toast-body">
    Error crítico que requiere atención inmediata
  </div>
</div>
```

## Ventajas

✅ **No intrusivo**: No interrumpe el flujo de trabajo  
✅ **Informativo**: Proporciona feedback inmediato  
✅ **Flexible**: Múltiples configuraciones y estilos  
✅ **Ligero**: No requiere modal o página completa  
✅ **Moderno**: Sigue patrones de diseño actuales  

## Recursos

- [Documentación oficial Bootstrap Toasts](https://getbootstrap.com/docs/5.0/components/toasts/)
- Ver ejemplos en: `index.html`
