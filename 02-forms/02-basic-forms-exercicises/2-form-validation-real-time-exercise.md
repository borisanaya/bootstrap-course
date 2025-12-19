# Reto Adicional: Validación en Tiempo Real con Bootstrap 5

Este reto consiste en mejorar el formulario anterior añadiendo **validación en tiempo real**, es decir, mostrar feedback visual mientras el usuario escribe, sin esperar a que pulse el botón de enviar.

---

## Objetivo del Reto

- Implementar validación **reactiva** en cada campo del formulario.
- Mostrar mensajes de error dinámicamente mientras el usuario interactúa.
- Mantener el diseño responsive y las clases de Bootstrap.

---

## Características Clave

- **Eventos `input` y `change`** para detectar cambios en los campos.
- Uso de **clases Bootstrap** (`is-valid`, `is-invalid`) para feedback inmediato.
- Mensajes de error personalizados con `invalid-feedback`.

---

## Código HTML + JS

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Validación en Tiempo Real</title>
  https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css
</head>
<body class="p-4">

  <div class="container">
    <h2 class="mb-4">Registro con Validación en Tiempo Real</h2>
    <form class="row g-3" id="registroForm" novalidate>
      
      <!-- Nombre -->
      <div class="col-md-6">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="nombre" required minlength="3">
        <div class="invalid-feedback">El nombre debe tener al menos 3 caracteres.</div>
      </div>

      <!-- Email -->
      <div class="col-md-6">
        <label for="email" class="form-label">Correo electrónico</label>
        <input type="email" class="form-control" id="email" required>
        <div class="invalid-feedback">Introduce un correo válido.</div>
      </div>

      <!-- Contraseña -->
      <div class="col-12">
        <label for="password" class="form-label">Contraseña</label>
        <input type="password" class="form-control" id="password" required minlength="6">
        <div class="invalid-feedback">La contraseña debe tener al menos 6 caracteres.</div>
      </div>

      <!-- Checkbox -->
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="terminos" required>
          <label class="form-check-label" for="terminos">
            Acepto los términos y condiciones
          </label>
          <div class="invalid-feedback">Debes aceptar los términos.</div>
        </div>
      </div>

      <!-- Botón -->
      <div class="col-12">
        <button class="btn btn-primary" type="submit">Registrarse</button>
      </div>
    </form>
  </div>

  <script>
    // Validación en tiempo real
    const form = document.getElementById('registroForm');
    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
      input.addEventListener('input', () => {
        if (input.checkValidity()) {
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
        } else {
          input.classList.remove('is-valid');
          input.classList.add('is-invalid');
        }
      });
    });

    // Validación final al enviar
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
    });
  </script>

</body>
</html>
```
