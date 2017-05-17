//Aufgabe: 7- OO Bienenschwarm
//Name: Nadine Malinowski
//Datum: 14.05.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe7_Classes;
(function (Aufgabe7_Classes) {
    window.addEventListener("load", init);
    Aufgabe7_Classes.bees = [];
    Aufgabe7_Classes.flowers = [];
    Aufgabe7_Classes.flowersorts = ["Tulpe", "Pusteblume", "lilaBlume"]; //verf�gbare Blumenarten
    let count = 10;
    let saveBackground;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe7_Classes.inhalt = canvas.getContext("2d");
        //Himmel
        Aufgabe7_Classes.inhalt.fillStyle = "#81F7F3";
        Aufgabe7_Classes.inhalt.fillRect(0, 0, canvas.width, canvas.height / 2);
        //Wiese
        Aufgabe7_Classes.inhalt.fillStyle = "#64FE2E";
        Aufgabe7_Classes.inhalt.fillRect(0, 350, canvas.width, canvas.height / 2);
        //Sonne
        Aufgabe7_Classes.inhalt.beginPath();
        Aufgabe7_Classes.inhalt.arc(150, 85, 50, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Classes.inhalt.closePath();
        Aufgabe7_Classes.inhalt.strokeStyle = "#5E610B";
        Aufgabe7_Classes.inhalt.stroke();
        Aufgabe7_Classes.inhalt.fillStyle = "#FFFF00";
        Aufgabe7_Classes.inhalt.fill();
        //linke Wolke
        Aufgabe7_Classes.inhalt.beginPath();
        Aufgabe7_Classes.inhalt.arc(200, 80, 30, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Classes.inhalt.arc(240, 90, 40, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Classes.inhalt.arc(280, 60, 50, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Classes.inhalt.arc(330, 90, 40, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Classes.inhalt.arc(280, 100, 40, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Classes.inhalt.closePath();
        Aufgabe7_Classes.inhalt.strokeStyle = "#5E610B";
        Aufgabe7_Classes.inhalt.stroke();
        Aufgabe7_Classes.inhalt.fillStyle = "#ffffff";
        Aufgabe7_Classes.inhalt.fill();
        //rechte Wolke
        Aufgabe7_Classes.inhalt.beginPath();
        Aufgabe7_Classes.inhalt.arc(600, 70, 50, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Classes.inhalt.arc(540, 70, 30, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Classes.inhalt.arc(580, 100, 50, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Classes.inhalt.arc(650, 80, 60, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Classes.inhalt.arc(650, 100, 30, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Classes.inhalt.arc(690, 100, 40, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Classes.inhalt.arc(700, 100, 30, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Classes.inhalt.closePath();
        Aufgabe7_Classes.inhalt.strokeStyle = "#5E610B";
        Aufgabe7_Classes.inhalt.stroke();
        Aufgabe7_Classes.inhalt.fillStyle = "#ffffff";
        Aufgabe7_Classes.inhalt.fill();
        //linker mittiger Berg
        Aufgabe7_Classes.inhalt.beginPath();
        Aufgabe7_Classes.inhalt.moveTo(100, 350);
        Aufgabe7_Classes.inhalt.lineTo(300, 175);
        Aufgabe7_Classes.inhalt.lineTo(475, 350);
        Aufgabe7_Classes.inhalt.closePath();
        Aufgabe7_Classes.inhalt.strokeStyle = "#5E610B";
        Aufgabe7_Classes.inhalt.stroke();
        Aufgabe7_Classes.inhalt.fillStyle = "#A4A4A4";
        Aufgabe7_Classes.inhalt.fill();
        //wei�e Spitze
        Aufgabe7_Classes.inhalt.beginPath();
        Aufgabe7_Classes.inhalt.moveTo(266, 205);
        Aufgabe7_Classes.inhalt.lineTo(300, 175);
        Aufgabe7_Classes.inhalt.lineTo(330, 205);
        Aufgabe7_Classes.inhalt.closePath();
        Aufgabe7_Classes.inhalt.strokeStyle = "#5E610B";
        Aufgabe7_Classes.inhalt.stroke();
        Aufgabe7_Classes.inhalt.fillStyle = "#ffffff";
        Aufgabe7_Classes.inhalt.fill();
        //rechter mittiger Berg
        Aufgabe7_Classes.inhalt.beginPath();
        Aufgabe7_Classes.inhalt.moveTo(600, 350);
        Aufgabe7_Classes.inhalt.lineTo(750, 200);
        Aufgabe7_Classes.inhalt.lineTo(900, 350);
        Aufgabe7_Classes.inhalt.closePath();
        Aufgabe7_Classes.inhalt.strokeStyle = "#5E610B";
        Aufgabe7_Classes.inhalt.stroke();
        Aufgabe7_Classes.inhalt.fillStyle = "#A4A4A4";
        Aufgabe7_Classes.inhalt.fill();
        //wei�e Spitze
        Aufgabe7_Classes.inhalt.beginPath();
        Aufgabe7_Classes.inhalt.moveTo(700, 250);
        Aufgabe7_Classes.inhalt.lineTo(750, 200);
        Aufgabe7_Classes.inhalt.lineTo(800, 250);
        Aufgabe7_Classes.inhalt.closePath();
        Aufgabe7_Classes.inhalt.strokeStyle = "#5E610B";
        Aufgabe7_Classes.inhalt.stroke();
        Aufgabe7_Classes.inhalt.fillStyle = "#ffffff";
        Aufgabe7_Classes.inhalt.fill();
        //mittiger Berg
        Aufgabe7_Classes.inhalt.beginPath();
        Aufgabe7_Classes.inhalt.moveTo(300, 350);
        Aufgabe7_Classes.inhalt.lineTo(500, 100);
        Aufgabe7_Classes.inhalt.lineTo(700, 350);
        Aufgabe7_Classes.inhalt.closePath();
        Aufgabe7_Classes.inhalt.strokeStyle = "#5E610B";
        Aufgabe7_Classes.inhalt.stroke();
        Aufgabe7_Classes.inhalt.fillStyle = "#BDBDBD";
        Aufgabe7_Classes.inhalt.fill();
        //wei�e Spitze
        Aufgabe7_Classes.inhalt.beginPath();
        Aufgabe7_Classes.inhalt.moveTo(400, 225);
        Aufgabe7_Classes.inhalt.lineTo(500, 100);
        Aufgabe7_Classes.inhalt.lineTo(600, 225);
        Aufgabe7_Classes.inhalt.closePath();
        Aufgabe7_Classes.inhalt.strokeStyle = "#5E610B";
        Aufgabe7_Classes.inhalt.stroke();
        Aufgabe7_Classes.inhalt.fillStyle = "#ffffff";
        Aufgabe7_Classes.inhalt.fill();
        //linker Berg
        Aufgabe7_Classes.inhalt.beginPath();
        Aufgabe7_Classes.inhalt.moveTo(0, 350);
        Aufgabe7_Classes.inhalt.lineTo(150, 150);
        Aufgabe7_Classes.inhalt.lineTo(300, 350);
        Aufgabe7_Classes.inhalt.closePath();
        Aufgabe7_Classes.inhalt.strokeStyle = "#5E610B";
        Aufgabe7_Classes.inhalt.stroke();
        Aufgabe7_Classes.inhalt.fillStyle = "#BDBDBD";
        Aufgabe7_Classes.inhalt.fill();
        //wei�e Spitze
        Aufgabe7_Classes.inhalt.beginPath();
        Aufgabe7_Classes.inhalt.moveTo(94, 225);
        Aufgabe7_Classes.inhalt.lineTo(150, 150);
        Aufgabe7_Classes.inhalt.lineTo(206, 225);
        Aufgabe7_Classes.inhalt.closePath();
        Aufgabe7_Classes.inhalt.strokeStyle = "#5E610B";
        Aufgabe7_Classes.inhalt.stroke();
        Aufgabe7_Classes.inhalt.fillStyle = "#ffffff";
        Aufgabe7_Classes.inhalt.fill();
        //rechter Berg
        Aufgabe7_Classes.inhalt.beginPath();
        Aufgabe7_Classes.inhalt.moveTo(700, 350);
        Aufgabe7_Classes.inhalt.lineTo(850, 200);
        Aufgabe7_Classes.inhalt.lineTo(1000, 350);
        Aufgabe7_Classes.inhalt.closePath();
        Aufgabe7_Classes.inhalt.strokeStyle = "#5E610B";
        Aufgabe7_Classes.inhalt.stroke();
        Aufgabe7_Classes.inhalt.fillStyle = "#BDBDBD";
        Aufgabe7_Classes.inhalt.fill();
        //wei�e Spitze
        Aufgabe7_Classes.inhalt.beginPath();
        Aufgabe7_Classes.inhalt.moveTo(775, 275);
        Aufgabe7_Classes.inhalt.lineTo(850, 200);
        Aufgabe7_Classes.inhalt.lineTo(925, 275);
        Aufgabe7_Classes.inhalt.closePath();
        Aufgabe7_Classes.inhalt.strokeStyle = "#5E610B";
        Aufgabe7_Classes.inhalt.stroke();
        Aufgabe7_Classes.inhalt.fillStyle = "#ffffff";
        Aufgabe7_Classes.inhalt.fill();
        //Hausdach
        Aufgabe7_Classes.inhalt.beginPath();
        Aufgabe7_Classes.inhalt.moveTo(750, 425);
        Aufgabe7_Classes.inhalt.lineTo(875, 250);
        Aufgabe7_Classes.inhalt.lineTo(1000, 425);
        Aufgabe7_Classes.inhalt.closePath();
        Aufgabe7_Classes.inhalt.strokeStyle = "#5E610B";
        Aufgabe7_Classes.inhalt.stroke();
        Aufgabe7_Classes.inhalt.fillStyle = "#B40404";
        Aufgabe7_Classes.inhalt.fill();
        //Hauswand
        Aufgabe7_Classes.inhalt.beginPath();
        Aufgabe7_Classes.inhalt.moveTo(750, 650);
        Aufgabe7_Classes.inhalt.lineTo(750, 425);
        Aufgabe7_Classes.inhalt.lineTo(1000, 425);
        Aufgabe7_Classes.inhalt.lineTo(1000, 650);
        Aufgabe7_Classes.inhalt.closePath();
        Aufgabe7_Classes.inhalt.strokeStyle = "#5E610B";
        Aufgabe7_Classes.inhalt.stroke();
        Aufgabe7_Classes.inhalt.fillStyle = "#3E80E9";
        Aufgabe7_Classes.inhalt.fill();
        //Fenster
        Aufgabe7_Classes.inhalt.beginPath();
        Aufgabe7_Classes.inhalt.moveTo(825, 525);
        Aufgabe7_Classes.inhalt.lineTo(925, 525);
        Aufgabe7_Classes.inhalt.lineTo(925, 450);
        Aufgabe7_Classes.inhalt.lineTo(825, 450);
        Aufgabe7_Classes.inhalt.closePath();
        Aufgabe7_Classes.inhalt.strokeStyle = "#5E610B";
        Aufgabe7_Classes.inhalt.stroke();
        Aufgabe7_Classes.inhalt.fillStyle = "#A9F5F2";
        Aufgabe7_Classes.inhalt.fill();
        //T�r
        Aufgabe7_Classes.inhalt.beginPath();
        Aufgabe7_Classes.inhalt.moveTo(825, 650);
        Aufgabe7_Classes.inhalt.lineTo(925, 650);
        Aufgabe7_Classes.inhalt.lineTo(925, 550);
        Aufgabe7_Classes.inhalt.lineTo(825, 550);
        Aufgabe7_Classes.inhalt.closePath();
        Aufgabe7_Classes.inhalt.strokeStyle = "#5E610B";
        Aufgabe7_Classes.inhalt.stroke();
        Aufgabe7_Classes.inhalt.fillStyle = "#8A4B08";
        Aufgabe7_Classes.inhalt.fill();
        //Bienenkorb
        drawbeehive(550, 450, "#8A4B08", "#000000");
        //feste Blumen
        let f1 = new Aufgabe7_Classes.Flower(725, 600, "Tulpe");
        f1.drawFlower1();
        let f2 = new Aufgabe7_Classes.Flower(675, 500, "Pusteblume");
        f2.drawFlower2();
        let f3 = new Aufgabe7_Classes.Flower(725, 440, "lilaBlume");
        f3.drawFlower3();
        //Blumenwiese
        for (var i = 0; i < 15; i++) {
            let f = new Aufgabe7_Classes.Flower(0, 0, "");
            f.setRandomFlowerField();
            console.log(f);
            Aufgabe7_Classes.flowers[i] = f;
        }
        //Hintergrund speichern
        saveBackground = Aufgabe7_Classes.inhalt.getImageData(0, 0, 1000, 700);
        //Anfangsposition der Bienen
        for (let i = 0; i < count; i++) {
            let b = new Aufgabe7_Classes.Bee(558, 420, "#FFB300", true);
            b.setRandomColor();
            Aufgabe7_Classes.bees[i] = b;
        }
        Aufgabe7_Classes.inhalt.canvas.addEventListener("click", newBee); //Bei Click auf den Canvas erscheint eine neue Biene
        Aufgabe7_Classes.inhalt.canvas.addEventListener("touch", newBee); //Bei Touch auf den Canvas erscheint eine neue Biene
        animate();
    }
    //Animation der Bienen
    function animate() {
        //Hintergrungbild das gespeichert wurde, wird aufgerufen
        Aufgabe7_Classes.inhalt.putImageData(saveBackground, 0, 0);
        for (let i = 0; i < Aufgabe7_Classes.bees.length; i++) {
            let b = Aufgabe7_Classes.bees[i];
            b.update();
        }
        window.setTimeout(animate, 22);
    }
    //Anfangsposition der neuen Biene
    function newBee(_event) {
        let b = new Aufgabe7_Classes.Bee(558, 420, "#FFB300", true);
        b.setRandomColor();
        Aufgabe7_Classes.bees.push(b);
        count++;
    }
    function drawbeehive(_x, _y, _fillColor, _fillColor2) {
        //Stiel
        Aufgabe7_Classes.inhalt.beginPath();
        Aufgabe7_Classes.inhalt.fillRect(_x, _y, 10, 90);
        Aufgabe7_Classes.inhalt.closePath();
        Aufgabe7_Classes.inhalt.fillStyle = _fillColor;
        Aufgabe7_Classes.inhalt.fill();
        //Rechteck
        Aufgabe7_Classes.inhalt.beginPath();
        Aufgabe7_Classes.inhalt.fillRect(_x - 30, _y - 60, 80, 70);
        Aufgabe7_Classes.inhalt.closePath();
        Aufgabe7_Classes.inhalt.fillStyle = _fillColor;
        Aufgabe7_Classes.inhalt.fill();
        //Kreis
        Aufgabe7_Classes.inhalt.beginPath();
        Aufgabe7_Classes.inhalt.arc(_x + 8, _y - 27, 16, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Classes.inhalt.closePath();
        Aufgabe7_Classes.inhalt.fillStyle = _fillColor2;
        Aufgabe7_Classes.inhalt.fill();
    }
})(Aufgabe7_Classes || (Aufgabe7_Classes = {}));
//# sourceMappingURL=mainProgram.js.map