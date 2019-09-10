var nom;
var labo;
var misession;
var finale;
var labo2;
var misession2;
var finale2;
var resultat;

nom = prompt("Entrez votre nom");
labo = Number(prompt("Entrez votre note de labo /100"));
misession = Number(prompt("Entrez votre note de l'examen de mi-session /100"));
finale = Number(prompt("Entrez votre note de l'examen finale /100"));

labo2 = labo * 0.2;
misession2 = misession * 0.3;
finale2 = finale * 0.5;

resultat = labo2 + misession2 + finale2;

document.write(nom + ", votre note de labo est de " + labo2 + "/20.");
document.write("<br/>");
document.write("Votre note de l'examen de mi-session est de " + misession2 + "/30.");
document.write("<br/>");
document.write("Votre note de l'examen final est de " + finale2 + "/50.");
document.write("<br/>");
document.write("Donc, votre résultat final est de " + resultat + " %.");
