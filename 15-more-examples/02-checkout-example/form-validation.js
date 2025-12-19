// JavaScript para validación de formularios con Bootstrap
// Evita el envío si hay campos inválidos y muestra los estilos de validación
(function () {
  'use strict';

  // Selecciona todos los formularios que requieren validación personalizada
  var forms = document.querySelectorAll('.needs-validation');

  // Convierte NodeList a Array y recorre cada formulario
  Array.from(forms).forEach(function (form) {
    // Al enviar el formulario...
    form.addEventListener('submit', function (event) {
      // Si el formulario no es válido, cancela el envío y la propagación
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      // Agrega la clase de Bootstrap para mostrar los estilos de validación
      form.classList.add('was-validated');
    }, false);
  });
})();
