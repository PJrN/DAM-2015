<?php

include("conexion.php");
$link= Conectarse();

$ultimoproducto= $_POST["ultiproducto"];
echo($ultimoproducto);
if (isset($_POST['ultimoproducto'])) $ultimoproducto= $_POST["ultimoproducto"];
else{ $ultimoproducto= "0"; }

echo($ultimoproducto);



$estado = "1";
$fecha = getdate();

//Recibir por sesion.
$id_usuario = "1";


mysql_query("INSERT INTO producto(producto, fecha, estado, id_usuario)

VALUES('$ultimoproducto', '$fecha', '$estado', '$id_usuario');",$link)or die("Error en la introducción de datos");


?>