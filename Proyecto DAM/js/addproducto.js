$(document).ready(function () {

'use strict'

    var contador = 1; //select id_producto from lista-compra +1 where fecha ;



    /* FUNCION INSERTAR */
    function addElement(productotext) {

        console.log("saltas?");
        /* div donde se insertaran los elementos creados */
        var div_productonuevo = document.getElementById("listadelacompra");


        var productotext = document.getElementById("productotext").value;
        var fecha = new Date();

        /* Crear div para productos */

        var divproducto = document.createElement("div");
        //divproducto.setAttribute('id', 'divproducto');
        divproducto.setAttribute('class', 'divproducto');



        /* Crear boton borrar */
        var borrar = document.createElement('input');
        borrar.setAttribute('type', 'button');
        borrar.setAttribute('name', contador + "-" + +fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear());
        borrar.setAttribute('class', 'borrar');
        borrar.setAttribute("style", "background-image: url(/Proyecto%20DAM/images/trash.png)");

        /* Crear texto producto nuevo */

        var insertar = document.createElement("div");
        insertar.setAttribute('name', contador + "-" + fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear());
        insertar.setAttribute('class', 'listaproductos');
        insertar.innerHTML = productotext;

        /* Crear checkbox confirmar nuevo */
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('name', contador + "-" + fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear());
        /* checkbox.setAttribute('id', 'check'); */
        checkbox.setAttribute('value', productotext);


        //Dibujar elementos creados:
        div_productonuevo.appendChild(divproducto);

        /* div donde se insertaran los elementos creados */
        var productonuevo = document.getElementsByClassName('divproducto');
        //$("div.divproducto:last");

        
        $(productonuevo).append(checkbox);
        $(productonuevo).append(insertar);
        $(productonuevo).append(borrar);


        //Crear y dibujar "urgente" si este está checkeado:
        if (document.getElementById("checkurgente").checked == true) {
            var urgente = document.createElement("input");
            urgente.setAttribute('type', 'button');
            urgente.setAttribute('name', "urgente");
            urgente.setAttribute('class', 'borrar');
            urgente.setAttribute("style", "background-image: url(/images/emergencia.png)");
            productonuevo.appendChild(urgente);
        }


        /* Poner texto vacio y fijar foco */
        document.getElementById("productotext").value = "";
        document.getElementById("productotext").focus();


        contador++;
        
        
   
        

        var ultimocheck = $('input[type="checkbox"]:last').val();
        //console.log(ultimocheck);
        //llamar al script INSERTAR:
        $.ajax({ //create an ajax request to load_page.php
            type: "POST",
            url: "php/listadeproductos.php",
            data: {
                'ultimocheck': ultimocheck
            },
            dataType: "html", //expect html to be returned                
            success: function (response) {
                //alert(response);
            }

        });
    }

    /* CONFIRMAR COMPRA */

    /*document.getElementById("confirmarcompra").addEventListener("click", confirmelement, false);

   borrar.setAttribute('onclick', 'removeChild(node);'); */


 /* EVENTLISTENER BOTON: INSERTAR PRODUCTOS A LISTA DE NECESIDAD */
    document.getElementById("añadir").addEventListener("click", addElement, false);
        



});