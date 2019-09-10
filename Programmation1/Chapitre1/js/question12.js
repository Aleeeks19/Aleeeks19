var notefinale;
var exammisession;
var examfinal;
var labo;

exammisession = Number(prompt("Entrez la note de l'examen de mi-session /30"));
examfinal = Number(prompt("Entrez la note de l'examen final /50"));
labo = Number(prompt("Entrez la note de labo /20"));

notefinale = exammisession + examfinal + labo;

document.write("La note finale est de " + notefinale + "%");

