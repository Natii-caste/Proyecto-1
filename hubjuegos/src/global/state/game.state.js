//!-----PONGO LOS ESTADOS DE MI JUEGO---

const infoJuego = {
  palabrita: "",
  cant_aciertos: 0,
  cant_errores: 0,
};

export const getInfoJuego = () => infoJuego;

export const setPalabrita = (data) => (infoJuego.palabrita = data);
export const setAciertos = (data) => (infoJuego.cant_aciertos = data);
export const setErrores = (data) => (infoJuego.cant_errores = data);
