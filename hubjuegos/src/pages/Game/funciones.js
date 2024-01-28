//AQUI ESTAN LAS FUNCIONES AUXILIARES

// creo una funcion para el getElementById
// recibo un str = string le paso `jugar` como parametro
// recordar que se pone str porque pertenece al HTML y esta escrito así.
// me retorna el document.getElementById del string (en este caso jugar)  y me devuelve a la variable id  (esta en la otra pagina)

function id(str) {
  return document.getElementById(str);
}

//Creo esta función para que me devuelva un numero aleatorio.
//-El Math.floor lo utilizo para que me rendoee a la baja, es decir si me sale 0,6 que me
// rendondee al 0 ¿porque hago esto? porque si mi numero minimo es 0 y mi maximo es 7 y el
// aleatorio me da 7,9 no me rendondee al 8 (que no existe) si no al 7 que esta en mi rango (de 0 a 7)
//-El Math.random lo que me hace es darme un numero aleatorio entre 0 y 1 (es decir, con decimales)
// que lo multiplico por la amplitud de valores que es la diferencia entre el numero mas alto y el mas bajo
// en este caso va a ser 7 porque 7 - 0 es 7.
//-le sumamos el numero mínimo porque por ejemplo si mi rango fuera de 5 a 15, mi amplutud seria de 0 a 10
// pero yo lo quiero del 5 al 15 por lo tanto le tengo que sumar el numero mas bajo (que es 5).

function obtener_random(num_min, num_max) {
  const amplitud_valores = num_max - num_min; //valor más alto - valor más bajo del random... (7 - 0)
  const valor_al_azar =
    Math.floor(Math.random() * amplitud_valores) +
    num_min; /* 5 - 15 = 10 + 5 */
  return valor_al_azar;
}
