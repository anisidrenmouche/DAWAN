'use strict'
// Document représente la page html
// Nous partirons souvent de document pour récupéré nos éléments
// console.log(document);

//Les selecteurs CSS l'ensemble des selecteurs CSS fonctionne)

// Via le nom de la balise ex: p / h1 / div / main
//via l'Id ex: li
//via la classe Ex: .listel1
// QuerySelector permet de recuperer un élément html
// il fonctionne avec les sélécteurs CSS
let titreH1 = document.querySelector("h1");
console.log(titreH1);

let listeLi = document.querySelectorAll(".listeLi");
console.log(listeLi);

listeLi.forEach(function(li) {
  console.log(li);
});

//GetElementbyId recupère uniquement les ID et
//recupèrera un seul éléments
let titreH2 = document.getElementById("titre-liste");
console.log(titreH2);

//GetElementsByClassName permet de récupérer une classe dans une collection

let getElementsClass = document.getElementsByClassName("listeLi");
console.log(getElementsClass);

// permet de changer le contenu de la balise H1
titreH1.innertext = "le DOM (Document Object Mode1) Javascript";

// recupération de la balise UL

let baliseU1 = document.querySelector("ul");
//la propriété de children permet de récupérer les enfants des
// elements parcourut
console.log(baliseU1.children);
//la propriété parentElementpermet de récupérer le conteneur
// de l'élément parcourut
console.log(baliseU1.parentElement);

console.log(baliseU1.previousElementSibling);

// Création d'éléments
// createElement permet de créer un élément html
// le paramètre sera le nom de la balise
 let newLi = document.createElement("li");
 // innerText permet d'ajouter du contenu à la balise
 newLi.innerText = "Liste 5";
 // ClassName permet d'ajouter une classe à la balise
 newLi.className = "listeLi";
//AppendChild permet de placé la balise créer
// elle prend en paramètre la balise à créer
 baliseU1.appendChild(newLi);


// Ajout d'un contenu dans l'élément "section"
// Récupération de l'élément dans lequel on veut ajouté du contenu
let sectionContent = document.querySelector("#content");
// Création d'une variable qui servira pour le titre de la sectionContent
let titreSection = "Titre de la section";
// Création d'une variable qui contiendra le contenu à ajouté dans la section
// Utilisation des litteraux de template (accent grave)
let content = `
<h4>${titreSection}</h4>
<p>Blabla bla bla </p>
`;
// ajout du contenu de la variable content dans la section
// pource faire on passe par la propriété innerHTML
sectionContent.innerHTML = content;

// Modification du style d'un élément
// Toutes les propriétées CSS seront accessible depuis la proprétée "style"
// de
console.log(titreH1);
//On accède à la propriété CSS color

titreH1.style.color = "red";
// Permet de raccourcir l'ecriture de titreH.style
let styleTitreH1 = titreH1.style;
//Permet de modifier la taille du titre
let styleTitreH1.fontSize = "50px";
