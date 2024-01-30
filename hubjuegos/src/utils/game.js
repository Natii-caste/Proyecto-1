import { palabras } from "../global/data/game.data";
import {
  getInfoJuego,
  setAciertos,
  setErrores,
  setPalabrita,
} from "../global/state/game.state";

export const obtenerNumAleatorio = (num_min, num_max) => {
  const amplitud_valores = num_max - num_min; //valor más alto - valor más bajo del random... (7 - 0)
  const valor_al_azar =
    Math.floor(Math.random() * amplitud_valores) +
    num_min; /* 5 - 15 = 10 + 5 */
  return valor_al_azar;
};

export const iniciar = (event) => {
  document.getElementById("resultado").innerHTML = "";
  const imagen = document.getElementById("imagen");
  imagen.src = "img/img0.png";
  const btn = document.getElementById("jugar");
  btn.disabled = true;
  setErrores(0);
  setAciertos(0);

  const parrafo = document.getElementById("palabra_a_adivinar");
  parrafo.innerHTML = "";

  const cant_palabras = palabras.length;
  const valor_al_azar = obtenerNumAleatorio(0, cant_palabras);

  setPalabrita(palabras[valor_al_azar]);
  const cant_letras = getInfoJuego().palabrita.length;
  const btn_letras = document.querySelectorAll("#letras button");

  for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].disabled = false;
  }

  for (let i = 0; i < cant_letras; i++) {
    const span = document.createElement("span");
    parrafo.appendChild(span);
  }
};

export const click_letras = (event) => {
  const spans = document.querySelectorAll("#palabra_a_adivinar span");
  const button = event.target;
  button.disabled = true;

  const letra = button.innerHTML.toLowerCase();
  const palabra = getInfoJuego().palabrita.toLowerCase();

  let acierto = false;
  for (let i = 0; i < palabra.length; i++) {
    if (letra == palabra[i]) {
      //!c a m i s a
      spans[i].innerHTML = letra;
      let aciertos = parseInt(getInfoJuego().cant_aciertos);
      setAciertos(aciertos + 1);
      acierto = true;
    }
  }

  if (acierto == false) {
    let fallos = parseInt(getInfoJuego().cant_errores);
    setErrores(fallos + 1);
    console.log(getInfoJuego().cant_errores);
    const fotoError = `img/img${getInfoJuego().cant_errores}.png`;
    const imagen = document.getElementById("imagen");
    imagen.src = fotoError;
  }

  if (getInfoJuego().cant_errores == 7) {
    document.getElementById("resultado").innerHTML =
      "Ohh!!, la palabra era " + getInfoJuego().palabrita;
    game_over();
  } else if (getInfoJuego().cant_aciertos == getInfoJuego().palabrita.length) {
    document.getElementById("resultado").innerHTML = "YUJUUU!! HAS GANADO!!!";
    game_over();
  }
  console.log(
    "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acierto
  );
};

export const game_over = () => {
  const btn_letras = document.querySelectorAll("#letras button");
  for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].disabled = true;
  }
  const btn = document.getElementById("jugar");
  btn.disabled = false;
};
