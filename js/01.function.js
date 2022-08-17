
//console.log("01 - Fonctions");

let nombre1 = 10;
let nombre2 = 20;

function additionner(nb1, nb2) {
    return nb1 + nb2;
}

let resultat1 = additionner(nombre1, nombre2);
console.log("resultat1 :", resultat1);

let somme = additionner;

let resultat2 = somme(nombre1, nombre2);
console.log("resultat2 :", resultat2);

let multiplication = function(nb1, nb2) {
    return nb1*nb2;
};

let soustraction = function(nb1, nb2) {
    return nb1 - nb2;
}

let resultat3 = multiplication(nombre1, nombre2);
console.log("resultat3 :", resultat3);

let afficherOperation = function(nomOperation, operation, nb1, nb2) {
    let toDisplay = nomOperation + "(" + nb1 + ", " + nb2 + ") = ";

    toDisplay += operation(nb1, nb2);
    //toDisplay += somme(nb1, nb2) + ">";

    console.log(toDisplay);
};

afficherOperation("addition", somme, nombre1, nombre2);
afficherOperation("multiplication", multiplication, nombre1, nombre2);
afficherOperation("soustraction", soustraction, 15, 5);