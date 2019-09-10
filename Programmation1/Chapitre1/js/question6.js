var nom;
var prixdetail;
var prixgros;
var profit;

nom = prompt("Entrez le nom de l'article");
prixdetail = prompt("Entrez le prix de détail de l'article");

prixgros = prixdetail * 66/100;
profit = prixdetail - prixgros;

alert("Le prix de gros de l'article est de " + prixgros + "$");
alert("Le profit attendu est de " + profit + "$");