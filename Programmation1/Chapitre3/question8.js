var sommePositif = 0;
var sommeNegatif = 0;

var chiffreUsager = Number(prompt("Entrez un chiffre"));

while (chiffreUsager != 0) {

    if (chiffreUsager > 0) {
        sommePositif += chiffreUsager;
    }
    else {
        sommeNegatif += chiffreUsager;
    }
    var chiffreUsager = Number(prompt("Entrez un chiffre"));
}
alert("Somme des positifs = " + sommePositif);
alert("Somme des negatifs = " + sommeNegatif);