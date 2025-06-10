//JS
document.addEventListener('DOMContentLoaded', () => {
    console.log('script cargado');

    const form = document.getElementById('formulario');

    //Evento submit del formulario
    form.addEventListener('submit', (event)=> {
        //Previene el envio por defecto.
        event.preventDefault();
        // Obtiene valores de los campos
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;

        // Validaciones en cascada. Si falla una, muestra error y detiene el proceso.
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

        reiniciarFormulario(); // Limpia el formulario y oculta errores
        alert('Gracias ' + nombre + ', en breve le estaré respondiendo'); // Feedback al usuario
    });
});

//Valida que una palabra tenga longitud entre 2 y 19 caracteres
function palabraEsValida(palabra) {
    return (palabra.length > 1 && palabra.length < 20);
}

//Verifica si un campo está vacío
function esVacio(campo) {
    return campo.length == 0;
}

//JQUERY

$(document).ready(function(){
    mostrarError = function error(mensaje) { // Hace visible el contenedor de error y muestra mensaje
        $("#error").show();
        $("#error").text(mensaje);
    };

    reiniciarFormulario = () => { // Oculta el mensaje de error y reestablece los campos del formulario
        $("#error").hide();
        $("#formulario")[0].reset();
    }
});