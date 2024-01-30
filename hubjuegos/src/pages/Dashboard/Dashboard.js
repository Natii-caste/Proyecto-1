//1. Importamos la funcion initControler desde utils
//2. Importamos el archivo CSS de dashboard que tiene estilos especificos para esta pagina.
//3. Definimos la funcion template que nos devuelve una cadena de texto con el HTML de la pagina Dashboard.
//4. Nuestro HTML contiene una lista no ordenada (<ul>) con tres elementos de lista (<li>), cada uno representa
//   un enlace a una seccion de la aplicacion (Pokemon, memory...)

import { getInfo, initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/871/871383.png"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li>
        <figure id= "navigateahorcado"> 
          <img
            src="https://cdn-icons-png.flaticon.com/128/3274/3274156.png"
            alt=" vamos a jugar al ahorcado"
          />  
          <h2>AHORCADO</h2>
        </figure> 
      </li>
    </ul>
  </div>
`;

//5. Definimos una funcion addEventListeners que nos agrega un elemento click al elemento
//   con ID "navigatePokemon" (que es nuestro enlace a la seccion de pokemon)
//   cuando se hace click en este elemento, se llama initControler("Pokemon") lo que le indica
//   al controlador que debe renderizar (pintar) la pagina de Pokemon.

const addEventListeners = () => {
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });
  const navigateAhorcado = document.getElementById("navigateahorcado"); //!creo el addEventListener del minijuego
  navigateAhorcado.addEventListener("click", () => {
    initControler("Ahorcado"); //!me lo mando a route
  });
};

//6. Definimos una funcion llamada printTemplateDashboard que renderiza (pinta) el contenido de la pagina
//   "dashboard" en el elemento <main> del documento.
//   tambien nos muestra la barra de navegacion <nav> cambiando si estilo de display: none a display: flex,
//   esto es porque cuando estamos en el login, no se muestra la <nav>, aunque sige disponible en el DOM.
//7. Por ultimo llamamos a addEventListeners para agregar los eventos a los elementos recien "pintados".
//   Hay que recordar que en un template, primero se "pinta" y despues de mete los eventos cuando ya esta disponible
//   en el DOM para hacer un querySelector.

export const printTemplateDashboard = () => {
  /** Como siempre las paginas se renderizan en el main por lo cual inyectamos el template en el contenedor del main */
  document.querySelector("main").innerHTML = template();

  /** Para la nav, que la habiamos ocultado en el login, la volvemos a renderizar cambiandole el display de none a flex */
  document.querySelector("nav").style.display = "flex";

  /** metemos los escuchadores de la pagina */
  addEventListeners();
  getInfo();
};

//Cuando se llama a printTemplateDashboard, se inserta el HTML de la página "Dashboard" en el <main> del documento.
//La barra de navegación se vuelve visible (cambia su estilo a flex).
//Se agregan los event listeners para manejar los clics en los elementos de la página, especialmente en el enlace a la sección de Pokémon.
