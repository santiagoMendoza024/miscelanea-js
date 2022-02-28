/**
 * Unir dos objetos con Spread Operatos
 */
const producto = {
    nombreProducto: "Monitor HD",
    precio : 300,
    disponible: true
}
const medidas = {
    peso: '1kg',
    medida: '1m'
}

// La recomendación es no modificar los datos originales
const nuevoProducto = {...producto, ...medidas};
// unimos los dos objetos, pero no se modifican los originales objetos y arreglos

console.log(producto);
console.log(nuevoProducto);