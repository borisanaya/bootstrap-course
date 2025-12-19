# Ejercicio 05: Mini Landing Page Completa (Proyecto Final)

## Objetivo del Ejercicio

Crear una **landing page completa y profesional** que integre todos los conocimientos adquiridos en los ejercicios anteriores. Este es tu proyecto final que demuestra tu dominio de Bootstrap 5.

---

## Enunciado

Debes crear una landing page completa para una empresa ficticia de tecnología con las siguientes secciones:

### Requisitos Completos:

1. **Navbar fijo** con:
   - Logo
   - Enlaces de navegación
   - Botón CTA destacado
   - Offcanvas para móvil

2. **Hero Section** con:
   - Título principal grande
   - Subtítulo descriptivo
   - 2 botones de acción
   - Imagen o ilustración
   - Fondo con gradiente

3. **Sección de Características** (Features):
   - 6 tarjetas con iconos
   - Grid responsive (3 columnas en desktop, 2 en tablet, 1 en móvil)

4. **Galería de Proyectos**:
   - 6 imágenes de proyectos
   - Cards con hover effect
   - Modal al hacer clic (opcional)

5. **Testimonios**:
   - Carousel de Bootstrap con 3 testimonios
   - Foto, nombre, cargo y testimonio de cada cliente

6. **Formulario de Contacto**:
   - Validación completa
   - Campos: nombre, email, empresa, mensaje
   - Mensaje de éxito

7. **Footer** con:
   - 3 columnas: Acerca de, Enlaces rápidos, Redes sociales
   - Copyright

---

## Resultado Esperado

Tu landing page debe:
- Ser completamente responsive
- Tener navegación fluida entre secciones
- Incluir todos los componentes de Bootstrap aprendidos
- Tener un diseño profesional y atractivo
- Validación funcional del formulario
- Animaciones y efectos sutiles

---

## Tutorial Paso a Paso

### Paso 1: Estructura HTML Base

Crea `ejercicio-05.html`:

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ejercicio 05 - Landing Page Completa</title>
  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  
  <style>
    /* CSS personalizado aquí */
  </style>
</head>
<body>
  <!-- Contenido aquí -->
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

### Paso 2: CSS Personalizado Completo

En el `<style>`:

```css
/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Espaciado para navbar fijo */
body {
  padding-top: 76px;
}

/* Hero section */
.hero-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
}

/* Secciones */
section {
  padding: 80px 0;
}

/* Cards con hover effect */
.feature-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* Project cards */
.project-card {
  overflow: hidden;
  position: relative;
}

.project-card img {
  transition: transform 0.5s ease;
}

.project-card:hover img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(102, 126, 234, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

/* Testimonials */
.testimonial-item {
  padding: 40px;
}

/* Footer */
footer {
  background-color: #212529;
  color: white;
}

footer a {
  color: #adb5bd;
  text-decoration: none;
  transition: color 0.3s ease;
}

footer a:hover {
  color: white;
}
```

---

### Paso 3: Navbar Completo

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand fw-bold" href="#hero">
      TechSolutions
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">TechSolutions</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
      </div>

      <div class="offcanvas-body">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#hero">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#features">Características</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Proyectos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#testimonials">Testimonios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contacto</a>
          </li>
        </ul>
        <a href="#contact" class="btn btn-primary ms-lg-3">Comenzar</a>
      </div>
    </div>
  </div>
</nav>
```

---

### Paso 4: Hero Section

```html
<section id="hero" class="hero-section">
  <div class="container">
    <div class="row align-items-center">
      <!-- Contenido -->
      <div class="col-lg-6 mb-4 mb-lg-0">
        <h1 class="display-2 fw-bold mb-4">
          Transformamos Ideas en Realidad Digital
        </h1>
        <p class="lead mb-4">
          Desarrollamos soluciones tecnológicas innovadoras que impulsan tu negocio al siguiente nivel.
        </p>
        <a href="#contact" class="btn btn-light btn-lg me-3">
          Empezar Ahora
        </a>
        <a href="#projects" class="btn btn-outline-light btn-lg">
          Ver Proyectos
        </a>
      </div>

      <!-- Imagen -->
      <div class="col-lg-6 text-center">
        <img src="https://via.placeholder.com/500x500/ffffff/667eea?text=Hero+Image" 
             class="img-fluid rounded" 
             alt="Hero">
      </div>
    </div>
  </div>
