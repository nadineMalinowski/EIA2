/// <reference path="Regentropfen.ts" />
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
//# sourceMappingURL=Schneeflocke.js.map