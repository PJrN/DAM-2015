function mostrar() {
    var elemento = document.getElementById("oculto");
    if (elemento.className == "hidden") {
        elemento.className = "nohidden";
    } else {
        elemento.className = "hidden";
    }
}