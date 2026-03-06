console.log("************** DELIVERABLE 03 *********************");

// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

interface Usuario {
  nombre: string;
  edad: number;
  nota: number;
}

const usuario: Usuario = {
    nombre: "Miguel",
    edad: 25,
    nota: 9
}

function clone(usuario: Usuario): Usuario { return { ...usuario } }

const usuarioClonado = clone(usuario);

console.log(usuario);
console.log(usuarioClonado);


// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, 
// y en caso de propiedades con el mismo nombre, source sobreescribe a target.

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source: any, target: any) { return { ...target, ...source} }

console.log(merge(a, b))
