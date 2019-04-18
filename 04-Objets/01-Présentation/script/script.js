'use strict'

// Création d'un objet
//Pour définir un objet on utilise la paire d'accolade
let monObjet = {
  //name est une propriété et "Le gallo" sa valeur
  name: "Le gallo",
  firstName: "Anis",
  city: "Paris",
}
console.log(monObjet);
// Pour appeler une propriété d'un objet on utilise le (.)
// suivi du nom de la propriété
// Syntaxe : nomDeLobjet.nomDeLaPropriétée
console.log(monObjet.firstName);

// Instanciation de l'objet Object
let personne = new Object();
console.log(personne);

personne.prenom = "Anis";
personne.nom = "Idrenmouche";
personne.ville = "Paris";
console.log(personne);

//property Shorthand
// On déclare les propriétées et leur valeurs en premier
let marque = "Ford";
let modele = "Mustang";
let annee = 1962;

let voiture = {
  marque,
  modele,
  annee,
}

console.log(voiture);


// Définir un objet avec un constructeur

function Person(name, firstname, city){
  //Définition des propriété de l'Objet
  this.name = name;
  this.firstName = firstname;
  this.city = city;

  this.showCity = function(){
    console.log("j'habite à : " + this.city);
  }
};

let Anis = new Person("Idrenmouche", "Anis", "Paris");
let Taoufik = new Person ("Taourirt", "Taoufik", "Paris");

console.log(Anis);
console.log(Taoufik)

//impossible d'appeler la methode showCity de person
// sans avoir instancier Person
//pour appeler une mehode d'un objet, on part de l'objet
//suivi d'un point (.) et du nom de la methode (avec les parenthèses)
//Syntaxe : variableQui ContientLobjet.nomDeLaMthode()
Anis.showCity();
Taoufik.showCity();

//Javascript nous permet d'ajouté des méthodes à la volé(dynamiquement)
Person.prototype.fullName = function(){
    console.log("Je m'appelle : " + this.firstName + " " + this.name);

};

Anis.fullName();
Taoufik.fullName();
/**
 * Le concept d'héritage n'exista pas, pour donnée à un objet des methodes
 *  et des propriété à un autre objet on passe par la methode assign()
 * L'objet monObjet2 va récupérer les mthodes et propriété de l'Object
 * monObjet
 */
let monObjet2 = Object.assign(
    {
        year: 33,
        profession: "Dev",

    },
    monObjet
);

console.log(monObjet2);
