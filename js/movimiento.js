function iniciar(){
    var imagenes = document.querySelectorAll('#animals > canvas');
    for (let i = 0; i < imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', arrastrado, false);
        imagenes[i].addEventListener('dragend', finalizado, false);
    }

    soltar = document.getElementById('Himage-1');
    lienzo = soltar.getContext('2d');
    soltar.addEventListener('drop', soltado, false);
    soltar.addEventListener('dragover', eventoOver, false);
}


function eventoEnter(e){
    console.log("Evento de dragenter");
    e.preventDefault();
}

function eventoOver(e){
    console.log("Evento de dragOver");
    e.preventDefault();
}

function finalizado(e){
    elemento = e.target;
    //elemento.style.visibility = 'hidden';
    console.log("funcion finalizado");
}

function arrastrado(e){
    elemento = e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
    e.dataTransfer.setDragImage(e.target, 0, 0);
    console.log("funcion arrastrado");

}

function soltado(e){
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    var elemento = document.getElementById(id);
    var posx = e.pageX - soltar.offsetLeft;
    var posy = e.pageY - soltar.offsetTop;
    lienzo.drawImage(elemento, posx, posy);
    console.log("funcion soltado");

}

window.addEventListener('load', iniciar, false);