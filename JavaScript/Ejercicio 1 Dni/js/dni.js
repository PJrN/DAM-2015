

var dni = 44330811;
var letra = "A";
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if (dni < 0 || dni > 99999999 ) {
    alert("error1");
}
    else {
    
    var resto = dni%23;
  
        
    if (letra == letras[resto]) {
        
            alert ("Gracias");
        }
        
        else { 
            alert("La letra introducida no es correcta");
            }

     }
            

