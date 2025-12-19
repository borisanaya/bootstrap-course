
# Modal con Formulario Validado

## Objetivo

- Crear un modal (ventana emergente) que contenga un formulario.
- Aplicar validación nativa de HTML5 y feedback visual con Bootstrap.
- Activar el modal mediante un botón.

---

## Explicación Paso a Paso

### 1. Botón para abrir el modal

```html
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registroModal">
	Abrir Formulario
</button>
```

- `data-bs-toggle="modal"`: Indica que el botón abrirá un modal.
- `data-bs-target="#registroModal"`: Apunta al ID del modal que queremos mostrar.

### 2. Estructura del modal

```html
<div class="modal fade" id="registroModal" tabindex="-1" aria-labelledby="registroModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<!-- modal-header, modal-body -->
		</div>
	</div>
</div>
```

- `modal fade`: Clase para animación y ocultar el modal inicialmente.
- `modal-dialog`: Contenedor del contenido.
- `modal-content`: Define el contenido del modal (header, body, footer).

### 3. Formulario dentro del modal

```html
<form class="needs-validation" novalidate>
	<!-- campos -->
</form>
```

- `needs-validation`: Clase de Bootstrap para activar estilos de validación.
- `novalidate`: Desactiva la validación automática del navegador.

Cada campo tiene:

- `required`: Campo obligatorio.
- `minlength`: Número mínimo de caracteres.
- `invalid-feedback`: Mensaje que aparece si el campo no es válido.

### 4. JavaScript para validación

```js
form.addEventListener('submit', event => {
	if (!form.checkValidity()) {
		event.preventDefault();
		event.stopPropagation();
	}
	form.classList.add('was-validated');
});
```

- `checkValidity()`: Comprueba si el formulario cumple las reglas.
- `was-validated`: Clase que activa los estilos de validación (bordes rojos/verdes y mensajes).
