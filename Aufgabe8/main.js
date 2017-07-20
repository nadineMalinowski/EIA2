//Aufgabe: 8- Inheritance
//Name: Nadine Malinowski
//Datum: 21.05.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe8_Inheritance;
(function (Aufgabe8_Inheritance) {
    window.addEventListener("load", init);
    Aufgabe8_Inheritance.bees = [];
    Aufgabe8_Inheritance.flowers = [];
    Aufgabe8_Inheritance.flowersorts = ["Tulpe", "Pusteblume", "lilaBlume"]; //verf�gbare Blumenarten
    let count = 10;
    let saveBackground;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe8_Inheritance.inhalt = canvas.getContext("2d");
        //Himmel
        Aufgabe8_Inheritance.inhalt.fillStyle = "#81F7F3";
        Aufgabe8_Inheritance.inhalt.fillRect(0, 0, canvas.width, canvas.height / 2);
        //Wiese
        Aufgabe8_Inheritance.inhalt.fillStyle = "#64FE2E";
        Aufgabe8_Inheritance.inhalt.fillRect(0, 350, canvas.width, canvas.height / 2);
        //Sonne
        Aufgabe8_Inheritance.inhalt.beginPath();
        Aufgabe8_Inheritance.inhalt.arc(150, 85, 50, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Inheritance.inhalt.closePath();
        Aufgabe8_Inheritance.inhalt.strokeStyle = "#5E610B";
        Aufgabe8_Inheritance.inhalt.stroke();
        Aufgabe8_Inheritance.inhalt.fillStyle = "#FFFF00";
        Aufgabe8_Inheritance.inhalt.fill();
        //linke Wolke
        Aufgabe8_Inheritance.inhalt.beginPath();
        Aufgabe8_Inheritance.inhalt.arc(200, 80, 30, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Inheritance.inhalt.arc(240, 90, 40, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Inheritance.inhalt.arc(280, 60, 50, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Inheritance.inhalt.arc(330, 90, 40, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Inheritance.inhalt.arc(280, 100, 40, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Inheritance.inhalt.closePath();
        Aufgabe8_Inheritance.inhalt.strokeStyle = "#5E610B";
        Aufgabe8_Inheritance.inhalt.stroke();
        Aufgabe8_Inheritance.inhalt.fillStyle = "#ffffff";
        Aufgabe8_Inheritance.inhalt.fill();
        //rechte Wolke
        Aufgabe8_Inheritance.inhalt.beginPath();
        Aufgabe8_Inheritance.inhalt.arc(600, 70, 50, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Inheritance.inhalt.arc(540, 70, 30, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Inheritance.inhalt.arc(580, 100, 50, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Inheritance.inhalt.arc(650, 80, 60, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Inheritance.inhalt.arc(650, 100, 30, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Inheritance.inhalt.arc(690, 100, 40, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Inheritance.inhalt.arc(700, 100, 30, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Inheritance.inhalt.closePath();
        Aufgabe8_Inheritance.inhalt.strokeStyle = "#5E610B";
        Aufgabe8_Inheritance.inhalt.stroke();
        Aufgabe8_Inheritance.inhalt.fillStyle = "#ffffff";
        Aufgabe8_Inheritance.inhalt.fill();
        //linker mittiger Berg
        Aufgabe8_Inheritance.inhalt.beginPath();
        Aufgabe8_Inheritance.inhalt.moveTo(100, 350);
        Aufgabe8_Inheritance.inhalt.lineTo(300, 175);
        Aufgabe8_Inheritance.inhalt.lineTo(475, 350);
        Aufgabe8_Inheritance.inhalt.closePath();
        Aufgabe8_Inheritance.inhalt.strokeStyle = "#5E610B";
        Aufgabe8_Inheritance.inhalt.stroke();
        Aufgabe8_Inheritance.inhalt.fillStyle = "#A4A4A4";
        Aufgabe8_Inheritance.inhalt.fill();
        //wei�e Spitze
        Aufgabe8_Inheritance.inhalt.beginPath();
        Aufgabe8_Inheritance.inhalt.moveTo(266, 205);
        Aufgabe8_Inheritance.inhalt.lineTo(300, 175);
        Aufgabe8_Inheritance.inhalt.lineTo(330, 205);
        Aufgabe8_Inheritance.inhalt.closePath();
        Aufgabe8_Inheritance.inhalt.strokeStyle = "#5E610B";
        Aufgabe8_Inheritance.inhalt.stroke();
        Aufgabe8_Inheritance.inhalt.fillStyle = "#ffffff";
        Aufgabe8_Inheritance.inhalt.fill();
        //rechter mittiger Berg
        Aufgabe8_Inheritance.inhalt.beginPath();
        Aufgabe8_Inheritance.inhalt.moveTo(600, 350);
        Aufgabe8_Inheritance.inhalt.lineTo(750, 200);
        Aufgabe8_Inheritance.inhalt.lineTo(900, 350);
        Aufgabe8_Inheritance.inhalt.closePath();
        Aufgabe8_Inheritance.inhalt.strokeStyle = "#5E610B";
        Aufgabe8_Inheritance.inhalt.stroke();
        Aufgabe8_Inheritance.inhalt.fillStyle = "#A4A4A4";
        Aufgabe8_Inheritance.inhalt.fill();
        //wei�e Spitze
        Aufgabe8_Inheritance.inhalt.beginPath();
        Aufgabe8_Inheritance.inhalt.moveTo(700, 250);
        Aufgabe8_Inheritance.inhalt.lineTo(750, 200);
        Aufgabe8_Inheritance.inhalt.lineTo(800, 250);
        Aufgabe8_Inheritance.inhalt.closePath();
        Aufgabe8_Inheritance.inhalt.strokeStyle = "#5E610B";
        Aufgabe8_Inheritance.inhalt.stroke();
        Aufgabe8_Inheritance.inhalt.fillStyle = "#ffffff";
        Aufgabe8_Inheritance.inhalt.fill();
        //mittiger Berg
        Aufgabe8_Inheritance.inhalt.beginPath();
        Aufgabe8_Inheritance.inhalt.moveTo(300, 350);
        Aufgabe8_Inheritance.inhalt.lineTo(500, 100);
        Aufgabe8_Inheritance.inhalt.lineTo(700, 350);
        Aufgabe8_Inheritance.inhalt.closePath();
        Aufgabe8_Inheritance.inhalt.strokeStyle = "#5E610B";
        Aufgabe8_Inheritance.inhalt.stroke();
        Aufgabe8_Inheritance.inhalt.fillStyle = "#BDBDBD";
        Aufgabe8_Inheritance.inhalt.fill();
        //wei�e Spitze
        Aufgabe8_Inheritance.inhalt.beginPath();
        Aufgabe8_Inheritance.inhalt.moveTo(400, 225);
        Aufgabe8_Inheritance.inhalt.lineTo(500, 100);
        Aufgabe8_Inheritance.inhalt.lineTo(600, 225);
        Aufgabe8_Inheritance.inhalt.closePath();
        Aufgabe8_Inheritance.inhalt.strokeStyle = "#5E610B";
        Aufgabe8_Inheritance.inhalt.stroke();
        Aufgabe8_Inheritance.inhalt.fillStyle = "#ffffff";
        Aufgabe8_Inheritance.inhalt.fill();
        //linker Berg
        Aufgabe8_Inheritance.inhalt.beginPath();
        Aufgabe8_Inheritance.inhalt.moveTo(0, 350);
        Aufgabe8_Inheritance.inhalt.lineTo(150, 150);
        Aufgabe8_Inheritance.inhalt.lineTo(300, 350);
        Aufgabe8_Inheritance.inhalt.closePath();
        Aufgabe8_Inheritance.inhalt.strokeStyle = "#5E610B";
        Aufgabe8_Inheritance.inhalt.stroke();
        Aufgabe8_Inheritance.inhalt.fillStyle = "#BDBDBD";
        Aufgabe8_Inheritance.inhalt.fill();
        //wei�e Spitze
        Aufgabe8_Inheritance.inhalt.beginPath();
        Aufgabe8_Inheritance.inhalt.moveTo(94, 225);
        Aufgabe8_Inheritance.inhalt.lineTo(150, 150);
        Aufgabe8_Inheritance.inhalt.lineTo(206, 225);
        Aufgabe8_Inheritance.inhalt.closePath();
        Aufgabe8_Inheritance.inhalt.strokeStyle = "#5E610B";
        Aufgabe8_Inheritance.inhalt.stroke();
        Aufgabe8_Inheritance.inhalt.fillStyle = "#ffffff";
        Aufgabe8_Inheritance.inhalt.fill();
        //rechter Berg
        Aufgabe8_Inheritance.inhalt.beginPath();
        Aufgabe8_Inheritance.inhalt.moveTo(700, 350);
        Aufgabe8_Inheritance.inhalt.lineTo(850, 200);
        Aufgabe8_Inheritance.inhalt.lineTo(1000, 350);
        Aufgabe8_Inheritance.inhalt.closePath();
        Aufgabe8_Inheritance.inhalt.strokeStyle = "#5E610B";
        Aufgabe8_Inheritance.inhalt.stroke();
        Aufgabe8_Inheritance.inhalt.fillStyle = "#BDBDBD";
        Aufgabe8_Inheritance.inhalt.fill();
        //wei�e Spitze
        Aufgabe8_Inheritance.inhalt.beginPath();
        Aufgabe8_Inheritance.inhalt.moveTo(775, 275);
        Aufgabe8_Inheritance.inhalt.lineTo(850, 200);
        Aufgabe8_Inheritance.inhalt.lineTo(925, 275);
        Aufgabe8_Inheritance.inhalt.closePath();
        Aufgabe8_Inheritance.inhalt.strokeStyle = "#5E610B";
        Aufgabe8_Inheritance.inhalt.stroke();
        Aufgabe8_Inheritance.inhalt.fillStyle = "#ffffff";
        Aufgabe8_Inheritance.inhalt.fill();
        //Hausdach
        Aufgabe8_Inheritance.inhalt.beginPath();
        Aufgabe8_Inheritance.inhalt.moveTo(750, 425);
        Aufgabe8_Inheritance.inhalt.lineTo(875, 250);
        Aufgabe8_Inheritance.inhalt.lineTo(1000, 425);
        Aufgabe8_Inheritance.inhalt.closePath();
        Aufgabe8_Inheritance.inhalt.strokeStyle = "#5E610B";
        Aufgabe8_Inheritance.inhalt.stroke();
        Aufgabe8_Inheritance.inhalt.fillStyle = "#B40404";
        Aufgabe8_Inheritance.inhalt.fill();
        //Hauswand
        Aufgabe8_Inheritance.inhalt.beginPath();
        Aufgabe8_Inheritance.inhalt.moveTo(750, 650);
        Aufgabe8_Inheritance.inhalt.lineTo(750, 425);
        Aufgabe8_Inheritance.inhalt.lineTo(1000, 425);
        Aufgabe8_Inheritance.inhalt.lineTo(1000, 650);
        Aufgabe8_Inheritance.inhalt.closePath();
        Aufgabe8_Inheritance.inhalt.strokeStyle = "#5E610B";
        Aufgabe8_Inheritance.inhalt.stroke();
        Aufgabe8_Inheritance.inhalt.fillStyle = "#3E80E9";
        Aufgabe8_Inheritance.inhalt.fill();
        //Fenster
        Aufgabe8_Inheritance.inhalt.beginPath();
        Aufgabe8_Inheritance.inhalt.moveTo(825, 525);
        Aufgabe8_Inheritance.inhalt.lineTo(925, 525);
        Aufgabe8_Inheritance.inhalt.lineTo(925, 450);
        Aufgabe8_Inheritance.inhalt.lineTo(825, 450);
        Aufgabe8_Inheritance.inhalt.closePath();
        Aufgabe8_Inheritance.inhalt.strokeStyle = "#5E610B";
        Aufgabe8_Inheritance.inhalt.stroke();
        Aufgabe8_Inheritance.inhalt.fillStyle = "#A9F5F2";
        Aufgabe8_Inheritance.inhalt.fill();
        //T�r
        Aufgabe8_Inheritance.inhalt.beginPath();
        Aufgabe8_Inheritance.inhalt.moveTo(825, 650);
        Aufgabe8_Inheritance.inhalt.lineTo(925, 650);
        Aufgabe8_Inheritance.inhalt.lineTo(925, 550);
        Aufgabe8_Inheritance.inhalt.lineTo(825, 550);
        Aufgabe8_Inheritance.inhalt.closePath();
        Aufgabe8_Inheritance.inhalt.strokeStyle = "#5E610B";
        Aufgabe8_Inheritance.inhalt.stroke();
        Aufgabe8_Inheritance.inhalt.fillStyle = "#8A4B08";
        Aufgabe8_Inheritance.inhalt.fill();
        //Bienenkorb
        drawbeehive(550, 450, "#8A4B08", "#000000");
        //Blumenwiese
        //Tulpe - werden von Honigbienen angeflogen
        for (let i = 0; i < 10; i++) {
            let t = new Aufgabe8_Inheritance.Tulpe();
            Aufgabe8_Inheritance.flowers.push(t);
            console.log(t);
            Aufgabe8_Inheritance.flowers[i].draw();
        }
        //Pusteblume
        for (let i = 0; i < 10; i++) {
            let p = new Aufgabe8_Inheritance.Pusteblume();
            console.log(p);
            p.draw();
        }
        //lilaBlume - werden von Honigbienen angeflogen
        for (let i = 0; i < 10; i++) {
            let l = new Aufgabe8_Inheritance.lilaBlume();
            Aufgabe8_Inheritance.flowers.push(l);
            console.log(l);
            Aufgabe8_Inheritance.flowers[i].draw();
        }
        //Hintergrund speichern
        saveBackground = Aufgabe8_Inheritance.inhalt.getImageData(0, 0, 1000, 700);
        //Anfangsposition der Bienen
        for (let i = 0; i < count; i++) {
            //nomrmale Biene
            let b = new Aufgabe8_Inheritance.mainBee(558, 420, "#FFB300", true);
            b.setRandomColorSize();
            Aufgabe8_Inheritance.bees.push(b);
            //Honigbiene
            let h = new Aufgabe8_Inheritance.honeybee(558, 420, "#FFB300", true);
            h.setRandomColorSize();
            Aufgabe8_Inheritance.bees.push(h);
        }
        Aufgabe8_Inheritance.inhalt.canvas.addEventListener("click", newBee); //Bei Click auf den Canvas erscheint eine neue Biene
        Aufgabe8_Inheritance.inhalt.canvas.addEventListener("touch", newBee); //Bei Touch auf den Canvas erscheint eine neue Biene
        animate();
    }
    //Animation der Bienen
    function animate() {
        //Hintergrungbild das gespeichert wurde, wird aufgerufen
        Aufgabe8_Inheritance.inhalt.putImageData(saveBackground, 0, 0);
        for (let i = 0; i < Aufgabe8_Inheritance.bees.length; i++) {
            let b = Aufgabe8_Inheritance.bees[i];
            b.update();
        }
        window.setTimeout(animate, 22);
    }
    //Anfangsposition der neuen Biene
    function newBee(_event) {
        //normale Biene 
        let b = new Aufgabe8_Inheritance.mainBee(558, 420, "#FFB300", true);
        b.setRandomColorSize();
        Aufgabe8_Inheritance.bees.push(b);
        //Honigbiene
        let h = new Aufgabe8_Inheritance.honeybee(558, 420, "#FFB300", true);
        h.setRandomColorSize();
        Aufgabe8_Inheritance.bees.push(h);
        count++;
    }
    function drawbeehive(_x, _y, _fillColor, _fillColor2) {
        //Stiel
        Aufgabe8_Inheritance.inhalt.beginPath();
        Aufgabe8_Inheritance.inhalt.fillRect(_x, _y, 10, 90);
        Aufgabe8_Inheritance.inhalt.closePath();
        Aufgabe8_Inheritance.inhalt.fillStyle = _fillColor;
        Aufgabe8_Inheritance.inhalt.fill();
        //Rechteck
        Aufgabe8_Inheritance.inhalt.beginPath();
        Aufgabe8_Inheritance.inhalt.fillRect(_x - 30, _y - 60, 80, 70);
        Aufgabe8_Inheritance.inhalt.closePath();
        Aufgabe8_Inheritance.inhalt.fillStyle = _fillColor;
        Aufgabe8_Inheritance.inhalt.fill();
        //Kreis
        Aufgabe8_Inheritance.inhalt.beginPath();
        Aufgabe8_Inheritance.inhalt.arc(_x + 8, _y - 27, 16, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Inheritance.inhalt.closePath();
        Aufgabe8_Inheritance.inhalt.fillStyle = _fillColor2;
        Aufgabe8_Inheritance.inhalt.fill();
    }
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
//# sourceMappingURL=main.js.map