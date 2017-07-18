/// <reference path="main.ts" />
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Regentropfen {
        constructor() {
            this.startPosition();
            this.update();
        } //schlie�t constructor
        update() {
            this.move();
            this.draw();
        }
        startPosition() {
            for (let i = 0; i < Abschlussarbeit.gesamterRegen.length; i++) {
                let position = Math.floor(Math.random() * 3 - 1);
            }
        }
        setPosition() {
            this.x = 0;
            this.y = Math.floor(Math.random() * (700 - 0)) + 0;
        }
        move() {
            this.x += Math.random() * 7 - 6;
            this.y += Math.random() * 4 - 2;
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
        }
        draw() {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(this.x, this.y, 50, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.fillStyle = "black";
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.closePath();
        }
    }
    Abschlussarbeit.Regentropfen = Regentropfen; //schlie�t die Klasse
})(Abschlussarbeit || (Abschlussarbeit = {})); //schlie�t den Namespace
//# sourceMappingURL=Regentropfen.js.map