</section>
```

---

### Paso 5: Sección de Características

```html
<section id="features" class="bg-light">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="display-5 fw-bold">Nuestras Características</h2>
      <p class="lead text-muted">
        Todo lo que necesitas para llevar tu proyecto al éxito
      </p>
    </div>

    <div class="row g-4">
      <!-- Feature 1 -->
      <div class="col-lg-4 col-md-6">
        <div class="card feature-card h-100 border-0 shadow text-center p-4">
          <div class="fs-1 text-primary mb-3">⚡</div>
          <h5 class="card-title mb-3">Rápido y Eficiente</h5>
          <p class="card-text text-muted">
            Desarrollo ágil con las últimas tecnologías para resultados rápidos.
          </p>
        </div>
      </div>

      <!-- Feature 2 -->
      <div class="col-lg-4 col-md-6">
        <div class="card feature-card h-100 border-0 shadow text-center p-4">
          <div class="fs-1 text-primary mb-3">📱</div>
          <h5 class="card-title mb-3">100% Responsive</h5>
          <p class="card-text text-muted">
            Diseños que se adaptan perfectamente a cualquier dispositivo.
          </p>
        </div>
      </div>

      <!-- Feature 3 -->
      <div class="col-lg-4 col-md-6">
        <div class="card feature-card h-100 border-0 shadow text-center p-4">
          <div class="fs-1 text-primary mb-3">🔒</div>
          <h5 class="card-title mb-3">Seguro</h5>
          <p class="card-text text-muted">
            Máxima seguridad y protección de datos en todos nuestros proyectos.
          </p>
        </div>
      </div>

      <!-- Feature 4 -->
      <div class="col-lg-4 col-md-6">
        <div class="card feature-card h-100 border-0 shadow text-center p-4">
          <div class="fs-1 text-primary mb-3">🎨</div>
          <h5 class="card-title mb-3">Diseño Moderno</h5>
          <p class="card-text text-muted">
            Interfaces intuitivas y atractivas que encantan a los usuarios.
          </p>
        </div>
      </div>

      <!-- Feature 5 -->
      <div class="col-lg-4 col-md-6">
        <div class="card feature-card h-100 border-0 shadow text-center p-4">
          <div class="fs-1 text-primary mb-3">💼</div>
          <h5 class="card-title mb-3">Soporte 24/7</h5>
          <p class="card-text text-muted">
            Equipo disponible en todo momento para ayudarte.
          </p>
        </div>
      </div>

      <!-- Feature 6 -->
      <div class="col-lg-4 col-md-6">
        <div class="card feature-card h-100 border-0 shadow text-center p-4">
          <div class="fs-1 text-primary mb-3">🚀</div>
          <h5 class="card-title mb-3">Escalable</h5>
          <p class="card-text text-muted">
            Soluciones que crecen con tu negocio sin límites.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### Paso 6: Galería de Proyectos

