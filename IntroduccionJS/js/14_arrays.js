/**
 * Arreglos o Arrays
 * Sirven para agrupar elementos del mismo tipo
 * ojetos se crea con llaves
 * y arrelgo con corchetes 
 * console.table
*/
const numeros = [10,20,30,40,50];
console.log(numeros);

const meses = ["enero", "febrero", "marzo", "abril"];
console.table(meses);

// Acceder a valores de un arreglo
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

// Conocer la extensión de un arreglo 

console.log(meses.length);

numeros.forEach(function(numeros){
    console.log(numeros);
})