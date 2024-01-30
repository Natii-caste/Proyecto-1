//1. Importamos la funcion getUser del modulo globalState que es el que obtiene la informacion sobre el usuario.

import { getUser } from "../global/state/globalState";
import {
  Login,
  PrintPokemonPage,
  PrintsGameTemplate,
  printTemplateDashboard, //!importo el print del ahorcado
} from "../pages";

/// estas paginas se haran en el punto 6 ------> Login, PrintPokemonPage, printTemplateDashboard

//! ----------------------------------------------------------------------------------------------------------------------
//? ------------ CONTROLADOR DE LO QUE SE RENDERIZA EN CADA MOMENTO------------------------------
//! ----------------------------------------------------------------------------------------------------------------------

//Utilizamos la funcion  initControler que nos toma el parametro pagesRender que determina que página o componente debe renderizarse (pintar de nuevo)
//Utilizamos el swich para determinar cuando renderizamos ("pintamos")
//El swich evalua el valor de pagesRender y ejecuta diferentes casos segun el valor que recibe.
//Basicamento lo que hacemos es que dependiendo que caso elija nuestro usuario nos "pintara" la pagina de una manera u otra.

export const initControler = (pagesRender) => {
  switch (pagesRender) {
    case undefined:
      localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
      break;
    case "Pokemon":
      PrintPokemonPage();
      break;
    case "Dashboard":
      printTemplateDashboard();
      break;
    case "Ahorcado":
      PrintsGameTemplate();
      break;
    case "Login":
      Login();
      break;
    case "Memory":
      "PrintMemoryPage() ------> en caso de que lo haya";
      break;
  }
};
