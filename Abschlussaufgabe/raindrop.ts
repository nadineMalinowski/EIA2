/// <reference path="main.ts" />

//Aufgabe: Abschlussarbeit
//Name: Nadine Malinowski
//Datum: 20.07.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Abschlussarbeit {
    export class raindrop {
        x: number;
        y: number;
        momentaryX: number;
        momentaryY: number;
        clicks: number;

        constructor() {
            this.startPosition();
            this.clicks = 0;
        }

        update(): void {
            this.move();
            this.draw();
            this.momentaryPos()
        }

        //legt die Startposition fest
        startPosition(): void {
            this.x = Math.floor(Math.random() * (800 - 150)) + 150;
            this.y = 130;
        }

        move(): void {
            this.x += Math.random() * 2 - 1;
            this.y += Math.random() * 4 - 0;
        }
        
        //findet momentane Position des Regentropfens herraus
        momentaryPos(): void {
            this.momentaryX = this.x;
            this.momentaryY = this.y;
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 9, 0 * Math.PI, 1 * Math.PI);
            crc2.lineTo(this.x - 2, this.y - 15);
            crc2.closePath();
            crc2.strokeStyle = "black";
            crc2.stroke()
            crc2.fillStyle = "blue";
            crc2.fill();
        }

    } //schlie�t die Klasse
}//schlie�t den Namespace