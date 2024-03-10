
// Borrar variables previas
localStorage.removeItem("animal-1");
localStorage.removeItem("animal-2");
localStorage.removeItem("animal-3");
localStorage.removeItem("puntuacion");



// Orden de los elementos

let lista = [1,2,3,4,5,6,7,8,9];
lista = lista.sort(function() {return Math.random() - 0.5});

// Array con las imagenes en orden
const animales = ["ajolote", "buho", "caballo", "capybara", "delfin", "gato", "leon", "pato", "serpiente"];

// Funcion para desordenar un array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
// Variables para colocar las imagenes en desorden
const img_1 = lista[0] - 1;
const img_2 = lista[1] - 1;
const img_3 = lista[2] - 1;
 // Desordenar el array
 const aux = [img_1, img_2, img_3];
 shuffle(aux);
 console.log(aux);

// Almacenar los siguientes animales en el local storage;
  //Variables de los siguientes animales
  const sigAnimal_1 = lista[3] - 1;
  const sigAnimal_2 = lista[4] - 1;
  const sigAnimal_3 = lista[5] - 1;


localStorage.setItem("animal-1", animales[sigAnimal_1]);
localStorage.setItem("animal-2", animales[sigAnimal_2]);
localStorage.setItem("animal-3", animales[sigAnimal_3]);


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
// Funcion para modificar el atributo name de un elemento
function nombrarCanvas(canvasId, nombre){
    let canva = document.getElementById(canvasId);
    canva.setAttribute("name", nombre);
}
// Funcion para modificar la id  de una label
function nombrarEtiqueta(etiquetaId, id){
    let etiqueta = document.getElementById(etiquetaId);
    etiqueta.setAttribute("id", id);
}
    // Variables para el src de las imagenes
        // Animales
        const animal_1 = "../img/" + animales[img_1] + ".png";
        const animal_2 = "../img/" + animales[img_2] + ".png";
        const animal_3 = "../img/" + animales[img_3] + ".png";

        // Habitats
        const habitat_1 = "../img/H" + animales[aux[0]] + ".png";
        const habitat_2 = "../img/H" + animales[aux[1]] + ".png";
        const habitat_3 = "../img/H" + animales[aux[2]] + ".png";

    // Llamas para dibujar los canvas 
    dibujarCanvas("Aimage-1", animal_1);
    dibujarCanvas("Aimage-2", animal_2);
    dibujarCanvas("Aimage-3", animal_3);


    dibujarCanvas("Himage-1", habitat_1);
    dibujarCanvas("Himage-2", habitat_2);
    dibujarCanvas("Himage-3", habitat_3);

    // Colocar nombre a cada canvas
    nombrarCanvas("Aimage-1", animales[img_1]);
    nombrarCanvas("Aimage-2", animales[img_2]);
    nombrarCanvas("Aimage-3", animales[img_3]);

    nombrarCanvas("Himage-1", animales[aux[0]]);
    nombrarCanvas("Himage-2", animales[aux[1]]);
    nombrarCanvas("Himage-3", animales[aux[2]]);

    // Colocar clase a las etiquetas
    nombrarEtiqueta("label-1", animales[aux[0]]);
    nombrarEtiqueta("label-2", animales[aux[1]]);
    nombrarEtiqueta("label-3", animales[aux[2]]);



