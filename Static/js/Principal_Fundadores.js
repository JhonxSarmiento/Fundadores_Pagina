// FUNCIONALIDAD DEL MENÚ HAMBURGUESA
// Selecciona los elementos del menú hamburguesa y el menú de navegación
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Alterna la clase 'active' para mostrar u ocultar el menú en móviles
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// ===============================
// FUNCIONALIDAD PARA SUBMENÚS EN MÓVILES
// ===============================
// Selecciona todos los elementos de navegación que pueden tener submenús
const navItems = document.querySelectorAll(".nav-item");

// Permite abrir/cerrar submenús tocando el ítem en pantallas pequeñas
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            item.classList.toggle("active");
        }
    });
});
// ===============================
// CERRAR EL MENÚ AL HACER CLIC EN UN ENLACE
// ===============================
// Selecciona todos los enlaces de navegación
document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
});
// ===============================
// FUNCIONALIDAD DEL CARRUSEL
// ===============================
// Variables para controlar el carrusel
let currentIndex = 0;
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Muestra la diapositiva correspondiente según el índice
function showSlide(index) {
    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}
// Muestra la siguiente diapositiva
function nextSlide() {
    showSlide(currentIndex + 1);
}
// Muestra la diapositiva anterior
function prevSlide() {
    showSlide(currentIndex - 1);
}
// ===============================
// AUTOPLAY DEL CARRUSEL (OPCIONAL)
// ===============================
// Cambia automáticamente de diapositiva cada 3 segundos
setInterval(nextSlide, 3000);