'use strict'

// Concatenation
let description = "Ma super description";

// La Concatenation ce fait avec le symbole +
let concatenation = "chaine de caractères" + description;

console.log(concatenation);

// Le symbole des littereaux est l'accent grave altGr + 7 (``)

let litteraux = `Voici une description : ${description}`;
console.log(litteraux);

//Affectation par décomposition
let a, b, rest;
[a, b] = [2, 10];
console.log(a);
console.log(b);
// ... est le symbole de l'affectation par décomposition
[a, b, ...rest] = [2, 10, "test", true, 42, "toto", 15, 60, "titi"];
console.log("variable a : ", a);
console.log("variable b : ", b);
console.log("variable rest : ", rest);
