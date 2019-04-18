'use strict'

// déclaration d'un tableau
let monArray = [ "Willy", "Olivier", "Anis", "Nawel", "Rajan",
"Julien", "Audrey", "Océnane"];

// Supprimer la premier valeur du tableau
let firstElement = monArray.shift();
console.log(monArray);
// supprimer la dernière valeur du tableau
let last = monArray.pop();
console.log(monArray);
//Ajouter à l'index 2, un nouveau tableau contenant 3 valeurs
// A faire avec une) methode
monArray.splice(2, 0, ['titi', 'toupou', 'tata']);
console.log(monArray);
// Ajouter une valeur à la fin du tableau
let newLength = monArray.push('Taoufik');
console.log(monArray);
// inversé l'ordre du tableau
let reversed = monArray.reverse()
console.log('reversed:', reversed);
// Trié le tableau par ordre alphabétique
monArray.sort();
console.log(monArray);
// Récupère la longueur du tableau
console.log(monArray.length)

//Bonus: Parcourirun tableau à l'aide d'une boucle
for (var i = 0; i < monArray.length; i++) {
    console.log(monArray[i]);
}
