"use strict";

// Déclaration de constantes : slide 52. Tableaux : slide 39.
const students = ["Etudiant1", "Etudiant2", "Etudiant3"];
// Déclaration d'un objet : slide 40.
const student = { nom: "John", prenom: "DOE", age: 30 };
// Tableau : slide 39.
const studentNames = ["nom1-prenom1-21", "nom2-prenom2-22", "nom3-prenom3-23"];

// Déclaration de fonction : slide 46.
function f1() {
  // Parcours d'un tableau avec une boucle : slides 39 et 45.
  for (const name of students) {
    // Affichage dans la console : slide 34.
    console.log(name);
  }
}

// Déclaration de fonction : slide 46.
function f2() {
  // Affichage de l'objet dans la console : slides 34 et 40.
  console.log(student);
}

// Déclaration de fonction : slide 46.
function f3() {
  // Parcours d'un tableau avec une boucle : slides 39 et 45.
  for (const name of studentNames) {
    // Affichage dans la console : slide 34.
    console.log(name);
  }
}
