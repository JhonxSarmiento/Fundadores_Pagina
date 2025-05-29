const usuarioValido = "Gil";
const passCorrecta = "2507";
let intentosRestantes = 3;
let bloqueado = false;
let cuentaRegresiva;

function verificarLogin() {
    let usuarioIngresado = document.getElementById("Usuario").value.toLowerCase();
    let claveIngresada = document.getElementById("Contraseña").value;

    if (bloqueado) return;

    if (usuarioIngresado == usuarioValido && claveIngresada == passCorrecta) {
        document.getElementById("mensaje").innerHTML = `<b style="color:green;">Bienvenido al sistema</b>`;
console.log ("entré");
        setTimeout(() => {
            window.location.href = "movimed.html";
        }, 500); // 1000 milisegundos = 1 segundo
    } else {
        intentosRestantes--;
        document.getElementById("mensaje").innerText = "Usuario o contraseña incorrectos.";
        document.getElementById("intentos").innerText = `Intentos restantes: ${intentosRestantes}`;

        if (intentosRestantes === 0) {
            bloquearLogin();
        }
    }
}

function bloquearLogin() {
    bloqueado = true;
    let tiempoRestante = 30;
    document.getElementById("mensaje").innerText = `Demasiados intentos. Espera ${tiempoRestante} segundos.`;
    document.getElementById("boton-ingresar").disabled = true;

    cuentaRegresiva = setInterval(() => {
        tiempoRestante--;
        document.getElementById("mensaje").innerText = `Demasiados intentos. Espera ${tiempoRestante} segundos.`;

        if (tiempoRestante <= 0) {
            clearInterval(cuentaRegresiva);
            bloqueado = false;
            intentosRestantes = 3;
            document.getElementById("mensaje").innerText = "";
            document.getElementById("intentos").innerText = "";
            document.getElementById("boton-ingresar").disabled = false;
        }
    }, 1000);
}

function mostrarRegistro() {
    document.querySelector('.contenedor-login').classList.add('girar');
}

function mostrarLogin() {
    document.querySelector('.contenedor-login').classList.remove('girar');
}

function registrarUsuario() {
    let nuevoUsuario = document.getElementById("nuevo-usuario").value;
    let nuevaPassword = document.getElementById("nueva-password").value;
    let correo = document.getElementById("correo").value;

 if (nuevoUsuario ==="" && nuevaPassword ==="" && correo ==="") {
        document.getElementById("mensaje-registro").innerHTML = `<b style="color:red;">Todos los campos estan vacío</b>`; }

        else {document.getElementById("mensaje-registro").innerHTML = `<b style="color:green;">¡Usuario Registrado con éxito!</b>`;}
}