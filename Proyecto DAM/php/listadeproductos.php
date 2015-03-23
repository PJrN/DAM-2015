<?php

//Include the connection:
include("conexion.php");
$link= Conectarse();

//Return the last checked checkbox:
$ultimoproducto= $_POST["ultimocheck"];
//comprobar el valor:
//echo($ultimoproducto);

//Estado always true:
$estado = "1";
//Return date:
$fecha = date('Y-m-d');
//Usuario pendiente de recibir por sesion:
$id_usuario = "1";

//echo ($ultimoproducto);
//echo ($fecha);
//echo ($estado);
//echo ($id_usuario);

//Insert into Database:
mysql_query("INSERT INTO producto(producto, fecha, estado, id_usuario)
VALUES('$ultimoproducto', '$fecha', '$estado', '$id_usuario');",$link)or die("Error en la introducción de datos");

?>