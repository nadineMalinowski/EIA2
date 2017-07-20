/// <reference path="Regentropfen.ts" />
/// <reference path="Schneeflocke.ts" />
/// <reference path="hintergrund.ts" />

//Aufgabe: Abschlussarbeit
//Name: Nadine Malinowski
//Datum: 20.07.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Abschlussarbeit {

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let rain: raindrop[];
    export let snow: snowflake[];
    let image: ImageData;
    let count: number = Math.random() * 5; //variable Zahl bis 5
    let s: number = 0;
    let n: number = 0;

    window.addEventListener("load", init);
    
    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        rain = [];
        snow = [];

        explainGame();

        let background: Hintergrund = new Hintergrund();//Hintergrund aufrufen

        canvas.addEventListener("click", click);
        canvas.addEventListener("touchstart", click);

        //erstellt Regen und Schnee
        for (let i: number = 0; i < count; i++) {
            rain[i] = new raindrop();

            let s: snowflake = new snowflake();
            snow.push(s);
        }

        //Hintergrund speichern
        image = crc2.getImageData(0, 0, 1000, 700);

        window.setTimeout(animate, 20);
    }

    //l�scht den blauen Regentropfen bei Klick
    function click(event: MouseEvent): void {
        for (let i: number = 0; i < rain.length; i++) {
            let r: raindrop = rain[i];

            //findet die Position des klicks herraus
            let findPositionx: number = event.clientX;
            let findPositiony: number = event.clientY;
            console.log(findPositionx);
            console.log(findPositiony);

            //rechnet die Differenz zwischen der Klickposition und der Position des Regentropfens aus
            let gapx: number = Math.abs(r.momentaryPosX - findPositionx);
            let gapy: number = Math.abs(r.momentaryPosY - findPositiony);
            if (gapx <= 20 && gapy <= 20) {
                rain.splice(i, 1);
                //entfernt Regentropfen aus dem Array, somit wird er gel�scht
                rain.reverse();
            }
        }
    }

    //Regen und Schnee werden animiert
    function animate(): void {
        //Hintergrund der gespeichert wurde wird aufgerufen
        crc2.putImageData(image, 0, 0);

        for (let i: number = 0; i < rain.length; i++) {
            let r: raindrop = rain[i];
            r.update();
        }

        for (let i: number = 0; i < snow.length; i++) {
            snow[i].update();
        }

        wonGame();
        bankingRaindropSnowflake();
        endGame();

        window.setTimeout(animate, 20);
    }

    //Schiebt neue Regentropfen und Schneeflocken nach
    function bankingRaindropSnowflake(): void {
        n++//z�hlt wie oft die Animationsfunktion aufgerufen wurde
        if (n > 24 && n < 26) {//wenn die Animation 25 mal aufgerufen wurde
            let newRaindrop: raindrop = new raindrop();//erstellt es einen neuen Regentropfen
            rain.push(newRaindrop);

            let newSnowflake: snowflake = new snowflake();
            snow.push(newSnowflake);
            n = 0;//f�ngt wieder bei 0 an zu z�hlen
        }
    }

    //Spieler gewinnt das Spiel bei 85 Klicks
    function wonGame(): void {
        if (s > 84) {
            alert("Glueckwunsch du hast die gewuenschte Anzahl an Regen entfernt und gewonnen!\nUm es noch mal zu spielen, druecke F5 oder aktualisiere das Programm.");
        }
    }

    //beendet das Spiel, indem der Regentropfen auf den Boden f�llt
    function endGame(): void {
        for (let i: number = 0; i < rain.length; i++) {
            let o: raindrop = rain[i];
            if (o.momentaryPosY >= 620 && o.momentaryPosY <= 750) {
                gameLost();
            }
        }
    }

    //erkl�rt was zu tun ist
    function explainGame(): void {
        alert("Rette die Schneelandschaft, indem du die Regentropfen durch clicken zerstoerst. \nAchtung, die Regentropfen duerfen nicht den Boden beruehren!");
    }

    //Meldung das Spiel verlohren ist
    function gameLost(): void {
        alert("Oh nein, du hast leider die Schneelandschaft nicht retten koennen.\nUm es noch mal zu probieren, druecke F5 oder aktualisiere das Programm.");
    }
}
