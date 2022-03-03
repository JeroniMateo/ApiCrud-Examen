function api_rest_get(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        let tbody = "";
        var contactos = JSON.parse(xhttp.responseText);
        contactos.forEach((contacto) => {
            tbody += `<tr><td>${contacto.nombre}</td><td>${contacto.tel}</td><td>${contacto.num_libros}</td></tr>`;
        });

        document.getElementById("agenda").innerHTML = tbody;
    };

    xhttp.open("GET", "/api/apicontactos", true);
    xhttp.send();
}

function api_rest_post() {
    let nombre = document.getElementById("nombre").value;
    let tel = document.getElementById("tel").value;
    let num_libros = document.getElementById("num_libros").value;

    let data = {
        nombre: nombre,
        tel: tel,
        num_libros: num_libros,
    };
    fetch("/api/apicontactos", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
        },
    })
        .then((response) => response.json())
        .then(function (result) {})
        .catch(function (error) {
            console.log(error);
        });
}

function api_rest_edit() {
    let nombre = document.getElementById("nombre").value;
    let tel = document.getElementById("tel").value;
    let num_libros = document.getElementById("num_libros").value;

    let data = {
        nombre: nombre,
        tel: tel,
        num_libros: num_libros,
    };
    fetch(`/api/apicontactos/${contactos}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
        },
    })
        .then((response) => response.json())
      
        .catch(function (error) {
            console.log(error);
        });
}
