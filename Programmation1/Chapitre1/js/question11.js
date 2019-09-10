var prixbase;
var frais;
var profit;
var taxes1;
var taxes2;
var prixtotal;

prixbase = Number(prompt("Entrez le prix de base de la voiture"));
frais = Number(prixbase * 0.02);
profit = Number(prixbase * 0.12);
taxes1 = Number(prixbase * 5/100);
taxes2 = Number(prixbase * 9.975/100);
prixtotal = Number(prixbase + frais + profit + taxes1 + taxes2);

document.write("Les frais sont de " + frais + "$");
document.write("<br/>");
document.write("Le montant de commission est de " + profit + "$");
document.write("<br/>");
document.write("La première taxe est de " + taxes1 + "$");
document.write("<br/>");
document.write("La deuxième taxe est de " + taxes2 + "$");
document.write("<br/>");
document.write("Le prix total de la voiture est de " + prixtotal + "$");