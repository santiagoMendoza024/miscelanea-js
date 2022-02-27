"use strict"; // nos ayuda a ejecutar el codigo js de forma estricta siguiendo buenas practicas

/**
 * Una constante no se puede modificar, pero un objeto si
 */

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

Object.freeze(producto);    //Con esto ya no se puede modificar el objeto, no te permite, agregar, eliminar o modificar
Object.seal(producto);    //Con esto ya no se puede modificar el objeto, este si te permite modificar

//producto.imagen= "img";

console.log(producto);

console.log(Object.isFrozen(producto));
