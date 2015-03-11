window.onload = function(){

    /* 1- Al cargar el documento rellenar las provincias: */
    cargarProvincias();
    /* 2- En el evento onchange Provincias rellenar municipios: */
    document.getElementById("provincia").onchange = cargarMunicipios;
};

function cargarProvincias(){

    if(window.XMLHttpRequest) {
        var peticion_http = new XMLHttpRequest();
    }
    else if(window.ActiveXObject) {
        var peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    peticion_http.onreadystatechange = provincias;

    peticion_http.open('GET',"http://localhost/Ajax/Ejercicio7combosJSON/servidor/cargaProvinciasJSON.php" , true);
    peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion_http.send(null);

    function provincias(){

        if(peticion_http.readyState == 4) {
            if(peticion_http.status == 200) {

                parseaProvinciasJSON(peticion_http);

            }else{

            }
        }
    }


}

function cargarMunicipios(){


    if(window.XMLHttpRequest) {
        var peticion_http = new XMLHttpRequest();
    }
    else if(window.ActiveXObject) {
        var peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    peticion_http.onreadystatechange = municipios;

    peticion_http.open('POST',"http://localhost/Ajax/Ejercicio7combosJSON//servidor/cargaMunicipiosJSON.php" , true);
    peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var query_string = crea_query_string();
    peticion_http.send(query_string);

     function municipios(){

        if(peticion_http.readyState == 4) {
            if(peticion_http.status == 200) {

                parseaMunicipiosJSON(peticion_http);

            }else{

            }
        }
    }


}

function parseaMunicipiosJSON(peticion_http){
    var listaP = document.getElementById("municipio");
    var respuesta_json = peticion_http.responseText;
    var objeto_json = JSON.parse(respuesta_json);

    var i =1;
    for (var objeto in objeto_json){

        listaP.options[i] = new Option(objeto_json[objeto],objeto);
        i++;

    }

}



function parseaProvinciasJSON(peticion_http){
    var listaP = document.getElementById("provincia");
    var respuesta_json = peticion_http.responseText;
    var objeto_json = JSON.parse(respuesta_json);
    var i =1;
    var code ="";
    for (var objeto in objeto_json){

        if(i<10){
            code = "0"+i;
        }else{
            code = ""+i;
        }
        listaP.options[i] = new Option(objeto_json[code],code);
        i++;

    }

}

function crea_query_string() {

        var provincia = document.getElementById("provincia").value;
        return "provincia=" + encodeURIComponent(provincia) + "&nocache=" + Math.random();
}
