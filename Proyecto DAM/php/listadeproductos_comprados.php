<?php

//Connection
include("conexion.php");
$link= Conectarse();

//Return
$datos = $_POST['todos'];
$coste_total = $_POST['costetotal'];
//Comprobar datos:
$datos_separados = implode(",", $datos);
//echo $datos_separados;

//Estado always false(compra realizada):
$estado = "2";
//Return date:
$fecha = date('Y-m-d H:i:s');

//Usuario pendiente de recibir por sesion:
$id_usuario = "1";
//Establecimiento pendiente de recibir Post:
$id_establecimiento = "1";
//CosteTotal pendiente de recibir por Post:
echo ($coste_total);


mysql_query("INSERT INTO compra(producto, fecha, estado, coste_total, id_usuario, id_establecimiento)
VALUES('$datos_separados', '$fecha', '$estado', '$coste_total', '$id_usuario', '$id_establecimiento');",$link)or die("Error en la introducción de datos");
?>
