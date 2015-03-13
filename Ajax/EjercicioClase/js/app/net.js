//obeto global
var APP = APP || {};

//esperar a que el DOM este cargado
$(document).ready(function () {
    //Usar "use strict"
    "use strict";

    APP.net = (function () {
        console.log("net cargado");

        // la URL para la petición
        var serverUrl = "php/getcards.php";

        var peticion = function (cnt, cb) {
            (cnt !== null || cnt !== 0) ? cnt: 1;
            $.ajax({

                url: serverUrl,
                data: {
                    numero: cnt
                },
                // especifica si será una petición POST o GET
                type: 'POST',
                // el tipo de información que se espera de respuesta
                dataType: 'json',

                // código a ejecutar si la petición es satisfactoria;
                // la respuesta es pasada como argumento a la función
                success: function (json) {
                    //                    console.log(json);
                    //                    console.log("callback:" + cb);
                    cb(json);
                },

                // código a ejecutar si la petición falla;
                error: function (jqXHR, status, error) {
                    console.error('Disculpe, existiÃ³ un problema');
                }


            });
        };
        //El servidor espera un parametro 'numero' con el número de elementos que tendra el JSON de respuesta.
        return {
            peticion: peticion
        };

    })();
});
