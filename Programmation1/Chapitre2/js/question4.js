var nombre1;
var nombre2;
var reponse;

nombre1 = Number(prompt("Entrez le premier nombre"));
nombre2 = Number(prompt("Entrez le deuxième nombre"));
reponse = nombre1 / nombre2;

    if (nombre2 !== 0) {
        alert("La réponse de la division est de " + reponse);
    }
    else {
        alert("Division impossible");
    }