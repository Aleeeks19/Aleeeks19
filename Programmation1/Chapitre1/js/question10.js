var date;
var a1;
var a2;
var a3;
var total;
var taxes;

date = (prompt("Veuillez entrer la date de la facture."));
a1 = Number(prompt("Entrez le prix du premier article acheté."));
a2 = Number(prompt("Entrez le prix du deuxième article acheté."));
a3 = Number(prompt("Entrez le prix du troisième article acheté."));

taxes = (a1 + a2 + a3) * (14.975/100);
total = a1 + a2 + a3 + taxes;

document.write("Les taxes de la facture sont de " + taxes + "$");
document.write("<br/>");
document.write("Donc, la facture en date du " + date + " a coûté " + total + "$ au total.");