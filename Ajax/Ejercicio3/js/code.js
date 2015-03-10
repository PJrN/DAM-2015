window.onload = function () {
    "use strict";

    /* al pulsar el enlace  "Comprobar", se debe comprobar el valor del input "login" con la respuesta del servidor "$numeroAleatorio" */


    var READY_STATE_UNINITIALIZED = 0;
    var READY_STATE_LOADING = 1;
    var READY_STATE_LOADED = 2;
    var READY_STATE_INTERACTIVE = 3;
    var READY_STATE_COMPLETE = 4;

    var peticion_http;


    function cargaContenido() {
        // Borrar datos anteriores
        var usuario = document.getElementById('comprobar');
    }

    /*
    XMLHttpRequest:
La interfaz se implementa como una clase de la que una aplicación cliente puede generar tantas instancias como necesite para manejar el        diálogo con el servidor.

El uso más popular, si bien no el único, de esta interfaz es proporcionar contenido dinámico y actualizaciones asíncronas en páginas WEB mediante tecnologías construidas sobre ella como por ejemplo AJAX.
*/

    function inicializa_xhr() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    }


    function validar() {
        peticion_http = inicializa_xhr();
        if (peticion_http) {
            peticion_http.onreadystatechange = comprobarusuario;
            peticion_http.open("POST", "http://localhost/Ajax/Ejercicio 3", true);

            peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var query_string = crea_query_string();
            peticion_http.send(query_string);
        }
    }

    function comprobarusuario () {
        if (peticion_http.readyState == READY_STATE_COMPLETE) {
            if (peticion_http.status == 200) {
                document.getElementById("disponibilidad").innerHTML = peticion_http.responseText;
            }
        }
    }
    /*
    La función crea_query_string obtiene el valor de  los campos y los concatena junto con el nombre de cada parámetro para formar la cadena de texto que se envía al servidor.
    El uso de la función encodeURIComponent() es imprescindible para evitar problemas con algunos caracteres especiales.
        */
    function crea_query_string() {
        /* cargaContenido(); */
        var usuario = document.getElementById('comprobar');
        return "clave usuario" + encodeURIComponent(usuario.value) + Math.random();
    }



    document.getElementById("comprobar").addEventListener("click", validar, true);


}
