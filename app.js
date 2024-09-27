let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Bien! El número era ${numeroSecreto}! Acertaste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'} ;)`);
        document.querySelector('#reiniciar').removeAttribute('disabled', '');
        document.querySelector('#intentar').setAttribute('disabled', '');
        //document.getElementById('reiniciar').removeAttribute('disabled');
        //document.getElementById('intentar').setAttribute('enabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', `Ups! El número secreto es menor! Intentá otra vez (llevas ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'})`);
        } else {
            asignarTextoElemento('p', `Ups! El número secreto es mayor! Intentá otra vez (llevas ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'})`);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya salieron todos los números disponibles. Bye!');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    //asignarTextoElemento('h1','JUEGO DEL NÚMERO SECRETO');
    document.querySelector('#intentar').removeAttribute('disabled', '');
    asignarTextoElemento('p', `Ingresá un número del 1 al ${numeroMaximo}`);

    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', '');
}

condicionesIniciales();