```html
<section id="projects">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="display-5 fw-bold">Proyectos Destacados</h2>
      <p class="lead text-muted">
        Algunos de nuestros trabajos más recientes
      </p>
    </div>

    <div class="row g-4">
      <!-- Proyecto 1 -->
      <div class="col-lg-4 col-md-6">
        <div class="card project-card border-0 shadow-sm h-100">
          <div class="position-relative">
            <img src="https://via.placeholder.com/400x300/667eea/ffffff?text=Proyecto+1" 
                 class="card-img-top" 
                 alt="Proyecto 1">
            <div class="project-overlay">
              <div class="text-white text-center">
                <h5>E-commerce Platform</h5>
                <p>Desarrollo Web</p>
                <button class="btn btn-light">Ver Detalles</button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">E-commerce Platform</h5>
            <p class="card-text text-muted">
              Plataforma completa de comercio electrónico con pasarela de pagos.
            </p>
          </div>
        </div>
      </div>

      <!-- Proyecto 2 -->
      <div class="col-lg-4 col-md-6">
        <div class="card project-card border-0 shadow-sm h-100">
          <div class="position-relative">
            <img src="https://via.placeholder.com/400x300/764ba2/ffffff?text=Proyecto+2" 
                 class="card-img-top" 
                 alt="Proyecto 2">
            <div class="project-overlay">
              <div class="text-white text-center">
                <h5>App Móvil</h5>
                <p>Desarrollo Mobile</p>
                <button class="btn btn-light">Ver Detalles</button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">App Móvil Financiera</h5>
            <p class="card-text text-muted">
              Aplicación móvil para gestión de finanzas personales.
            </p>
          </div>
        </div>
      </div>

      <!-- Proyecto 3 -->
      <div class="col-lg-4 col-md-6">
        <div class="card project-card border-0 shadow-sm h-100">
          <div class="position-relative">
            <img src="https://via.placeholder.com/400x300/f093fb/ffffff?text=Proyecto+3" 
                 class="card-img-top" 
                 alt="Proyecto 3">
            <div class="project-overlay">
              <div class="text-white text-center">
                <h5>Dashboard Analytics</h5>
                <p>Business Intelligence</p>
                <button class="btn btn-light">Ver Detalles</button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Dashboard Analytics</h5>
            <p class="card-text text-muted">
              Panel de control con visualización de datos en tiempo real.
            </p>
          </div>
        </div>
      </div>

      <!-- Proyectos 4, 5, 6 (similar estructura) -->
      <div class="col-lg-4 col-md-6">
        <div class="card project-card border-0 shadow-sm h-100">
          <div class="position-relative">
            <img src="https://via.placeholder.com/400x300/4facfe/ffffff?text=Proyecto+4" 
                 class="card-img-top" 
                 alt="Proyecto 4">
            <div class="project-overlay">
              <div class="text-white text-center">
                <h5>CRM System</h5>
                <p>Software Empresarial</p>
                <button class="btn btn-light">Ver Detalles</button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">CRM System</h5>
            <p class="card-text text-muted">
              Sistema de gestión de relaciones con clientes.
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6">
        <div class="card project-card border-0 shadow-sm h-100">
          <div class="position-relative">
            <img src="https://via.placeholder.com/400x300/00f2fe/ffffff?text=Proyecto+5" 
                 class="card-img-top" 
                 alt="Proyecto 5">
            <div class="project-overlay">
              <div class="text-white text-center">
                <h5>Landing Page</h5>
                <p>Marketing Digital</p>
                <button class="btn btn-light">Ver Detalles</button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Landing Page Corporativa</h5>
            <p class="card-text text-muted">
              Sitio web corporativo con alta conversión.
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6">
        <div class="card project-card border-0 shadow-sm h-100">
          <div class="position-relative">
            <img src="https://via.placeholder.com/400x300/43e97b/ffffff?text=Proyecto+6" 
                 class="card-img-top" 
                 alt="Proyecto 6">
            <div class="project-overlay">
              <div class="text-white text-center">
                <h5>Plataforma Educativa</h5>
                <p>E-Learning</p>
                <button class="btn btn-light">Ver Detalles</button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Plataforma Educativa</h5>
            <p class="card-text text-muted">
              Sistema de aprendizaje online con cursos interactivos.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### Paso 7: Sección de Testimonios (Carousel)

```html
<section id="testimonials" class="bg-light">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="display-5 fw-bold">Lo Que Dicen Nuestros Clientes</h2>
      <p class="lead text-muted">
        Testimonios reales de empresas satisfechas
      </p>
    </div>

    <!-- Carousel -->
    <div id="testimonialsCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#testimonialsCarousel" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#testimonialsCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#testimonialsCarousel" data-bs-slide-to="2"></button>
      </div>

      <div class="carousel-inner">
        <!-- Testimonio 1 -->
        <div class="carousel-item active">
          <div class="testimonial-item text-center">
            <img src="https://via.placeholder.com/100/667eea/ffffff?text=MG" class="rounded-circle mb-3"
                 alt="Cliente 1">
            <p class="lead mb-4">
              "TechSolutions transformó completamente nuestro negocio. Su equipo es profesional y los resultados superaron nuestras expectativas."
            </p>
            <h5>María González</h5>
            <p class="text-muted">CEO - TechStart Inc.</p>
          </div>
        </div>

        <!-- Testimonio 2 -->
        <div class="carousel-item">
          <div class="testimonial-item text-center">
            <img src="https://via.placeholder.com/100/764ba2/ffffff?text=JL" class="rounded-circle mb-3"
                 alt="Cliente 2">
            <p class="lead mb-4">
              "Excelente trabajo en tiempo récord. La plataforma que desarrollaron es intuitiva y nuestros usuarios la adoran."
            </p>
            <h5>Juan López</h5>
            <p class="text-muted">Director de Tecnología - InnovaCorp</p>
          </div>
        </div>

        <!-- Testimonio 3 -->
        <div class="carousel-item">
          <div class="testimonial-item text-center">
            <img src="https://via.placeholder.com/100/f093fb/ffffff?text=AS" class="rounded-circle mb-3"
                 alt="Cliente 3">
            <p class="lead mb-4">
              "El mejor socio tecnológico que hemos tenido. Siempre disponibles y con soluciones creativas a nuestros desafíos."
            </p>
            <h5>Ana Sánchez</h5>
            <p class="text-muted">Fundadora - DigitalVentures</p>
          </div>
        </div>
      </div>

      <!-- Controles -->
      <button class="carousel-control-prev" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bg-dark rounded-circle p-3"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon bg-dark rounded-circle p-3"></span>
      </button>
    </div>
  </div>
