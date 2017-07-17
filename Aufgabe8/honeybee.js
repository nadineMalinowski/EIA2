//Aufgabe: 8-Inheritance
//Name: Nadine Malinowski
//Datum: 21.05.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe8_Inheritance;
(function (Aufgabe8_Inheritance) {
    class honeybee extends Aufgabe8_Inheritance.mainBee {
        constructor(_x, _y, _color, _size) {
            super(_x, _y, _color, _size);
            this.speed = 0.02;
            this.setRandomFlowerTarget();
        }
        setRandomFlowerTarget() {
            let flowertarget = Math.round(Math.random() * (Aufgabe8_Inheritance.flowers.length - 1));
            this.xtarget = Aufgabe8_Inheritance.flowers[flowertarget].x;
            this.ytarget = Aufgabe8_Inheritance.flowers[flowertarget].y;
        }
        move() {
            let xDiff = this.xtarget - this.x - 10;
            let yDiff = this.ytarget - this.y - 60;
            if (Math.abs(xDiff) < 0.7 && Math.abs(yDiff) < 0.7)
                this.setRandomFlowerTarget();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
        draw() {
            if (this.size == true) {
                Aufgabe8_Inheritance.inhalt.beginPath();
                Aufgabe8_Inheritance.inhalt.fillRect(this.x, this.y, 3, 9);
                Aufgabe8_Inheritance.inhalt.closePath();
                Aufgabe8_Inheritance.inhalt.fillStyle = this.color;
                Aufgabe8_Inheritance.inhalt.fill();
                Aufgabe8_Inheritance.inhalt.beginPath();
                Aufgabe8_Inheritance.inhalt.fillRect(this.x - 3, this.y, 3, 9);
                Aufgabe8_Inheritance.inhalt.closePath();
                Aufgabe8_Inheritance.inhalt.fillStyle = this.color;
                Aufgabe8_Inheritance.inhalt.fill();
                Aufgabe8_Inheritance.inhalt.beginPath();
                Aufgabe8_Inheritance.inhalt.arc(this.x - 7, this.y + 5, 3, 0 * Math.PI, 2 * Math.PI);
                Aufgabe8_Inheritance.inhalt.closePath();
                Aufgabe8_Inheritance.inhalt.fillStyle = "black";
                Aufgabe8_Inheritance.inhalt.fill();
                Aufgabe8_Inheritance.inhalt.beginPath();
                Aufgabe8_Inheritance.inhalt.fillRect(this.x + 6, this.y, 3, 9);
                Aufgabe8_Inheritance.inhalt.closePath();
                Aufgabe8_Inheritance.inhalt.fillStyle = this.color;
                Aufgabe8_Inheritance.inhalt.fill();
                Aufgabe8_Inheritance.inhalt.beginPath();
                Aufgabe8_Inheritance.inhalt.fillRect(this.x + 3, this.y, 3, 9);
                Aufgabe8_Inheritance.inhalt.closePath();
                Aufgabe8_Inheritance.inhalt.fillStyle = "black";
                Aufgabe8_Inheritance.inhalt.fill();
            }
            if (this.size == false) {
                Aufgabe8_Inheritance.inhalt.beginPath();
                Aufgabe8_Inheritance.inhalt.fillRect(this.x - 1, this.y, 5, 12);
                Aufgabe8_Inheritance.inhalt.closePath();
                Aufgabe8_Inheritance.inhalt.fillStyle = "yellow";
                Aufgabe8_Inheritance.inhalt.fill();
                Aufgabe8_Inheritance.inhalt.beginPath();
                Aufgabe8_Inheritance.inhalt.fillRect(this.x - 3, this.y, 5, 12);
                Aufgabe8_Inheritance.inhalt.closePath();
                Aufgabe8_Inheritance.inhalt.fillStyle = "yellow";
                Aufgabe8_Inheritance.inhalt.fill();
                Aufgabe8_Inheritance.inhalt.beginPath();
                Aufgabe8_Inheritance.inhalt.arc(this.x - 7, this.y + 6, 5, 0 * Math.PI, 2 * Math.PI);
                Aufgabe8_Inheritance.inhalt.closePath();
                Aufgabe8_Inheritance.inhalt.fillStyle = "black";
                Aufgabe8_Inheritance.inhalt.fill();
                Aufgabe8_Inheritance.inhalt.beginPath();
                Aufgabe8_Inheritance.inhalt.fillRect(this.x + 6, this.y, 5, 12);
                Aufgabe8_Inheritance.inhalt.closePath();
                Aufgabe8_Inheritance.inhalt.fillStyle = "yellow";
                Aufgabe8_Inheritance.inhalt.fill();
                Aufgabe8_Inheritance.inhalt.beginPath();
                Aufgabe8_Inheritance.inhalt.fillRect(this.x + 4, this.y, 5, 12);
                Aufgabe8_Inheritance.inhalt.closePath();
                Aufgabe8_Inheritance.inhalt.fillStyle = "black";
                Aufgabe8_Inheritance.inhalt.fill();
            }
        }
    }
    Aufgabe8_Inheritance.honeybee = honeybee;
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
//# sourceMappingURL=honeybee.js.map