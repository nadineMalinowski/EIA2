/// <reference path="Regentropfen.ts" />
/// <reference path="Schneeflocke.ts" />
/// <reference path="hintergrund.ts" />

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
    let highscore: HTMLDivElement = document.createElement("div");
    highscore.style.fontSize = "40px";
    document.body.appendChild(highscore);

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

    //löscht den blauen Regentropfen bei Klick
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

        bankingRaindropSnowflake();
        endGame();

        window.setTimeout(animate, 20);
    }

    //Schiebt neue Regentropfen und Schneeflocken nach
    function bankingRaindropSnowflake(): void {
        n++//zählt wie oft die Animationsfunktion aufgerufen wurde
        if (n > 24 && n < 26) {//wenn die Animation 25 mal aufgerufen wurde
            let newRaindrop: raindrop = new raindrop();//erstellt es einen neuen Regentropfen
            rain.push(newRaindrop);

            let newSnowflake: snowflake = new snowflake();
            snow.push(newSnowflake);
            n = 0;//fängt wieder bei 0 an zu zählen
        }
    }

    //beendet das Spiel, indem der Regentropfen auf den Boden fällt
    function endGame(): void {
        for (let i: number = 0; i < rain.length; i++) {
            let o: raindrop = rain[i];
            if (o.momentaryPosY >= 620 && o.momentaryPosY <= 750) {
                gameLost();
            }
        }
    }

    // Highscore welcher Anzahl Ameisen vernichtet + einzelner Ameisen Arten vernichtet hochzählt
    highscore.innerText = "Zerstoerte Regentropfen: " + s;

    //Erklärt was zu tun ist
    function explainGame(): void {
        alert("Rette die Schneelandschaft, indem du die Regentropfen durch clicken zerstoerst. \nAchtung, die Regentropfen duerfen nicht den Boden beruehren!");
    }

    //Meldung das Spiel verlohren ist
    function gameLost(): void {
        alert("Oh nein, du hast leider die Schneelandschaft nicht retten koennen.\nUm es noch mal zu probieren, starte das Programm neu.");
    }
}
