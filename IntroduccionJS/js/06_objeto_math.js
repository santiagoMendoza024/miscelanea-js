/** Objeto Math
 * si buscas window(Ventana Global) en la consola del navegador te va a mostrar una lista de objetos y sus métodos
 * window.Math.random(); - Esto nos da un número aleatorio
 */

let resultado;
// Math.PI - nos regresa el valor de PI
resultado = Math.PI;
console.log(resultado);

// Math.round()
resultadoRound = Math.round(3.6);
console.log(resultadoRound);

// Math.ceil - siempre redondea hacia arriba
resultadoCeil = Math.ceil(2.4);
console.log(resultadoCeil);

// Math.floor - siempre redondea hacia abajo
resultadoFloor = Math.floor(2.3);
console.log(resultadoFloor);

// Math.sqrt - nos regresa la raiz cuadrada
resultadoRaiz = Math.sqrt(144);
console.log(resultadoRaiz);

// Math.abs - nos convierte un número a positivo
resultadoPositivo = Math.abs(-200);
console.log(resultadoPositivo);

// Math.min - nos regresa el número menor de un listado
resultadoMenor = Math.min(2,3,4,5,5);
console.log(resultadoMenor);

// Math.max - nos regresa el número mayor de un listado
resultadoMayor = Math.max(2,34,22,455);
console.log(resultadoMayor);

// Math.random - nos genera un número aleatorio
resultadoAleatorio = Math.random();
console.log(resultadoAleatorio);

// Ejemplo
resultadoRandomMayorAUno = Math.floor(Math.random() * 30);
console.log(resultadoRandomMayorAUno)