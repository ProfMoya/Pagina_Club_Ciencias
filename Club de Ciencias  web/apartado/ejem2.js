var menu = document.getElementById("menu");
var menuButton = document.querySelector("button");

// Función para abrir y cerrar el menú
function toggleMenu() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    // Remover el event listener cuando el menú está cerrado
    document.removeEventListener("click", closeMenuOnClickOutside);
  } else {
    menu.style.display = "block";
    // Agregar un event listener para cerrar el menú al hacer clic fuera de él
    document.addEventListener("click", closeMenuOnClickOutside);
  }
}

// Función para cerrar el menú si se hace clic fuera de él
function closeMenuOnClickOutside(event) {
  // Verificar si el clic fue fuera del menú y del botón
  if (!menu.contains(event.target) && event.target !== menuButton) {
    menu.style.display = "none";
    // Remover el event listener después de cerrar el menú
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}
