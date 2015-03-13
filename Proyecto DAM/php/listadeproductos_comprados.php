<?php
$datos = $_POST['todos'];

//Comprobar datos:
$datos_separados = implode(",", $datos);
echo $datos_separados;

//include("connection.php");
//mysql_select_db("beyourflat",$con);
//("INSERT INTO tabla VALUES(".json_encode($datos).")"
?>
