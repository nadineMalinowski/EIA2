/// <reference path="Snowflake.ts"/>

namespace snowflake {
    window.addEventListener("load", init);

    // Variable f�r den Canvascontext die exportiert wird, so dass sie in allen
    // Dateien im selben Namespace verwendet werden
    export let context: CanvasRenderingContext2D;

    let background: ImageData;
    // Anzahl der Schneeflocken, die beim Click auf das Canvas erstellt werden
    let clickAmount: number = 20;

    // Array bestehend aus Snowflake Objekten
    // F�r Erkl�rung Snowflake Objekt siehe Snowflake.ts
    let snowflakes: Snowflake[] = [];

    // In der init Funktion sollen alle Schritte abgearbeitet werden, die n�tig
    // sind um unser Bild vorzubereiten, aber nur einmal ausgef�hrt werden m�ssen:
    // Canvas und Context initialisieren ... die Schneeflocken erstellen ... und
    // sobald du recherchiert hast wie es geht, soll hier auch der (statische) Hintergrund einmal
    // gezeichnet und dann zwischengespeichert werden.
    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        // Verschiebe den Canvas um 200px nach rechts
        // Damit haben wir den Unterschied zwischen clientX/Y und offsetX/Y im Event Objekt verdeutlicht
        canvas.style.marginLeft = "200px";
        context = canvas.getContext("2d");

        canvas.addEventListener("click", addSnowflakes);


        context.fillStyle = "#3f3f3f";
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);

        // Zeichne zwanzig statische Schneeflocken/Sterne die einmal auf den Hintergrund gezeichnet
        // und nicht gespeichert werden
        for (let i: number = 0; i < 20; i++) {
            new Snowflake(Math.random() * canvas.width, Math.random() * canvas.height, "#bfcf00").draw();
        }

        background = context.getImageData(0, 0, canvas.width, canvas.height);

        // Erstelle 200 Schneeflocken an zuf�lligen Positionen
        createSnowflakes(200);

        // Alle Vorbereitungen abgeschlossen, los gehts mit der Animation
        animate();
    }

    // Hier werden alle Aufgaben untergebracht die einmal pro Frame ausgef�hrt werden m�ssen ...
    function animate(): void {
        // ... das alte Bild muss �bermalt werden, damit keine Schlieren entstehen ...
        drawBackground();

        updateSnowflakes();

        // Wenn das alles erledigt ist, warten wir 20millisekunden und rufen die Funktion erneut auf
        setTimeout(animate, 20);
    }

    // Zeichne alle Schneeflocken
    function updateSnowflakes(): void {
        // Laufe durch das komplette Array der Schneeflocken...
        for (let i: number = 0; i < snowflakes.length; i++) {
            snowflakes[i].update();
        }
    }



    // Zeichne den Hintergrund
    function drawBackground(): void {
        context.putImageData(background, 0, 0);
    }

    // Erstelle eine definierte Anzahl von Schneeflocken mit zuf�lliger Position
    function createSnowflakes(_amount: number): void {
        for (let i: number = 0; i < _amount; i++) {
            let x: number = random(0, context.canvas.width);
            let y: number = random(0, context.canvas.height);

            createSnowflake(x, y, "#ffffff");
        }
    }

    // Erstelle eine definierte Anzahl von Schneeflockem um die Position an die geklickt wurde
    function addSnowflakes(_event: MouseEvent): void {
        for (let i: number = 0; i < clickAmount; i++) {
            let x: number = random(_event.offsetX - 100, _event.offsetX + 100);
            let y: number = random(_event.offsetY - 100, _event.offsetY + 100);

            createSnowflake(x, y, "#ffffff");
        }
    }

    // Erstelle eine Schneeflocke an einer definierten Position
    // Hier zeigt sich auch sehr sch�n wie sinnvoll die Kapselung von einzelnen Schritten in eigene
    // Funktionen sein kann: sowohl in "createSnowflakes" als auch "addSnowflakes" erstelle ich eine
    // Anzahl von Schneeflocken. In beiden F�llen bekommt die Schneeflocke jeweils eine Wert f�r x, y und color.
    // Unterschiedlich ist lediglich wie ich an die Werte von x und y komme. Den gemeinsamen Schritt "erstelle
    // eine Schneeflocke mit folgenden Werten" habe ich in die Funktion "createSnowflake" ausgelagert und rufe
    // diese Funktion in den beiden anderen Funktionen auf und �bergebe die Werte, die die Funktion zum arbeiten
    // braucht. Vorteile sind: Weniger Code den man ver�ndern muss, wenn sich z.B. die Art und Weise �ndert wie
    // ein Schneeflocken Objekt erstellt wird. Weniger Code bei dem man Fehler machen kann, wenn man z.B. vergisst
    // eine �nderung an allen kopierten Stellen einzutragen.
    function createSnowflake(_x: number, _y: number, _color: string): void {
        let snowflake: Snowflake = new Snowflake(_x, _y, _color);

        snowflakes.push(snowflake);
    }

    // Gleicher Grund f�r diese Funktion: Wir brauchen immer wieder Zufallszahlen in bestimmten Bereichen.
    // Wenn ich jedes mal Code reinkopiere und dann ab�ndere, werden sich unweigerlich Fehler einschleichen und
    // in gr��eren Projekten eine einzelne Fehlerquelle auszumachen ist nervenaufreibend. Deswegen: Einmal die
    // Funktion definiert, gepr�ft, dass sie tut was man verlangt und dann kann man sie immer wieder verwenden.
    function random(_min: number, _max: number): number {
        return Math.random() * (_max - _min) + _min;
    }
}