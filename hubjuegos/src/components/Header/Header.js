//1.Importo mi archivo de CSS llamado Header.css (creado antes).
//2.Hacemos una función llamada template que devuelve una cadena de texto que representa un fragmento de HTML. Este fragmento incluye imágenes (img) y un contenedor de navegación (nav) con tres imágenes que serán el contenido de la nav y el logo de la app.
//3.Hacemos un evento con sus escuchadores creando una funcion con el nombre addListeners que la llenaremos con escuchadores en un futuro.
//4.Exportamos la funcion PrintTmplateHeader que es el que nos "pinta".

import "./Header.css";

const template = () => `
  <img
    src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682679162/header_giqdug.jpg"
    alt="title hub game website (app)"
    class="logo"
  />
  <nav>
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682684561/changeColor_tat29q.png"
      alt=" change to style mode page"
      id="changeColor"
    />
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682685633/home_nekvs0.png"
      alt=" navigate to home app"
      id="buttonDashboard"
    />
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682679055/logout_arz0gw.png"
      alt="logout"
      id="buttonLogout"
    />
  </nav>
`;

const addListeners = () => {};

export const PrintTemplateHeader = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
};
