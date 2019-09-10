// Calculer la surface d'un rectangle dont la longueur et la largeur sont lues a l'écran.

// Déclaration des variables
var surface;
var largeur;
var longueur;

//Lecture au clavier
largeur = prompt("Entrez la largeur du rectangle svp :");
longueur = prompt("Entrez la longueur du rectangle svp :");

//On fait le calcul
surface = longueur * largeur;

//On affiche le résultat
alert("La surface est de : " + surface);
alert("Surface : " + surface + " m2");