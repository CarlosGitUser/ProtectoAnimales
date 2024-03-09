
//Orden de los elementos

let lista = [1,2,3,4,5,6,7,8,9];
lista = lista.sort(function() {return Math.random() - 0.5});

//Array con las imagenes en orden
let animales = ["ajolote", "buho", "caballo", "capybara", "delfin", "gato", "leon", "pato", "serpiente"];

//Funcion para desordenar un array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
// Función para establecer la imagen en el div
const imagenes = function (){

    const img_1 = lista[0] - 1;
    const img_2 = lista[1] - 1;
    const img_3 = lista[2] - 1;
    
    //const array = [ lista[0] - 1, lista[1] - 1, lista[2] - 1 ];
    //array = array.sort(function() {return Math.random() - 0.5});

    //Colocar animales en los div
    const animal_1 = document.getElementById("Aimage-1");
    animal_1.src = "../img/" + animales[img_1]+".png";

    const animal_2 = document.getElementById("Aimage-2");
    animal_2.src = "../img/" + animales[img_2]+".png";

    const animal_3 = document.getElementById("Aimage-3");
    animal_3.src = "../img/" + animales[img_3]+".png";

   
    //Desordenar el array
    const aux = [img_1, img_2, img_3];
    shuffle(aux);
    console.log(aux);

    //Colocar los habitat en los div
    const habitat_1 = document.getElementById("Himage-1");
    habitat_1.src = "../img/H" + animales[aux[0]]+".png";

    const habitat_2 = document.getElementById("Himage-2");
    habitat_2.src = "../img/H" + animales[aux[1]]+".png";

    const habitat_3 = document.getElementById("Himage-3");
    habitat_3.src = "../img/H" + animales[aux[2]]+".png";
}

const x = document.getElementById("Himage-1");
x.addEventListener("dragend",correcto);

function correcto (event){
    console.log("el animal entro en la imagen");
}

window.onload = imagenes;
