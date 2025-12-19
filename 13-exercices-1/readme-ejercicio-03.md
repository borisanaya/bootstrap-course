# Ejercicio 03: Formulario de Contacto con Validación

## Objetivo del Ejercicio

Crear un **formulario de contacto completo** con validación usando las clases de Bootstrap y JavaScript. Aprenderás a manejar diferentes tipos de inputs, validación en tiempo real, y feedback visual para el usuario.

---

## Enunciado

Debes crear un formulario de contacto profesional con validación que incluya:

### Requisitos del Formulario:

1. **Campos del formulario**:
   - Nombre completo (requerido, mínimo 3 caracteres)
   - Email (requerido, formato válido)
   - Teléfono (opcional, formato numérico)
   - Asunto (selector desplegable con 3 opciones)
   - Mensaje (textarea, requerido, mínimo 10 caracteres)
   - Checkbox de términos y condiciones (requerido)

2. **Validación**:
   - Validación al enviar el formulario
   - Mensajes de error específicos para cada campo
   - Indicadores visuales (bordes rojos/verdes)
   - Prevenir envío si hay errores

3. **Diseño**:
   - Formulario centrado en una tarjeta
   - Responsive
   - Botón de envío con ícono
   - Mensaje de éxito al enviar correctamente

---

## Resultado Esperado

Tu formulario debe:
- Validar todos los campos antes de enviar
- Mostrar mensajes de error claros
- Indicar visualmente campos válidos/inválidos
- Mostrar mensaje de éxito al completar
- Ser completamente responsive

---

## Tutorial Paso a Paso

### Paso 1: Estructura HTML Base

