// Botones de siguiente y anterior
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

// Elementos principales del carrusel
let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

// Mueve la primera miniatura al final para el efecto de loop
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

// Duración de la animación y tiempo de auto-desplazamiento
let timeRunning = 2000; // Duración de la animación (no cambiar)
let timeAutoNext = 5000; // Intervalo de auto-desplazamiento (5 segundos)

// Variables para controlar los timeouts
let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

// ===============================
// FUNCIÓN PRINCIPAL DEL CARRUSEL
// ===============================
// Cambia la diapositiva del carrusel según el tipo ('next' o 'prev')
function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if (type === 'next') {
        // Mueve el primer elemento al final para avanzar
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        // Mueve el último elemento al inicio para retroceder
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    
    // Limpia el timeout de animación pero NO el auto-scroll
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    // Reinicia el contador de auto-scroll al interactuar manualmente
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}
// ===============================
// EVENTOS DE LOS BOTONES DE FLECHA
// ===============================
// Botón siguiente
nextDom.onclick = function() {
    showSlider('next');    
}

// Botón anterior
prevDom.onclick = function() {
    showSlider('prev');    
}
// ===============================
// FUNCIÓN DE REDIRECCIÓN
// ===============================
// Redirige a la página principal al hacer clic en el botón correspondiente
function PaginaPrincipal(){
    window.location.href = "Principal_Fundadores.html";
}