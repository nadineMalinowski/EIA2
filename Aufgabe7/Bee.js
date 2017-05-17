//Aufgabe: 7- OO Bienenschwarm
//Name: Nadine Malinowski
//Datum: 14.05.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe7_Classes;
(function (Aufgabe7_Classes) {
    class Bee {
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
        setRandomColor() {
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
                Aufgabe7_Classes.inhalt.beginPath();
                Aufgabe7_Classes.inhalt.fillRect(this.x, this.y, 3, 9);
                Aufgabe7_Classes.inhalt.closePath();
                Aufgabe7_Classes.inhalt.fillStyle = this.color;
                Aufgabe7_Classes.inhalt.fill();
                Aufgabe7_Classes.inhalt.beginPath();
                Aufgabe7_Classes.inhalt.fillRect(this.x - 3, this.y, 3, 9);
                Aufgabe7_Classes.inhalt.closePath();
                Aufgabe7_Classes.inhalt.fillStyle = this.color;
                Aufgabe7_Classes.inhalt.fill();
                Aufgabe7_Classes.inhalt.beginPath();
                Aufgabe7_Classes.inhalt.arc(this.x - 7, this.y + 5, 3, 0 * Math.PI, 2 * Math.PI);
                Aufgabe7_Classes.inhalt.closePath();
                Aufgabe7_Classes.inhalt.fillStyle = "black";
                Aufgabe7_Classes.inhalt.fill();
                Aufgabe7_Classes.inhalt.beginPath();
                Aufgabe7_Classes.inhalt.fillRect(this.x + 6, this.y, 3, 9);
                Aufgabe7_Classes.inhalt.closePath();
                Aufgabe7_Classes.inhalt.fillStyle = this.color;
                Aufgabe7_Classes.inhalt.fill();
                Aufgabe7_Classes.inhalt.beginPath();
                Aufgabe7_Classes.inhalt.fillRect(this.x + 3, this.y, 3, 9);
                Aufgabe7_Classes.inhalt.closePath();
                Aufgabe7_Classes.inhalt.fillStyle = "black";
                Aufgabe7_Classes.inhalt.fill();
            }
            if (this.size == false) {
                Aufgabe7_Classes.inhalt.beginPath();
                Aufgabe7_Classes.inhalt.fillRect(this.x - 1, this.y, 5, 12);
                Aufgabe7_Classes.inhalt.closePath();
                Aufgabe7_Classes.inhalt.fillStyle = "yellow";
                Aufgabe7_Classes.inhalt.fill();
                Aufgabe7_Classes.inhalt.beginPath();
                Aufgabe7_Classes.inhalt.fillRect(this.x - 3, this.y, 5, 12);
                Aufgabe7_Classes.inhalt.closePath();
                Aufgabe7_Classes.inhalt.fillStyle = "yellow";
                Aufgabe7_Classes.inhalt.fill();
                Aufgabe7_Classes.inhalt.beginPath();
                Aufgabe7_Classes.inhalt.arc(this.x - 7, this.y + 6, 5, 0 * Math.PI, 2 * Math.PI);
                Aufgabe7_Classes.inhalt.closePath();
                Aufgabe7_Classes.inhalt.fillStyle = "black";
                Aufgabe7_Classes.inhalt.fill();
                Aufgabe7_Classes.inhalt.beginPath();
                Aufgabe7_Classes.inhalt.fillRect(this.x + 6, this.y, 5, 12);
                Aufgabe7_Classes.inhalt.closePath();
                Aufgabe7_Classes.inhalt.fillStyle = "yellow";
                Aufgabe7_Classes.inhalt.fill();
                Aufgabe7_Classes.inhalt.beginPath();
                Aufgabe7_Classes.inhalt.fillRect(this.x + 4, this.y, 5, 12);
                Aufgabe7_Classes.inhalt.closePath();
                Aufgabe7_Classes.inhalt.fillStyle = "black";
                Aufgabe7_Classes.inhalt.fill();
            }
        }
    }
    Aufgabe7_Classes.Bee = Bee;
})(Aufgabe7_Classes || (Aufgabe7_Classes = {}));
//# sourceMappingURL=Bee.js.map