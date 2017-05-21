//Aufgabe: 8- Inheritance
//Name: Nadine Malinowski
//Datum: 21.05.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Aufgabe8_Inheritance {
    
    window.addEventListener("load", init);
    export let inhalt: CanvasRenderingContext2D;

    export let bees: mainBee[] = [];
    export let flowers: mainFlower [] = [];
    export let flowersorts: string[] = ["Tulpe", "Pusteblume", "lilaBlume"]; //verf¸gbare Blumenarten
    let count: number = 10;
    let saveBackground: ImageData;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        inhalt = canvas.getContext("2d");

        //Himmel
        inhalt.fillStyle = "#81F7F3";
        inhalt.fillRect(0, 0, canvas.width, canvas.height / 2);

        //Wiese
        inhalt.fillStyle = "#64FE2E";
        inhalt.fillRect(0, 350, canvas.width, canvas.height / 2);

        //Sonne
        inhalt.beginPath();
        inhalt.arc(150, 85, 50, 0 * Math.PI, 2 * Math.PI);
        inhalt.closePath();
        inhalt.strokeStyle = "#5E610B";
        inhalt.stroke();
        inhalt.fillStyle = "#FFFF00";
        inhalt.fill();

        //linke Wolke
        inhalt.beginPath();
        inhalt.arc(200, 80, 30, 0 * Math.PI, 2 * Math.PI);
        inhalt.arc(240, 90, 40, 0 * Math.PI, 2 * Math.PI);
        inhalt.arc(280, 60, 50, 0 * Math.PI, 2 * Math.PI);
        inhalt.arc(330, 90, 40, 0 * Math.PI, 2 * Math.PI);
        inhalt.arc(280, 100, 40, 0 * Math.PI, 2 * Math.PI);
        inhalt.closePath();
        inhalt.strokeStyle = "#5E610B";
        inhalt.stroke();
        inhalt.fillStyle = "#ffffff";
        inhalt.fill();

        //rechte Wolke
        inhalt.beginPath();
        inhalt.arc(600, 70, 50, 0 * Math.PI, 2 * Math.PI);
        inhalt.arc(540, 70, 30, 0 * Math.PI, 2 * Math.PI);
        inhalt.arc(580, 100, 50, 0 * Math.PI, 2 * Math.PI);
        inhalt.arc(650, 80, 60, 0 * Math.PI, 2 * Math.PI);
        inhalt.arc(650, 100, 30, 0 * Math.PI, 2 * Math.PI);
        inhalt.arc(690, 100, 40, 0 * Math.PI, 2 * Math.PI);
        inhalt.arc(700, 100, 30, 0 * Math.PI, 2 * Math.PI);
        inhalt.closePath();
        inhalt.strokeStyle = "#5E610B";
        inhalt.stroke();
        inhalt.fillStyle = "#ffffff";
        inhalt.fill();

        //linker mittiger Berg
        inhalt.beginPath();
        inhalt.moveTo(100, 350);
        inhalt.lineTo(300, 175);
        inhalt.lineTo(475, 350);
        inhalt.closePath();
        inhalt.strokeStyle = "#5E610B";
        inhalt.stroke();
        inhalt.fillStyle = "#A4A4A4";
        inhalt.fill();
        //weiﬂe Spitze
        inhalt.beginPath();
        inhalt.moveTo(266, 205);
        inhalt.lineTo(300, 175);
        inhalt.lineTo(330, 205);
        inhalt.closePath();
        inhalt.strokeStyle = "#5E610B";
        inhalt.stroke();
        inhalt.fillStyle = "#ffffff";
        inhalt.fill();

        //rechter mittiger Berg
        inhalt.beginPath();
        inhalt.moveTo(600, 350);
        inhalt.lineTo(750, 200);
        inhalt.lineTo(900, 350);
        inhalt.closePath();
        inhalt.strokeStyle = "#5E610B";
        inhalt.stroke();
        inhalt.fillStyle = "#A4A4A4";
        inhalt.fill();
        //weiﬂe Spitze
        inhalt.beginPath();
        inhalt.moveTo(700, 250);
        inhalt.lineTo(750, 200);
        inhalt.lineTo(800, 250);
        inhalt.closePath();
        inhalt.strokeStyle = "#5E610B";
        inhalt.stroke();
        inhalt.fillStyle = "#ffffff";
        inhalt.fill();

        //mittiger Berg
        inhalt.beginPath();
        inhalt.moveTo(300, 350);
        inhalt.lineTo(500, 100);
        inhalt.lineTo(700, 350);
        inhalt.closePath();
        inhalt.strokeStyle = "#5E610B";
        inhalt.stroke();
        inhalt.fillStyle = "#BDBDBD";
        inhalt.fill();
        //weiﬂe Spitze
        inhalt.beginPath();
        inhalt.moveTo(400, 225);
        inhalt.lineTo(500, 100);
        inhalt.lineTo(600, 225);
        inhalt.closePath();
        inhalt.strokeStyle = "#5E610B";
        inhalt.stroke();
        inhalt.fillStyle = "#ffffff";
        inhalt.fill();

        //linker Berg
        inhalt.beginPath();
        inhalt.moveTo(0, 350);
        inhalt.lineTo(150, 150);
        inhalt.lineTo(300, 350);
        inhalt.closePath();
        inhalt.strokeStyle = "#5E610B";
        inhalt.stroke();
        inhalt.fillStyle = "#BDBDBD";
        inhalt.fill();
        //weiﬂe Spitze
        inhalt.beginPath();
        inhalt.moveTo(94, 225);
        inhalt.lineTo(150, 150);
        inhalt.lineTo(206, 225);
        inhalt.closePath();
        inhalt.strokeStyle = "#5E610B";
        inhalt.stroke();
        inhalt.fillStyle = "#ffffff";
        inhalt.fill();

        //rechter Berg
        inhalt.beginPath();
        inhalt.moveTo(700, 350);
        inhalt.lineTo(850, 200);
        inhalt.lineTo(1000, 350);
        inhalt.closePath();
        inhalt.strokeStyle = "#5E610B";
        inhalt.stroke();
        inhalt.fillStyle = "#BDBDBD";
        inhalt.fill();
        //weiﬂe Spitze
        inhalt.beginPath();
        inhalt.moveTo(775, 275);
        inhalt.lineTo(850, 200);
        inhalt.lineTo(925, 275);
        inhalt.closePath();
        inhalt.strokeStyle = "#5E610B";
        inhalt.stroke();
        inhalt.fillStyle = "#ffffff";
        inhalt.fill();

        //Hausdach
        inhalt.beginPath();
        inhalt.moveTo(750, 425);
        inhalt.lineTo(875, 250);
        inhalt.lineTo(1000, 425);
        inhalt.closePath();
        inhalt.strokeStyle = "#5E610B";
        inhalt.stroke();
        inhalt.fillStyle = "#B40404";
        inhalt.fill();
        //Hauswand
        inhalt.beginPath();
        inhalt.moveTo(750, 650);
        inhalt.lineTo(750, 425);
        inhalt.lineTo(1000, 425);
        inhalt.lineTo(1000, 650);
        inhalt.closePath();
        inhalt.strokeStyle = "#5E610B";
        inhalt.stroke();
        inhalt.fillStyle = "#3E80E9";
        inhalt.fill();
        //Fenster
        inhalt.beginPath();
        inhalt.moveTo(825, 525);
        inhalt.lineTo(925, 525);
        inhalt.lineTo(925, 450);
        inhalt.lineTo(825, 450);
        inhalt.closePath();
        inhalt.strokeStyle = "#5E610B";
        inhalt.stroke();
        inhalt.fillStyle = "#A9F5F2";
        inhalt.fill();
        //T¸r
        inhalt.beginPath();
        inhalt.moveTo(825, 650);
        inhalt.lineTo(925, 650);
        inhalt.lineTo(925, 550);
        inhalt.lineTo(825, 550);
        inhalt.closePath();
        inhalt.strokeStyle = "#5E610B";
        inhalt.stroke();
        inhalt.fillStyle = "#8A4B08";
        inhalt.fill();
        //Bienenkorb
        drawbeehive(550, 450, "#8A4B08", "#000000");
        
        //Blumenwiese
        //Tulpe - werden von Honigbienen angeflogen
        for (var i: number = 0; i < 10; i++) {
            let t: Tulpe = new Tulpe();
            flowers.push(t);
            console.log(t);
            flowers[i].draw();
        }
        
        //Pusteblume
        for (var i: number = 0; i < 10; i++) {
            let p: Pusteblume = new Pusteblume();
            console.log(p);
            p.draw();
        }
       
        //lilaBlume - werden von Honigbienen angeflogen
        for (let i: number = 0; i < 10; i++) {  
            let l: lilaBlume = new lilaBlume();
            flowers.push(l);
            console.log(l);
            flowers[i].draw();
        }

        //Hintergrund speichern
        saveBackground = inhalt.getImageData(0, 0, 1000, 700);
        
        //Anfangsposition der Bienen
        for (let i: number = 0; i < count; i++) {
            //nomrmale Biene
            let b: mainBee = new mainBee(558, 420, "#FFB300", true);
                b.setRandomColorSize();
                bees.push(b);
            //Honigbiene
            let h: honeybee = new honeybee(558, 420, "#FFB300", true);
                h.setRandomColorSize();
                bees.push(h);
        }     
        inhalt.canvas.addEventListener("click", newBee);//Bei Click auf den Canvas erscheint eine neue Biene
        inhalt.canvas.addEventListener("touch", newBee);//Bei Touch auf den Canvas erscheint eine neue Biene
    
        animate();
    }

    //Animation der Bienen
    function animate(): void {
        //Hintergrungbild das gespeichert wurde, wird aufgerufen
        inhalt.putImageData(saveBackground, 0, 0);
        for (let i: number = 0; i < bees.length; i++) {
            let b: mainBee = bees [i];
                b.update();
        }
        window.setTimeout(animate, 22);
    }

    //Anfangsposition der neuen Biene
    function newBee(_event: Event): void {
        //normale Biene 
        let b: mainBee = new mainBee ( 558, 420, "#FFB300", true);
            b.setRandomColorSize();
            bees.push(b);
        //Honigbiene
        let h: honeybee = new honeybee(558, 420, "#FFB300", true);
                h.setRandomColorSize();
                bees.push(h);
        count++;
    }

    function drawbeehive(_x: number, _y: number, _fillColor: string, _fillColor2: string): void {
        //Stiel
        inhalt.beginPath();
        inhalt.fillRect(_x, _y, 10, 90);
        inhalt.closePath();
        inhalt.fillStyle = _fillColor;
        inhalt.fill();
        //Rechteck
        inhalt.beginPath();
        inhalt.fillRect(_x - 30, _y - 60, 80, 70);
        inhalt.closePath();
        inhalt.fillStyle = _fillColor;
        inhalt.fill()
        //Kreis
        inhalt.beginPath();
        inhalt.arc(_x + 8, _y - 27, 16, 0 * Math.PI, 2 * Math.PI);
        inhalt.closePath();
        inhalt.fillStyle = _fillColor2;
        inhalt.fill()
   }
}
