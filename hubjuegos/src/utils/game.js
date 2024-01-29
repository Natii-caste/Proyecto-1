import { palabras } from "../global/data/game.data";
import {
  getInfoJuego,
  setAciertos,
  setErrores,
  setPalabrita,
} from "../global/state/game.state";

export const id = (str) => {
  return document.getElementById(str);
};

export const obtener_random = (num_min, num_max) => {
  const amplitud_valores = num_max - num_min; //valor más alto - valor más bajo del random... (7 - 0)
  const valor_al_azar =
    Math.floor(Math.random() * amplitud_valores) +
    num_min; /* 5 - 15 = 10 + 5 */
  return valor_al_azar;
};

export const iniciar = (event) => {
  const imagen = id("imagen");
  imagen.src = "images/img0.png";
  const btn = id("jugar");
  btn.disabled = true;
  setErrores(0);
  setAciertos(0);

  const parrafo = id("palabra_a_adivinar");
  parrafo.innerHTML = "";

  const cant_palabras = palabras.length;
  const valor_al_azar = obtener_random(0, cant_palabras);

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
