var revenu;
var impot;

revenu = Number(prompt("Entrez le revenu annuel"));

    if (revenu > 0 && revenu <= 7000) {
        impot = revenu * 0.16;
        alert("L'impôt provincial à charger est de " + impot + " $");
    }
    else if (revenu > 7000 && revenu <= 14000) {
        impot = (revenu - 1120) * 0.195;
        alert("L'impôt provincial à charger est de " + impot + " $")
    }
    else if (revenu > 14000 && revenu <= 23000) {
        impot = (revenu - 2485) * 0.215;
        alert("L'impôt provincial à charger est de " + impot + " $")
    }
    else if (revenu > 23000 && revenu <= 50000) {
        impot = (revenu - 4420) * 0.245;
        alert("L'impôt provincial à charger est de " + impot + " $")
    }
    else if (revenu > 50000) {
        impot = (revenu - 11035) * 0.26;
        alert("L'impôt provincial à charger est de " + impot + " $")
    }
    else {
        alert("Erreur")
    }
