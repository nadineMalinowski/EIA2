/// <reference path="Regentropfen.ts" />
/// <reference path="Schneeflocke.ts" />
/// <reference path="hintergrund.ts" />
//Aufgabe: Abschlussarbeit
//Name: Nadine Malinowski
//Datum: 20.07.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Abschlussarbeit;
(function (Abschlussarbeit) {
    let image;
    let count = Math.random() * 5; //variable Zahl bis 5
    let s = 0;
    let n = 0;
    window.addEventListener("load", init);
    function init(_event) {
        Abschlussarbeit.canvas = document.getElementsByTagName("canvas")[0];
        Abschlussarbeit.crc2 = Abschlussarbeit.canvas.getContext("2d");
        Abschlussarbeit.rain = [];
        Abschlussarbeit.snow = [];
        explainGame();
        let background = new Abschlussarbeit.Hintergrund(); //Hintergrund aufrufen
        Abschlussarbeit.canvas.addEventListener("click", click);
        Abschlussarbeit.canvas.addEventListener("touchstart", click);
        //erstellt Regen und Schnee
        for (let i = 0; i < count; i++) {
            Abschlussarbeit.rain[i] = new Abschlussarbeit.raindrop();
            let s = new Abschlussarbeit.snowflake();
            Abschlussarbeit.snow.push(s);
        }
        //Hintergrund speichern
        image = Abschlussarbeit.crc2.getImageData(0, 0, 1000, 700);
        window.setTimeout(animate, 20);
    }
    //l�scht den blauen Regentropfen bei Klick
    function click(event) {
        for (let i = 0; i < Abschlussarbeit.rain.length; i++) {
            let r = Abschlussarbeit.rain[i];
            //findet die Position des klicks herraus
            let findPositionx = event.clientX;
            let findPositiony = event.clientY;
            console.log(findPositionx);
            console.log(findPositiony);
            //rechnet die Differenz zwischen der Klickposition und der Position des Regentropfens aus
            let gapx = Math.abs(r.momentaryPosX - findPositionx);
            let gapy = Math.abs(r.momentaryPosY - findPositiony);
            if (gapx <= 20 && gapy <= 20) {
                Abschlussarbeit.rain.splice(i, 1);
                //entfernt Regentropfen aus dem Array, somit wird er gel�scht
                Abschlussarbeit.rain.reverse();
            }
        }
    }
    //Regen und Schnee werden animiert
    function animate() {
        //Hintergrund der gespeichert wurde wird aufgerufen
        Abschlussarbeit.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < Abschlussarbeit.rain.length; i++) {
            let r = Abschlussarbeit.rain[i];
            r.update();
        }
        for (let i = 0; i < Abschlussarbeit.snow.length; i++) {
            Abschlussarbeit.snow[i].update();
        }
        wonGame();
        bankingRaindropSnowflake();
        endGame();
        window.setTimeout(animate, 20);
    }
    //Schiebt neue Regentropfen und Schneeflocken nach
    function bankingRaindropSnowflake() {
        n++; //z�hlt wie oft die Animationsfunktion aufgerufen wurde
        if (n > 24 && n < 26) {
            let newRaindrop = new Abschlussarbeit.raindrop(); //erstellt es einen neuen Regentropfen
            Abschlussarbeit.rain.push(newRaindrop);
            let newSnowflake = new Abschlussarbeit.snowflake();
            Abschlussarbeit.snow.push(newSnowflake);
            n = 0; //f�ngt wieder bei 0 an zu z�hlen
        }
    }
    //Spieler gewinnt das Spiel bei 85 Klicks
    function wonGame() {
        if (s > 84) {
            alert("Glueckwunsch du hast die gewuenschte Anzahl an Regen entfernt und gewonnen!\nUm es noch mal zu spielen, druecke F5 oder aktualisiere das Programm.");
        }
    }
    //beendet das Spiel, indem der Regentropfen auf den Boden f�llt
    function endGame() {
        for (let i = 0; i < Abschlussarbeit.rain.length; i++) {
            let o = Abschlussarbeit.rain[i];
            if (o.momentaryPosY >= 620 && o.momentaryPosY <= 750) {
                gameLost();
            }
        }
    }
    //erkl�rt was zu tun ist
    function explainGame() {
        alert("Rette die Schneelandschaft, indem du die Regentropfen durch clicken zerstoerst. \nAchtung, die Regentropfen duerfen nicht den Boden beruehren!");
    }
    //Meldung das Spiel verlohren ist
    function gameLost() {
        alert("Oh nein, du hast leider die Schneelandschaft nicht retten koennen.\nUm es noch mal zu probieren, druecke F5 oder aktualisiere das Programm.");
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=main.js.map