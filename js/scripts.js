/* --- Lógica de Pestañas (Tabs) --- */
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Ocultar todos los contenidos de las pestañas
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }

  // Quitar el estado activo de todos los botones
  tablinks = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Mostrar la pestaña seleccionada y marcar el botón como activo
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Aquí puedes agregar otras funciones futuras, 
// pero hemos eliminado el bloque de 'openModal' y su EventListener.