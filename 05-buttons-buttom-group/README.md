# Buttons y Button Groups (Botones y Grupos de Botones)

## ¿Qué son los Buttons?

Los **Buttons** son elementos interactivos fundamentales en cualquier interfaz web. Bootstrap proporciona estilos predefinidos y clases utilitarias para crear botones atractivos y funcionales con mínimo esfuerzo.

## Características Principales

- **8 variantes de color**: Diferentes estilos contextuales
- **3 tamaños**: Pequeño, normal y grande
- **Estados**: Activo, deshabilitado, loading
- **Estilos outline**: Botones con bordes sin relleno
- **Botones de bloque**: Ocupan todo el ancho disponible
- **Button groups**: Agrupar botones relacionados

## Tipos de Botones Básicos

### Botones Sólidos (Solid)
```html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>
```

### Botones Outline (con borde)
```html
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
```

## Clases Principales

### Clases Base
- **`.btn`**: Clase base necesaria para todos los botones
- **`.btn-{color}`**: Define el color del botón (primary, success, danger, etc.)
- **`.btn-outline-{color}`**: Versión outline del botón

### Tamaños
- **`.btn-sm`**: Botón pequeño
- **`.btn-lg`**: Botón grande
- (Sin clase adicional): Tamaño normal

### Estados
- **`.active`**: Estado activo/seleccionado
- **`.disabled`** o `disabled`: Estado deshabilitado

## Tamaños de Botones

```html
<!-- Botón grande -->
<button type="button" class="btn btn-primary btn-lg">Botón Grande</button>

<!-- Botón normal (default) -->
<button type="button" class="btn btn-primary">Botón Normal</button>

<!-- Botón pequeño -->
<button type="button" class="btn btn-primary btn-sm">Botón Pequeño</button>
```

## Botones de Bloque (Full Width)

```html
<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Botón de Bloque</button>
  <button class="btn btn-secondary" type="button">Otro Botón de Bloque</button>
</div>

<!-- Con columnas responsive -->
<div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button">Botón</button>
  <button class="btn btn-primary" type="button">Botón</button>
</div>
```

## Estados de Botones

### Estado Activo
```html
<button type="button" class="btn btn-primary active">Botón Activo</button>
<a href="#" class="btn btn-primary active" role="button">Enlace Activo</a>
```

### Estado Deshabilitado
```html
<!-- Con atributo disabled -->
<button type="button" class="btn btn-primary" disabled>Botón Deshabilitado</button>

<!-- Con clase disabled (para enlaces) -->
<a href="#" class="btn btn-primary disabled" role="button" aria-disabled="true">
  Enlace Deshabilitado
</a>
```

## Botones con Iconos

```html
<!-- Icono a la izquierda -->
<button type="button" class="btn btn-primary">
  <i class="bi bi-download"></i> Descargar
</button>

<!-- Solo icono -->
<button type="button" class="btn btn-primary">
  <i class="bi bi-heart"></i>
</button>

<!-- Icono a la derecha -->
<button type="button" class="btn btn-success">
  Siguiente <i class="bi bi-arrow-right"></i>
</button>
```

## Button Groups (Grupos de Botones)

### Grupo Básico
```html
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Izquierda</button>
  <button type="button" class="btn btn-primary">Centro</button>
  <button type="button" class="btn btn-primary">Derecha</button>
</div>
```

### Grupo con Outline
```html
<div class="btn-group" role="group">
  <button type="button" class="btn btn-outline-primary">Uno</button>
  <button type="button" class="btn btn-outline-primary">Dos</button>
  <button type="button" class="btn btn-outline-primary">Tres</button>
</div>
```

### Toolbar (Barra de Herramientas)
```html
<div class="btn-toolbar" role="toolbar">
  <div class="btn-group me-2" role="group">
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
    <button type="button" class="btn btn-primary">3</button>
  </div>
  <div class="btn-group me-2" role="group">
    <button type="button" class="btn btn-secondary">4</button>
    <button type="button" class="btn btn-secondary">5</button>
  </div>
</div>
```

### Grupo Vertical
```html
<div class="btn-group-vertical" role="group">
  <button type="button" class="btn btn-primary">Botón 1</button>
  <button type="button" class="btn btn-primary">Botón 2</button>
  <button type="button" class="btn btn-primary">Botón 3</button>
</div>
```

## Tamaños de Button Groups

```html
<!-- Grupo grande -->
<div class="btn-group btn-group-lg" role="group">
  <button type="button" class="btn btn-primary">Grande</button>
  <button type="button" class="btn btn-primary">Grande</button>
</div>

<!-- Grupo pequeño -->
<div class="btn-group btn-group-sm" role="group">
  <button type="button" class="btn btn-primary">Pequeño</button>
  <button type="button" class="btn btn-primary">Pequeño</button>
</div>
```

