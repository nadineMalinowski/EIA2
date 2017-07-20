/// <reference path="main.ts" />

namespace Abschlussarbeit {
    export class raindrop {
        x: number;
        y: number;
        momentaryPosX: number;
        momentaryPosY: number;
        counter: number = 0;
        speed: number = 0;

        constructor() {
            this.startPosition();
        }

        update(): void {
            this.move();
            this.draw();
            this.momentary()
        }

        //legt die Startposition fest
        startPosition(): void {
            this.x = Math.floor(Math.random() * (800 - 150)) + 150;
            this.y = 130;
        }

        //findet momentane Position des Regentropfens herraus
        momentary(): void {
            this.momentaryPosX = this.x;
            this.momentaryPosY = this.y;
        }

        move(): void {
            this.x += Math.random() * 2 - 1;
            this.y += Math.random() * 4 - 0;
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

    } //schlieﬂt die Klasse
}//schlieﬂt den Namespace