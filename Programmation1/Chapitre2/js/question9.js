var nom;
var pw;

nom = prompt("Nom de l'utilisateur");
pw = prompt("Mot de passe");

    if (nom === "admin" && pw === "12345") {
        alert("Bonjour, " + nom + ".");
    }
    else {
        alert("Votre nom d'utilisateur ou votre mot de passe est incorrect.");
    }