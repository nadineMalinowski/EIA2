//Aufgabe: 7- OO Bienenschwarm
//Name: Nadine Malinowski
//Datum: 14.05.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Aufgabe7_Classes {
    export class Bee {
        x: number; 
        y: number; 
        size: boolean;
        color: string;
    
        constructor(_x: number, _y: number, _color: string, _size: boolean) {
            this.x = _x;
            this.y = _y;
            this.size = _size;
            this.color = _color;
        }
        
        update(): void {
            this.move();
            this.draw();
        }
        
        setRandomColor(): void {
            
            let random: number = Math.round(Math.random());
            if (random == 1) {
            this.size = true;
            }
            if (random == 0) {
                this.size = false;
            }
        } 

        move(): void {
            this.x += Math.random() * 1 - 2;
            this.y += Math.random() * 4 - 2;
            
            //Bienen erscheinen am gegenüberliegen Rand
            if (this.x >= 995)
                this.x = -5;

            if (this.y <= 3)
                this.y = 697;

            if (this.x < -5)
                this.x = 995;

            if (this.y > 697)
                this.y = 3;
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