//CAROUSELS NON FAITS

$(document).bind('keypress', function(event) {
if (event.keyCode === 13) {                                 //Enter
        $('#boutonGoID').trigger('click');
    }
});

$('#img10').hide();  //Cacher les deux " && "
$('#img11').hide();  //quand on arrive sur la page.

$('#boutonGoID').click(function(){                      // Bouton go
    let mot = $('#mot').val();
    let longueurMot = mot.length;

        if (longueurMot >= 3 && longueurMot <= 12) {            //Si le mot est entre 3 et 12 caractères.

            for (let i = 0; i < mot.length; i++) {
                let imageColonnes = $('#img' + i);
                let col;
                switch(longueurMot) {
                    case 3:
                        col = "4";
                        break;
                    case 4:
                        col = "3";
                        break;
                    case 5: case 6:
                        col = "2";
                        break;
                    default:
                        col = "1"
                }

                imageColonnes.attr("class","col-" + col);
                $('#img' + i + '> img').attr("src", "img/Letters/" + mot[i].toUpperCase() + "/" + mot[i].toUpperCase() + "1.jpg");

                if (mot[i] === "*"){                                     // Caractère spécial
                    $('#img' + i +' > img').attr("src", "img/Letters/CS/CS1.jpg");
                }
                    imageColonnes.show();
            }
            for (let i = mot.length; i <= 12; i++) {
                let imageColonnes = $('#img' + i);
                imageColonnes.hide();
                $('#img' + i + '> img').attr("src","");
                    imageColonnes.attr("class", "col");
            }
        }
        else {                                                      // Message d'erreur
            alert("Votre mot doit être entre 3 et 12 caractères.");
        }
});
///////////////////////////////////////CHANGEMENT DE BACKGROUND/////////////////////////////////////////////////////////
$('#noir').click(function(){
   $('.bgImage').css('background-image','url(img/background/noir.jpg)');
});
$('#blanc').click(function(){
    $('.bgImage').css('background-image','url(img/background/blanc.jpg)');
});
$('#gris').click(function(){
    $('.bgImage').css('background-image','url(img/background/gris.jpg)');
});
$('#bleu').click(function(){
    $('.bgImage').css('background-image','url(img/background/bleu.jpg)');
});
$('#bleuFonce').click(function(){
    $('.bgImage').css('background-image','url(img/background/bleuFonce.jpg)');
});
$('#rouge').click(function(){
    $('.bgImage').css('background-image','url(img/background/rouge.jpg)');
});
$('#rose').click(function(){
    $('.bgImage').css('background-image','url(img/background/rose.jpg)');
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////