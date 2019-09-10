//------------------------------------------A FINIR----------------------------------------

var prix;
var prime;
var age;
var sexe;

    prix = Number(prompt("Prix du véhicule ($)"));
    age = Number(prompt("Âge de la personne"));
    sexe = prompt("Sexe de la personne");

        if (sexe.toUpperCase() === "garcon") {
            if (age >= 16 && age <= 25) {
                prime = prix * 0.05;
                alert("Votre prime est de " + prime + " $");
            } else {
                prime = prix * 0.03;
                alert("Votre prime est de " + prime + " $");
            }
        }
        else if (sexe.toUpperCase() === "fille") {
            if (age >= 16 && age <= 25) {
                prime = prix * 0.03;
                alert("Votre prime est de " + prime + " $");
            }
            else {
                prime = prix * 0.02;
                alert("Votre prime est de " + prime + " $");
            }
        }