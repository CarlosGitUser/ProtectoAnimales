// Función para finalizar el juego
function terminarJuego() {
  clearInterval(intervaloTiempo); //Detiene el cronómetro

  // Guardar datos del jugador en LocalStorage
  localStorage.setItem(alias, JSON.stringify({
    puntos: puntos,
    tiempo: tiempo
  }));

  // Mostrar la pantalla de felicitación
  mostrarPantalla('finalizacion');
  
  // Mostrar los datos del jugador
  document.getElementById('alias').innerText = alias;
  document.getElementById('puntos').innerText = puntos;
  const minutos = Math.floor(tiempo / 60);
  const segundos = tiempo % 60;
  document.getElementById('tiempo').innerText = `${minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
}

function reiniciarJuego() {
    clearInterval(intervaloTiempo); 
  
    //Limpiar el LocalStorage
    localStorage.removeItem(alias);
  
    //Restablece valores
    alias = '';
    score = 0;
    tiempo = 0;
    musica = false;
  
    //pantalla de inicio del juego
    mostrarPantalla('inicio');
  
    // Reinicia la entrada del alias
    const aliasInput = document.getElementById('aliasInput');
    aliasInput.value = '';
    aliasInput.focus(); // Colocar el foco en el campo de entrada del alias
  }