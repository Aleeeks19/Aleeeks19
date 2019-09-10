var age;

age = Number(prompt("Entrez l'âge de la personne"));

    if (age >= 18) {
        alert("Adulte");
    }
    else if (age >= 12 && age <= 17) {
        alert("Adolescent");
    }
    else if (age < 12) {
        alert("Enfant")
    }

