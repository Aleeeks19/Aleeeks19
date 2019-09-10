
//---------------------------------A FINIR------------------------------------------------

var th;
var hrs;
var salaire;
var ot;

th = Number(prompt("Entrez le taux horaire"));
hrs = Number(prompt("Entrez le nombre d'heures travaillées"));
salaire = (th * hrs);
ot = salaire + th * 2;

    if (hrs <= 40) {
        document.write("Votre salaire sera de " + salaire + "$");
    }
    else {

        document.write("Votre salaire sera de " + ot + "$");
    }
