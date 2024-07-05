document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('open');
  });

  // Cerrar el menú al hacer clic en un enlace dentro del menú
  /*const menuLinks = document.querySelectorAll('.menu a');
  menuLinks.forEach(function(menuLink) {
    menuLink.addEventListener('click', function() {
      menu.classList.remove('open');
    });
  });*/

  // Cerrar el menú al hacer clic fuera de él (en el área de contenido)
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickInsideToggle = menuToggle.contains(event.target);
    if (!isClickInsideMenu && !isClickInsideToggle && menu.classList.contains('open')) {
      menu.classList.remove('open');
    }
  });
});

var unetenos = document.getElementById("unetenos");
var menuButton = document.querySelector("button");

// Función para abrir y cerrar el menú
function toggleMenu() {
if (unetenos.style.display === "block") {
  unetenos.style.display = "none";
  // Remover el event listener cuando el menú está cerrado
  document.removeEventListener("click", closeMenuOnClickOutside);
} else {
  unetenos.style.display = "block";
  // Agregar un event listener para cerrar el menú al hacer clic fuera de él
  document.addEventListener("click", closeMenuOnClickOutside);
}
}

// Función para cerrar el menú si se hace clic fuera de él
function closeMenuOnClickOutside(event) {
// Verificar si el clic fue fuera del menú y del botón
if (!unetenos.contains(event.target) && event.target !== menuButton) {
  unetenos.style.display = "none";
  // Remover el event listener después de cerrar el menú
  document.removeEventListener("click", closeMenuOnClickOutside);
}
}


