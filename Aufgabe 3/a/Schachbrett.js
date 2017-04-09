//Aufgabe: 3a-Sissa Summe
//Name: Nadine Malinowski
//Datum: 09.04.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
document.addEventListener('DOMContentLoaded', function () {
    let rice = 1;
    let color = true;
    let ergebnis = 0;
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
    document.getElementsByTagName("div")[0];
    let divList = document.getElementsByTagName("div");
    for (let i = 0; i < 8; i++) {
        divList[i].addEventListener("click", differentColor);
        function differentColor() {
            if (divList[i].style.backgroundColor != "red") {
                divList[i].style.backgroundColor = "red";
                ergebnis = ergebnis + Number(divList[i].textContent);
            }
            else {
                if (i % 2 == 0) {
                    divList[i].style.backgroundColor = "black";
                }
                else {
                    divList[i].style.backgroundColor = "white";
                }
                ergebnis = ergebnis - Number(divList[i].textContent);
            }
            document.getElementById("tooltip").textContent = "Dezimalzahl: " + ergebnis.toString() + " Hexadezimal: " + ergebnis.toString(16);
            ;
        }
    }
});
document.addEventListener("mousemove", function (event) {
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("tooltip").style.position = "absolute";
    document.getElementById("tooltip").style.top = y + 15 + "px";
    document.getElementById("tooltip").style.left = x + 15 + "px";
    document.getElementById("tooltip").style.border = "3px solid darkblue";
    document.getElementById("tooltip").style.backgroundColor = "blue";
    document.getElementById("tooltip").style.padding = "10px";
});
//# sourceMappingURL=Schachbrett.js.map