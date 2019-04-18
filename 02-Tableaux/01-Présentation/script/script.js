'use strict'

// déclaration d'un tableau
let listeNombre = new Array(1 ,2 ,3 ,4 ,5);
console.log(listeNombre);
let listePrenom = ["François", "homer", "Pierre", "Rajan"];
console.log(listePrenom);

// affichert le prenom homer
//A l'aide d'une paire de crochet à la fin de la variable, on pourra indiqué
// l'indice de la valeur souhaité
console.log(listePrenom[1]);

let arrayMultiDimension = [1, 2, 3, ["Moha", "Azziz", "abdelkader"]];
console.log(arrayMultiDimension);
// on veut afficher la valeur "abdelkader"

console.log(arrayMultiDimension[3][2]);

// Ajouter des données  au tableau
// On doit récupéré l'index de la position où on veut ajouté les données
listePrenom[4] = "anis";
console.log(listePrenom);
