# Ejercicio 09: Sistema de Alertas y Accordion FAQ

## Objetivo del Ejercicio

Crear una página de soporte con **Accordion** para preguntas frecuentes, **Alerts** para mensajes importantes, y un **formulario de contacto** con validación.

---

## Enunciado

Debes crear una página de soporte/ayuda con las siguientes características:

### Requisitos:

1. **Sección de Alertas** en la parte superior:
   - Alert de información sobre mantenimiento programado (azul)
   - Alert de advertencia sobre cambios en términos (amarillo)
   - Alert desechable de nueva funcionalidad (verde)

2. **Accordion con 6 preguntas frecuentes**:
   - Estructura de accordion colapsable
   - Preguntas sobre: Cuenta, Pagos, Envíos, Devoluciones, Seguridad, Soporte
   - Solo una pregunta abierta a la vez

3. **Formulario de contacto** en una Card:
   - Nombre (requerido)
   - Email (requerido)
   - Categoría (select con opciones)
   - Mensaje (textarea, requerido)
   - Botón de envío

4. **Alert de éxito** que aparezca al enviar el formulario

---

## Resultado Esperado

- Accordion funcional con preguntas y respuestas
- Alerts informativos al principio
- Formulario con validación básica
- Alert de confirmación al enviar

---

## Componentes Bootstrap Utilizados

- **Alerts** - Mensajes informativos
- **Accordion** - FAQs colapsables
- **Card** - Contenedor del formulario
- **Forms** - Formulario de contacto
- **Buttons** - Botón de envío

---

## Conceptos Aprendidos

✅ Accordion para organizar contenido  
✅ Alerts contextuales y desechables  
✅ Formularios con Bootstrap  
✅ Validación básica de formularios  
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
  <title>Ejercicio 09 - Soporte y Ayuda</title>
  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
</head>
<body>
  <div class="container my-5">
    <h1 class="text-center mb-4">
      <i class="bi bi-question-circle me-2"></i>Centro de Ayuda y Soporte
    </h1>
    
    <!-- Aquí irá el contenido -->
    
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**¿Qué hemos hecho?**
- Estructura HTML5 básica
- Importamos Bootstrap 5 y Bootstrap Icons
- Contenedor principal con margen vertical

---

### Paso 2: Sección de Alertas Informativas

```html
<!-- Sección de alertas -->
<div class="mb-5">
  <h3 class="mb-3">Avisos Importantes</h3>
  
  <!-- Alert de información -->
  <div class="alert alert-info d-flex align-items-center" role="alert">
    <i class="bi bi-info-circle-fill me-3 fs-4"></i>
    <div>
      <strong>Mantenimiento Programado</strong><br>
      El próximo domingo 25 de enero realizaremos tareas de mantenimiento 
      entre las 2:00 AM y 6:00 AM. El servicio podría verse interrumpido.
    </div>
  </div>
  
  <!-- Alert de advertencia -->
  <div class="alert alert-warning d-flex align-items-center" role="alert">
    <i class="bi bi-exclamation-triangle-fill me-3 fs-4"></i>
    <div>
      <strong>Actualización de Términos</strong><br>
      Hemos actualizado nuestros términos y condiciones. 
      <a href="#" class="alert-link">Leer más</a>
    </div>
  </div>
  
  <!-- Alert desechable (verde) -->
  <div class="alert alert-success alert-dismissible fade show d-flex align-items-center" role="alert">
    <i class="bi bi-check-circle-fill me-3 fs-4"></i>
    <div>
      <strong>¡Nueva Funcionalidad Disponible!</strong><br>
      Ahora puedes exportar tus datos en formato PDF. Prueba esta nueva opción 
      en tu panel de control.
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  </div>
</div>
```

**Explicación:**
- **Alert info**: Color azul para información general
- **Alert warning**: Color amarillo para advertencias
- **Alert success dismissible**: Verde, con botón de cierre
- `d-flex align-items-center`: Alinear iconos con texto
- `alert-link`: Enlaces con color adecuado dentro del alert

---

### Paso 3: Accordion con Preguntas Frecuentes

