// Función para actualizar el tiempo jugado cada segundo
function actualizarTiempo() {
    // Obtener el tiempo guardado del almacenamiento local
    var tiempoGuardado = localStorage.getItem('tiempoJugado');

    // Inicializar el tiempo en 0 si no hay tiempo guardado
    var tiempo = tiempoGuardado ? parseInt(tiempoGuardado) : 0;

    var intervaloTiempo;

    // Función para actualizar el tiempo
    function actualizar() {
        tiempo++;

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

        // Guardar el tiempo en el almacenamiento local
        localStorage.setItem('tiempoJugado', tiempo);
    }

    // Iniciar o reanudar el tiempo
    function iniciarTiempo() {
        intervaloTiempo = setInterval(actualizar, 1000);
    }

    // Detener el tiempo
    function detenerTiempo() {
        clearInterval(intervaloTiempo);
    }

    // Lógica para pausar y continuar el tiempo
    document.getElementById('pausar').addEventListener('click', function() {
        detenerTiempo();
        document.getElementById('estado').textContent = 'Estado: Juego pausado';
    });

    document.getElementById('continuar').addEventListener('click', function() {
        iniciarTiempo();
        document.getElementById('estado').textContent = 'Estado: Jugando';
    });

    // Lógica para pausar y reanudar la música
    var musica = document.getElementById('musica');
    document.getElementById('pausar-musica').addEventListener('click', function() {
        if (musica.paused) {
            musica.play();
            document.getElementById('estado').textContent = 'Estado: Música reanudada';
        } else {
            musica.pause();
            document.getElementById('estado').textContent = 'Estado: Música pausada';
        }
    });

    // Iniciar el tiempo
    iniciarTiempo();
}

// Llamar a la función para comenzar a actualizar el tiempo jugado
actualizarTiempo();

// Agregar la lógica para manejar la colocación de animales en su hábitat
document.getElementById('animals').addEventListener('dragend', function(event) {
    var animalArrastrado = event.target.id;
    var habitat = event.target.parentElement.id;
    if (animalArrastrado === habitat) {
        var sonidoAnimal = document.getElementById('sonido-' + animalArrastrado);
        if (sonidoAnimal) {
            sonidoAnimal.play();
        }
    }
    
});