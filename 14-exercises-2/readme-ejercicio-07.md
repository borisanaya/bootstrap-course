# Ejercicio 07: Modal de Confirmación y Toasts Dinámicos

## Objetivo del Ejercicio

Crear una aplicación interactiva que utilice **Modals** para confirmaciones y **Toasts** para notificaciones, aprendiendo a manejar eventos y mostrar feedback al usuario.

---

## Enunciado

Debes crear una página de gestión de tareas con las siguientes características:

### Requisitos:

1. **Lista de tareas** con al menos 4 tareas usando List Group
2. **Cada tarea debe tener**:
   - Nombre de la tarea
   - Botón "Completar" (success)
   - Botón "Eliminar" (danger)

3. **Modal de confirmación** que aparezca al hacer clic en "Eliminar":
   - Título: "Confirmar eliminación"
   - Mensaje: "¿Estás seguro de que deseas eliminar esta tarea?"
   - Botón "Cancelar"
   - Botón "Eliminar"

4. **Toasts de notificación** que aparezcan:
   - Toast verde cuando se completa una tarea
   - Toast rojo cuando se elimina una tarea
   - Posicionados en la esquina superior derecha
   - Auto-cierre después de 3 segundos

5. **Botón "Nueva Tarea"** que abra un modal con formulario

---

## Resultado Esperado

Tu aplicación debe:
- Mostrar modal antes de eliminar cualquier tarea
- Mostrar toast de confirmación después de cada acción
- Las tareas completadas deben marcarse visualmente (tachado)
- Funcionalidad completa de agregar, completar y eliminar tareas

---

## Componentes Bootstrap Utilizados

- **Modals** - Confirmaciones y formularios
- **Toasts** - Notificaciones
- **List Group** - Lista de tareas
- **Buttons** - Acciones
- **Forms** - Agregar nueva tarea

---

## Conceptos Clave

✅ Manejo de eventos con JavaScript  
✅ Mostrar/ocultar modals dinámicamente  
✅ Crear toasts programáticamente  
✅ Manipulación del DOM  
✅ Feedback visual al usuario  

---

## Tutorial Paso a Paso

### Paso 1: Estructura HTML Básica

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ejercicio 07 - Gestor de Tareas</title>
  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
  
  <style>
    .task-completed {
      text-decoration: line-through;
      opacity: 0.6;
    }
  </style>
</head>
<body>
  <div class="container my-5">
    <h1 class="text-center mb-4"><i class="bi bi-list-check me-2"></i>Gestor de Tareas</h1>
    
    <!-- Aquí irá el contenido -->
    
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**¿Qué hemos hecho?**
- Importamos Bootstrap 5 y Bootstrap Icons
- Clase `.task-completed` para tareas tachadas
- Contenedor principal con margen

---

### Paso 2: Botón Nueva Tarea y Lista de Tareas

```html
<div class="d-flex justify-content-between align-items-center mb-3">
  <h3>Mis Tareas</h3>
  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addTaskModal">
    <i class="bi bi-plus-circle me-2"></i>Nueva Tarea
  </button>
</div>

<ul class="list-group" id="taskList">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>Completar el proyecto de Bootstrap</span>
    <div>
      <button class="btn btn-success btn-sm me-2" onclick="completeTask(this)">
        <i class="bi bi-check-circle"></i> Completar
      </button>
      <button class="btn btn-danger btn-sm" onclick="showDeleteModal(this)">
        <i class="bi bi-trash"></i> Eliminar
      </button>
    </div>
  </li>
  
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>Revisar documentación</span>
    <div>
      <button class="btn btn-success btn-sm me-2" onclick="completeTask(this)">
        <i class="bi bi-check-circle"></i> Completar
      </button>
      <button class="btn btn-danger btn-sm" onclick="showDeleteModal(this)">
        <i class="bi bi-trash"></i> Eliminar
      </button>
    </div>
  </li>
  
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>Practicar ejercicios</span>
    <div>
      <button class="btn btn-success btn-sm me-2" onclick="completeTask(this)">
        <i class="bi bi-check-circle"></i> Completar
      </button>
      <button class="btn btn-danger btn-sm" onclick="showDeleteModal(this)">
        <i class="bi bi-trash"></i> Eliminar
      </button>
    </div>
  </li>
  
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>Hacer ejercicio</span>
    <div>
      <button class="btn btn-success btn-sm me-2" onclick="completeTask(this)">
        <i class="bi bi-check-circle"></i> Completar
      </button>
      <button class="btn btn-danger btn-sm" onclick="showDeleteModal(this)">
        <i class="bi bi-trash"></i> Eliminar
      </button>
    </div>
  </li>
</ul>
```

