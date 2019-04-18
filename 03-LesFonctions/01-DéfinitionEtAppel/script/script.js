'use strict';
// Création de plusieurs variables d'un coup
let [a, b, c, d, e, f, g] = [10, 15, 20, 25, 30, 35, 40];
console.log(a, b, c, d, e, f, g);

console.log(a + b);
console.log(c + d);
console.log(e + f);
console.log(f + g);

//definir une  fonction

// fonction nommée
// mot clé function
// Nom de la fonction
// paramètre(optionnel)
function calcAddition(number1, number2){
    let resultat = number1 + number2;
      return resultat;
}

// Appel d'une fonction
// l'appel se fait avec  le nom de la fonction suivi
// d'une paire de parenthèses
console.log(calcAddition(a, b));
console.log(calcAddition(c, d));
console.log(calcAddition(e, f));
console.log(calcAddition(f, g));

// fonction anonyme
let calSoustraction = function(number1, number2){
    return number1 - number2;
}

console.log(calSoustraction(a, b));
console.log(calSoustraction(c, d));

// fonction immediatement invoqué

// La fonction sera déclaré et appelé aussitôt

(function(){
    console.log("je suis une fonction immédiatment invoqué");
})();

(function(param){
    console.log("bonjour : " + param);
})("François");

// fonction flêché
// Syntaxe plus courte, garde le contexte dans lequel elle est appeler
// Syntaxe : ()=>{}

let array = [5, 50, 30, 40];
array.forEach((element)=> {
  console.log(element);
});

// Les closures

function closure() {
    let prenom = "François";

    function affichePrenom(){
        console.log(prenom);
    }

    return affichePrenom();
}

closure();

// la fonction  afficherPrenom ne sera pas accessible
// en dehors de la fonction closure
// affichePrenom();

// paramètres par default

function paramDefault(a, b, c = 10, d = 5){
  console.log(a, b, c, d);
  return a + b + c + d;
}

console.log(paramDefault(5, 5));
console.log(paramDefault(5,5,undefined,30));
