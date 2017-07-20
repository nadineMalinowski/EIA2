/// <reference path="raindrop.ts" />
//Aufgabe: Abschlussarbeit
//Name: Nadine Malinowski
//Datum: 20.07.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class snowflake extends Abschlussarbeit.raindrop {
        constructor() {
            super();
            this.startPosition();
        }
        draw() {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(this.x, this.y, 10, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.strokeStyle = "black";
            Abschlussarbeit.crc2.stroke();
            Abschlussarbeit.crc2.fillStyle = "white";
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.closePath();
        }
    }
    Abschlussarbeit.snowflake = snowflake; //schlie�t die Klasse
})(Abschlussarbeit || (Abschlussarbeit = {})); //schlie�t den namenspace
//# sourceMappingURL=snowflake.js.map