var text = 'Nací el 05/04/1982 en Donostia.';

var tags = /^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/;
 
var respuestabool = tags.test(text);