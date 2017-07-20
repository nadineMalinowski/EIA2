//Aufgabe: 2a-Dynamic HTML
//Name: Nadine Malinowski
//Datum: 01.04.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
document.addEventListener('DOMContentLoaded', function () {
    let rice = 1;
    let color = true;
    for (let line = 0; line < 8; line++) {
        for (let field = 0; field < 8; field++) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            if (color == true) {
                div.style.backgroundColor = "black";
                div.style.color = "white";
                color = false;
            }
            else {
                div.style.backgroundColor = "white";
                div.style.color = "black";
                color = true;
            }
            div.innerText = "" + rice;
            rice = rice * 2;
        }
        if (color == true) {
            color = false;
        }
        else {
            color = true;
        }
    }
});
//# sourceMappingURL=Schachbrett.js.map