```html
<!-- Sección de FAQ -->
<div class="mb-5">
  <h3 class="mb-3">
    <i class="bi bi-patch-question me-2"></i>Preguntas Frecuentes (FAQ)
  </h3>
  
  <div class="accordion" id="faqAccordion">
    
    <!-- Pregunta 1 -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading1">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" 
                data-bs-target="#collapse1" aria-expanded="true">
          <i class="bi bi-person-circle me-2"></i>
          ¿Cómo creo una cuenta?
        </button>
      </h2>
      <div id="collapse1" class="accordion-collapse collapse show" 
           data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Para crear una cuenta, haz clic en el botón "Registrarse" en la esquina 
          superior derecha. Completa el formulario con tu nombre, email y contraseña. 
          Recibirás un email de confirmación para activar tu cuenta.
        </div>
      </div>
    </div>
    
    <!-- Pregunta 2 -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading2">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#collapse2">
          <i class="bi bi-credit-card me-2"></i>
          ¿Qué métodos de pago aceptan?
        </button>
      </h2>
      <div id="collapse2" class="accordion-collapse collapse" 
           data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Aceptamos tarjetas de crédito/débito (Visa, Mastercard, American Express), 
          PayPal, transferencias bancarias y pagos en efectivo en puntos autorizados.
        </div>
      </div>
    </div>
    
    <!-- Pregunta 3 -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading3">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#collapse3">
          <i class="bi bi-truck me-2"></i>
          ¿Cuánto tarda el envío?
        </button>
      </h2>
      <div id="collapse3" class="accordion-collapse collapse" 
           data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Los envíos estándar tardan de 3 a 5 días hábiles. El envío express 
          llega en 24-48 horas. Envíos internacionales: 7-15 días hábiles.
        </div>
      </div>
    </div>
    
    <!-- Pregunta 4 -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading4">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#collapse4">
          <i class="bi bi-arrow-return-left me-2"></i>
          ¿Cuál es la política de devoluciones?
        </button>
      </h2>
      <div id="collapse4" class="accordion-collapse collapse" 
           data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Puedes devolver productos dentro de los 30 días posteriores a la compra. 
          Los artículos deben estar en su estado original y con el embalaje intacto. 
          El reembolso se procesa en 5-7 días hábiles.
        </div>
      </div>
    </div>
    
    <!-- Pregunta 5 -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading5">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#collapse5">
          <i class="bi bi-shield-lock me-2"></i>
          ¿Es seguro comprar en su sitio?
        </button>
      </h2>
      <div id="collapse5" class="accordion-collapse collapse" 
           data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Sí, utilizamos encriptación SSL de 256 bits para proteger tus datos. 
          Nunca almacenamos información de tarjetas de crédito en nuestros servidores. 
          Cumplimos con los estándares PCI DSS.
        </div>
      </div>
    </div>
    
    <!-- Pregunta 6 -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading6">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#collapse6">
          <i class="bi bi-headset me-2"></i>
          ¿Cómo contacto al soporte técnico?
        </button>
      </h2>
      <div id="collapse6" class="accordion-collapse collapse" 
           data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Puedes contactarnos por email a soporte@ejemplo.com, por teléfono al 
          900-123-456 (L-V 9:00-18:00), o usando el formulario de contacto más abajo. 
          Tiempo de respuesta promedio: 2-4 horas.
        </div>
      </div>
    </div>
    
  </div>
</div>
```

**Conceptos clave:**
- `accordion`: Contenedor principal del accordion
- `data-bs-parent`: Hace que solo una pregunta esté abierta a la vez
- `collapse show`: Primera pregunta abierta por defecto
- `collapsed`: Resto de preguntas cerradas inicialmente
- Iconos en cada pregunta para mejor UX

---

### Paso 4: Formulario de Contacto en Card

