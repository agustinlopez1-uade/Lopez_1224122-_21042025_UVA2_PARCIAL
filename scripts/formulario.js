//JS
document.addEventListener('DOMContentLoaded', () => {
    console.log('script cargado');

    const form = document.getElementById('formulario');

    form.addEventListener('submit', (event)=> {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;

        if (!palabraEsValida(nombre)) {
            mostrarError('* Ingresa un nombre valido');
            return;
        }
        if (!palabraEsValida(apellido)) {
            mostrarError('* Ingresa un apellido valido');
            return;
        }
        if (esVacio(email)){
            mostrarError('* El email no puede ser vacio');
            return;
        }
        if (esVacio(asunto)){
            mostrarError('* El asunto no puede ser vacio');
            return;
        }
        if(esVacio(mensaje)){
            mostrarError('* El mensaje no puede ser vacio');
            return;
        }

        reiniciarFormulario();
        alert('Gracias ' + nombre + ', en breve le estaré respondiendo');
    });
});

function palabraEsValida(palabra) {
    return (palabra.length > 1 && palabra.length < 20);
}

function esVacio(campo) {
    return campo.length == 0;
}

//JQUERY
$(document).ready(function(){
    mostrarError = function error(mensaje) {
        $("#error").show();
        $("#error").text(mensaje);
    };

    reiniciarFormulario = () => {
        $("#error").hide();
        $("#formulario")[0].reset();
    }
});