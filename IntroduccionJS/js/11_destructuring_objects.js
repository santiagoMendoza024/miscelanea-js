// Destructuring de Objetos
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// Pra asignarle el valor de cada propiedad del objeto a una variable se hace de la siguiente manera
// Forma anterior
const preciProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;

//console.log(preciProducto);
//console.log(nombreProducto);

// Destructuring = Sacar de una estructura, extrae el valor y crea la variable en un mismo paso, para que funcione tiene que tener el mismo nombre la propiedad que la variable
const {precio, nombreProducto} = producto;
//const {nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);