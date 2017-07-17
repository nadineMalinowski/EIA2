//Aufgabe: 8-Inheritance
//Name: Nadine Malinowski
//Datum: 21.05.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe8_Inheritance;
(function (Aufgabe8_Inheritance) {
    class Pusteblume extends Aufgabe8_Inheritance.mainFlower {
        constructor() {
            super();
            this.drawFlower2();
        }
        drawFlower2() {
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
            Aufgabe8_Inheritance.inhalt.arc(this.x, this.y - 50, 12, 0 * Math.PI, 2 * Math.PI);
            Aufgabe8_Inheritance.inhalt.closePath();
            Aufgabe8_Inheritance.inhalt.fillStyle = "#FFFF00";
            Aufgabe8_Inheritance.inhalt.fill();
        }
    }
    Aufgabe8_Inheritance.Pusteblume = Pusteblume;
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
//# sourceMappingURL=Pusteblume.js.map