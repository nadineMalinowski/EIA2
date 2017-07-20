/// <reference path="raindrop.ts" />
/// <reference path="snowflake.ts" />
/// <reference path="background.ts" />
//Aufgabe: Abschlussarbeit
//Name: Nadine Malinowski
//Datum: 20.07.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Abschlussarbeit;
(function (Abschlussarbeit) {
    let image;
    let count = Math.random() * 5; //variable Zahl bis 5
    let w = 0; //um das Spiel zu gewinnen
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
        Abschlussarbeit.canvas.addEventListener("touch", click);
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
            //findet die Position des Klicks herraus
            let findPositionx = event.clientX;
            let findPositiony = event.clientY;
            console.log(findPositionx);
            console.log(findPositiony);
            //rechnet die Differenz zwischen der Klickposition und die Position des Regentropfens aus
            let gapx = Math.abs(r.momentaryX - findPositionx);
            let gapy = Math.abs(r.momentaryY - findPositiony);
            if (gapx <= 20 && gapy <= 20) {
                Abschlussarbeit.rain.splice(i, 1); //entfernt Regentropfen aus dem Array, somit wird er gel�scht
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
        generateRaindropSnowflake();
        wonGame();
        endGame();
        window.setTimeout(animate, 20);
    }
    //erzeugt neue Regentropfen und Schneeflocken 
    function generateRaindropSnowflake() {
        n++;
        if (n > 24 && n < 26) {
            let newRaindrop = new Abschlussarbeit.raindrop();
            Abschlussarbeit.rain.push(newRaindrop);
            let newSnowflake = new Abschlussarbeit.snowflake();
            Abschlussarbeit.snow.push(newSnowflake);
            n = 0;
        }
    }
    //Spieler gewinnt das Spiel bei 40 Klicks
    function wonGame() {
        if (w > 39) {
            alert("Glueckwunsch du hast die gewuenschte Anzahl an Regen entfernt und gewonnen!\nUm es noch mal zu spielen, druecke F5 oder aktualisiere das Programm.");
        }
    }
    //beendet das Spiel, indem der Regentropfen auf den Boden f�llt
    function endGame() {
        for (let i = 0; i < Abschlussarbeit.rain.length; i++) {
            let o = Abschlussarbeit.rain[i];
            if (o.momentaryY >= 620 && o.momentaryY <= 750) {
                gameLost();
            }
        }
    }
    //Erkl�rung des Spiels
    function explainGame() {
        alert("Rette die Schneelandschaft, indem du die Regentropfen durch clicken zerstoerst. \nAchtung, die Regentropfen duerfen nicht den Boden beruehren!");
    }
    //Meldung das Spiel verlohren ist
    function gameLost() {
        alert("Oh nein, du hast leider die Schneelandschaft nicht retten koennen.\nUm es nochmal zu probieren, druecke ok.");
        location.reload(); //Spiel wird neu geladen
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=main.js.map