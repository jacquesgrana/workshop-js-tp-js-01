


function Personne(prenom, nom, pseudo) {
    this.prenom = prenom;
    this.nom = nom;
    this.pseudo = pseudo;
    //this.age;

    this.getNomComplet = () => this.prenom + " " + this.nom + " " + this.pseudo;
    

    this.getInitiales = () => this.prenom.charAt(0).toUpperCase() + this.nom.charAt(0).toUpperCase();
    
}

function afficherPersonne(personne) {
    console.log("prenom :", personne.prenom);
    console.log("nom :", personne.nom);
    console.log("pseudo :", personne.pseudo);
    console.log("nom complet :", personne.getNomComplet());
} 

let jules = new Personne("Jules", "LEMAIRE", "jules77");
afficherPersonne(jules);

let paul = new Personne("Paul", "LEMAIRE", "paul44");
afficherPersonne(paul);

jules.pseudo = "jules44";
console.log("jules modifié :", jules.getNomComplet());

Personne.prototype.age = "NON RENSEIGNE";

console.log("âge de jules avant affectation :", jules.age);



jules.age = 30;
console.log("âge de jules après affectation :", jules.age);

//Personne.prototype.getInitiales = () => p.prenom.charAt(0).toUpperCase() + p.nom.charAt(0).toUpperCase();

console.log("initiales de jules : " + jules.getInitiales());
/*
let robert = new Personne();

robert.prenom = "Robert";
robert.nom = "LEPREFET";
robert.pseudo = "robert77";
console.log("nom complet de robert :", robert.getNomComplet());
*/
let robert = {
    prenom: "Robert",
    nom: "LEPREFET",
    pseudo: "robert77",

    getNomComplet: () => {
        return robert.nom + " " + robert.prenom + " " + robert.pseudo;
    }
};

afficherPersonne(robert);


function Client(prenom, nom, pseudo, numeroClient) {
    Personne.call(this, prenom, nom, pseudo);
    this.numeroClient = numeroClient;

    this.getInfos = () => this.numeroClient + " " + this.prenom + " " + this.nom;
}


let steve = new Client("Steve", "LUCAS", "steve44", "A01");

console.log("client steve :", steve.getInfos());




