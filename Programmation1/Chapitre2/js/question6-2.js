var note;

note = Number(prompt("Veuillez entre la note /100"));

if (note < 60) {
    alert("Vous avez E");
}
else if (note < 70 && note >= 60) {
    alert("Vous avez D");
}
else if (note < 80 && note >= 70) {
    alert("Vous avez C");
}
else if (note < 90 && note >= 80) {
    alert("Vous avez B");
}
else {
    alert("Vous avez A");
}