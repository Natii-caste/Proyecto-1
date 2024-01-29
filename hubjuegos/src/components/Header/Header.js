//1. Importamos la función getUser del módulo globalState.
//   Importa las funciones changeColorRGB y initControler del módulo utils.
//   Importa los estilosHeader.css.

import { getUser } from "../../global/state/globalState";
import { changeColorRGB } from "../../utils";
import { initControler } from "../../utils/route";
import "./Header.css";

//2. Definimos una función llamada template que devuelve una cadena de texto HTML.
//   El HTML incluye una imagen de logo y una barra de navegación, en que estramos con el login tendremos
//   tres imágenes: uno, para cambiar el color de fondo (changeColor), otro para ir al dashboard (buttonDashboard),
//   y otro para salir/logout (buttonLogout).

const template = () => `
  <img
    src ="https://storage.googleapis.com/replit/images/1672349409903_274b33f82a94525aba21320ee594814b.jpeg"
    alt="title hub game website (app)"
    class="logo"
  />
  <nav>
    <img
      src="https://cdn-icons-png.flaticon.com/512/1157/1157969.png"
      alt=" change to style mode page"
      id="changeColor"
    />
    <img
      src="https://cdn-icons-png.flaticon.com/512/3655/3655555.png"
      alt=" navigate to home app"
      id="buttonDashboard"
    />
    <img
      src="https://cdn-icons-png.flaticon.com/512/3094/3094700.png"
      alt="logout"
      id="buttonLogout"
    />
  </nav>
`;

//3 .Creamos los escuchadores de eventos con la función addListeners para poder acceder a cada uno.
//   -changeColor: Cambia el color de fondo del cuerpo (body) al hacer clic en el botón de cambio de color.
//   -buttonDashboard: Llama a la función initControler con el parámetro "Dashboard" al hacer clic en el botón del dashboard.
//   -buttonLogout: Realiza acciones para simular un cierre de sesión. Cambia el token del usuario
//    a false en el estado y actualiza el almacenamiento local y de sesión. Luego,
//    llama a initControler con el parámetro "Login" para redirigir a la página de inicio
//    de sesión.

const addListeners = () => {
  const changeColor = document.getElementById("changeColor");
  changeColor.addEventListener("click", (e) => {
    /** en este caso lo que hacemos es generar un color y cambiar el stylo del background del body */
    const color = changeColorRGB();
    document.body.style.background = color;
  });
  const buttonDashboard = document.getElementById("buttonDashboard");
  buttonDashboard.addEventListener("click", (e) => {
    initControler("Dashboard");
  });
  const buttonLogout = document.getElementById("buttonLogout");
  buttonLogout.addEventListener("click", (e) => {
    const userState = getUser().name;
    const currentUser = localStorage.getItem(userState);
    const parseCurrentUser = JSON.parse(currentUser);
    const updateUser = { ...parseCurrentUser, token: false };
    const stringUpdateUser = JSON.stringify(updateUser);
    localStorage.removeItem(userState);
    sessionStorage.removeItem("currentUser");
    localStorage.setItem(userState, stringUpdateUser);
    initControler("Login");
  });
};

// llamamos al initController con el dashboard para que pinte la pagina del dashboard

//4. Define una función llamada PrintTemplateHeader que establece el contenido
//   del elemento <header> del documento utilizando el template definido anteriormente
//   y luego agrega los escuchadores de eventos mediante la llamada a addListeners

export const PrintTemplateHeader = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
};

//En resumen, este código crea un componente de encabezado con un logo y una barra de navegación
//que tiene botones para cambiar el color de fondo, ir al dashboard y cerrar sesión.
//Los eventos asociados a estos botones realizan acciones específicas, como cambiar el color de fondo
//y redirigir a otras páginas.
