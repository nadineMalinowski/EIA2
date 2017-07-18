/// <reference path="main.ts" />

namespace Abschlussarbeit {

    export class Regentropfen {
        x: number;
        y: number;
        xTarget: number;
        yTarget: number;

        constructor() {
            this.startPosition();
            this.update();
        } //schlieﬂt constructor

        update(): void{
            this.move();
            this.draw();
        }
        
        startPosition(): void{
            for (let i: number = 0; i < gesamterRegen.length; i++) {
                let position: number = Math.floor(Math.random() * 3 -1);
            }
        }
        
        setPosition(): void {
            this.x = 0;
            this.y = Math.floor(Math.random() * (700 - 0)) +0;
        }
        
        move(): void {
            this.x += Math.random() * 7 -6;
            this.y += Math.random() * 4 -2;
            
            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;
        }
        
        
        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 50, 0 * Math.PI, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();
        }

    } //schlieﬂt die Klasse
}//schlieﬂt den Namespace