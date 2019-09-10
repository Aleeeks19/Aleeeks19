var lettre;

lettre = prompt("Entrez une lettre de l'alphabet");

    if (lettre.toUpperCase() === "a" || "e" || "i" || "o" || "u" || "y" ) {
        alert("Voyelle")
    }
    else if (lettre === Number){
        alert("Erreur")
    }
    else {
        alert("Consonne")
    }
