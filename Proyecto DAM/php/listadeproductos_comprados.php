<?php

//Connection
include("conexion.php");
$link= Conectarse();

//Return
$datos = $_POST['todos'];
$coste_total = $_POST['costetotal'];
$id_establecimiento = $_POST['establecimiento'];

$datos_separados = implode(",", $datos);
//echo $datos_separados;

//Estado always false(compra realizada):
$estado = "0";
//Return date:
$fecha = date('Y-m-d H:i:s');

//Usuario pendiente de recibir por sesion:
$id_usuario = "1";

//CosteTotal pendiente de recibir por Post:
//echo ($coste_total);
//echo ($id_establecimiento);

$cantidad = count($datos);
//echo $cantidad;




mysql_query("INSERT INTO producto_comprado(productos, fecha, estado, coste_total, id_usuario, id_establecimiento)
VALUES('$datos_separados', '$fecha', '$estado', '$coste_total', '$id_usuario', '$id_establecimiento');",$link)or die("Error en la introducción de datos");


for($i=0;$i<$cantidad;$i++)
{
$updateproducto = $datos[$i];
//echo $updateproducto;
mysql_query("UPDATE producto SET estado='0' WHERE producto = '$updateproducto';",$link)or die("Error en la introducción de datos update");

}

?>
