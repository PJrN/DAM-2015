function mostrar() {
    var elemento = document.getElementById("oculto");
    if (elemento.className == "hidden") {
        elemento.className = "nohidden";
    } else {
        elemento.className = "hidden";
    }
}

var contador = 1; //select id_producto from lista-compra +1 where fecha ;

function addElement(productotext) {

    
    var fecha = new Date();
    
    var borrar = document.createElement('input');
    borrar.setAttribute('type', 'button');
    borrar.setAttribute('name', contador + "-" + + fecha.getDate() + "-" + (fecha.getMonth() +1) + "-" + fecha.getFullYear());
    borrar.setAttribute('class', 'borrar');
    /* borrar.setAttribute('onclick', 'removeChild(node);'); */


    var productonuevo = document.getElementById("listadelacompra");
    var insertar = document.createElement("p");
    insertar.setAttribute ('name', contador + "-" + fecha.getDate() + "-" + (fecha.getMonth() +1) + "-" + fecha.getFullYear());
    insertar.innerHTML = productotext;
    productonuevo.appendChild(insertar);
    productonuevo.appendChild(borrar);

    document.getElementById("productotext").value = "";
    document.getElementById("productotext").focus();
    
    contador++;
    
    


}