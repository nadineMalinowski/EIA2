/// <reference path="raindrop.ts" />
/// <reference path="snowflake.ts" />
/// <reference path="background.ts" />

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
    let w: number = 0;
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
        canvas.addEventListener("touch", click);

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

    //löscht den blauen Regentropfen bei Klick
    function click(event: MouseEvent): void {
        for (let i: number = 0; i < rain.length; i++) {
            let r: raindrop = rain[i];

            //findet die Position des Klicks herraus
            let findPositionx: number = event.clientX;
            let findPositiony: number = event.clientY;
            console.log(findPositionx);
            console.log(findPositiony);

            //rechnet die Differenz zwischen der Klickposition und die Position des Regentropfens aus
            let gapx: number = Math.abs(r.momentaryX - findPositionx);
            let gapy: number = Math.abs(r.momentaryY - findPositiony);
            if (gapx <= 20 && gapy <= 20) {
                w++;
                rain.splice(i, 1);//entfernt Regentropfen aus dem Array, somit wird er gelöscht
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

        generateRaindropSnowflake();
        wonGame();
        endGame();

        window.setTimeout(animate, 20);
    }

    //erzeugt neue Regentropfen und Schneeflocken 
    function generateRaindropSnowflake(): void {
        n++
        if (n > 24 && n < 26) {
            let newRaindrop: raindrop = new raindrop();
            rain.push(newRaindrop);

            let newSnowflake: snowflake = new snowflake();
            snow.push(newSnowflake);
            n = 0;
        }
    }

    //Spieler gewinnt das Spiel bei 40 Klicks
    function wonGame(): void {
        if (w > 39) {
            alert("Glueckwunsch du hast die gewuenschte Anzahl an Regentropfen entfernt und gewonnen!\nUm es nochmal zu spielen, druecke auf ok.");
            location.reload();//Spiel wird neu geladen
        }
    }

    //beendet das Spiel, indem der Regentropfen auf den Boden fällt
    function endGame(): void {
        for (let i: number = 0; i < rain.length; i++) {
            let o: raindrop = rain[i];
            if (o.momentaryY >= 620 && o.momentaryY <= 750) {
                gameLost();
            }
        }
    }

    //Erklärung des Spiels
    function explainGame(): void {
        alert("Rette die Schneelandschaft, indem du die Regentropfen durch klicken zerstoerst. \nAchtung, die Regentropfen duerfen nicht den Boden beruehren!");
    }

    //Meldung das Spiel verlohren ist
    function gameLost(): void {
        alert("Oh nein, du hast leider die Schneelandschaft nicht retten koennen.\nUm es nochmal zu probieren, druecke auf ok.");
        location.reload();//Spiel wird neu geladen
    }
}
