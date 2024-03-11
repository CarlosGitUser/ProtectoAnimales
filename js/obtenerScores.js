


function mostrarPuntajes() {
    // Obtener los datos almacenados actualmente en el localStorage
    var datosGuardados = localStorage.getItem('allPuntuations');

    // Convertir los datos recuperados en un array (si hay datos almacenados)
    var arraysObjetos = datosGuardados ? JSON.parse(datosGuardados) : [];

    // Ordenar los puntajes de mejor a peor en base al tiempo y puntos
    arraysObjetos.sort(function(a, b) {
        if (a.tiempo === b.tiempo) {
            return b.puntos - a.puntos; // Ordenar por puntos si el tiempo es el mismo
        } else {
            return a.tiempo - b.tiempo; // Ordenar por tiempo
        }
    });


    var tablaHTML = '<table border="1"><tr><th>Alias</th><th>Puntos</th><th>Tiempo</th></tr>';
    arraysObjetos.forEach(function(puntaje) {
        tablaHTML += '<tr><td>' + puntaje.alias + '</td><td>' + puntaje.puntos + '</td><td>' + puntaje.tiempo + '</td></tr>';
    });
    tablaHTML += '</table>';

    // Mostrar los puntajes en el contenedor
    document.getElementById('contenedorPuntajes').innerHTML = tablaHTML;
}

function togglePuntajes() {
    var contenedorPuntajes = document.getElementById('contenedorPuntajes');
    if (contenedorPuntajes.style.display === 'none') {
        contenedorPuntajes.style.display = 'block';
        mostrarPuntajes(); // Mostrar los puntajes cuando se activa el toggle
    } else {
        contenedorPuntajes.style.display = 'none';
    }
}
function togglePuntajesPersonal() {
    var contenedorPuntajes = document.getElementById('contenedorPuntajesPorAlias');
    if (contenedorPuntajes.style.display === 'none') {
        contenedorPuntajes.style.display = 'block';
        mostrarPuntajesPorAlias(); // Mostrar los puntajes cuando se activa el toggle
    } else {
        contenedorPuntajes.style.display = 'none';
    }
}
function mostrarPuntajesPorAlias() {

    let alias = localStorage.getItem("alias");
    if(alias == "")
        alias = "Sin puntuaciones registradas";
    // Obtener los datos almacenados actualmente en el localStorage
    var datosGuardados = localStorage.getItem('allPuntuations');

    // Convertir los datos recuperados en un array (si hay datos almacenados)
    var arraysObjetos = datosGuardados ? JSON.parse(datosGuardados) : [];

    // Filtrar los puntajes por el valor del alias
    var puntajesFiltrados = arraysObjetos.filter(function(puntaje) {
        return puntaje.alias === alias;
    });

    // Crear una tabla HTML dinámicamente con los puntajes filtrados
    var tablaHTML = '<table border="1"><tr><th>Alias</th><th>Puntos</th><th>Tiempo</th></tr>';
    puntajesFiltrados.forEach(function(puntaje) {
        tablaHTML += '<tr><td>' + puntaje.alias + '</td><td>' + puntaje.puntos + '</td><td>' + puntaje.tiempo + '</td></tr>';
    });
    tablaHTML += '</table>';

    // Mostrar los puntajes en el contenedor
    document.getElementById('contenedorPuntajesPorAlias').innerHTML = tablaHTML;
}

