// Función para finalizar el juego
function terminarJuego() {
  clearInterval(intervaloTiempo); //Detiene el cronómetro

  // Guardar datos del jugador en LocalStorage
  localStorage.setItem(alias, JSON.stringify({
    puntos: puntos,
    tiempo: tiempo
  }));

  
  // Mostrar los datos del jugador
  let pts = localStorage.getItem("auxPts");
  var nameAux = localStorage.getItem("alias");
  document.getElementById('alias').innerText = nameAux;
  console.log("alias: " + nameAux);
  console.log("puntos: " + pts);
  document.getElementById('puntos').innerText = pts;
  const minutos = Math.floor(tiempo / 60);
  const segundos = tiempo % 60;
  document.getElementById('tiempo').innerText = `${minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
}

function reiniciarJuego() {
  
    //Limpiar el LocalStorage
    localStorage.removeItem("auxPts");
    localStorage.removeItem("tiempoJugado");

  
    //Restablece valores
    alias = '';
    score = 0;
    tiempo = 0;
    musica = false;
  
    //pantalla de inicio del juego
    window.location.href = '../juego.html';
  
    // Reinicia la entrada del alias
    const aliasInput = document.getElementById('aliasInput');
    aliasInput.value = '';
    aliasInput.focus(); // Colocar el foco en el campo de entrada del alias
  }

  function cargarResultados(){
    let pts = localStorage.getItem("auxPtn");
    let name = localStorage.getItem("alias");
    document.getElementById('alias').innerText = name;
    console.log("alias: " + name);
    console.log("puntos: " + pts);
    document.getElementById('puntos').innerText = pts;
    let tiempo = parseInt(localStorage.getItem("tiempoJugado"));

    // Calcular tiempo de juego
    let minutos = Math.floor(tiempo / 60);
    let segundos = tiempo % 60;
    let time = document.getElementById("tiempo");
    time.innerHTML += " " + minutos + " minutos con " + segundos + " segundos"

    let fin = document.getElementById("fin");
    let text = fin.textContent;

    fin.innerHTML = name + ", " + text;

    guardarResultados(name, pts, tiempo);
  }

  function guardarResultados(nom, pts, tiempo){
    // Almacenar el puntaje actual como objeto  
    let puntaje ={
      alias: nom,
      puntos: pts,
      tiempo: tiempo
    };

    // Obtener los datos almacenados actualmente en el localStorage
    let datosGuardados = localStorage.getItem('allPuntuations');

    // Convertir los datos recuperados en un array (si hay datos almacenados)
    var arraysObjetos = datosGuardados ? JSON.parse(datosGuardados) : [];

    // Agregar el nuevo array de objetos al array recuperado
    arraysObjetos.push(puntaje);

    // Convertir el nuevo array resultante a una cadena de texto JSON
    var arraysString = JSON.stringify(arraysObjetos);

    // Almacenar la cadena actualizada en el localStorage
    localStorage.setItem('allPuntuations', arraysString);
  }
  window.onload = cargarResultados();