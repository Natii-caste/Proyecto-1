//1. Lo primero que hago es crear una funcion Arrow con el nombre de inetTemplate para crear un estructura HTML básica.
//2. Con el document.getElementById("app")  para objtener el elemento ID "app", con esto digamos que de todo lo que hay quiero "centrarme" en la seccion de app.
//3. Creo una constante por cada elemento que quiero añadir a mi HTML utilizando el document.createElement("nombre de mi elemento").
//4. Inyecto los elementos al contenedor app, poniendo app.append(elementos que quiero añadir).
//5. En el index.js que es mi archivo barril tenemos que poner expor * from "./initTemplate" esto es un puente para cuando quiera llamar todo esto que he hecho no tengo que escribir todo esto, solo lo del barril.

import { PrintTemplateHeader, PrintTemplateFooter } from "../components";

export const initTemplate = () => {
  const app = document.getElementById("app");
  console.log(app);
  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");

  app.append(header, main, footer);

  PrintTemplateHeader();
  PrintTemplateFooter();
};
