// <reference path="Snowflake.ts"/>
/// <reference path="DrawableObjects.ts"/>
var snowflake_a8;
(function (snowflake_a8) {
    window.addEventListener("load", init);
    let background;
    // Anzahl der Schneeflocken, die beim Click auf das Canvas erstellt werden
    let clickAmount = 20;
    // Array bestehend aus Snowflake Objekten
    // F�r Erkl�rung Snowflake Objekt siehe Snowflake.ts
    let snowflakes = [];
    let stars = [];
    // In der init Funktion sollen alle Schritte abgearbeitet werden, die n�tig
    // sind um unser Bild vorzubereiten, aber nur einmal ausgef�hrt werden m�ssen:
    // Canvas und Context initialisieren ... die Schneeflocken erstellen ... und
    // sobald du recherchiert hast wie es geht, soll hier auch der (statische) Hintergrund einmal
    // gezeichnet und dann zwischengespeichert werden.
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        // Verschiebe den Canvas um 200px nach rechts
        // Damit haben wir den Unterschied zwischen clientX/Y und offsetX/Y im Event Objekt verdeutlicht
        canvas.style.marginLeft = "200px";
        snowflake_a8.context = canvas.getContext("2d");
        canvas.addEventListener("click", addSnowflakes);
        snowflake_a8.context.fillStyle = "#3f3f3f";
        snowflake_a8.context.fillRect(0, 0, snowflake_a8.context.canvas.width, snowflake_a8.context.canvas.height);
        // Zeichne zwanzig statische Schneeflocken/Sterne die einmal auf den Hintergrund gezeichnet
        // und von denen nur die ersten 10 gespeichert werden
        for (let i = 0; i < 20; i++) {
            let star = new snowflake_a8.Star(Math.random() * canvas.width, Math.random() * canvas.height, "#bfcf00", Math.random() * (10 - 5) + 5);
            star.draw();
            if (i < 10)
                stars.push(star);
        }
        background = snowflake_a8.context.getImageData(0, 0, canvas.width, canvas.height);
        // Erstelle 20 Schneeflocken an zuf�lligen Positionen
        createSnowflakes(20);
        // Zeichne zwanzig weitere zielsuchende Schneeflocken
        for (let i = 0; i < 20; i++) {
            // W�hle aus allen Sternen zuf�llig einen aus ...
            let target = stars[Math.round(Math.random() * (stars.length - 1))];
            // ... dessen Position an die neue zielsuchende Schneeflocke �bergeben wird.
            // Aufgrund der Tatsache, dass TargetingSnowflake eine Subclasse von Snowflake ist
            // K�nnen Objekte beider Klassen im selben Array untergebracht werden.
            snowflakes.push(new snowflake_a8.TargetingSnowflake(Math.random() * canvas.width, Math.random() * canvas.height, "#ffffff", target.position.x, target.position.y));
        }
        // Alle Vorbereitungen abgeschlossen, los gehts mit der Animation
        animate();
    }
    // Hier werden alle Aufgaben untergebracht die einmal pro Frame ausgef�hrt werden m�ssen ...
    function animate() {
        // ... das alte Bild muss �bermalt werden, damit keine Schlieren entstehen ...
        drawBackground();
        // Alle Schneeflocken auf den neusten Stand bringen
        updateSnowflakes();
        // Wenn das alles erledigt ist, warten wir 20millisekunden und rufen die Funktion erneut auf
        setTimeout(animate, 20);
    }
    // Zeichne alle Schneeflocken
    function updateSnowflakes() {
        // Laufe durch das komplette Array der Schneeflocken...
        for (let i = 0; i < snowflakes.length; i++) {
            snowflakes[i].update();
        }
    }
    // Zeichne den Hintergrund
    function drawBackground() {
        snowflake_a8.context.putImageData(background, 0, 0);
    }
    // Erstelle eine definierte Anzahl von Schneeflocken mit zuf�lliger Position
    function createSnowflakes(_amount) {
        for (let i = 0; i < _amount; i++) {
            let x = random(0, snowflake_a8.context.canvas.width);
            let y = random(0, snowflake_a8.context.canvas.height);
            createSnowflake(x, y, "#ffffff");
        }
    }
    // Erstelle eine definierte Anzahl von Schneeflockem um die Position an die geklickt wurde
    function addSnowflakes(_event) {
        for (let i = 0; i < clickAmount; i++) {
            let x = random(_event.offsetX - 100, _event.offsetX + 100);
            let y = random(_event.offsetY - 100, _event.offsetY + 100);
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
    function createSnowflake(_x, _y, _color) {
        let snowflake = new snowflake_a8.Snowflake(_x, _y, _color);
        snowflakes.push(snowflake);
    }
    // Gleicher Grund f�r diese Funktion: Wir brauchen immer wieder Zufallszahlen in bestimmten Bereichen.
    // Wenn ich jedes mal Code reinkopiere und dann ab�ndere, werden sich unweigerlich Fehler einschleichen und
    // in gr��eren Projekten eine einzelne Fehlerquelle auszumachen ist nervenaufreibend. Deswegen: Einmal die
    // Funktion definiert, gepr�ft, dass sie tut was man verlangt und dann kann man sie immer wieder verwenden.
    function random(_min, _max) {
        return Math.random() * (_max - _min) + _min;
    }
    // Funktion die entweder 1 oder -1 zur�ckgibt je nach dem ob der Input positiv oder negativ ist
    // 0 wird als positiv angesehen
    // Anmerkung: Im Tut selbst habe ich euch die Math.sign() Funktion gezeigt. Da diese aber noch experimentell ist
    // erkennt der TypeScript Compiler sie nicht als validen Code an und wirft einen Fehler. Deswegen habe ich mir
    // diese Hilfsfunktion geschrieben
    function signum(_value) {
        return _value >= 0 ? 1 : -1;
    }
    snowflake_a8.signum = signum;
})(snowflake_a8 || (snowflake_a8 = {}));
//# sourceMappingURL=main.js.map