**Explicación:**
- `d-flex justify-content-between`: Layout con espacio entre elementos
- Cada tarea tiene dos botones: completar y eliminar
- Usamos `onclick` para conectar con funciones JavaScript

---

### Paso 3: Modal de Confirmación de Eliminación

```html
<!-- Modal de confirmación -->
<div class="modal fade" id="confirmModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-danger text-white">
        <h5 class="modal-title">
          <i class="bi bi-exclamation-triangle me-2"></i>Confirmar Eliminación
        </h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <p>¿Estás seguro de que deseas eliminar esta tarea?</p>
        <p class="text-muted mb-0">Esta acción no se puede deshacer.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-danger" id="confirmDeleteBtn">
          <i class="bi bi-trash"></i> Eliminar
        </button>
      </div>
    </div>
  </div>
</div>
```

**Conceptos:**
- Header con color de peligro (`bg-danger`)
- Icono de advertencia para reforzar el mensaje
- Dos botones: cancelar (secundario) y eliminar (peligro)

---

### Paso 4: Modal para Agregar Nueva Tarea

```html
<!-- Modal agregar tarea -->
<div class="modal fade" id="addTaskModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">
          <i class="bi bi-plus-circle me-2"></i>Nueva Tarea
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <form id="addTaskForm">
          <div class="mb-3">
            <label for="taskName" class="form-label">Nombre de la tarea</label>
            <input type="text" class="form-control" id="taskName" 
                   placeholder="Ej: Estudiar JavaScript" required>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary" onclick="addTask()">
          <i class="bi bi-check"></i> Agregar
        </button>
      </div>
    </div>
  </div>
</div>
```

**Explicación:**
- Formulario simple con un campo de texto
- Atributo `required` para validación HTML5
- Botón "Agregar" llama a la función `addTask()`

---

### Paso 5: Contenedor de Toasts

```html
<!-- Contenedor de toasts -->
<div class="toast-container position-fixed top-0 end-0 p-3" id="toastContainer"></div>
```

**Explicación:**
- `position-fixed top-0 end-0`: Fijo en esquina superior derecha
- Los toasts se crearán dinámicamente con JavaScript

---

### Paso 6: JavaScript - Completar Tarea

```html
<script>
let taskToDelete = null;
const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));
const addTaskModal = new bootstrap.Modal(document.getElementById('addTaskModal'));

// Completar tarea
function completeTask(button) {
  const listItem = button.closest('li');
  const taskText = listItem.querySelector('span');
  
  // Toggle clase de completado
  if (taskText.classList.contains('task-completed')) {
    taskText.classList.remove('task-completed');
    button.innerHTML = '<i class="bi bi-check-circle"></i> Completar';
    showToast('Tarea marcada como pendiente', 'warning');
  } else {
    taskText.classList.add('task-completed');
    button.innerHTML = '<i class="bi bi-check-circle-fill"></i> Completada';
    button.classList.add('disabled');
    showToast('¡Tarea completada!', 'success');
  }
}
</script>
```

**Conceptos clave:**
- `closest('li')`: Encuentra el elemento padre `<li>` más cercano
- `classList.toggle()`: Agrega o quita clases
- Cambiar texto del botón según estado

---

### Paso 7: JavaScript - Mostrar Modal de Eliminación

```javascript
// Mostrar modal de confirmación
function showDeleteModal(button) {
  taskToDelete = button.closest('li');
  confirmModal.show();
}

// Confirmar eliminación
document.getElementById('confirmDeleteBtn').addEventListener('click', function() {
  if (taskToDelete) {
    taskToDelete.remove();
    confirmModal.hide();
    showToast('Tarea eliminada correctamente', 'danger');
    taskToDelete = null;
  }
});
```

