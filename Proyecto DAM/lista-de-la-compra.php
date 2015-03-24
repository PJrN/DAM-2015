<!DOCTYPE html>

<html lang="es">

<head>
    <title>beYourFlat Piso</title>
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <meta charset="utf-8" />
    <link rel="stylesheet" href="css/beyourflat.css" />
    <link rel="stylesheet" href="css/estilos.css" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>

</head>

<body>
    <header>
        <h1>beYourFlat</h1>
    </header>
    <section>
        <p>Lista de la compra</p>

        <form>

            <input class="centrado" type="button" id="añadir" value="Añadir Producto" />Urgente:
            <input type="checkbox" id="checkurgente">
            <p></p>
            <input class="centrado" type="text" name="productotext" id="productotext" placeholder="Añadir a la lista...">
            <p></p>
            <div class="listaproductos">
                <div id="listadelacompra" class="centrado"> </div>
            </div>
            <hr>

            <td width="219">Establecimiento:</td>
            <td>
                <select name='provincia' id="id_establecimiento"> 
<?php
//Include the connection:
include("php/conexion.php");
$link= Conectarse();


echo "<option value=0>-- Seleccione --</option>"; 

$sql="SELECT id_establecimiento,establecimiento FROM establecimiento ORDER BY establecimiento ASC "; 
$result=mysql_query($sql); 
while($item=mysql_fetch_assoc($result)) { 
echo '<option value="'.$item[ 'id_establecimiento']. '" >'.$item[ 'establecimiento']. '</option>'; } 
?>
</select>
            </td>
            <br/>
            <td>Coste total:</td>
            <td><input type="text" id="coste_total" name="coste_total" placeholder="introduzca el valor..."></td>


            <input type="button" class="centrado" name="confirmarcompra" id="confirmarcompra" value="Confirmar compra">
        </form>
<div id="dialog" title="Compra Realizada"></div>
    </section>

    <footer>
        beYourFlat &copy 2015, todos los derechos reservados.
    </footer>
    <div id="log"></div>
    <script src="js/addproducto.js"></script>
    <script src="js/realizarcompra.js"></script>


</body>

</html>