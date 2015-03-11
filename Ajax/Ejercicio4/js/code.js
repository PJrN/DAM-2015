window.onload = function () {
    "use strict";

    /* al pulsar el enlace  "Comprobar", se debe comprobar el valor del input "login" con la respuesta del servidor "$numeroAleatorio" */
    //Evento.
    document.getElementById("comprobar").addEventListener("click", validar, true);

    var READY_STATE_UNINITIALIZED = 0;
    var READY_STATE_LOADING = 1;
    var READY_STATE_LOADED = 2;
    var READY_STATE_INTERACTIVE = 3;
    var READY_STATE_COMPLETE = 4;

    var peticion_http;
    var http_request;


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
        http_request = inicializa_xhr();
        if (http_request) {
            http_request.onreadystatechange = comprobarusuario;
            http_request.open("POST", "http://localhost/Ejercicios/Ajax/Ejercicio4/servidor/compruebaDisponibilidadJSON.php", true);

            http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var query_string = crea_query_string();
            http_request.send(query_string);
        }
    }

    function comprobarusuario() {
            if (http_request.readyState == READY_STATE_COMPLETE) {
                if (http_request.status == 200) {
                    var respuesta_json = http_request.responseText;


                    /* se debe transformar esa cadena de texto en un objeto JSON */
                    var objeto_json = JSON.parse(respuesta_json);

                    // Con JSON
                    var disponible = objeto_json.disponible;
                    var login = objeto_json.disponible.login;

                    //muestro:
                    document.getElementById("disponibilidad").innerHTML = "¿Puedes utilizar este usuario?  " + login;

                }
            }
        }
        /*
        La función crea_query_string obtiene el valor de  los campos y los concatena junto con el nombre de cada parámetro para formar la cadena de       texto que se envía al servidor.
        El uso de la función encodeURIComponent() es imprescindible para evitar problemas con algunos caracteres especiales.
            */

    function crea_query_string() {
        var usuario = document.getElementById('comprobar');
        //buscas la variable dentro del php
        return "login" + encodeURIComponent(usuario.value) + "&nocache=" + Math.random();
    }




}
