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

document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.nav-toggle');
  const navLeft = document.querySelector('.nav-left');
  if (toggle && navLeft) {
    toggle.addEventListener('click', function() {
      navLeft.classList.toggle('show');
      updateHeaderPadding(); // recalcular padding después de toggle
    });
    
    // cerrar menú al hacer clic en un enlace
    const navLinks = navLeft.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // prevenir el comportamiento por defecto
        navLeft.classList.remove('show');
        updateHeaderPadding(); // recalcular padding después de cerrar
        
        // hacer scroll suave con offset
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const navHeight = document.querySelector('.topbar').offsetHeight;
          const offset = navHeight + 10;
          const targetPosition = targetElement.offsetTop - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // manejar select de pestañas en móviles
  const sel = document.querySelector('.tabs-select');
  if (sel) {
    sel.addEventListener('change', function() {
      const target = this.value;
      // ocultar todos los contenidos y botones
      document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
      document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      // activar el seleccionado
      const content = document.getElementById(target);
      if (content) content.classList.add('active');
      const btn = document.querySelector('.tab-btn[data-target="'+target+'"]');
      if (btn) btn.classList.add('active');
    });
  }

  // ajustar paddings dinámicamente para el header fijo en móvil y desktop
  function updateHeaderPadding() {
    const topbar = document.querySelector('.topbar');
    if (!topbar) return;
    const height = topbar.offsetHeight;
    document.body.style.paddingTop = height + 'px';
  }
  // recalcular en carga, resize y al abrir/cerrar menú
  updateHeaderPadding();
  window.addEventListener('resize', updateHeaderPadding);
  // si la navegación se expande (clase .show u otro cambio), debes llamar updateHeaderPadding
});