'use strict'
//Utilisation d'un événement pour attendre que le strict
//soit chargé

//L'écouteur d'événement sera à placé sur l'objet window
//Window représente la page dans le navigateur

//la fonction addEventlistener permet de placé un écouteur
window.addEventListener("load", function(){
// De recupère l'élément input qui contiendra le firstName
let inputFirstName = document.querySelector("#firstName");
//la propriété value permet d'accédé à la valeur saisie
console.log(inputFirstName.value);

//permet de récupérer le bouton input grace au type(selecteur CSS)
let inputButton = document.querySelector('input[type="button"]');
// console.log(inputButton);

// Création d'une fonction qui créera un élément P avec la saisie dans l'input
function creatingElementP(firstName){
  //je récupère la zone dans lequel je veux ecrire ma valeur
  let section = document.querySelector("section");

  // Créer la balise qui prendra la valeur de l'input
  let baliseP = document.createElement("p");
  // Ajoute la valeurla balise
  baliseP.innerText = firstName;
  // Place la balise dans la zone section
  section.appendChild(baliseP);
}

//addEventListener
inputButton.addEventListener('click', function(event){

  console.log(inputFirstName.value);
  creatingElementP(inputFirstName.value);
})

inputFirstName.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
      /**
       * La fonction preventDefault() permet d'annuler le comportement
       * par défaut du navigateur.
       * Dans notre cas elle empechera le navigateur d'envoyer le formulaire
       */
        event.preventDefault();
        creatingElementP(inputFirstName.value);
    }

})
});
