<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="">
        <label for="">Nombre</label>
        <input type="text" name="nombre" id="nombre">
        <label for="">Telefono</label>
        <input type="text" name="tel" id="tel">
        <label for="">Numero de Libros</label>
        <input type="number" name="num_libros" id="num_libros">  
        <label for="">fecha Nacimiento</label>
        <input type="number" name="fecha_nacimiento" id="fecha_nacimiento">
        <button onclick="api_rest_post()"></button>
    </form>
    <script src="/js/contactos.js"></script>
</body>
</html>