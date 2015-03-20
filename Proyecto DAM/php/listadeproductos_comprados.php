<?php

include("conexion.php");
$link= Conectarse();


$datos = $_POST['todos'];

//Comprobar datos:
$datos_separados = implode(",", $datos);
//echo $datos_separados;

//Estado always false(compra realizada):
$estado = "2";
//Return date:
$fecha = date('Y-m-d H:i:s');
//Usuario pendiente de recibir por sesion:
$id_usuario = "1";


mysql_query("INSERT INTO producto(producto, fecha, estado, id_usuario)

VALUES('.json_encode($datos).', '$fecha', '$estado', '$id_usuario');",$link)or die("Error en la introducción de datos");
?>
