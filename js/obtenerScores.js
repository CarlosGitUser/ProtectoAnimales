


function mostrarPuntajes() {
    var datosGuardados = localStorage.getItem('allPuntuations');

    var arraysObjetos = datosGuardados ? JSON.parse(datosGuardados) : [];

    var tablaHTML = '<table border="1"><tr><th>Alias</th><th>Puntos</th><th>Tiempo</th></tr>';
    arraysObjetos.forEach(function(puntaje) {
        tablaHTML += '<tr><td>' + puntaje.alias + '</td><td>' + puntaje.puntos + '</td><td>' + puntaje.tiempo + '</td></tr>';
    });
    tablaHTML += '</table>';

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
