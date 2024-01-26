//1. Lo primero siempre crear los estados y le damos su valor inicial antes de modificarlos.
//2. El localStorage y el sessionStorage sirve para guardar informacion para el usuario que se
//   conecta a nuestra app (currentUser) solo que el localStorage es para que cuando el usuario
//   se salga se quede todo guardado y el sessionStorage es para cuando el usuario en que cierre la pagina no se guarden los cambios.
//3. Creo una constante currentUser, el get lo usamos para obtener el valor de la propiedad.
//   si tenemos un valor lo vamos a asignar al valor de currentUser sino será un string vacio.

const currentUser = {
  name: sessionStorage.getItem("currentUser")
    ? sessionStorage.getItem("currentUser")
    : "",
};

/*/4. este estado se encarga de incluir los datos de user con sus favoritos y es
//   practicamente igual que lo que se settea (con el set) en el local storage para guardar sus favoritos*/

let userData = localStorage.getItem(currentUser.name)
  ? JSON.parse(localStorage.getItem(currentUser.name))
  : {
      name: "",
      token: false,
      fav: [],
    };

//5. En este caso es donde se van a guardar los datos que vengan de las API
//   y que vamos a utilizarlos en los diferentes apartados de la app:
//   por ejemplo si tuvieramos dos paginas, una de pokemon y otra de Ricky morty
//   en este caso en cada clave guardariamos el valor de los datos de cada página.

const dataGlobal = {
  pokemon: [],
  ricky: [],
};

//6. SET y GET currentUser.
//   SET: Se utiliza para ASIGNAR un valor a una propiedad
//   GET: Se utiliza para OBTENER el valor de una propiadad
//   setUser asigna un nuevo nombre de usuario a currentUser.name
//   getUser devuelve el currentUser.

export const setUser = (username) => {
  currentUser.name = username;
};

export const getUser = () => {
  return currentUser;
};

//utilizamos el set y get en data Global es un objeto que almacena datos globales de la aplicacion
//que se utilizan en diferentes partes de la aplicacion, y sirve para almacenar datos de diferentes paginas o secciones de la aplicacion
// setData asigna datos a dataGlobal segun la pagina especifica
// getData devuelve los datos correspondientes a la pagina especificada des dataGlobal

export const setData = (data, page) => {
  switch (page) {
    case "Pokemon":
      dataGlobal.pokemon = data;

      break;

    default:
      break;
  }
};

export const getData = (page) => {
  switch (page) {
    case "Pokemon":
      return dataGlobal.pokemon;
    default:
      break;
  }
  return dataGlobal;
};
// Set y det de user Data: que son los datos del usuario
// SetUserData asigna nuevos datos al userData y los guarda en el localStorage con el nombre de usuario.
// getUserData devuelve el objeto userData.

export const setUserData = (data) => {
  console.log(".....metiendo datos en el contexto");
  userData.fav = data?.fav;
  userData.name = data?.name;
  userData.token = data?.token;

  //  /**En este caso no solo setea sino que tambien lo modifica en el localStorage
  // Como se ve lo mete con una forma especial para que en caso de corresponder
  // el nombre que introduce en el login con el que hay en el localStorage se pueda
  //  recuperar los datos de los favoritos.

  const stringUser = JSON.stringify(userData);
  localStorage.removeItem(`${currentUser.name}`);
  console.log(userData.name);
  localStorage.setItem(`${currentUser.name}`, stringUser);
};

export const getUserData = () => {
  return userData;
};

//- En **`setUserData`**, se elimina el antiguo valor del **`localStorage`**
//antes de almacenar el nuevo valor, y el nuevo valor se almacena con el nombre
//de usuario actual. Esto es porque el nombre de usuario se utiliza como clave
//única para almacenar los datos del usuario en el **`localStorage`**.
// -Se utilizan **`switch`** para manejar diferentes páginas o secciones de la
//aplicación (**`Pokemon`** en este caso) en las funciones **`setData`** y **
//`getData`**. Esto quiere decir que la app tiene diferentes secciones con datos
//específicos para cada una.

//En resumen, este código implementa una forma de manejar y persistir estados
//en una aplicación web utilizando localStorage y sessionStorage, con un enfoque
//en la inicialización en lazy para ciertos estados y funciones get y set para
//acceder y modificar estos estados de manera controlada.
