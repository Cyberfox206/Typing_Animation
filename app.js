const animation = document.getElementById("span_for_animation");

let tb_animation = ["design", "frontend", "backend", "testing"]
let conteur_mot = 0;
let conteur_lettre = 0;

setInterval(() => {
    if (conteur_lettre === tb_animation[conteur_mot].length) {
        animation.innerText = "";
        conteur_lettre = 0;
        conteur_mot++;
    }

    if (conteur_mot === tb_animation.length) {
        conteur_lettre = 0;
        conteur_mot = 0;
    }

    animation.innerText += tb_animation[conteur_mot][conteur_lettre];
    conteur_lettre++;

}, 1000);