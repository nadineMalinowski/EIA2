//Aufgabe: 8-Inheritance
//Name: Nadine Malinowski
//Datum: 21.05.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Aufgabe8_Inheritance {
    
    export class honeybee extends mainBee {
        xtarget: number;
        ytarget: number;
        speed: number;
    
        constructor(_x: number, _y: number, _color: string, _size: boolean) {
            super(_x, _y, _color, _size);
                this.speed = 0.02;
                this.setStartPosition();
                this.setRandomFlowerTarget();
        }

        setStartPosition(): void {
            this.x = 558;
            this.y = 420;
        }
        
        setRandomFlowerTarget(): void {
            let flowertarget: number = Math.round(Math.random() * (flowers.length - 1));
            this.xtarget = flowers[flowertarget].x;
            this.ytarget = flowers[flowertarget].y;
        }
        
        move(): void {
            let xDiff: number = this.xtarget - this.x - 10;
            let yDiff: number = this.ytarget - this.y - 60;
            if (Math.abs(xDiff) < 0.7 && Math.abs(yDiff) < 0.7)
                this.setRandomFlowerTarget();
            else {
                this.x += xDiff * this.speed; 
                this.y += yDiff * this.speed;
            }
        }
        
        draw(): void {
            if (this.size == true) {
                inhalt.beginPath();
                inhalt.fillRect(this.x, this.y, 3, 9);
                inhalt.closePath();
                inhalt.fillStyle = this.color
                inhalt.fill();
                inhalt.beginPath();
                inhalt.fillRect(this.x - 3, this.y, 3, 9);
                inhalt.closePath();
                inhalt.fillStyle = this.color
                inhalt.fill();
                inhalt.beginPath();
                inhalt.arc(this.x - 7, this.y + 5, 3, 0 * Math.PI, 2 * Math.PI);
                inhalt.closePath();
                inhalt.fillStyle = "black"
                inhalt.fill();
                inhalt.beginPath();
                inhalt.fillRect(this.x + 6, this.y, 3, 9);
                inhalt.closePath();
                inhalt.fillStyle = this.color
                inhalt.fill();
                inhalt.beginPath();
                inhalt.fillRect(this.x + 3, this.y, 3, 9);
                inhalt.closePath();
                inhalt.fillStyle = "black"
                inhalt.fill()
            }
            if (this.size == false) {
                inhalt.beginPath();
                inhalt.fillRect(this.x-1, this.y, 5, 12);
                inhalt.closePath();
                inhalt.fillStyle = "yellow"
                inhalt.fill();
                inhalt.beginPath();
                inhalt.fillRect(this.x - 3, this.y, 5, 12);
                inhalt.closePath();
                inhalt.fillStyle = "yellow"
                inhalt.fill();
                inhalt.beginPath();
                inhalt.arc(this.x - 7, this.y + 6, 5, 0 * Math.PI, 2 * Math.PI);
                inhalt.closePath();
                inhalt.fillStyle = "black"
                inhalt.fill();
                inhalt.beginPath();
                inhalt.fillRect(this.x + 6, this.y, 5, 12);
                inhalt.closePath();
                inhalt.fillStyle = "yellow"
                inhalt.fill();
                inhalt.beginPath();
                inhalt.fillRect(this.x + 4, this.y, 5, 12);
                inhalt.closePath();
                inhalt.fillStyle = "black"
                inhalt.fill()
            }
        }   
    }
}