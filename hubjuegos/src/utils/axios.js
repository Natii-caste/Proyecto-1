//1.import axios from "axios";: Importa la biblioteca Axios para utilizarla en el código.

import axios from "axios";

//2. export const axiosUtil = async (options) => {...};: Exporta una función llamada axiosUtil
//   como una función asíncrona. Esta función toma un parámetro llamado options, que representa
//   la configuración de la solicitud.
//3. export const axiosUtil = async (options) => {...};: Exporta una función llamada axiosUtil
//   como una función asíncrona. Esta función toma un parámetro llamado options, que representa
//   la configuración de la solicitud.
//4.

export const axiosUtil = async (options) => {
  return await axios.request(options).then((res) => res.data);
};
