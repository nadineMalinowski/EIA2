//Aufgabe: 8-Inheritance
//Name: Nadine Malinowski
//Datum: 21.05.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe8_Inheritance;
(function (Aufgabe8_Inheritance) {
    class mainBee {
        constructor(_x, _y, _color, _size) {
            this.x = _x;
            this.y = _y;
            this.size = _size;
            this.color = _color;
        }
        update() {
            this.move();
            this.draw();
        }
        setRandomColorSize() {
            let random = Math.round(Math.random());
            if (random == 1) {
                this.size = true;
            }
            if (random == 0) {
                this.size = false;
            }
        }
        move() {
            this.x += Math.random() * 1 - 2;
            this.y += Math.random() * 4 - 2;
            //Bienen erscheinen am gegen�berliegen Rand
            if (this.x >= 995)
                this.x = -5;
            if (this.y <= 3)
                this.y = 697;
            if (this.x < -5)
                this.x = 995;
            if (this.y > 697)
                this.y = 3;
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
    Aufgabe8_Inheritance.mainBee = mainBee;
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
//# sourceMappingURL=mainBee.js.map