//Aufgabe: 8-Inheritance
//Name: Nadine Malinowski
//Datum: 21.05.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Aufgabe8_Inheritance  {
    
    export class mainFlower {
        x: number;
        y: number;
        type: string;
        
        constructor() {
            this.setRandomFlowerField();
        }
        
         draw(): void { }
       
        setRandomFlowerField(): void {
             //Blumenwiese
                let sort: number = Math.floor((Math.random() * 3) + 0);
                this.x = Math.floor(Math.random() * (400 - 0)) + 0;
                this.y = Math.floor(Math.random() * (700 - 350)) + 350;
                this.type = flowersorts[sort];  
        }
    }
}