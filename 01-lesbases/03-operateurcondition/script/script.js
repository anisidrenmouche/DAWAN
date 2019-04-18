'use strict'

// les operérateurs en javascript

//Addition
let add = 1;
add+= 10;
// Raccourci de : add = add +10;
console.log(add)

let sous = 20;
sous -= 10;
//Raccourci de : sous = sous -log
console.log(sous);

//Multiplication
let mult = 5;
mult *= 2;
// Raccourci de : mult = mult * 2;
console.log(mult);

//division
let div = 20;
div /= 2;
console.log(div);

// Modulo ou reste
// Retourne la reste d'une division
let modulo = 13;
let resultat = modulo % 5;
console.log(resultat);

//incrémentation
//Opérateur ++
let y = 10;
y++;
console.log(y);
// ++y renvera la valeur après incrémentation
// ++y renvera la valeur avant incrémentation

// Décrémentation
//Opérateur --

// Opérateur logique

// ET logique : &&
// OU logique : ||
// NON logique : !

// Operateur de Comparaison
// == : Permet de vérifier si le contenu et le type de la variable
// est identique
// === : Permet de vérifier si le contenu et le type de la variable
// sont identique
// < : Inférieur à
// > : Supérieur à
// <= : Inférieur ou égale
// >= : Supérieur ou égale
// !== :  Inegalité strict, n'est pas égal à. Vérifie le contenu et
// le type de donnée

// Les conditions

 let maVariable = 10;

 if (maVariable === 10)
{
    console.log("ma varible vaut :", maVariable);
}

 if (maVariable === 5)
{
    console.log("ma variable vaut :", maVariable);
}else {
  console.log("ma variable vaut :", maVariable);
}

if (maVariable === 5)
{
   console.log("ma variable vaut :", maVariable);
}else if (maVariable === 10) {
 console.log("ma variable vaut :", maVariable);
} else if(maVariable === 15) {
 console.log("ma variable vaut :", maVariable);
} else {
 console.log("ma variable vaut :", maVariable);
}


switch (maVariable) {
  case 5:
      console.log("maVariable vaut 5");
    break;
  case 10:
      console.log('maVariable vaut 10');
    break;
  case 20:
      console.log('maVariable vaut 20');
    break;

  default:
    console.log("je ne connais pas ce nombre");
    break;
}

// Structure itérative

console.log("Boucle while");
let resultatWhile = 0;
while (resultatWhile < 10){
    console.log("Tum sundar number ?");
    resultatWhile++
}

console.log("Boucle Do While");
let doWhile = 0;
do {
    console.log("méré pitié age laghi hé", doWhile);
    doWhile--;
} while (doWhile > -10)

console.log("Boucle for");
// ii représente notre compteur après le premier; cela sera la condition à
//respecter et ensuite l'incrémentation
for (let ii = 0; ii <= 30; ii++) {
  console.log("apka mu patani", ii);
}
