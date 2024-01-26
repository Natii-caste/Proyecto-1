//1. import { axiosUtil } from "../utils";: Importa la función axiosUtil desde el módulo utils.

import { axiosUtil } from "../utils";

//2. export const getByIdPokemon = async (id) => {...};: Exporta una función llamada getByIdPokemon.
//   Esta función toma un parámetro id que representa el identificador único de un Pokémon.
//3. Dentro de la función getByIdPokemon, se define un objeto optionsRequest con la configuración
//   para la solicitud HTTP:
//   -method: "GET": Indica que se realizará una solicitud HTTP GET. (acordarnos que GET era para traernos la informacion de la base de datos)
//   -url: https://pokeapi.co/api/v2/pokemon/${id}``: La URL específica
//    a la que se hará la solicitud, utilizando la variable id para obtener
//    información sobre el Pokémon con ese identificador.
//4. return await axiosUtil(optionsRequest): Utiliza la función axiosUtil para realizar
//   la solicitud HTTP con la configuración proporcionada en optionsRequest.
//   La palabra clave await indica que la ejecución del código debe esperar a que la promesa
//   devuelta por axiosUtil se resuelva antes de continuar.

export const getByIdPokemon = async (id) => {
  const optionsRequest = {
    method: "GET",
    url: `https://pokeapi.co/api/v2/pokemon/${id}`,
  };

  return await axiosUtil(optionsRequest);
};

//En resumen, la función getByIdPokemon utiliza el axiosUtil para realizar
//una solicitud HTTP GET a la API (que es el que hace que nos comuniquemos con las paginas) de Pokémon y obtener información sobre un Pokémon
//específico, identificado por su ID.
