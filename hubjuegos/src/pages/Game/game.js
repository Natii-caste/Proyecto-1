let palabrita; //creo una variable global para poder usarla en distintas funciones y no tener que crear todo en una sola funcion
let cant_errores = 0; //creo una variable global de errores que me empiece por 0 que equivaldrá a cuantas veces me equivoqué
let cant_aciertos = 0; //creo una variable global de aciertos que empiece por 0 que equivaldra a cuantas letras acerté

//creo una constante que va a ser un array con las palabras a adivinar.

const palabras = [
  "manzanas" /* 0 */,
  "Camiseta" /* 1 */,
  "caramelos" /* 2 */,
  "ñoquis" /* 3 */,
  "streamer" /* 4 */,
  "twitch" /* 5 */,
  "murciegalo" /* 6 */,
  "microfono" /* 7 */,
];

const btn = id("jugar"); //esto lo pongo al principio para que "exista" antes de empezar a jugar
const imagen = id("imagen"); //esto lo pongo al principio para que "exista" antes de empezar a jugar
const btn_letras = document.querySelectorAll("#letras button"); //esto lo pongo al principio para que "exista" antes de empezar a jugar, en este caso para que mis botones aparezcan.

/* click en iniciar juego */

btn.addEventListener("click", iniciar);

function iniciar(event) {
  imagen.src = "img/img0.png"; //aqui le estoy diciendo que cuando empiece el juego la imagen sea la 0 (la inicial)
  btn.disabled = true; //el .disable es para que cada vez que le doy al boton no se pueda volver a dar hasta que adivine la palabra. esta en true para que esto este activado, si pongo false, esto estara desactivado.
  cant_errores = 0; //esto es para que cada vez que empiezo el juego los errores tienen que estar a 0.
  cant_aciertos = 0; //esto es para que cada vez que empiezo el juego los aciertos tienen que estar a 0.

  const parrafo = id("palabra_a_adivinar"); //es el que me va a mostrar todo de mi HTML.
  parrafo.innerHTML = ""; //aqui le estoy diciendo que cada vez que coja una nueva palabra aleatoria me vacie el span (las rallitas).

  const cant_palabras = palabras.length; //para que me cuente las letras que tiene cada palabra y asi poder poner las rayas que se necesiten, por ejemplo hola necesita 4 _ _ _ _
  const valor_al_azar = obtener_random(0, cant_palabras);

  palabrita = palabras[valor_al_azar]; //le doy un nuevo valor a mi constante creada al principio que va a ser para que relacione el numero de tras con mi palabra.
  console.log(palabrita);
  const cant_letras = palabrita.length; //hago una constante para saber la cantidad de letras que tiene mi palabra

  for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].disabled = false; //aqui le digo que cuando este en false (fin de juego) se vuelvan a habilitar las letras para poder seguir jugando.
  }

  for (let i = 0; i < cant_letras; i++) {
    const span = document.createElement("span"); //por cada vuelta se remplazara mi span y que me cree uno por cada vuelta.
    parrafo.appendChild(span); //al parrafo voy a agregar un hijo que va a ser span
  }
}

//Basicamente en el bucle del span le estoy diciendo que en que sepa la palabra aleatoria
//me cree un span (una rallita) por cada letra, por ejemplo de HOLA me tiene que crear 4 span es decir, 4 rallitas.
//pero que pasa? que con ese bucle cada vez que le de a mi boton "obtener palabra" se me van a añadir span a las palabras
//ya puestas por ejemplo de HOLA son 4 span y si me cambia la palabra a ADIOS se me añaden las 4 del HOLA + 5 del ADIOS por lo
//que voy a tener 9 spans seguidos y yo no quiero eso.

/* click de adivinar letra */

for (let i = 0; i < btn_letras.length; i++) {
  btn_letras[i].addEventListener("click", click_letras); //le estoy diciendo que del boton que sea (con el [i] me va recorriendo cada boton) al hacerle "click" (por eso pongo un eddEventListener) me devueltra la letra que se le esta haciendo clik.
}

