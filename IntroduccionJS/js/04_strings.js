const gravedad = " Gravedad en la tierra 9.81";// String o cadenas de texto

// Constructor de string
 const gravedadMarte = String('Gravedad en marte 3.72');
// con new String
const gravedadLuna = new String ('Gravedad en la luna 1.62')
//console.log(gravedad);
//console.log(gravedadMarte);
//console.log(gravedadLuna);
// con typeof puedes saber que tipo de dato es una variable
//console.log( typeof gravedadLuna);

//Si el texto tiene comillas dobles, lo podemos imprimir así con \" 
const productoComillas = "Monitor de 11\"";

//----------------------------------------
// Métodos para strings
const producto = 'Monitor Curvo';
const producto2 = 'Monitor HD';
// .length Retorna la cantidad de carateres--------------------------
// .length es un método exclusivo de las cadenas de texto
console.log(producto.length);
console.log(producto2);

// IndexOf (retorna posición)---------------------------
const tweet = "Aprendiendo JavaScript y tirando code";
// IndexOf nos dice en que posicion se encuentra la cadena de texto que estamos buscando
// Cuando el resultado es menor a 0, es decir -1, significa que no se encontro la cadena
console.log(tweet.indexOf('code'));

// Includes (Retorna ture o false)----
console.log(tweet.includes('code'));

