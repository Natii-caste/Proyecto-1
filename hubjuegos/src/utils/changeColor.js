//CREAMOS ESTE JS PARA EL CAMBIO DE COLOR DE FORMA ALEATORIA.

//1. Dentro de changeColorRGB creamos otra funcion llamada randomNumber que es una funcion axiliar
//  que toma dos parametros (min y max) y nos devuelve un número entero aleatorio dentro de rango que l ehaya puesto (min, max).
//2. Utilizamos Math.random() para generar un numero decimal entre 0 y 1.
//3. Multiplica este numero por la diferencia entre max y min y lo rendondea hacia abajo con Math.floor

export const changeColorRGB = () => {
  const randomNumber = (min, max) => {
    min = Math.ceil(min);
    console.log(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
  };

  //4. Se utilizan tres llamadas a randomNumber para obtener valores aleatorios para los componentes
  //   Rojo (R), Verde (G), y Azul (B) del modelo de color RGB. Es de 0-255 porque son los valores válidos para RGB.

  let R = randomNumber(0, 255);
  let G = randomNumber(0, 255);
  let B = randomNumber(0, 255);

  //5. Se crea una cadena color que representa un color RGB aleatorio cada vez que se llama a la funcion.

  const color = `rgb(${R},${G},${B})`;
  return color;
};

//En resumen, la función **`changeColorRGB`** genera y devuelve un color RGB aleatorio en cada llamada.
