/// <reference path="main.ts" />
//Aufgabe: Abschlussarbeit
//Name: Nadine Malinowski
//Datum: 20.07.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class raindrop {
        constructor() {
            this.startPosition();
        }
        update() {
            this.move();
            this.draw();
            this.momentary();
        }
        //legt die Startposition fest
        startPosition() {
            this.x = Math.floor(Math.random() * (800 - 150)) + 150;
            this.y = 130;
        }
        //findet momentane Position des Regentropfens herraus
        momentary() {
            this.momentaryPosX = this.x;
            this.momentaryPosY = this.y;
        }
        move() {
            this.x += Math.random() * 2 - 1;
            this.y += Math.random() * 4 - 0;
        }
        draw() {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(this.x, this.y, 9, 0 * Math.PI, 1 * Math.PI);
            Abschlussarbeit.crc2.lineTo(this.x - 2, this.y - 15);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.strokeStyle = "black";
            Abschlussarbeit.crc2.stroke();
            Abschlussarbeit.crc2.fillStyle = "blue";
            Abschlussarbeit.crc2.fill();
        }
    }
    Abschlussarbeit.raindrop = raindrop; //schlie�t die Klasse
})(Abschlussarbeit || (Abschlussarbeit = {})); //schlie�t den Namespace
//# sourceMappingURL=Regentropfen.js.map