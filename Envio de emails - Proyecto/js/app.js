//Variables
const   email   = document.getElementById('email'),
        asunto  = document.getElementById('asunto'),
        mensaje = document.getElementById('mensaje');

const   btnEnviar = document.getElementById('enviar'),
        btnReset  = document.getElementById('resetBtn'),
        formularioEnviar = document.getElementById('enviar-mail');

//Event Listener
eventListeners();

function eventListeners() {
    //Inicio de la aplicacion y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    //campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //boton enviar en el submit
    formularioEnviar.addEventListener('submit', enviarEmail);

    //boton reset
    btnReset.addEventListener('click', resetFormulario);
}

//Funciones
function inicioApp() {
    //deshabilitar el envio
    btnEnviar.disabled = true;
}

//Valida el contenido del campo
function validarCampo() {

        //se valida longitud de texto
        validarLongitud(this);

        //validar email
        if(this.type === 'email') {
            validarEmail(this);
        }

        let errores = document.querySelectorAll('.error');

        if(email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
            if(errores.length === 0) {
                btnEnviar.disabled = false;
            }
        }
}

//Resetear formulario
function resetFormulario(e) {
    formularioEnviar.reset();
    e.preventDefault()
}

//Cuando se envia el correo
function enviarEmail(e) {
    //Spinner al presionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //Gif que confirma envio de email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    //
    setTimeout(function () {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild( enviado );

        setTimeout(function() {
            enviado.remove();
            formularioEnviar.reset();
        }, 5000);
    }, 3000);

    e.preventDefault();
}

function validarLongitud(campo) {
    if(campo.value.length > 0 ) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

//
function validarEmail(campo) {
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1 ) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}