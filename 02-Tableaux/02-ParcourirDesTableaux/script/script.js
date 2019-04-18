'use strict'

let listePrenom = ["François", "homer", "Pierre", "Rajan", "Titeuf"];

listePrenom[1];
listePrenom[2];

console.log("Boucle for of");
for(let prenom of listePrenom){
  console.log(prenom);
}

 console.log("Boucle forEach");

listePrenom.forEach(function(element){
    console.log(element);
});
