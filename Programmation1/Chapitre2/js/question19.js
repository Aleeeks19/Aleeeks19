var mv;
var me;

mv = Number(prompt("Entrez le montant de vente"));
me = mv * 0.12;

    if (mv >= 500) {
        alert("Votre montant d'escompte est de " + me + " $")
    }
    else {
        alert("Le taux d'escompte ne peut être calculé avec un montant de vente inférieur à 500$")
    }