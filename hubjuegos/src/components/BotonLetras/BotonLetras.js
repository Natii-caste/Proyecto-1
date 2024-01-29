import "./BotonLetras.css"; //!importo mi css de los botones (para que este todo conectado)

const template = ` //! hago un templete de string solo de los botones de las teclas
          <button>a</button>
          <button>b</button>
          <button>c</button>
          <button>d</button>
          <button>e</button>
          <button>f</button>
          <button>g</button>
          <button>h</button>
          <button>i</button>
          <button>j</button>
          <button>k</button>
          <button>l</button>
          <button>m</button>
          <button>n</button>
          <button>ñ</button>
          <button>o</button>
          <button>p</button>
          <button>q</button>
          <button>r</button>
          <button>s</button>
          <button>t</button>
          <button>u</button>
          <button>v</button>
          <button>w</button>
          <button>x</button>
          <button>y</button>
          <button>z</button>
`;

export const PrintBotonLetras = () =>
  (document.getElementById("letras").innerHTML = template); //! hago una función que apunta a la parte de letras de mi otro templete, le metemos el inerHTML porque es un texto
