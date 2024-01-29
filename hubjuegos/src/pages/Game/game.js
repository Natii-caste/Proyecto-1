import { PrintBotonLetras } from "../../components";

//!----------------------------------TEMPLETE---------------------------------------------------

//!creo un templete con el body del juego para añadirlo a mi HTML

const template = () => ` 
<img id="imagen" src="img/img0.png" alt="Ahorcado" />
<div>
      <p id="palabra_a_adivinar"></p>
      <button id="jugar">Obtener palabra</button>

      <p id="resultado"></p>
      <div id="letras"></div> 
</div>
`;

//!PINTO MI TEMPLETE EN EL HTML. Para eso le digo que me lo meta en app con el querySelector y con app.innerHTMl (esto porque es texto) le estoy diciendo que me meta el templete al HTML

const listeners = () => {
  const boton = id("jugar");
  btn.addEventListener("click", iniciar);
};

export const PrintsGameTemplate = () => {
  //!lo exporto para que mi archivo rout pueda acceder a esta funcion.
  document.querySelector("main").innerHTML = template(); //!pinto con document.querySelector al main
  PrintBotonLetras(); //! Pinto el componente del botonletras
};

const imagen = document.getElementById("imagen");
const btn = document.getElementById("jugar");
const btn_letras = document.querySelectorAll("#letras button");

const addEvents = () => {
  const btn = document.getElementById("jugar");
  const btn_letras = document.querySelectorAll("#letras button");
  btn.addEventListener("click", iniciar);
  for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].addEventListener("click", click_letras);
  }
};

function obtener_random(num_min, num_max) {
  const amplitud_valores = num_max - num_min; //valor más alto - valor más bajo del random... (7 - 0)
  const valor_al_azar =
    Math.floor(Math.random() * amplitud_valores) +
    num_min; /* 5 - 15 = 10 + 5 */
  return valor_al_azar;
}

function click_letras(event) {
  const spans = document.querySelectorAll("#palabra_a_adivinar span");
  const button = event.target;
  button.disabled = true;

  const letra = button.innerHTML.toLowerCase();
  const palabra = palabrita.toLowerCase();

  let acerto = false;
  for (let i = 0; i < palabra.length; i++) {
    if (letra == palabra[i]) {
      spans[i].innerHTML = letra;
      cant_aciertos++;
      acerto = true;
    }
  }

  if (acerto == false) {
    cant_errores++;
    const imagen = document.getElementById("imagen");
    const source = `images/img${cant_errores}.png`;
    imagen.src = source;
  }

  if (cant_errores == 7) {
    document.getElementById("resultado").innerHTML =
      "Perdiste, la palabra era " + palabrita;
    game_over();
  } else if (cant_aciertos == palabrita.length) {
    document.getElementById("resultado").innerHTML = "GANASTE!! WIIIIII";
    game_over();
  }
  console.log(
    "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acerto
  );
}

function game_over() {
  for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].disabled = true;
  }
  const btn = document.getElementById("jugar");
  btn.disabled = false;
}
