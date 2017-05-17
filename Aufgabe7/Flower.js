//Aufgabe: 7- OO Bienenschwarm
//Name: Nadine Malinowski
//Datum: 14.05.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe7_Classes;
(function (Aufgabe7_Classes) {
    class Flower {
        constructor(_x, _y, _type) {
            this.x = _x;
            this.y = _y;
            this.type = _type;
        }
        setRandomFlowerField() {
            //Blumenwiese
            let sort = Math.floor((Math.random() * 3) + 0);
            this.x = Math.floor(Math.random() * (400 - 0)) + 0;
            this.y = Math.floor(Math.random() * (700 - 350)) + 350;
            this.type = Aufgabe7_Classes.flowersorts[sort];
            this.draw();
        }
        draw() {
            let flowerField = Math.floor((Math.random() * 3) + 0);
            switch (flowerField) {
                case 0:
                    this.drawFlower1();
                    break;
                case 1:
                    this.drawFlower2();
                    break;
                case 2:
                    this.drawFlower3();
                    break;
                default:
                    break;
            }
        }
        drawFlower1() {
            //St�ngel
            Aufgabe7_Classes.inhalt.beginPath();
            Aufgabe7_Classes.inhalt.strokeStyle = "#088A29";
            Aufgabe7_Classes.inhalt.moveTo(this.x, this.y);
            Aufgabe7_Classes.inhalt.lineTo(this.x, this.y - 50);
            Aufgabe7_Classes.inhalt.lineTo(this.x, this.y);
            Aufgabe7_Classes.inhalt.lineTo(this.x + 10, this.y - 30);
            Aufgabe7_Classes.inhalt.lineTo(this.x, this.y);
            Aufgabe7_Classes.inhalt.lineTo(this.x - 10, this.y - 30);
            Aufgabe7_Classes.inhalt.closePath();
            Aufgabe7_Classes.inhalt.stroke();
            //Bl�te
            Aufgabe7_Classes.inhalt.beginPath();
            Aufgabe7_Classes.inhalt.arc(this.x, this.y - 50, 14, 0 * Math.PI, 1 * Math.PI);
            Aufgabe7_Classes.inhalt.lineTo(this.x - 10, this.y - 60);
            Aufgabe7_Classes.inhalt.lineTo(this.x - 5, this.y - 52);
            Aufgabe7_Classes.inhalt.lineTo(this.x, this.y - 60);
            Aufgabe7_Classes.inhalt.lineTo(this.x + 5, this.y - 52);
            Aufgabe7_Classes.inhalt.lineTo(this.x + 10, this.y - 60);
            Aufgabe7_Classes.inhalt.closePath();
            Aufgabe7_Classes.inhalt.fillStyle = "#FF00BF";
            Aufgabe7_Classes.inhalt.fill();
        }
        drawFlower2() {
            //St�ngel
            Aufgabe7_Classes.inhalt.beginPath();
            Aufgabe7_Classes.inhalt.strokeStyle = "#088A29";
            Aufgabe7_Classes.inhalt.moveTo(this.x, this.y);
            Aufgabe7_Classes.inhalt.lineTo(this.x, this.y - 50);
            Aufgabe7_Classes.inhalt.lineTo(this.x, this.y);
            Aufgabe7_Classes.inhalt.lineTo(this.x + 10, this.y - 30);
            Aufgabe7_Classes.inhalt.lineTo(this.x, this.y);
            Aufgabe7_Classes.inhalt.lineTo(this.x - 10, this.y - 30);
            Aufgabe7_Classes.inhalt.closePath();
            Aufgabe7_Classes.inhalt.stroke();
            //Bl�te
            Aufgabe7_Classes.inhalt.beginPath();
            Aufgabe7_Classes.inhalt.arc(this.x, this.y - 50, 12, 0 * Math.PI, 2 * Math.PI);
            Aufgabe7_Classes.inhalt.closePath();
            Aufgabe7_Classes.inhalt.fillStyle = "#FFFF00";
            Aufgabe7_Classes.inhalt.fill();
        }
        drawFlower3() {
            //St�ngel
            Aufgabe7_Classes.inhalt.beginPath();
            Aufgabe7_Classes.inhalt.strokeStyle = "#088A29";
            Aufgabe7_Classes.inhalt.moveTo(this.x, this.y);
            Aufgabe7_Classes.inhalt.lineTo(this.x, this.y - 50);
            Aufgabe7_Classes.inhalt.lineTo(this.x, this.y);
            Aufgabe7_Classes.inhalt.lineTo(this.x + 10, this.y - 30);
            Aufgabe7_Classes.inhalt.lineTo(this.x, this.y);
            Aufgabe7_Classes.inhalt.lineTo(this.x - 10, this.y - 30);
            Aufgabe7_Classes.inhalt.closePath();
            Aufgabe7_Classes.inhalt.stroke();
            //Bl�te  
            Aufgabe7_Classes.inhalt.beginPath();
            Aufgabe7_Classes.inhalt.arc(this.x, this.y - 60, 10, 0 * Math.PI, 2 * Math.PI);
            Aufgabe7_Classes.inhalt.arc(this.x + 10, this.y - 50, 10, 0 * Math.PI, 2 * Math.PI);
            Aufgabe7_Classes.inhalt.arc(this.x + 1, this.y - 42, 10, 0 * Math.PI, 2 * Math.PI);
            Aufgabe7_Classes.inhalt.arc(this.x - 10, this.y - 50, 10, 0 * Math.PI, 2 * Math.PI);
            Aufgabe7_Classes.inhalt.closePath();
            Aufgabe7_Classes.inhalt.fillStyle = "#CC2EFA";
            Aufgabe7_Classes.inhalt.fill();
            //Kreis
            Aufgabe7_Classes.inhalt.beginPath();
            Aufgabe7_Classes.inhalt.arc(this.x, this.y - 50, 7, 0 * Math.PI, 2 * Math.PI);
            Aufgabe7_Classes.inhalt.closePath();
            Aufgabe7_Classes.inhalt.fillStyle = "#FFBF00";
            Aufgabe7_Classes.inhalt.fill();
        }
    }
    Aufgabe7_Classes.Flower = Flower;
})(Aufgabe7_Classes || (Aufgabe7_Classes = {}));
//# sourceMappingURL=Flower.js.map