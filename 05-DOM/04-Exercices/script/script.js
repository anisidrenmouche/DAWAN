'use strict'

window.addEventListener("load", function(){
  //Récupération des différentes div
    let divOne = document.querySelector("#one");
    let divTwo = document.querySelector("#two");
    let divThree = document.querySelector("#three");

/**
 * Sil'on à plusieurs éléments imbriqué avec le même type
 * d'événement (ici click) lorsque l'on cliquera sur le dernier
 * élément, Les événements du dessus s'activerons aussi
 *
 *  pour palié à ce problème on utilise la fonction
 *  stopPropagation()
 */
    divOne.addEventListener("click", function(event){
        // La fonction stopPropagation permet de stoppé la propagation
        //des événements
      event.stopPropagation();
      //Définition d'une couleur de fond
        divOne.style.background = "red";
    })

    divTwo.addEventListener("click", function(event){
        event.stopPropagation();
        divTwo.style.background = "yellow";
    })
    divThree.addEventListener("click", function(event){
        event.stopPropagation();
        divThree.style.background = "green";
    })

})