Crea `ejercicio-03.html`:

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ejercicio 03 - Formulario de Contacto</title>
  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  
  <style>
    body {
      padding: 40px 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  </style>
</head>
<body class="bg-light">

  <div class="container">
    <!-- Aquí irá el formulario -->
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    // Aquí irá nuestro JavaScript de validación
  </script>
</body>
</html>
```

---

### Paso 2: Crear la Tarjeta del Formulario

```html
<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-6 col-md-8">
      <div class="card shadow">
        <div class="card-body p-4">
          <h2 class="card-title text-center mb-4">Formulario de Contacto</h2>
          <p class="text-center text-muted mb-4">
            Completa todos los campos para enviarnos tu mensaje
          </p>
          
          <!-- Formulario -->
          <form id="contactForm" class="needs-validation" novalidate>
            <!-- Aquí irán los campos -->
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Clases importantes:**
- `justify-content-center`: Centra la columna horizontalmente
- `col-lg-6 col-md-8`: Ancho del formulario (50% en desktop, 66% en tablet)
- `needs-validation`: Clase de Bootstrap para validación
- `novalidate`: Desactiva la validación HTML5 por defecto (usaremos la de Bootstrap)

---

### Paso 3: Campo Nombre Completo

Dentro del `<form>`:

```html
<div class="mb-3">
  <label for="nombre" class="form-label">Nombre Completo *</label>
  <input type="text" 
         class="form-control" 
         id="nombre" 
         name="nombre"
         required 
         minlength="3"
         placeholder="Ej: Juan Pérez">
  <div class="invalid-feedback">
    Por favor ingresa tu nombre (mínimo 3 caracteres).
  </div>
  <div class="valid-feedback">
    ¡Perfecto!
  </div>
</div>
```

**¿Qué hemos añadido?**
- `mb-3`: Margin bottom para separar campos
- `form-label`: Estilo para la etiqueta
- `form-control`: Clase principal para inputs de Bootstrap
- `required`: Campo obligatorio
- `minlength="3"`: Mínimo 3 caracteres
- `invalid-feedback`: Mensaje de error (se muestra cuando es inválido)
- `valid-feedback`: Mensaje de éxito (se muestra cuando es válido)

---

### Paso 4: Campo Email

```html
<div class="mb-3">
  <label for="email" class="form-label">Correo Electrónico *</label>
  <input type="email" 
         class="form-control" 
         id="email" 
         name="email"
         required
         placeholder="ejemplo@correo.com">
  <div class="invalid-feedback">
    Por favor ingresa un correo electrónico válido.
  </div>
  <div class="valid-feedback">
    ¡Correo válido!
  </div>
</div>
```

**Diferencias:**
- `type="email"`: Validación automática de formato email
- El navegador verifica que tenga @ y dominio

---

### Paso 5: Campo Teléfono (Opcional)

```html
<div class="mb-3">
  <label for="telefono" class="form-label">Teléfono (opcional)</label>
  <input type="tel" 
         class="form-control" 
         id="telefono" 
         name="telefono"
         pattern="[0-9]{9,15}"
         placeholder="612345678">
  <div class="invalid-feedback">
    El teléfono debe contener entre 9 y 15 dígitos.
  </div>
  <div class="valid-feedback">
    ¡Teléfono válido!
  </div>
</div>
```

**Nuevas propiedades:**
- `type="tel"`: Tipo teléfono (móvil muestra teclado numérico)
- `pattern="[0-9]{9,15}"`: Solo números, entre 9 y 15 dígitos
- **Sin `required`**: Es opcional

---

### Paso 6: Selector de Asunto

```html
<div class="mb-3">
  <label for="asunto" class="form-label">Asunto *</label>
  <select class="form-select" id="asunto" name="asunto" required>
    <option value="" selected disabled>Selecciona un asunto</option>
    <option value="consulta">Consulta General</option>
    <option value="soporte">Soporte Técnico</option>
    <option value="ventas">Información de Ventas</option>
  </select>
  <div class="invalid-feedback">
    Por favor selecciona un asunto.
  </div>
</div>
```

**Nuevo componente:**
- `form-select`: Clase para selectores (dropdown)
- `value=""`: Opción por defecto sin valor
- `disabled`: No se puede seleccionar (obliga a elegir una opción válida)
- Cada `<option>` tiene un `value` único

---

### Paso 7: Campo Mensaje (Textarea)

```html
<div class="mb-3">
  <label for="mensaje" class="form-label">Mensaje *</label>
  <textarea class="form-control" 
            id="mensaje" 
            name="mensaje"
            rows="5" 
            required
            minlength="10"
            placeholder="Escribe tu mensaje aquí..."></textarea>
  <div class="invalid-feedback">
    El mensaje debe tener al menos 10 caracteres.
  </div>
  <div class="valid-feedback">
    ¡Mensaje recibido!
  </div>
</div>
```

**Componente Textarea:**
- `<textarea>`: Para textos largos (múltiples líneas)
- `rows="5"`: Altura inicial (5 líneas)
- `minlength="10"`: Mínimo 10 caracteres

---

### Paso 8: Checkbox de Términos

```html
<div class="mb-3 form-check">
  <input type="checkbox" 
         class="form-check-input" 
         id="terminos" 
         required>
  <label class="form-check-label" for="terminos">
    Acepto los <a href="#" target="_blank">términos y condiciones</a> *
  </label>
  <div class="invalid-feedback">
    Debes aceptar los términos y condiciones.
  </div>
</div>
```

**Componente Checkbox:**
- `form-check`: Contenedor para checkboxes/radios
- `form-check-input`: Clase para el checkbox
- `form-check-label`: Etiqueta del checkbox
- `required`: Debe estar marcado para enviar

---

### Paso 9: Botón de Envío

```html
<div class="d-grid gap-2">
  <button type="submit" class="btn btn-primary btn-lg">
    Enviar Mensaje
  </button>
</div>
```

**Clases del botón:**
- `d-grid`: Display grid (botón ocupa todo el ancho)
- `gap-2`: Espacio si hubiera más botones
- `btn-lg`: Botón grande
- `type="submit"`: Activa la validación al hacer clic

---

### Paso 10: Div para Mensaje de Éxito

Después del formulario (dentro del `card-body`):

```html
<div id="successMessage" class="alert alert-success mt-3" style="display: none;">
  <strong>¡Éxito!</strong> Tu mensaje ha sido enviado correctamente.
</div>
```

**¿Qué es esto?**
- `alert alert-success`: Componente de alerta verde
- `style="display: none;"`: Oculto por defecto
- Se mostrará con JavaScript cuando el formulario sea válido

---

### Paso 11: JavaScript de Validación

En el `<script>` antes del cierre del `</body>`:

```javascript
<script>
  // Obtener el formulario
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  // Agregar evento submit
  form.addEventListener('submit', function(event) {
    // Prevenir envío por defecto
    event.preventDefault();
    event.stopPropagation();

    // Verificar validez
    if (form.checkValidity()) {
      // Formulario válido: mostrar mensaje de éxito
      successMessage.style.display = 'block';
      
      // Resetear formulario
      form.reset();
      
      // Quitar clases de validación
      form.classList.remove('was-validated');
      
      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 5000);
    } else {
      // Formulario inválido: mantener clases de error
      form.classList.add('was-validated');
    }
  });
</script>
```

**¿Cómo funciona?**

1. **Seleccionamos elementos**:
   - `getElementById`: Obtiene el formulario y el mensaje de éxito

2. **Evento submit**:
   - `addEventListener('submit')`: Se ejecuta al hacer clic en "Enviar"
   
3. **Prevenir envío**:
   - `preventDefault()`: No envía el formulario (no recarga la página)
   - `stopPropagation()`: Detiene la propagación del evento

4. **Validación**:
   - `form.checkValidity()`: Verifica si todos los campos son válidos
   - Si es válido: muestra mensaje, resetea formulario
   - Si es inválido: añade clase `was-validated` (muestra errores)

5. **Clase `was-validated`**:
   - Activa los estilos de validación de Bootstrap
   - Muestra bordes rojos/verdes y mensajes de feedback

---

## Mejoras Opcionales

### 1. Validación en Tiempo Real

Añade validación mientras el usuario escribe:

```javascript
// Después del código anterior
const inputs = form.querySelectorAll('input, select, textarea');

inputs.forEach(input => {
  input.addEventListener('blur', function() {
    // Validar cuando pierde el foco
    if (this.checkValidity()) {
      this.classList.remove('is-invalid');
      this.classList.add('is-valid');
    } else {
      this.classList.remove('is-valid');
      this.classList.add('is-invalid');
    }
  });
});
```

### 2. Contador de Caracteres para el Mensaje

Antes del textarea, añade:

```html
<div class="d-flex justify-content-between">
  <label for="mensaje" class="form-label">Mensaje *</label>
  <small class="text-muted">
    <span id="charCount">0</span>/500 caracteres
  </small>
</div>
<textarea class="form-control" 
          id="mensaje" 
          maxlength="500"
          ...>
```

JavaScript para el contador:

```javascript
const mensajeTextarea = document.getElementById('mensaje');
const charCount = document.getElementById('charCount');

mensajeTextarea.addEventListener('input', function() {
  charCount.textContent = this.value.length;
});
```

### 3. Deshabilitar Botón Mientras se Envía

```javascript
if (form.checkValidity()) {
  // Deshabilitar botón
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Enviando...';
  
  // Simular envío (en producción, aquí harías fetch/AJAX)
  setTimeout(() => {
    successMessage.style.display = 'block';
    form.reset();
    form.classList.remove('was-validated');
    
    // Re-habilitar botón
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Enviar Mensaje';
  }, 2000);
}
```

---

## Entendiendo la Validación de Bootstrap

### Estados de Validación:

| Clase | Cuándo se aplica | Efecto |
|-------|------------------|--------|
| `was-validated` | Después del primer submit | Activa validación en todo el form |
| `is-valid` | Campo válido | Borde verde |
| `is-invalid` | Campo inválido | Borde rojo |

### Tipos de Input y su Validación:

| Type | Validación |
|------|-----------|
| `text` | `required`, `minlength`, `maxlength`, `pattern` |
| `email` | Formato: `usuario@dominio.com` |
| `tel` | `pattern` para formato personalizado |
| `number` | `min`, `max`, `step` |
| `url` | Formato: `https://ejemplo.com` |

---

## Errores Comunes

### Error 1: La validación no funciona
**Problema**: Falta `novalidate` en el form o `needs-validation`
**Solución**: 
```html
<form class="needs-validation" novalidate>
```

### Error 2: Los mensajes de error no se muestran
**Problema**: Faltan las clases `invalid-feedback`
**Solución**: Añade después de cada input:
```html
<div class="invalid-feedback">Mensaje de error</div>
```

### Error 3: El formulario se envía sin validar
**Problema**: `event.preventDefault()` no está en el JavaScript
**Solución**: 
```javascript
form.addEventListener('submit', function(event) {
  event.preventDefault(); // ← Fundamental
  // resto del código
});
```

### Error 4: Checkbox siempre da error
**Problema**: Falta `required` o está dentro del label
**Solución**: 
```html
<input type="checkbox" class="form-check-input" id="terminos" required>
```

---

## Checklist Final

- [ ] Todos los campos están dentro del `<form>`
- [ ] Form tiene `class="needs-validation" novalidate`
- [ ] Cada input tiene:
  - [ ] `class="form-control"` (o `form-select` o `form-check-input`)
  - [ ] `id` único
  - [ ] `name` (para enviar datos)
  - [ ] `required` si es obligatorio
- [ ] Cada input tiene:
  - [ ] `<div class="invalid-feedback">` con mensaje de error
  - [ ] (Opcional) `<div class="valid-feedback">` con mensaje de éxito
- [ ] El JavaScript:
  - [ ] Captura el evento submit
  - [ ] Usa `preventDefault()`
  - [ ] Usa `form.checkValidity()`
  - [ ] Añade/quita clase `was-validated`
- [ ] El mensaje de éxito se muestra correctamente
- [ ] El formulario se resetea después de enviar

---

## Conceptos Aprendidos

En este ejercicio has aprendido:

 **Formularios en Bootstrap** (`form-control`, `form-label`, `form-select`)
 **Validación HTML5** (`required`, `minlength`, `pattern`, `type`)
 **Validación de Bootstrap** (`needs-validation`, `was-validated`)
 **Feedback visual** (`is-valid`, `is-invalid`, `valid-feedback`, `invalid-feedback`)
 **JavaScript form validation** (`checkValidity()`, `preventDefault()`)
 **Diferentes tipos de inputs** (text, email, tel, select, textarea, checkbox)
 **Manejo de eventos** (`submit`, `blur`, `input`)
 **Manipulación del DOM** (`classList`, `style`, `reset()`)

---

## Siguiente Paso

¡Fantástico! Has dominado los formularios con validación. En el **Ejercicio 04** crearás una barra de navegación completa con menú desplegable, offcanvas para móvil, y diferentes secciones.


