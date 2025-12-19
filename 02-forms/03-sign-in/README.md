

# 03-sign-in

Este directorio contiene un ejemplo detallado de un formulario de inicio de sesión (sign in) implementado con HTML y el framework Bootstrap 5. El objetivo es mostrar cómo crear un formulario moderno, responsivo y visualmente atractivo, aprovechando al máximo los componentes, utilidades y buenas prácticas que ofrece Bootstrap.

---

## Archivos incluidos

- **index.html**: Archivo principal que define la estructura del formulario de inicio de sesión, integrando Bootstrap a través de CDN y utilizando sus componentes y utilidades para el diseño visual y la disposición.
- **signin.css**: Archivo de estilos CSS personalizado que complementa Bootstrap, ajustando detalles específicos de la presentación y el centrado del formulario.

---

## Explicación detallada del diseño con Bootstrap

### Inclusión de Bootstrap

- En la cabecera (`<head>`) de `index.html` se incluye la hoja de estilos de Bootstrap 5 mediante CDN:
  ```html
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  ```
- Al final del documento se incluye el bundle de JavaScript de Bootstrap para habilitar componentes interactivos:
  ```html
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
  ```

### Estructura y componentes principales

- **Centrado y disposición**: El formulario se centra vertical y horizontalmente usando utilidades de Bootstrap y reglas CSS personalizadas. La clase `form-signin` limita el ancho y centra el formulario en la pantalla.
- **Contenedor principal**: El formulario está envuelto en un `<main class="form-signin">`, que aplica el diseño personalizado y aprovecha el sistema de espaciado de Bootstrap (`mb-4`, `mb-3`, `mt-5`, etc.).
- **Logo y título**: Se utiliza una imagen de logo y un título con clases Bootstrap (`mb-4`, `h3`, `fw-normal`) para el espaciado y la tipografía.
- **Campos de entrada con Floating Labels**:
  - Se emplea el componente `form-floating` de Bootstrap para los campos de email y contraseña, lo que permite que las etiquetas floten sobre los campos cuando están enfocados o contienen texto.
  - Los inputs usan la clase `form-control` para un estilo uniforme y profesional.
  - Ejemplo:
    ```html
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    ```
- **Checkbox personalizado**: Se utiliza la clase `checkbox` de Bootstrap para el campo "Remember me", asegurando una presentación consistente y accesible.
- **Botón de envío**: El botón principal utiliza las clases `btn`, `btn-lg`, `btn-primary`, y `w-100` para hacerlo grande, destacado y ocupar todo el ancho del formulario.
- **Tipografía y colores**: Se aprovechan las utilidades de Bootstrap para márgenes (`mb-3`, `mt-5`), colores de texto (`text-muted`), y peso de fuente (`fw-normal`).
- **Responsividad**: El formulario se adapta automáticamente a cualquier tamaño de pantalla gracias a la naturaleza responsiva de Bootstrap y el uso de contenedores y utilidades.

### Personalización con signin.css

- El archivo `signin.css` complementa Bootstrap para lograr un centrado vertical absoluto y un fondo suave (`background-color: #f5f5f5`).
- Limita el ancho máximo del formulario (`max-width: 330px`) y ajusta el espaciado interno (`padding: 15px`).
- Ajusta los bordes de los campos de entrada para que se integren visualmente cuando están apilados.
- Ejemplo de personalización:
  ```css
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  ```

---

## Explicación de cada sección del formulario

- **Logo**: Refuerza la identidad visual y da un toque profesional.
- **Título**: Indica claramente la acción esperada del usuario.
- **Email y contraseña**: Usan floating labels para mejorar la experiencia de usuario y la accesibilidad.
- **Checkbox "Remember me"**: Permite al usuario elegir si desea mantener la sesión iniciada.
- **Botón de envío**: Destacado y accesible, ocupa todo el ancho para facilitar su uso en dispositivos móviles.
- **Pie de página**: Incluye un texto de derechos de autor con la clase `text-muted`.

---

## Buenas prácticas y ventajas del uso de Bootstrap

- **Accesibilidad**: Bootstrap proporciona etiquetas y estructura semántica que facilitan la navegación con teclado y lectores de pantalla.
- **Consistencia visual**: El uso de clases estándar garantiza que el formulario se vea igual en todos los navegadores y dispositivos.
- **Rapidez de desarrollo**: Bootstrap permite crear interfaces atractivas y funcionales con poco código personalizado.
- **Fácil personalización**: Se pueden sobrescribir estilos con CSS propio (`signin.css`) para adaptar el diseño a necesidades específicas.
- **Extensible**: Es sencillo añadir validaciones, mensajes de error (`alert alert-danger`), o integrar el formulario con sistemas backend.

---

## Ejemplo de estructura real del formulario

```html
<main class="form-signin">
  <form>
    <img class="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
</main>
```
