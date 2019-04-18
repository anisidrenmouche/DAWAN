'use strict';

// Faire une fonction qui retourne bonjour suivi du prénom
(function(param){
    console.log("bonjour : " + param);
})("Anis");

function returnHelloName(name){
  console.log("bonjour : " + name);
}

returnHelloName("Willy");
returnHelloName("Oliver");
returnHelloName("Audrey");
// créér un tableau qui contiendra des string et des numbers

let array = [5, 50, "30", "Willy", "Oliver", "Anis", 22.5];

// créé une fonction qui retournera un tableau, contenant 2 tableaux
// un avec seulement les string et une autre contenant seulement les numbers

function organizedArray(arrayList) {
  // initialisation des tableaux de résultat vide.
    let arrayString = [];
    let arrayNumber = [];
    let arrayResult = [];

    arrayList.forEach((element) => {
      // On va vérifier le type de donnée à chaque tour de boucle
        if (typeof(element) == "string"){
          // si c'est un string on le sauvegarde dans le tableau de string
          arrayString.push(element);
        } else {
          // si c'est un number il ira dan sle tableau des numbers
            arrayNumber.push(element);
          }
    });

    // arrayList.forEach(function(element) => {
    //   // On va vérifier le type de donnée à chaque tour de boucle
    //     if (typeof(element) == "string"){
    //       // si c'est un string on le sauvegarde dans le tableau de string
    //       arrayString.push(element);
    //     } else {
    //       // si c'est un number il ira dan sle tableau des numbers
    //         arrayNumber.push(element);
    //       }
    // });

    // on ajoute les 2 tableaux au tableau de résultat
    arrayResult.push(arrayString, arrayNumber);
// On retourne le resultat
    // return arrayResult;
  return [arrayString, arrayNumber];
  };

console.log(organizedArray(array));
