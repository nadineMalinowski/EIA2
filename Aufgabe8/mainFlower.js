//Aufgabe: 8-Inheritance
//Name: Nadine Malinowski
//Datum: 21.05.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe8_Inheritance;
(function (Aufgabe8_Inheritance) {
    class mainFlower {
        constructor() {
            this.setRandomFlowerField();
        }
        draw() { }
        setRandomFlowerField() {
            //Blumenwiese
            let sort = Math.floor((Math.random() * 3) + 0);
            this.x = Math.floor(Math.random() * (400 - 0)) + 0;
            this.y = Math.floor(Math.random() * (700 - 350)) + 350;
            this.type = Aufgabe8_Inheritance.flowersorts[sort];
        }
    }
    Aufgabe8_Inheritance.mainFlower = mainFlower;
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
//# sourceMappingURL=mainFlower.js.map