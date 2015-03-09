window.onload = Function {


    var algo = documento.getElementById("enviar").onclick {



        var valor = document.getElementById("registro_nombre").value;
        if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
            return false;
        }

        var valor = document.getElementById("registro_apellido").value;
        if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
            return false;
        }

        var valor = document.getElementById("registro_comentarios").value;
        if (valor == null || valor.length == 0 || valor.value.length >= 51) {
            return false;
        }


        valor = document.getElementById("email").value;
        if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor))) {
            return false;
        }
        
         var valor = document.getElementById("password").value;
        if (valor == null || valor.value.length < 6 || ) {
            return false;
        }

        return true;
    }









}