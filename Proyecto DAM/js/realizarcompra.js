$(document).ready(function () {

    /* EVENTLISTENER BOTON: INSERTAR PRODUCTOS A LISTA DE NECESIDAD */
    document.getElementById("confirmarcompra").addEventListener("click", countChecked, false);

    /* FUNCION INSERTAR */
    function countChecked() {
        //var total = $("input:checked").length;
        //console.log((total + (total === 1 ? " ha sido" : " han sido") + " seleccionado/s!"));
        
        //Return "costetotal".
        var costetotal = document.getElementById("coste_total").value;
        //console.log(costetotal);

        //Return "establecimiento".
        var establecimiento = $("#id_establecimiento").val(); 
        //console.log(establecimiento);

        var todos = []

        //Return checked checkbox.
        $("input[type=checkbox]:checked").each(function () {
            //cada elemento seleccionado
            todos.push($(this).val());
        });
        //console.log(todos);
        
        
        $.ajax({ //create an ajax request to load_page.php
            type: "POST",
            url: "php/listadeproductos_comprados.php",
            data: {
                'todos[]': todos,
                'costetotal': costetotal,
                'establecimiento': establecimiento

            },
            dataType: "html", //expect html to be returned                
            success: function (response) {
                //alert(response);
            }

        });

    };

});