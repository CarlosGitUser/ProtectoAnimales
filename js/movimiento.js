// Crear y agregar las etiquetas de enlace para las fuentes al elemento <head> del documento
function agregarEtiquetasDeFuentes() {
    const linkAnton = document.createElement('link');
    linkAnton.rel = 'stylesheet';
    linkAnton.href = 'https://fonts.googleapis.com/css2?family=Anton';

    const linkJost = document.createElement('link');
    linkJost.rel = 'stylesheet';
    linkJost.href = 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900';

    document.head.appendChild(linkAnton);
    document.head.appendChild(linkJost);
}

// Llamar a la función para agregar las etiquetas de enlace para las fuentes
agregarEtiquetasDeFuentes();

// Tu código JavaScript aquí
function iniciar() {
    var imagenes = document.querySelectorAll('#animals > canvas');
    const canvases = document.querySelectorAll('.canvas');
    canvases.forEach(canvas => {
        canvas.addEventListener('dragover', eventoOver);
        canvas.addEventListener('drop', soltado);
    });

    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener('dragstart', arrastrado, false);
        imagenes[i].addEventListener('dragend', finalizado, false);
    }
}

function eventoEnter(e) {
    console.log("Evento de dragenter");
    e.preventDefault();
}

function eventoOver(e) {
    console.log("Evento de dragOver");
    e.preventDefault();
}

function finalizado(e) {
    elemento = e.target;
    console.log("funcion finalizado");
}

function arrastrado(e) {
    elemento = e.target;
    const offsetX = e.target.width / 2;
    const offsetY = e.target.height / 2;
    e.dataTransfer.setDragImage(e.target, offsetX, offsetY);
    e.dataTransfer.setData('text/plain', e.target.id);
    console.log("funcion arrastrado");
}

function obtenerNombrePagina() {
    // Obtener la ruta de la página actual
    let rutaPagina = window.location.pathname;

    // Obtener el último segmento de la ruta (nombre del archivo)
    let nombrePagina = rutaPagina.substring(rutaPagina.lastIndexOf('/') + 1);

    // Retornar el nombre de la página
    return nombrePagina;
}

function redirigirPagina() {
    // Esperar 1 segundo (1000 milisegundos)

    setTimeout(function () {
        // Redirigir a otra página
        let auxPag = obtenerNombrePagina();
        if (auxPag == "juego.html")
            window.location.href = "../juego2.html";
        else
            window.location.href = "../index.html"; //Enviar a la pagina de puntos
    }, 1000);
}

function soltado(event) {
    event.preventDefault();

    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);

    // Obtener el nombre del canvas del animal que se está arrastrando
    const nombreAnimal = draggableElement.getAttribute('name');

    const canvasId = event.target.id;

    // Obtener el nombre del canvas del hábitat donde se está colocando el animal
    const nombreHabitat = document.getElementById(canvasId).getAttribute('name');

    const canvas = document.getElementById(canvasId); // Obtener el canvas objetivo
    const ctx = canvas.getContext('2d');

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    //Configuracion para determinar si el animal y el habitat son correctos
    if (nombreAnimal == nombreHabitat) {
        // Colocar la imagen del animal sobre el canvas
        ctx.drawImage(draggableElement, 100, 150, 200, 200);
        elemento.style.visibility = 'hidden';

        // Mostrar la etiqueta del animal con estilos
        const etiquetaAnimal = document.getElementById(nombreHabitat);
        etiquetaAnimal.style.visibility = 'visible';
        etiquetaAnimal.innerHTML = nombreHabitat;
        etiquetaAnimal.style.fontSize = '36px'; // Tamaño de la fuente
        etiquetaAnimal.style.fontFamily = 'Jost'; // Familia de fuentes
        etiquetaAnimal.style.fontWeight = 'bold'; // Negrita
        etiquetaAnimal.style.color = 'black'; // Color del texto
        etiquetaAnimal.style.textAlign = 'center';
        console.log("Correcto");

        // Modificar puntuacion

        let puntuacion = document.getElementById("puntuacion-actual");
        let puntos = parseInt(puntuacion.textContent) + 100;
        puntuacion.innerHTML = puntos;

        // Modificar aciertos para mostrar el boton
        aciertos++;

        if (aciertos == 3) {
            const btn = document.getElementById("siguiente");
            btn.style.visibility = 'visible';
            // Almacenar los puntos de la partida 

            localStorage.setItem("auxPtn", puntos);
            //const btn2 = getElementById("finalizar");
            // btn2.style.visibility = 'visible';

            redirigirPagina();
        }

        // Reproducir sonido de acierto
        let sonidoAcierto = document.getElementById("sonido-succes");
        if (sonidoAcierto)
            sonidoAcierto.play();

        // Reproducir sonido del animal correspondiente
        var sonidoAnimal = document.getElementById('sonido-' + nombreAnimal.toLowerCase());
        if (sonidoAnimal) {
            sonidoAnimal.play();
        }
    } else {
        console.log("Incorrecto");

        // Modificar puntos en caso de error
        let puntuacion = document.getElementById("puntuacion-actual");
        let puntos = parseInt(puntuacion.textContent) - 50;
        puntuacion.innerHTML = puntos;
        //Reproducir sonido de error
        var sonidoError = document.getElementById("sonido-error");
        if (sonidoError)
            sonidoError.play();
    }
}
var aciertos = 0;
window.addEventListener('load', iniciar, false);