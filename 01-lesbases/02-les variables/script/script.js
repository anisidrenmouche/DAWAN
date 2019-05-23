// permet de vérifié si les variables sont déclaré
// grace à un mot clé et de levé d'autres erreurs
'use strict'
// Type de donnée
// type de valeurs stocké dans une variable
//
// Chaine de caratères (string)
// Nombre (number ou integer)
// boolean(0 ou 1 // true or false)
// null(valeur null)
// Undefined la varible existe
// Tableaux
// objets
//
// Déclaration d'une variable
// Utilisation de 3 mots clés
var nom = 'Le gallo';
let prenom = "François";
const age = 33;

console.log(nom);
console.log(prenom);
console.log(age);

nom = "Pair";
prenom = "jean";
// il est impossible de redefinir la valeur de la variable age
// car elle est déclaré avec le mot clé const
// age = 52
console.log(nom);
console.log(prenom);

// Changer le type de donné à l'interieur d'une variable
nom = 150;
console.log(age);

// Possibilité d'echappé un caractère grace à l'antislash
var description = 'je m\'appelle françois';

var u = null; //notre variable vaut null
var uu = undefined; // Ici elle n'a pas de valeur
var nn = NaN; // Not a number(n'est pas un nombre)

//typeoF nous permet de voir le type de données présent dans la variable
console.log(typeof(u));
console.log(typeof(uu));
console.log(typeof(nn));
console.log(typeof(prenom));

// Déclaration d'une instruction des blocs , ce fait avec les accolades
{}

// La porté des variables
/**
 * Lorsque l'on déclare une variable avec le mot clé var
 *
 */
var x = 1; {
  console.log("Variable déclaré avec var :", x);
  x = 2;
}
console.log("Variable déclaré avec var :", x);

{
  var toto = 42;
}
console.log(toto);



// Avec le mot clé let la variable sera accessible uniquement dans le bloc
// ou elle est déclaré.
// Si elle est déclaré à la racine du script
 // elle sera accessible que dans le script
let w = 10;
{
  console.log("Variable déclaré avec let :", w);
}
// variable accessible uniquement dans le bloc
//quand elle est déclaré dans le bloc
{
  let w = 20;
}
console.log("Variable déclaré en let à l'intérieur d'un bloc :", w);

/**
 * Porté identique au let
 * la varibale sera accessible dans le bloc dans lequel elle est definit
 */
const c = 50;
{
  const c = 10;
  console.log("Variable définit avec const:", c);
}
console.log("Variable définit avec const:", c);
