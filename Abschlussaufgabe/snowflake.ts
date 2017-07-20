/// <reference path="raindrop.ts" />

//Aufgabe: Abschlussarbeit
//Name: Nadine Malinowski
//Datum: 20.07.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Abschlussarbeit {
    export class snowflake extends raindrop {
        constructor() {
            super();
            this.startPosition();
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 10, 0 * Math.PI, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke()
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();
        }
    }//schlieﬂt die Klasse
}//schlieﬂt den namenspace