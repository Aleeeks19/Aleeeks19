//Lire le nom et l'âge d'un individu, puis convertir son âge en jours (approximatif). Imprimer
//un message incluant son nom pour l'informer du nombre de jours vécus.

var nom;
var age;
var nbrjrs;

nom = prompt("Veuillez entrer votre nom : ");
age = prompt("Veuillez entrer votre âge : ");

nbrjrs = age * 365;

alert(nom + ", vous avez survécu approximativement " + nbrjrs + " jours.");

