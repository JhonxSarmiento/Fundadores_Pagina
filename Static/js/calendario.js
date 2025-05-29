document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // Vista inicial: mes
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
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
            // {
            //     title: 'Maratón Medellín',
            //     start: '2025-09-07',
            //     url: 'https://maratonmedellin.com/',
            // }
        ],
        eventColor: '#96D71D', // Color de fondo de los eventos
        eventTextColor: '#FFFFFF', // Color del texto de los eventos
        locale: 'es', // Configuración del idioma en español
          // Traducir los textos del menú
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

    calendar.render();
});

// Obtener el elemento de "Escenarios Deportivos"
const escenarioLink = document.querySelector('.submenu-toggle');
    
// Añadir un event listener para el clic
escenarioLink.addEventListener('click', function (e) {
    e.preventDefault(); // Evitar el comportamiento por defecto (navegación)
    
// Obtener el <li> padre para alternar la clase show-submenu
 const parentLi = escenarioLink.parentElement;

// Alternar la clase show-submenu
parentLi.classList.toggle('show-submenu');
    
});