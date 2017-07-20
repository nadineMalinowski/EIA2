/// <reference path="main.ts" />
//Aufgabe: Abschlussarbeit
//Name: Nadine Malinowski
//Datum: 20.07.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Hintergrund {
        constructor() {
            //Himmel
            Abschlussarbeit.crc2.fillStyle = "#A9D0F5";
            Abschlussarbeit.crc2.fillRect(0, 0, Abschlussarbeit.canvas.width, Abschlussarbeit.canvas.height);
            //Boden(Schnee)
            Abschlussarbeit.crc2.fillStyle = "white";
            Abschlussarbeit.crc2.fillRect(0, 630, Abschlussarbeit.canvas.width, Abschlussarbeit.canvas.height);
            this.drawClouds(150, 10);
            this.drawSnowman(500, 600);
        }
        drawClouds(_x, _y) {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(_x, _y, 100, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.arc(_x + 70, _y, 80, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.arc(_x + 170, _y, 100, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.arc(_x + 300, _y + 10, 70, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.arc(_x + 400, _y + 20, 90, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.arc(_x + 500, _y + 30, 70, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.arc(_x + 590, _y + 30, 60, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.arc(_x + 650, _y + 40, 70, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.arc(_x + 720, _y + 45, 80, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fillStyle = "#E6E6E6";
            Abschlussarbeit.crc2.fill();
        }
        drawSnowman(_x, _y) {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(_x, _y, 100, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.arc(_x, _y - 100, 70, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fillStyle = "white";
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(_x, _y - 170, 50, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fillStyle = "white";
            Abschlussarbeit.crc2.fill();
            //Augen
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(_x - 15, _y - 195, 5, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fillStyle = "black";
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(_x + 15, _y - 195, 5, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fillStyle = "black";
            Abschlussarbeit.crc2.fill();
            //Mund
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(_x - 25, _y - 170, 4, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fillStyle = "black";
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(_x - 10, _y - 165, 4, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fillStyle = "black";
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(_x + 5, _y - 165, 4, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fillStyle = "black";
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(_x + 20, _y - 170, 4, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fillStyle = "black";
            Abschlussarbeit.crc2.fill();
            //Kn�pfe
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(_x, _y - 20, 7, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fillStyle = "black";
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(_x, _y - 70, 7, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fillStyle = "black";
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(_x, _y - 120, 7, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fillStyle = "black";
            Abschlussarbeit.crc2.fill();
            //Hut
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.rect(_x - 45, _y - 225, 90, 15);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fillStyle = "#3B240B";
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.rect(_x - 29, _y - 285, 60, 65);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fillStyle = "#3B240B";
            Abschlussarbeit.crc2.fill();
        }
    }
    Abschlussarbeit.Hintergrund = Hintergrund; //schlie�t die Klasse
})(Abschlussarbeit || (Abschlussarbeit = {})); //schlie�t den namespace
//# sourceMappingURL=hintergrund.js.map