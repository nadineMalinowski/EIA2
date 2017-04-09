//Aufgabe: 3b-MauMau
//Name: Nadine Malinowski
//Datum: 09.04.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. 
//Variablen deklarieren
let Nachziehstapel;
let Handstapel;
let Ablagestapel;
let Spielkarten;
document.addEventListener("DOMContentLoaded", function () {
    Spielkarten = ["Herz 7", "Piek 7", "Kreuz 7", "Karo 7", "Herz 8", "Kreuz 8", "Karo 8", "Piek 8",
        "Herz 9", "Piek 9", "Kreuz 9", "Karo 9", "Herz 10", "Piek 10", "Kreuz 10", "Herz Bube",
        "Piek Bube", "Kreuz Bube ", "Karo Bube", "Piek Dame", "Herz Dame", "Kreuz Dame",
        "Karo Dame", "Piek Koenig", "Kreuz Koenig", "Karo Koenig", "Herz Koenig",
        "Piek Ass", "Kreuz Ass", "Karo Ass", "Herz Ass"];
    Nachziehstapel = document.getElementById("Nachziehstapel");
    Nachziehstapel.addEventListener("click", KarteAufnehmen); //Klick auf den Nachziehstapel (Funktion KarteAufnehmen, Zeile 30, wird aktiviert)
    Handstapel = document.getElementsByClassName("KarteAufHand");
    for (let z = 0; z < Handstapel.length; z++) {
        Handstapel[z].addEventListener("click", KartenAblegen);
    }
    Ablagestapel = document.getElementById("KarteAblegen");
});
function KarteAufnehmen() {
    let Karten = Spielkarten.splice(Math.round(Math.random() * (Spielkarten.length - 1)), 1)[0]; //splice = Schneidet die Karte herraus
    let Handkarte = leereKarten(); //definiert leere Handkarte
    if (Handkarte != null) {
        Handkarte.innerText = Karten; //...bekommt sie einen "Text" aus dem array
    }
    if (Spielkarten.length === 0) {
        Nachziehstapel.style.display = "none"; //...werden sie ausgeblendet.
    }
}
function leereKarten() {
    for (let i = 0; i < Handstapel.length; i++) {
        if (Handstapel[i].textContent === "") {
            return Handstapel[i];
        }
    }
    return null;
}
function KartenAblegen(_event) {
    let element = _event.target;
    Ablagestapel.textContent = element.textContent;
    element.textContent = ""; //der Inhalt der Handkarte wird gel�scht
}
//# sourceMappingURL=maumau.js.map