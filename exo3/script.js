"use strict";

// Déclaration d'une constante et tableau de tableaux : slides 52 et 39.
const Students = [
  [1000, "JOHN", "DOE", 14, 5],
  [2000, "BOB", "CARLTON", 7, 1],
  [3000, "RAYANE", "SMITH", 13, 3]
];

// Déclaration de fonction : slide 46.
function A() {
  // Parcours du tableau : slides 39 et 45.
  for (const student of Students) {
    // Appel d'une fonction avec un paramètre : slide 46.
    const admitted = B(student[3]);
    // Condition et opérateur de comparaison : slides 42 et 43.
    // Affichage dans la console : slide 34.
    console.log(`${student[0]}: ${admitted ? "ADMIS" : "AJOURNÉ"}`);
  }
}

// Fonction avec un paramètre et une valeur de retour : slide 46.
function B(note) {
  // Comparaison produisant un booléen : slide 42.
  return note >= 10;
}
