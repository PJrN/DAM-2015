function mostrar() {
    var elemento = document.getElementById("oculto");
    if (elemento.className == "hidden") {
        elemento.className = "nohidden";
    } else {
        elemento.className = "hidden";
    }
}

function addElement(productotext) {

    var borrar = document.createElement('input');
    borrar.setAttribute('type', 'button');
    borrar.setAttribute('value', 'X');
    borrar.setAttribute('class', 'borrar');
    /* borrar.setAttribute('onclick', 'removeChild(node);'); */


    var productonuevo = document.getElementById("listadelacompra");
    var insertar = document.createElement("p");
    insertar.innerHTML = productotext;
    productonuevo.appendChild(insertar);
    productonuevo.appendChild(borrar);

    document.getElementById("productotext").value = "";
    document.getElementById("productotext").focus();


}