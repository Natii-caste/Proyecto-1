//!-----PONGO LOS ESTADOS DE MI JUEGO---

const infoJuego = {
  palabraAdivinar: "",
  cant_aciertos: 0,
  cant_errores: 0,
};

export const getInfoJuego = () => infoJuego;

export const setpalabraAdivinar = (data) => (infoJuego.palabraAdivinar = data);
export const setAciertos = (data) => (infoJuego.cant_aciertos = data);
export const setErrores = (data) => (infoJuego.cant_errores = data);
