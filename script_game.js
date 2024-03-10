// Función para actualizar el tiempo jugado cada segundo
function actualizarTiempo() {
    var tiempo = 0; // Inicializar tiempo en segundos

    var intervaloTiempo = setInterval(function() {
        tiempo++; // Incrementar el tiempo en cada intervalo

        // Convertir tiempo a formato hh:mm:ss
        var horas = Math.floor(tiempo / 3600);
        var minutos = Math.floor((tiempo % 3600) / 60);
        var segundos = tiempo % 60;

        // Formatear tiempo a cadena "hh:mm:ss"
        var tiempoFormateado = (horas < 10 ? '0' : '') + horas + ':' +
                               (minutos < 10 ? '0' : '') + minutos + ':' +
                               (segundos < 10 ? '0' : '') + segundos;

        // Actualizar el contenido del elemento con el tiempo jugado
        document.getElementById('tiempo-jugado').textContent = tiempoFormateado;
    }, 1000); // Ejecutar cada segundo (1000 ms)

    // Función para pausar el tiempo
    function pausarTiempo() {
        clearInterval(intervaloTiempo);
    }

    // Función para continuar el tiempo
    function continuarTiempo() {
        intervaloTiempo = setInterval(function() {
            tiempo++;
            actualizarTiempo();
        }, 1000);
    }

    // Lógica para pausar y continuar el tiempo
    document.getElementById('pausar').addEventListener('click', function() {
        pausarTiempo();
        document.getElementById('estado').textContent = 'Estado: Juego pausado';
    });

    document.getElementById('continuar').addEventListener('click', function() {
        continuarTiempo();
        document.getElementById('estado').textContent = 'Estado: Jugando';
    });
}

// Lógica para pausar y continuar la música
document.getElementById('pausar-musica').addEventListener('click', function() {
    var musica = document.getElementById('musica');
    if (!musica.paused) {
        musica.pause();
        document.getElementById('estado').textContent = 'Estado: Música pausada';
    }
});

// Llamar a la función para comenzar a actualizar el tiempo jugado
actualizarTiempo();