**Explicación:**
- Guardamos referencia al elemento a eliminar en `taskToDelete`
- Al confirmar, eliminamos el elemento del DOM con `.remove()`
- Mostramos toast de confirmación

---

### Paso 8: JavaScript - Agregar Nueva Tarea

```javascript
// Agregar nueva tarea
function addTask() {
  const taskName = document.getElementById('taskName').value.trim();
  
  if (taskName === '') {
    alert('Por favor ingresa un nombre para la tarea');
    return;
  }
  
  const taskList = document.getElementById('taskList');
  const newTask = document.createElement('li');
  newTask.className = 'list-group-item d-flex justify-content-between align-items-center';
  newTask.innerHTML = `
    <span>${taskName}</span>
    <div>
      <button class="btn btn-success btn-sm me-2" onclick="completeTask(this)">
        <i class="bi bi-check-circle"></i> Completar
      </button>
      <button class="btn btn-danger btn-sm" onclick="showDeleteModal(this)">
        <i class="bi bi-trash"></i> Eliminar
      </button>
    </div>
  `;
  
  taskList.appendChild(newTask);
  document.getElementById('taskName').value = '';
  addTaskModal.hide();
  showToast('¡Tarea agregada exitosamente!', 'success');
}
```

**Conceptos:**
- `createElement()`: Crear nuevo elemento HTML
- `innerHTML`: Establecer contenido HTML
- `appendChild()`: Agregar al DOM
- Limpiar el input después de agregar

---

### Paso 9: JavaScript - Crear Toasts Dinámicamente

```javascript
// Crear y mostrar toast
function showToast(message, type) {
  const bgClass = type === 'success' ? 'bg-success' : 
                  type === 'danger' ? 'bg-danger' : 'bg-warning';
  
  const icon = type === 'success' ? 'check-circle' : 
               type === 'danger' ? 'trash' : 'exclamation-circle';
  
  const toastHTML = `
    <div class="toast align-items-center text-white ${bgClass} border-0" role="alert">
      <div class="d-flex">
        <div class="toast-body">
          <i class="bi bi-${icon} me-2"></i>${message}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" 
                data-bs-dismiss="toast"></button>
      </div>
    </div>
  `;
  
  const container = document.getElementById('toastContainer');
  container.insertAdjacentHTML('beforeend', toastHTML);
  
  const toastElement = container.lastElementChild;
  const toast = new bootstrap.Toast(toastElement, { delay: 3000 });
  toast.show();
  
  // Eliminar el toast del DOM después de ocultarse
  toastElement.addEventListener('hidden.bs.toast', () => {
    toastElement.remove();
  });
}
</script>
```

**Explicación:**
- Función reutilizable para crear toasts
- Diferentes colores e iconos según el tipo
- `delay: 3000`: Auto-cierre después de 3 segundos
- Limpieza automática del DOM

---

## Componentes Bootstrap Utilizados

1. **List Group** - Lista de tareas
2. **Modals** - Confirmación y agregar tarea
3. **Toasts** - Notificaciones
4. **Buttons** - Acciones (completar, eliminar, agregar)
5. **Forms** - Input para nueva tarea
6. **Icons** - Bootstrap Icons para UX

---

## Mejoras Opcionales

1. **LocalStorage**: Guardar tareas para que persistan al recargar
2. **Prioridades**: Añadir niveles de prioridad con colores
3. **Fechas**: Agregar fecha de vencimiento
4. **Categorías**: Organizar tareas por categorías
5. **Búsqueda**: Input para filtrar tareas
6. **Estadísticas**: Mostrar contador de completadas/pendientes

---

## Conceptos Aprendidos

✅ Manejo de eventos con JavaScript  
✅ Mostrar/ocultar modals dinámicamente  
✅ Crear toasts programáticamente  
✅ Manipulación del DOM (agregar, eliminar elementos)  
✅ Feedback visual al usuario  
✅ Validación básica de formularios  
✅ Uso de clases CSS para estados  
