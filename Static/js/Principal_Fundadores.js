// Funcionalidad del menú hamburguesa
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Funcionalidad para submenús en móviles
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            item.classList.toggle("active");
        }
    });
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
});

// Funcionalidad del carrusel
let currentIndex = 0;
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

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

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Opcional: Autoplay
setInterval(nextSlide, 3000);