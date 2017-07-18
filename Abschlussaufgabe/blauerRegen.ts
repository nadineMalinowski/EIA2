
namespace Abschlussaufgabe {
    export class blauerRegen extends Regentropfen {
        
        constructor() {
            super();
            this.startPosition();
            }
        
        update(): void {
            this.move();
            this.draw();
        }
        
        startPosition(): void{
            for (let i: number = 0; i < gesamterRegen.length; i++) {
                let position: number = Math.floor(Math.random() * 3 -1);
            }
        }
        
         move(): void {
            this.x += Math.random() * 7 -6;
            this.y += Math.random() * 4 -2;
        }
        
        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 50, 0 * Math.PI, 2 * Math.PI);
            crc2.fillStyle = "blue";
            crc2.fill();
            crc2.closePath();
        }
    
    }
}