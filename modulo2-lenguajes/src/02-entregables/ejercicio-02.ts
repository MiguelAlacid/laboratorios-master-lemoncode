console.log("************** DELIVERABLE 02 *********************");

// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const array1: string[] = ["uno", "dos", "tres"];
const array2: string[] = ["cuatro", "cinco", "seis"]

const concat = (a: string[], b: string[]) => [...a, ...b];

console.log(concat(array1, array2))

// Opcional
// Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). No utilices el método Array.prototype.concat.

const concatOpcional = (...a: string[][]) => a.flat();

console.log(concatOpcional(array1, array2, ["siete", "ocho", "nueve"]))



