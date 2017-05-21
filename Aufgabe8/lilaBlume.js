//Aufgabe: 8-Inheritance
//Name: Nadine Malinowski
//Datum: 21.05.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe8_Inheritance;
(function (Aufgabe8_Inheritance) {
    class lilaBlume extends Aufgabe8_Inheritance.mainFlower {
        constructor() {
            super();
            this.drawFlower3();
        }
        drawFlower3() {
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
            Aufgabe8_Inheritance.inhalt.arc(this.x, this.y - 60, 10, 0 * Math.PI, 2 * Math.PI);
            Aufgabe8_Inheritance.inhalt.arc(this.x + 10, this.y - 50, 10, 0 * Math.PI, 2 * Math.PI);
            Aufgabe8_Inheritance.inhalt.arc(this.x + 1, this.y - 42, 10, 0 * Math.PI, 2 * Math.PI);
            Aufgabe8_Inheritance.inhalt.arc(this.x - 10, this.y - 50, 10, 0 * Math.PI, 2 * Math.PI);
            Aufgabe8_Inheritance.inhalt.closePath();
            Aufgabe8_Inheritance.inhalt.fillStyle = "#CC2EFA";
            Aufgabe8_Inheritance.inhalt.fill();
            //Kreis
            Aufgabe8_Inheritance.inhalt.beginPath();
            Aufgabe8_Inheritance.inhalt.arc(this.x, this.y - 50, 7, 0 * Math.PI, 2 * Math.PI);
            Aufgabe8_Inheritance.inhalt.closePath();
            Aufgabe8_Inheritance.inhalt.fillStyle = "#FFBF00";
            Aufgabe8_Inheritance.inhalt.fill();
        }
    }
    Aufgabe8_Inheritance.lilaBlume = lilaBlume;
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
//# sourceMappingURL=lilaBlume.js.map