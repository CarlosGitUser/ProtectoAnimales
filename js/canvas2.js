
// Recuperar puntuacion
const puntos = document.getElementById("puntuacion-actual");
puntos.innerHTML = localStorage.getItem("auxPtn");

// Recuperar animales
const animal_1 = localStorage.getItem("animal-1");
const animal_2 = localStorage.getItem("animal-3");
const animal_3 = localStorage.getItem("animal-2");

// Funcion para dibujar imagenes en canvas

function dibujarCanvas(canvasId, imagenSrc) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");

    var imagen = new Image();
    imagen.src = imagenSrc;

    imagen.onload = function() {
        ctx.drawImage(imagen, 0, 0, canvas.width, canvas.height);
    };
}
// Funcion darle nombre a los canvas
function nombrarCanvas(canvasId, nombre){
    let canva = document.getElementById(canvasId);
    canva.setAttribute("name", nombre);
}
// Funcion para modificar la id  de una label
function nombrarEtiqueta(etiquetaId, id){
    let etiqueta = document.getElementById(etiquetaId);
    etiqueta.setAttribute("id", id);
}
// Funcion para desordenar un array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

// Variables para agregar imagenes a los canvas

  const array = [animal_1, animal_2, animal_3];
  shuffle(array);

    // Variables para los animales
    const img_1 = "../img/" + array[0] + ".png";
    const img_2 = "../img/" + array[1] + ".png";
    const img_3 = "../img/" + array[2] + ".png";

    // Variables para los habitats
    const habitat_1 = "../img/H" + animal_1 + ".png";
    const habitat_2 = "../img/H" + animal_2 + ".png";
    const habitat_3 = "../img/H" + animal_3 + ".png";

    // Llamas para dibujar los canvas 
    dibujarCanvas("Aimage-1", img_1);
    dibujarCanvas("Aimage-2", img_2);
    dibujarCanvas("Aimage-3", img_3);


    dibujarCanvas("Himage-1", habitat_1);
    dibujarCanvas("Himage-2", habitat_2);
    dibujarCanvas("Himage-3", habitat_3);

    // Colocar nombre a cada canvas
    nombrarCanvas("Aimage-1", array[0]);
    nombrarCanvas("Aimage-2", array[1]);
    nombrarCanvas("Aimage-3", array[2]);

    nombrarCanvas("Himage-1", animal_1);
    nombrarCanvas("Himage-2", animal_2);
    nombrarCanvas("Himage-3", animal_3);

    // Colocar clase a las etiquetas
    nombrarEtiqueta("label-1", animal_1);
    nombrarEtiqueta("label-2", animal_2);
    nombrarEtiqueta("label-3", animal_3);