</section>
```

---

### Paso 8: Formulario de Contacto

```html
<section id="contact">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold">Hablemos de Tu Proyecto</h2>
          <p class="lead text-muted">
            Completa el formulario y te contactaremos en 24 horas
          </p>
        </div>

        <div class="card shadow border-0">
          <div class="card-body p-5">
            <form id="contactForm" class="needs-validation" novalidate>
              <div class="row g-3">
                <!-- Nombre -->
                <div class="col-md-6">
                  <label for="nombre" class="form-label">Nombre Completo *</label>
                  <input type="text" class="form-control" id="nombre" required minlength="3">
                  <div class="invalid-feedback">Por favor ingresa tu nombre.</div>
                </div>

                <!-- Email -->
                <div class="col-md-6">
                  <label for="email" class="form-label">Email *</label>
                  <input type="email" class="form-control" id="email" required>
                  <div class="invalid-feedback">Por favor ingresa un email válido.</div>
                </div>

                <!-- Empresa -->
                <div class="col-12">
                  <label for="empresa" class="form-label">Empresa</label>
                  <input type="text" class="form-control" id="empresa">
                </div>

                <!-- Mensaje -->
                <div class="col-12">
                  <label for="mensaje" class="form-label">Mensaje *</label>
                  <textarea class="form-control" id="mensaje" rows="5" required minlength="10"></textarea>
                  <div class="invalid-feedback">El mensaje debe tener al menos 10 caracteres.</div>
                </div>

                <!-- Botón -->
                <div class="col-12">
                  <button type="submit" class="btn btn-primary btn-lg w-100">
                    Enviar Mensaje
                  </button>
                </div>
              </div>
            </form>

            <!-- Mensaje de éxito -->
            <div id="successAlert" class="alert alert-success mt-3" style="display: none;">
              <strong>¡Gracias!</strong> Tu mensaje ha sido enviado correctamente.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### Paso 9: Footer

```html
<footer class="py-5">
  <div class="container">
    <div class="row g-4">
      <!-- Columna 1: Acerca de -->
      <div class="col-lg-4">
        <h5 class="mb-3">🚀 TechSolutions</h5>
        <p class="text-muted">
          Transformamos ideas en realidad digital con soluciones tecnológicas innovadoras.
        </p>
        <p class="text-muted">
          © 2024 TechSolutions. Todos los derechos reservados.
        </p>
      </div>

      <!-- Columna 2: Enlaces rápidos -->
      <div class="col-lg-4">
        <h5 class="mb-3">Enlaces Rápidos</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="#hero">Inicio</a></li>
          <li class="mb-2"><a href="#features">Características</a></li>
          <li class="mb-2"><a href="#projects">Proyectos</a></li>
          <li class="mb-2"><a href="#testimonials">Testimonios</a></li>
          <li class="mb-2"><a href="#contact">Contacto</a></li>
        </ul>
      </div>

      <!-- Columna 3: Redes sociales -->
      <div class="col-lg-4">
        <h5 class="mb-3">Síguenos</h5>
        <div class="d-flex gap-3">
          <a href="#" class="btn btn-outline-light">
            Facebook
          </a>
          <a href="#" class="btn btn-outline-light">
            Twitter
          </a>
          <a href="#" class="btn btn-outline-light">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
```

---

### Paso 10: JavaScript de Validación

Antes del cierre del `</body>`:

