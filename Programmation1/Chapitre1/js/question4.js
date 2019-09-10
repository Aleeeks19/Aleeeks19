/*Calculer le salaire brut d'un employé. Il est payé à l'heure et les données concernant le taux horaire et le nombre
d'heures travaillées sont fournies en entrée. */

var salaire;
var hrs;
var tauxhoraire;

tauxhoraire = prompt("Entrez le taux horaire de l'employé");
hrs = prompt("Entrez le nombre d'heures travaillées de l'employé");

salaire = tauxhoraire * hrs;

alert("La réponse est de " + salaire + "$");


