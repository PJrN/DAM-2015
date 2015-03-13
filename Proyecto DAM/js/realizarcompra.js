$(document).ready(function () {

    /* EVENTLISTENER BOTON: INSERTAR PRODUCTOS A LISTA DE NECESIDAD */
    document.getElementById("confirmarcompra").addEventListener("click", countChecked, false);

    /* FUNCION INSERTAR */
    function countChecked() {
        var total = $("input:checked").length;
        //console.log((total + (total === 1 ? " ha sido" : " han sido") + " seleccionado/s!"));


        var todos = []

        $("input[type=checkbox]:checked").each(function () {
            //cada elemento seleccionado
            todos.push($(this).val());
        });
        //console.log(todos);

    };

});