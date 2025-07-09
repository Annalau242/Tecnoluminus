// script.js

function mostrarPestana(nombrePestana) {
  // Primero ocultamos todos los contenidos de pestañas
  const pestañas = document.querySelectorAll('.tab-content');
  pestañas.forEach(p => p.style.display = 'none');

  // Luego mostramos sólo la pestaña seleccionada
  const seleccionada = document.getElementById(nombrePestana);
  if (seleccionada) {
    seleccionada.style.display = 'block';
  }

  // Opcional: manejar clases activas en botones (para estilos)
  const botones = document.querySelectorAll('.tab');
  botones.forEach(b => b.classList.remove('active'));
  const botonActivo = Array.from(botones).find(b => b.getAttribute('onclick').includes(nombrePestana));
  if (botonActivo) {
    botonActivo.classList.add('active');
  }
}
