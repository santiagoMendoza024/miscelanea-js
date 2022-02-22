/** Orden de las operaciones
 * 
 */

let resultado;

resultado = 20 + 30 * 5;//En este caso la multiplicación tiene la prioridad
resultado = (20 + 30) * 5;//En este caso se resuleve primero el parentecis
resultado = (100 + 200 + 300) * .2;// calculamos el 20% de 3 articulos, primero se suma el total y despues se saca el porcentaje

console.log(resultado);