var note;

note = Number(prompt("Veuillez entre la note /100"));

        if (note >= 90) {
            alert("Vous avez A");
        }
        else if (note < 90 && note >= 80) {
            alert("Vous avez B");
        }
        else if (note < 80 && note >= 70) {
            alert("Vous avez C");
        }
        else if (note < 70 && note >= 60) {
            alert("Vous avez D");
        }
        else {
            alert("Vous avez E");
        }