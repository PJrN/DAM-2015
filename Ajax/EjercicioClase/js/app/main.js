//obeto global.

//Usar "use strict".

//esperar a que el DOM este cargado.

$(document).ready(function () {
    // Iniciaremos las variables privadas que sean necesarias.


    // Necesitaremos una funcion que cree objetos DOM de clase img y todos los atributos necesarios.
    // Necesitaremos una funcion que agrege el array de img al DOM (no se realizaran cambios de DOM dentro de ningun bucle).
    $('#carga').on('click', function () {

    var columnas = $('#columnas').val();
    var filas = $('#columnas').val();
    var id = columnas * filas;

   // console.log(id);

    for (var i = 0; i <= id; i++) {

        var imgcat = $('<img />', {
            id: 'cat',
            src: 'img/cat.png',
            alt: 'Cat'
        }).appendTo($('#contenedor'));

        var imgdog = $('<img />', {
            id: 'dog',
            src: 'img/dog.png',
            alt: 'Dog'
        }).appendTo($('#contenedor'));

    }

    $( "#contenedor" ).removeClass( "container hidden" ).addClass("container");
    $( "#botones" ).addClass( "container hidden" );

    });

    // Necesitaremos una o varias funcion(es) que controle(n) el paso del tiempo.

    // Necesitaremos añadir los eventos necesarios en el momento adecuado.

    function haceAlgo(miCallback){
    //hago algo y llamo al callback avisando que terminé
    miCallback(id);
}

    // Necesitaremos las funciones de callback para los eventos.

    // Necesitaremos una funcion encargada de llamar al modulo que se define en el fichero net.js con los parametros adecuados para realizar la llamada y capturar la respuesta AJAX.

    // Necesitaremos una funcion que controle el final del juego.

    // Necesitaremos una funcion que controle la lista de eliminados.

    // Cualquier otra funcion que sea necesaria.



});
