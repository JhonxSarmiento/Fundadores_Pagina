document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los slides del carrusel
    const slides = document.querySelectorAll('.carousel-slide');
    // Botón de anterior
    const prevBtn = document.getElementById('carousel-prev');
    // Botón de siguiente
    const nextBtn = document.getElementById('carousel-next');
    // Índice del slide actual
    let slideIndex = 0;
    // Intervalo para el avance automático
    let autoInterval;

    // Función para mostrar el slide correspondiente según el índice
    function showCarouselSlide(n) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === n);
        });
    }

    // Función para ir al siguiente slide
    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showCarouselSlide(slideIndex);
    }

    // Función para ir al slide anterior
    function prevSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showCarouselSlide(slideIndex);
    }

    // Asigna eventos a los botones de navegación si existen
    if (prevBtn && nextBtn) {
        prevBtn.onclick = function() {
            prevSlide();
            resetAuto();
        };
        nextBtn.onclick = function() {
            nextSlide();
            resetAuto();
        };
    }
    // Inicia el avance automático del carrusel 5 segundos después de cargar
    function startAuto() {
        autoInterval = setInterval(nextSlide, 5000);
    }
    // Reinicia el avance automático (por ejemplo, al usar las flechas)
    function resetAuto() {
        clearInterval(autoInterval);
        startAuto();
    }
    // Muestra el primer slide al cargar
    showCarouselSlide(slideIndex);
    // Comienza el avance automático
    startAuto();
});