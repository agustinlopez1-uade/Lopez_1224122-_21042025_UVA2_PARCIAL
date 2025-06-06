$(document).ready(function(){
    const $body = $('body');
    const $boton = $('#modoOscuro');

    if (localStorage.getItem('modo') === 'oscuro') {
        $body.addClass('dark');
        $boton.html('☀️');
    } else {
        $boton.html('🌙');
    }

    $('#modoOscuro').click(function(){
        $('body').toggleClass('dark');
        if($('body').hasClass('dark')){
            localStorage.setItem('modo', 'oscuro');
            $boton.html('☀️');
        }else{
            localStorage.setItem('modo','claro');
            $boton.html('🌙');
        }
    });


});