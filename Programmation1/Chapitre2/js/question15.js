var longueur;
var largeur;
var surface;
var perimetre;

longueur = Number(prompt("Longueur du rectangle :"));
largeur = Number(prompt("Largeur du rectangle :"));
surface = longueur * largeur;
perimetre = longueur * 2 + largeur * 2;

    if (perimetre >= 100) {
        alert("La surface du rectangle est de " + surface);
    }
    else {
        alert("Impossible d'afficher la surface, car le périmètre n'est pas d'au moins 100");
    }


