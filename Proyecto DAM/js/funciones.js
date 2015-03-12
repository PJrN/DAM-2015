function mostrar() {
    var elemento = document.getElementById("oculto");
    if (elemento.className == "hidden") {
        elemento.className = "nohidden";
    } else {
        elemento.className = "hidden";
    }
}

window.onload = function () {

    var contador = 1; //select id_producto from lista-compra +1 where fecha ;
    
    document.getElementById("añadir").addEventListener("click", addElement, false); 
    
    
    
    function addElement(productotext) {

var productotext = document.getElementById("productotext").value;
            var fecha = new Date();

            var imagen = document.createElement('img');


            var borrar = document.createElement('input');
            borrar.setAttribute('type', 'button');
            borrar.setAttribute('name', contador + "-" + +fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear());
            borrar.setAttribute('class', 'borrar');
            borrar.setAttribute("style", "background-image: url(/Proyecto%20DAM/images/check.png)");

            /* borrar.setAttribute('onclick', 'removeChild(node);'); */


            var productonuevo = document.getElementById("listadelacompra");
            var insertar = document.createElement("p");
            insertar.setAttribute('name', contador + "-" + fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear());
            insertar.innerHTML = productotext;


            //crear


            productonuevo.appendChild(insertar);
            productonuevo.appendChild(borrar);

            if (document.getElementById("check").checked == true) {
                var urgente = document.createElement("input");
                urgente.setAttribute('type', 'button');
                urgente.setAttribute('name', "urgente");
                urgente.setAttribute('class', 'borrar');
                urgente.setAttribute("style", "background-image: url(/Proyecto%20DAM/images/emergencia.png)");
                productonuevo.appendChild(urgente);
            }

            document.getElementById("productotext").value = "";
            document.getElementById("productotext").focus();

            contador++;

        }
    }
