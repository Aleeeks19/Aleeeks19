//-----------------------------A FINIR--------------------------------------

var a;
var b;
var c;

a = Number(prompt("Premier nombre"));
b = Number(prompt("Deuxième nombre"));
c = Number(prompt("Troisième nombre"));

    if (a > b > c) {
        alert("Le plus grand est " + a + " et le plus petit est " + c);
    }
    else if (a > c > b) {
        alert("Le plus grand est " + a + " et le plus petit est " + b);
    }
    else if (b > a > c) {
        alert("Le plus grand est " + b + " et le plus petit est " + c);
    }
    else if (b > c > a) {
        alert("Le plus grand est " + b + " et le plus petit est " + a);
    }
    else if (c > a > b) {
        alert("Le plus grand est " + c + " et le plus petit est " + b);
    }
    else if (c > b > a) {
        alert("Le plus grand est " + c + " et le plus petit est " + a);
    }
    else {
        alert("Erreur");
    }