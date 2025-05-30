// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    // Crea una nueva instancia del calendario usando FullCalendar
    var calendar = new FullCalendar.Calendar(calendarEl, {
        // Vista inicial del calendario (mes)
        initialView: 'dayGridMonth',
        // Configuración de la barra de herramientas superior (botones de navegación y vistas)
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        // ===============================
        // LISTA DE EVENTOS DEL CALENDARIO
        // ===============================
        // Eventos que se mostrarán en el calendario
        events: [
            {
                title: 'Expofitness',
                start: '2025-02-15T09:00:00',
                end: '2025-02-16T09:00:00',
                url: 'https://plazamayor.com.co/eventos/expofitness-2025/',
            },
            {
                title: 'Corre por Amor',
                start: '2025-03-16',
                url: 'https://mcmeventos.com/pages/corre-por-amor',
            },
            {
                title: 'Grandeza Run Fest',
                start: '2025-03-30',
                url: 'https://grandeza.atlnacional.com.co/',
            },
            {
                title: 'Corre por la Vida',
                start: '2025-05-04',
                url: 'https://travesiadeportiva.com/calendario/carrera-corre-por-la-vida-2025/',
            },
            {
                title: 'Campeonato Panam Acuatics Medellin',
                start: '2025-05-13T14:00:00',
                end: '2025-05-25T16:00:00',
                url: 'https://www.panamaquatics.com/pdf/c6c46042729f32499425547bcc071d71b8499481',
            },
            {
                title: 'Maratón Medellín',
                start: '2025-09-06T14:00:00',
                end: '2025-09-07T16:00:00',
                url: 'https://maratonmedellin.com/',
            },
            // Ejemplo de evento comentado
            // {
            //     title: 'Maratón Medellín',
            //     start: '2025-09-07',
            //     url: 'https://maratonmedellin.com/',
            // }
        ],
        // ===============================
        // CONFIGURACIÓN DE ESTILO Y LOCALIZACIÓN
        // ===============================
        eventColor: '#96D71D', // Color de fondo de los eventos
        eventTextColor: '#FFFFFF', // Color del texto de los eventos
        locale: 'es', // Idioma del calendario (español)
        // Traducción de los textos de los botones del calendario
        buttonText: {
            prev: 'Anterior',
            next: 'Siguiente',
            today: 'Hoy',
            month: 'Mes',
            week: 'Semana',
            day: 'Día',
            list: 'Agenda'
        },
    });

    // Renderiza el calendario en la página
    calendar.render();
});


// ===============================
// MANEJO DEL SUBMENÚ "ESCENARIOS DEPORTIVOS"
// ===============================

// Obtiene el elemento del menú que despliega el submenú (debe tener la clase .submenu-toggle)
const escenarioLink = document.querySelector('.submenu-toggle');
    
// Añade un listener para el evento click en el enlace del submenú
escenarioLink.addEventListener('click', function (e) {
    e.preventDefault(); // Evita que el enlace navegue a otra página
    
    // Obtiene el elemento <li> padre para alternar la clase que muestra el submenú
    const parentLi = escenarioLink.parentElement;

    // Alterna la clase 'show-submenu' para mostrar u ocultar el submenú
    parentLi.classList.toggle('show-submenu');
});