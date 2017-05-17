//Aufgabe: 7- OO Bienenschwarm
//Name: Nadine Malinowski
//Datum: 14.05.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Aufgabe7_Classes {
    export class Flower {
        x: number;
        y: number;
        type: string;
        
        constructor(_x: number, _y: number, _type: string) {
            this.x = _x;
            this.y = _y;
            this.type = _type;
        }
        
       
        setRandomFlowerField(): void {
             //Blumenwiese
                let sort: number = Math.floor((Math.random() * 3) + 0);
                this.x = Math.floor(Math.random() * (400 - 0)) + 0;
                this.y = Math.floor(Math.random() * (700 - 350)) + 350;
                this.type = flowersorts[sort];
                this.draw();
        } 
            
        draw(): void {
            let flowerField: number = Math.floor((Math.random() * 3) + 0);  
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
        
        
       drawFlower1(): void {
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
            inhalt.arc(this.x, this.y - 50, 14, 0 * Math.PI, 1 * Math.PI);
            inhalt.lineTo(this.x - 10, this.y - 60);
            inhalt.lineTo(this.x - 5, this.y - 52);
            inhalt.lineTo(this.x, this.y - 60);
            inhalt.lineTo(this.x + 5, this.y - 52);
            inhalt.lineTo(this.x + 10, this.y - 60);
            inhalt.closePath();
            inhalt.fillStyle = "#FF00BF";
            inhalt.fill();
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

        drawFlower3(): void {
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
            inhalt.arc(this.x, this.y - 60, 10, 0 * Math.PI, 2 * Math.PI);
            inhalt.arc(this.x + 10, this.y - 50, 10, 0 * Math.PI, 2 * Math.PI);
            inhalt.arc(this.x + 1, this.y - 42, 10, 0 * Math.PI, 2 * Math.PI);
            inhalt.arc(this.x - 10, this.y - 50, 10, 0 * Math.PI, 2 * Math.PI);
            inhalt.closePath();
            inhalt.fillStyle = "#CC2EFA";
            inhalt.fill();
            //Kreis
            inhalt.beginPath();
            inhalt.arc(this.x, this.y - 50, 7, 0 * Math.PI, 2 * Math.PI);
            inhalt.closePath();
            inhalt.fillStyle = "#FFBF00";
            inhalt.fill();
        }
    }
}