## Button Group con Dropdown

```html
<div class="btn-group" role="group">
  <button type="button" class="btn btn-primary">Acción</button>
  
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle" 
            data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Opción 1</a></li>
      <li><a class="dropdown-item" href="#">Opción 2</a></li>
    </ul>
  </div>
</div>
```

## Radio Buttons Estilizados

```html
<div class="btn-group" role="group" aria-label="Radio buttons">
  <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="option1">Opción 1</label>

  <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
  <label class="btn btn-outline-primary" for="option2">Opción 2</label>

  <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off">
  <label class="btn btn-outline-primary" for="option3">Opción 3</label>
</div>
```

## Checkbox Buttons Estilizados

```html
<div class="btn-group" role="group" aria-label="Checkbox buttons">
  <input type="checkbox" class="btn-check" id="check1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="check1">Check 1</label>

  <input type="checkbox" class="btn-check" id="check2" autocomplete="off">
  <label class="btn btn-outline-primary" for="check2">Check 2</label>

  <input type="checkbox" class="btn-check" id="check3" autocomplete="off">
  <label class="btn btn-outline-primary" for="check3">Check 3</label>
</div>
```

## Casos de Uso Comunes

1. **Acciones principales**: Enviar formularios, confirmar acciones
2. **Navegación**: Enlaces estilizados como botones
3. **Filtros**: Toggle buttons para filtrar contenido
4. **Paginación**: Grupos de botones para navegar páginas
5. **Controles de editor**: Toolbar con botones de formato
6. **Selección múltiple**: Checkbox/radio buttons estilizados

## Personalización con CSS

```css
/* Botón personalizado */
.btn-custom {
  background-color: #ff6b6b;
  border-color: #ff6b6b;
  color: white;
}

.btn-custom:hover {
  background-color: #ff5252;
  border-color: #ff5252;
}

/* Botón con gradiente */
.btn-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
}

/* Animación al hacer clic */
.btn {
  transition: transform 0.1s ease;
}

.btn:active {
  transform: scale(0.95);
}

/* Botón redondeado */
.btn-rounded {
  border-radius: 50px;
  padding: 10px 30px;
}
```

## JavaScript

### Toggle de Estado
```javascript
// Cambiar estado de botón
const btn = document.getElementById('myButton');
btn.addEventListener('click', function() {
  this.classList.toggle('active');
});
```

### Loading State
```javascript
function showLoading(button) {
  button.disabled = true;
  button.innerHTML = `
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Cargando...
  `;
}

function hideLoading(button, originalText) {
  button.disabled = false;
  button.innerHTML = originalText;
}
```

## Botón con Spinner (Loading)

```html
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Cargando...
</button>

<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Procesando...
</button>
```

## Mejores Prácticas

1. **Jerarquía visual**: Usa btn-primary para la acción principal, outline para secundarias
2. **Tamaño apropiado**: Los botones deben ser fáciles de hacer clic (min 44x44px)
3. **Textos claros**: Usa verbos de acción ("Guardar", "Eliminar", "Cancelar")
4. **Estados visibles**: Asegúrate de que los estados disabled y active sean claros
5. **Accesibilidad**: Siempre usa `type="button"` para botones que no envían formularios
6. **Responsive**: Considera botones de bloque en móviles
7. **Feedback visual**: Añade efectos hover y active

## Combinaciones Comunes

```html
<!-- Botones de acción (modal footer) -->
<div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
  <button type="button" class="btn btn-primary">Guardar cambios</button>
</div>

<!-- Botones de formulario -->
<div class="d-flex justify-content-between">
  <button type="reset" class="btn btn-outline-secondary">Limpiar</button>
  <button type="submit" class="btn btn-primary">Enviar</button>
</div>

<!-- Toggle buttons -->
<div class="btn-group" role="group">
  <button type="button" class="btn btn-outline-primary active">Vista Lista</button>
  <button type="button" class="btn btn-outline-primary">Vista Cuadrícula</button>
</div>
```

## Ventajas

✅ **Consistencia**: Diseño uniforme en toda la aplicación  
✅ **Responsive**: Se adaptan a todos los dispositivos  
✅ **Accesibles**: Cumplen con estándares de accesibilidad  
✅ **Flexibles**: Múltiples variantes y opciones de personalización  
✅ **Fáciles de usar**: Implementación simple con clases  

## Recursos

- [Documentación oficial Bootstrap Buttons](https://getbootstrap.com/docs/5.0/components/buttons/)
- [Documentación oficial Bootstrap Button Group](https://getbootstrap.com/docs/5.0/components/button-group/)
- Ver ejemplos en: `index.html`
