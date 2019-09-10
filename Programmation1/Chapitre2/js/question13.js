var a;
var b;

a = Number(prompt("Entrez le premier nombre"));
b = Number(prompt("Entrez le deuxième nombre"));

    if (a > b) {
        alert("Le plus grand est " + a + " et le plus petit est " + b);
    }
    else if (a < b) {
        alert("Le plus grand est " + b + " et le plus petit est " + a);
    }
    else if (a === b) {
        alert("Erreur!")
}