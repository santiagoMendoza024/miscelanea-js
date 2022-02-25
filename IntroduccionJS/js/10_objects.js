/**
 *  Objetos
 */

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;
// gracias a un objeto en ves de tener 3 variables puedes tener solo una
// Una sola variable que contenga los 3 al mismo tiempo

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 200,
    disponible: true
}
// propiedad o llave del objeto : valor
console.log(producto);
// Como accedemos a una propiedad del objeto - sintaxis de punto
console.log(producto.precio);
//Otra forma de acceder es con []
console.log(producto["precio"])