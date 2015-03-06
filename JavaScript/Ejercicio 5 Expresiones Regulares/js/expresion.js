/* Encontrar la fecha dentro de la frase */

var text = 'Nací el 05/04/1982 en Donostia.';

var expresion = /\d{2}\/\d{2}\/\d{4}/;  

/* 

^ el simbolo indica que debe comenzar por.
$ que debe acabar en.

*/
 
/* Validar el texto introducido con la expresion */
var respuestabool = expresion.test(text);

console.log(respuestabool);



//

var email= "anderyuste@gmail.com";

var expresionmail = /\w+@[a-zA-Z0-9-]+?\.[a-zA-Z0-9-]{2,10};

var respuestamail = expresionmail.test(email);

console.log(expresionmail);
                                                                       
                                                                       