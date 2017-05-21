//Aufgabe: 8-Inheritance
//Name: Nadine Malinowski
//Datum: 21.05.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Aufgabe8_Inheritance  {
    
    export class Pusteblume extends mainFlower {
        
       constructor() {
            super();
                this.drawFlower2();
        }

        drawFlower2(): void {
            //Stängel
            inhalt.beginPath();
            inhalt.strokeStyle = "#088A29";
            inhalt.moveTo(this.x, this.y);
            inhalt.lineTo(this.x, this.y - 50);
            inhalt.lineTo(this.x, this.y);
            inhalt.lineTo(this.x + 10, this.y - 30);
            inhalt.lineTo(this.x, this.y);
            inhalt.lineTo(this.x - 10, this.y - 30);
            inhalt.closePath();
            inhalt.stroke();
            //Blüte
            inhalt.beginPath();
            inhalt.arc(this.x, this.y - 50, 12, 0 * Math.PI, 2 * Math.PI);
            inhalt.closePath();
            inhalt.fillStyle = "#FFFF00";
            inhalt.fill();
        }
    }
}