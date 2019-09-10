var achats;
var rabais;

achats = Number(prompt("Montant total des achats"));
rabais = achats * 0.15;

    if (achats >= 200 ){
    alert("Vous avez le droit à une réduction de 15%," +
        " donc votre montal total revient à " + (achats - rabais) + "$");
}
    else {
    alert("Vous n'avez pas de réduction, car votre montant ne dépasse pas 200$." +
        " Donc, votre montant total est de " + achats + "$");
}