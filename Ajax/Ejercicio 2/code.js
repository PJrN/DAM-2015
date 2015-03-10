<!DOCTYPE HTML>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Ejercicio 1 - Estados de la petición AJAX</title>
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <script type="text/javascript" src="js/code.js"></script>
</head>
<body>
  <form action="#">
    URL:
    <input type="text" id="recurso" size="70" />
    <input type="button" id="enviar" value="Mostrar contenidos" />
  </form>

  <div id="principal">
    <h2>Contenidos del archivo:</h2>
    <div id="contenidos"></div>

    <h2>Cabeceras HTTP de la respuesta del servidor:</h2>
    <div id="cabeceras"></div>
  </div>

  <div id="secundario">
    <h2>Estados de la petición:</h2>
    <div id="estados"></div>

    <h2>Código de estado:</h2>
    <div id="codigo"></div>
  </div>
</body>
</html>