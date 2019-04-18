'use strict'

// Objet Date
//Instanciation de l'objet Date
let date = new Date();
console.log(date);
// permet de retourner la date au format jj/mm/AAAA
console.log(date.toLocaleDateString());
//Permet de retourner l'année
console.log(date.getFullYear());
// Permet de retourner l'heure local
console.log(date.toLocaleTimeString());



//Objet String

let string = new String("Super valeur pour mon objet !!!")
console.log(string);
console.log(string[0]);
let stringSlice = string.slice(0, 5)
console.log(stringSlice);

//Objet array
let array = [];
let array2 = new Array();

array.forEach(function(element){
    console.log(element);
});

// Objet Math

let pi = Math.PI;
console.log(pi);

let rand = Math.round(Math.random()* 10);
console.log(rand);
