$(document).ready(function(){
    if (localStorage.getItem('modo') === 'oscuro') {
        $('body').addClass('dark');
    }

    $('#modoOscuro').click(function(){
        $('body').toggleClass('dark');
        if($('body').hasClass('dark')){
            localStorage.setItem('modo', 'oscuro');
        }else{
            localStorage.setItem('modo','claro');
        }
    });


});