//creo una función click_letras para interactuar con las letras del teclado del juego, es decir, para que cada vez que hago click en una letra, sepa que letra es y me la devuelva.

function click_letras(event) {
  //el parametro event hace referencia a la letra que he tocado.
  const spans = document.querySelectorAll("#palabra_a_adivinar span"); //esta constnate es para que vaya a esa ID y me busque las etiquetas de spam para que me devulva un array.
  const button = event.target; //creo una constante llamada boton y con el target me busca en el HTML cual de todas las letras he llamado en mi funcion (event).
  button.disabled = true; //deshabilito la letra y la dejo inactiva al darle.

  const letra = button.innerHTML.toLowerCase(); //la constante letra va a ser el boton de mi letra que hay en HTML y la voy a convertir todo en minuscula para evitar fallos
  const palabra = palabrita.toLowerCase(); //la constante palabra es para poner mis palabras en minuscula.

  let acerto = false; //el acierto esta en false siempre hasta que pasa por el bucle de abajo, es decir, hasta que la letra esta en mi palabra no cambiará a true.
  for (let i = 0; i < palabra.length; i++) {
    if (letra == palabra[i]) {
      //le digo que si la letra que puse existe en la posicion de la letra de mi palabra que recorre.
      //la variable i es la posición de la letra en la palabra.
      //que coincide con el span al que tenemos que mostarle esta letra siempre que la haya adivinado.
      spans[i].innerHTML = letra; //aqui le estoy diciendo que voy a cambiar el contenido del span en el HTML  por mi letra, es decir, la letra que toqué va a parecer en el contenido de span.
      cant_aciertos++;
      acerto = true; //el acierto se pone en true cuando encuentra una letra que si que esta en mi palabra.
    }
  }

  if (acerto == false) {
    //si acabó el bucle y el acierto sigue estando en falso...
    cant_errores++; //incremento los errores porque he fallado
    const source = `img/img${cant_errores}.png`; //aqui le inserto la imagen, lo pongo de esta manera porque las imagenes van por numeros, asi cada vez que tenga un error comparará el numero de error con el numero de mi imagen y la cambiará dependiendo del numero que sea.
    imagen.src = source;
  }

  if (cant_errores == 7) {
    //creo otro condicional para decirle que si he cometido 7 errores (porque son 7 imagenes) o 7 aciertos (dependiendo de la palabra) gano o pierdo
    id("resultado").innerHTML = "Perdiste, la palabra era " + palabrita; //busco por id el resultado y si esta bien he perdido y el resultado me dirá que he perdido y le dire que palabra es.
    game_over(); //fin de la partida, lo que me va a hacer es deshabilitar las letras y volverme a habilitar el boton de jugar.
  } else if (cant_aciertos == palabrita.length) {
    //si lo de antes no se cumple y mi palabra equivale a las letras de ésta, gano el juego
    id("resultado").innerHTML = "GANASTE!! WIIIIII"; //busco por id el resultado y si esta bien he ganado
    game_over(); //fin de la partida, lo que me va a hacer es deshabilitar las letras y volverme a habilitar el boton de jugar.
  }
  console.log(
    "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acerto
  );
}

/* fin del juego */

//creo una función para terminar el juego.

function game_over() {
  //creo una funcion para terminar con el juego
  for (let i = 0; i < btn_letras.length; i++) {
    //en este bucle me busca todas las letras uno por uno y me las va deshabilitando.
    btn_letras[i].disabled = true; //recordar que el .disable es para interactuar con mi boton de jugar, aqui he desahbilitado los botones porque he terminado la partida.
  }

  btn.disabled = false; //el boton de volver a jugar se me activa.
}

game_over(); //hasta que vuelva a darle a jugar que me lo deje en estado de game over.
