// Carrusel centrado funcional
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    let slideIndex = 0;
    let autoInterval;

    function showCarouselSlide(n) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === n);
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showCarouselSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showCarouselSlide(slideIndex);
    }

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

    function startAuto() {
        autoInterval = setInterval(nextSlide, 3000);
    }
    function resetAuto() {
        clearInterval(autoInterval);
        startAuto();
    }

    showCarouselSlide(slideIndex);
    startAuto();
});