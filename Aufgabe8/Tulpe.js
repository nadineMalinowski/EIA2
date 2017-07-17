//Aufgabe: 8-Inheritance
//Name: Nadine Malinowski
//Datum: 21.05.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe8_Inheritance;
(function (Aufgabe8_Inheritance) {
    class Tulpe extends Aufgabe8_Inheritance.mainFlower {
        constructor() {
            super();
            this.drawFlower1();
        }
        drawFlower1() {
            //St�ngel
            Aufgabe8_Inheritance.inhalt.beginPath();
            Aufgabe8_Inheritance.inhalt.strokeStyle = "#088A29";
            Aufgabe8_Inheritance.inhalt.moveTo(this.x, this.y);
            Aufgabe8_Inheritance.inhalt.lineTo(this.x, this.y - 50);
            Aufgabe8_Inheritance.inhalt.lineTo(this.x, this.y);
            Aufgabe8_Inheritance.inhalt.lineTo(this.x + 10, this.y - 30);
            Aufgabe8_Inheritance.inhalt.lineTo(this.x, this.y);
            Aufgabe8_Inheritance.inhalt.lineTo(this.x - 10, this.y - 30);
            Aufgabe8_Inheritance.inhalt.closePath();
            Aufgabe8_Inheritance.inhalt.stroke();
            //Bl�te
            Aufgabe8_Inheritance.inhalt.beginPath();
            Aufgabe8_Inheritance.inhalt.arc(this.x, this.y - 50, 14, 0 * Math.PI, 1 * Math.PI);
            Aufgabe8_Inheritance.inhalt.lineTo(this.x - 10, this.y - 60);
            Aufgabe8_Inheritance.inhalt.lineTo(this.x - 5, this.y - 52);
            Aufgabe8_Inheritance.inhalt.lineTo(this.x, this.y - 60);
            Aufgabe8_Inheritance.inhalt.lineTo(this.x + 5, this.y - 52);
            Aufgabe8_Inheritance.inhalt.lineTo(this.x + 10, this.y - 60);
            Aufgabe8_Inheritance.inhalt.closePath();
            Aufgabe8_Inheritance.inhalt.fillStyle = "#FF00BF";
            Aufgabe8_Inheritance.inhalt.fill();
        }
    }
    Aufgabe8_Inheritance.Tulpe = Tulpe;
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
//# sourceMappingURL=Tulpe.js.map