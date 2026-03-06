console.log("************** DELIVERABLE 01 *********************");

// implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.


const array: string[] = ["uno", "dos", "tres"]

// const head = (a: string[]) => {
//     const [primerElemento] = a
//     return primerElemento
// };

const head = ([primerElemento]: string[]) => primerElemento;

console.log(head(array))


// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

// const tail = (a: string[]) => {

//     const [, ...ultimo] = a
//     return ultimo

// };

const tail = ([, ...rest]: string[]) => rest;

console.log(tail(array))


// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

// const init = (a: string[]) => {
//     return a.slice(0, -1)
    
// };

const init = (a: string[]) =>  a.slice(0, -1);


console.log(init(array))


//Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (a: string[]) => a.at(-1);


console.log(last(array))



