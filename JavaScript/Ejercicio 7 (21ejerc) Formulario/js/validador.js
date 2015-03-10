window.onload = function() {
    document.getElementById("registro").addEventListener("submit", validar, false);


    function validar(e){
        e.preventDefault();
        var caracteres = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

        //Nombre 
        var nombre = document.getElementById("registro_nombre");

        //Apellido
        var apellido = document.getElementById("registro_apellido");

        //Email
        var email = document.getElementById("registro_email");
        if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
            console.log("El email introducido no es correcto")
            return false;
        }

        //Contraseña
        var password = document.getElementById("registro_password");
        
        if ((password.value).length<6){
            console.log("El password debe tener 6 caracteres o mas");
            return false;
        }

        //Comentarios
        var comentario = document.getElementById("registro_comentarios");
        if( (comentario.value).length > 50 ) {
            console.log("Comentario demasiado largo");
            return false;
        }

        //Checkbox
        var condiciones = document.getElementById("registro_condiciones");
        if( !condiciones.checked ) {
            console.log("No hay aceptado las condiciones");
            return false;
        }
    }
}
