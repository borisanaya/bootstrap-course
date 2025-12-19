# Ejercicio: Validación de Formulario con Bootstrap

---

## 1. Etiqueta `<form>`

```html
<form class="row g-3 needs-validation" novalidate>
```

- `row`: Activa el sistema de grid de Bootstrap para organizar los campos en filas.
- `g-3`: Añade espaciado (gutter) entre columnas y filas.
- `needs-validation`: Clase especial de Bootstrap que indica que el formulario usará validación personalizada.
- `novalidate`: Desactiva la validación automática del navegador para usar la validación personalizada con Bootstrap.

---

## 2. Campo Nombre

```html
<div class="col-md-6">
  <label for="nombre" class="form-label">Nombre</label>
  <input type="text" class="form-control" id="nombre" required minlength="3">
  <div class="invalid-feedback">El nombre debe tener al menos 3 caracteres.</div>
</div>
```

- `col-md-6`: El campo ocupa 6 columnas en pantallas medianas (50% del ancho).
- `form-label`: Estiliza la etiqueta del campo.
- `form-control`: Estiliza el input para que tenga el diseño Bootstrap.
- `required`: Campo obligatorio.
- `minlength="3"`: Valida que el nombre tenga al menos 3 caracteres.
- `invalid-feedback`: Texto que se muestra cuando el campo no cumple las condiciones.

---

## 3. Campo Email

```html
<input type="email" class="form-control" id="email" required>
```

- `type="email"`: Valida automáticamente que el formato sea un correo electrónico.
- `invalid-feedback`: Mensaje de error si el formato no es correcto.

---

## 4. Campo Contraseña

```html
<input type="password" class="form-control" id="password" required minlength="6">
```

- `type="password"`: Oculta el texto introducido.
- `minlength="6"`: Valida que la contraseña tenga al menos 6 caracteres.

---

## 5. Checkbox Términos

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="terminos" required>
  <label class="form-check-label" for="terminos">Acepto los términos y condiciones</label>
  <div class="invalid-feedback">Debes aceptar los términos.</div>
</div>
```

- `form-check`: Contenedor para checkbox.
- `form-check-input`: Estiliza el checkbox.
- `required`: Obliga a marcarlo antes de enviar.

---

## 6. Botón de Envío

```html
<button class="btn btn-primary" type="submit">Registrarse</button>
```

- `btn btn-primary`: Botón con estilo principal (azul por defecto).

---

## 🖥 JavaScript para Validación

```js
(function () {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();
```

**Explicación:**

- `checkValidity()`: Comprueba si el formulario cumple todas las reglas (`required`, `minlength`, etc.).
- `event.preventDefault()`: Evita que el formulario se envíe si hay errores.
- `was-validated`: Clase que activa los estilos de validación en Bootstrap (bordes rojos/verdes y mensajes).

---

## ¿Qué ocurre al enviar el formulario?

**Si todos los campos son válidos:**

- El formulario se envía normalmente.

**Si hay errores:**

- Se evita el envío.
- Se muestran mensajes de error (`invalid-feedback`).
- Los campos inválidos se marcan con borde rojo.