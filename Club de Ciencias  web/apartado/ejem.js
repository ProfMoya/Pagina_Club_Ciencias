document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('open');
  });

  // Cerrar el menú al hacer clic en un enlace dentro del menú
  const menuLinks = document.querySelectorAll('.menu a');
  menuLinks.forEach(function(menuLink) {
    menuLink.addEventListener('click', function() {
      menu.classList.remove('open');
    });
  });

  // Cerrar el menú al hacer clic fuera de él (en el área de contenido)
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickInsideToggle = menuToggle.contains(event.target);
    if (!isClickInsideMenu && !isClickInsideToggle && menu.classList.contains('open')) {
      menu.classList.remove('open');
    }
  });
});
