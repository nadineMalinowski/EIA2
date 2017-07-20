/// <reference path="main.ts" />

//Aufgabe: Abschlussarbeit
//Name: Nadine Malinowski
//Datum: 20.07.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Abschlussarbeit {
    export class Hintergrund {
        constructor() {
            //Himmel
            crc2.fillStyle = "#A9D0F5";
            crc2.fillRect(0, 0, canvas.width, canvas.height);

            //Boden(Schnee)
            crc2.fillStyle = "white";
            crc2.fillRect(0, 630, canvas.width, canvas.height);

            this.drawClouds(150, 10);
            this.drawSnowman(500, 600);
        }

        drawClouds(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.arc(_x, _y, 100, 0 * Math.PI, 2 * Math.PI);
            crc2.arc(_x + 70, _y, 80, 0 * Math.PI, 2 * Math.PI);
            crc2.arc(_x + 170, _y, 100, 0 * Math.PI, 2 * Math.PI);
            crc2.arc(_x + 300, _y + 10, 70, 0 * Math.PI, 2 * Math.PI);
            crc2.arc(_x + 400, _y + 20, 90, 0 * Math.PI, 2 * Math.PI);
            crc2.arc(_x + 500, _y + 30, 70, 0 * Math.PI, 2 * Math.PI);
            crc2.arc(_x + 590, _y + 30, 60, 0 * Math.PI, 2 * Math.PI);
            crc2.arc(_x + 650, _y + 40, 70, 0 * Math.PI, 2 * Math.PI);
            crc2.arc(_x + 720, _y + 45, 80, 0 * Math.PI, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#E6E6E6";
            crc2.fill();
        }

        drawSnowman(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.arc(_x, _y, 100, 0 * Math.PI, 2 * Math.PI);
            crc2.arc(_x, _y - 100, 70, 0 * Math.PI, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "white";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(_x, _y - 170, 50, 0 * Math.PI, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "white";
            crc2.fill();

            //Augen
            crc2.beginPath();
            crc2.arc(_x - 15, _y - 195, 5, 0 * Math.PI, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(_x + 15, _y - 195, 5, 0 * Math.PI, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();

            //Mund
            crc2.beginPath();
            crc2.arc(_x - 25, _y - 170, 4, 0 * Math.PI, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(_x - 10, _y - 165, 4, 0 * Math.PI, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(_x + 5, _y - 165, 4, 0 * Math.PI, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(_x + 20, _y - 170, 4, 0 * Math.PI, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();

            //Knöpfe
            crc2.beginPath();
            crc2.arc(_x, _y - 20, 7, 0 * Math.PI, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(_x, _y - 70, 7, 0 * Math.PI, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(_x, _y - 120, 7, 0 * Math.PI, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();

            //Hut
            crc2.beginPath();
            crc2.rect(_x - 45, _y - 225, 90, 15);
            crc2.closePath();
            crc2.fillStyle = "#3B240B";
            crc2.fill();

            crc2.beginPath();
            crc2.rect(_x - 29, _y - 285, 60, 65);
            crc2.closePath();
            crc2.fillStyle = "#3B240B";
            crc2.fill();
        }
    }//schließt die Klasse
}//schließt den namespace