```html
<!-- Formulario de contacto -->
<div class="row justify-content-center">
  <div class="col-lg-8">
    <div class="card shadow">
      <div class="card-header bg-primary text-white">
        <h4 class="mb-0">
          <i class="bi bi-envelope me-2"></i>Formulario de Contacto
        </h4>
      </div>
      <div class="card-body">
        <p class="text-muted">
          ¿No encontraste la respuesta que buscabas? Envíanos un mensaje y 
          te responderemos lo antes posible.
        </p>
        
        <form id="contactForm">
          <!-- Nombre -->
          <div class="mb-3">
            <label for="name" class="form-label">Nombre completo *</label>
            <input type="text" class="form-control" id="name" 
                   placeholder="Juan Pérez" required>
          </div>
          
          <!-- Email -->
          <div class="mb-3">
            <label for="email" class="form-label">Email *</label>
            <input type="email" class="form-control" id="email" 
                   placeholder="juan@ejemplo.com" required>
          </div>
          
          <!-- Categoría -->
          <div class="mb-3">
            <label for="category" class="form-label">Categoría *</label>
            <select class="form-select" id="category" required>
              <option value="">Selecciona una categoría...</option>
              <option value="technical">Soporte Técnico</option>
              <option value="billing">Facturación</option>
              <option value="general">Consulta General</option>
              <option value="feedback">Sugerencias</option>
            </select>
          </div>
          
          <!-- Mensaje -->
          <div class="mb-3">
            <label for="message" class="form-label">Mensaje *</label>
            <textarea class="form-control" id="message" rows="5" 
                      placeholder="Describe tu consulta..." required></textarea>
          </div>
          
          <!-- Botón enviar -->
          <button type="submit" class="btn btn-primary w-100">
            <i class="bi bi-send me-2"></i>Enviar Mensaje
          </button>
        </form>
        
        <!-- Alert de éxito (oculto inicialmente) -->
        <div class="alert alert-success mt-3 d-none" id="successAlert" role="alert">
          <i class="bi bi-check-circle-fill me-2"></i>
          <strong>¡Mensaje enviado!</strong> Te responderemos en las próximas 24 horas.
        </div>
      </div>
    </div>
  </div>
</div>
```

**Explicación:**
- Card con header de color para destacar
- Todos los campos marcados como `required`
- Select con opciones de categoría
- Textarea para mensaje largo
- Alert de éxito oculto con clase `d-none`

---

### Paso 5: JavaScript - Validación y Envío del Formulario

```html
<script>
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Obtener valores
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const category = document.getElementById('category').value;
  const message = document.getElementById('message').value;
  
  // Validación básica
  if (!name || !email || !category || !message) {
    alert('Por favor completa todos los campos');
    return;
  }
  
  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor ingresa un email válido');
    return;
  }
  
  // Simular envío
  console.log('Formulario enviado:', { name, email, category, message });
  
  // Mostrar alert de éxito
  const successAlert = document.getElementById('successAlert');
  successAlert.classList.remove('d-none');
  
  // Limpiar formulario
  document.getElementById('contactForm').reset();
  
  // Scroll al alert
  successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
  // Ocultar alert después de 5 segundos
  setTimeout(() => {
    successAlert.classList.add('d-none');
  }, 5000);
});
</script>
```

**Conceptos clave:**
- `preventDefault()`: Evitar recarga de página
- Validación de campos vacíos
- Validación de email con regex
- Mostrar alert de éxito removiendo clase `d-none`
- Limpiar formulario con `.reset()`
- `scrollIntoView()`: Scroll suave al alert
- Auto-ocultar alert con `setTimeout()`

---

## Componentes Bootstrap Utilizados

1. **Alerts** - Mensajes contextuales (info, warning, success)
2. **Accordion** - Preguntas frecuentes colapsables
3. **Card** - Contenedor del formulario
4. **Forms** - Input, select, textarea
5. **Buttons** - Botón de envío
6. **Icons** - Bootstrap Icons para mejorar UX

---

## Mejoras Opcionales

1. **Validación en tiempo real**: Mostrar errores mientras el usuario escribe
2. **Archivo adjunto**: Añadir input tipo file para subir imágenes
3. **Rating**: Sistema de estrellas para valorar el servicio
4. **Chat en vivo**: Botón flotante para chat
5. **Búsqueda en FAQ**: Input para buscar preguntas específicas
6. **Toasts**: Usar toasts en lugar de alerts

---

## Desafíos Adicionales

1. Añadir validación en tiempo real con clases `is-valid` / `is-invalid`
2. Implementar contador de caracteres en el textarea
3. Crear un botón para expandir/colapsar todas las preguntas del accordion
4. Añadir animaciones CSS a los alerts
5. Implementar una sección de "Artículos útiles" con cards

---

## Conceptos Aprendidos

✅ Accordion para organizar contenido (FAQs)  
✅ Alerts contextuales y desechables  
✅ Formularios con Bootstrap (input, select, textarea)  
✅ Validación básica de formularios con JavaScript  
✅ Feedback visual al usuario  
✅ Integración de múltiples componentes en una sola página  
✅ Uso efectivo de iconos para mejorar la experiencia  
