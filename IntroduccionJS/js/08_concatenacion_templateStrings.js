const nombre = "Santiago";
const email = "erickerick.com"

console.log(nombre);
console.log(email);

// Concatenación

// El simbolo de (+) en números los suma, pero con strings los concatena
console.log(nombre + email);
console.log(nombre + " " + email);
console.log("Nombre Cliente: " + nombre + " Email: " + email); // Forma antigua de hacelo
// ¿Por qué es importante concatenar? R= por que si usas una base de datos, los datos van a venir por separado pero en pantalla tienes que mostrarlos juntos

// Template Strings - Strings Literals ALT + 96 para poner comillas invertidas
console.log(`Nombre Cliente: ${nombre} Email: ${email}`);