```javascript
<script>
  // Validación del formulario
  const form = document.getElementById('contactForm');
  const successAlert = document.getElementById('successAlert');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Enviando...';

      setTimeout(() => {
        successAlert.style.display = 'block';
        form.reset();
        form.classList.remove('was-validated');
        btn.disabled = false;
        btn.innerHTML = 'Enviar Mensaje';

        setTimeout(() => {
          successAlert.style.display = 'none';
        }, 5000);
      }, 1500);
    } else {
      form.classList.add('was-validated');
    }
  });

  // Cerrar offcanvas al hacer clic en enlace
  document.querySelectorAll('.offcanvas-body .nav-link').forEach(link => {
    link.addEventListener('click', function() {
      const offcanvas = bootstrap.Offcanvas.getInstance(
        document.getElementById('offcanvasNavbar')
      );
      if (offcanvas) {
        offcanvas.hide();
      }
    });
  });
</script>
```

---

## Mejoras Adicionales

### 1. Animaciones al Hacer Scroll

```html
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

<script>
  AOS.init({
    duration: 1000,
    once: true
  });
</script>
```

Luego añade `data-aos="fade-up"` a las secciones.

### 2. Contador de Estadísticas

```html
<section class="bg-primary text-white py-5">
  <div class="container">
    <div class="row text-center">
      <div class="col-md-3">
        <h2 class="display-4 fw-bold">500+</h2>
        <p>Proyectos Completados</p>
      </div>
      <div class="col-md-3">
        <h2 class="display-4 fw-bold">200+</h2>
        <p>Clientes Felices</p>
      </div>
      <div class="col-md-3">
        <h2 class="display-4 fw-bold">15</h2>
        <p>Años de Experiencia</p>
      </div>
      <div class="col-md-3">
        <h2 class="display-4 fw-bold">98%</h2>
        <p>Satisfacción</p>
      </div>
    </div>
  </div>
</section>
```

---

## Checklist Final Completo

### Estructura:
- [ ] HTML5 válido
- [ ] Bootstrap 5.0.2 importado correctamente
- [ ] CSS personalizado funcionando
- [ ] JavaScript de Bootstrap cargado

### Componentes:
- [ ] Navbar fijo con offcanvas
- [ ] Hero section con gradiente
- [ ] Sección de características (6 cards)
- [ ] Galería de proyectos con hover
- [ ] Carousel de testimonios funcional
- [ ] Formulario con validación
- [ ] Footer con 3 columnas

### Responsive:
- [ ] Funciona en móvil (< 768px)
- [ ] Funciona en tablet (768px - 992px)
- [ ] Funciona en desktop (≥ 992px)
- [ ] Offcanvas se activa en móvil
- [ ] Grid se adapta correctamente

### Interactividad:
- [ ] Navegación smooth scroll
- [ ] Hover effects en cards
- [ ] Formulario valida correctamente
- [ ] Mensaje de éxito se muestra
- [ ] Carousel cambia automáticamente
- [ ] Offcanvas se cierra al navegar

---

## Conceptos Integrados

En este ejercicio final has utilizado:

 **Navbar** (fijo, offcanvas, enlaces)
 **Hero section** (layout 2 columnas, gradiente)
 **Grid system** (responsive, gutters)
 **Cards** (features, projects, heights uniformes)
 **Carousel** (testimonios, controles)
 **Forms** (validación completa)
 **Footer** (layout multi-columna)
 **Utilities** (spacing, colors, typography)
 **Flexbox** (alignment, distribution)
 **JavaScript** (validación, interactions)
 **CSS personalizado** (hover effects, transitions)

---

## Has completado todos los ejercicios de Bootstrap 5. Ahora tienes las habilidades para:

 Crear layouts responsive complejos
 Implementar componentes interactivos
 Validar formularios correctamente
 Diseñar interfaces profesionales
 Combinar Bootstrap con CSS personalizado
 Manejar navegación avanzada
 Crear landing pages completas

---

## Próximos Pasos

1. **Personaliza el proyecto**: Cambia colores, textos e imágenes
2. **Añade funcionalidad backend**: Conecta el formulario a un servidor
3. **Optimiza el rendimiento**: Minimiza CSS/JS, optimiza imágenes
4. **Añade más secciones**: FAQ, Precios, Blog, etc.
5. **Implementa analytics**: Google Analytics, Facebook Pixel
6. **Despliega online**: Netlify, Vercel, GitHub Pages


