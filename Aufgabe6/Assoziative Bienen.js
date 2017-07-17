//Aufgabe: 6a- Assoziative Bienen
//Name: Nadine Malinowski
//Datum: 06.05.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe6a;
(function (Aufgabe6a) {
    window.addEventListener("load", init);
    let crc2;
    let bees = [];
    let count = 10;
    let saveBackground;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        //Himmel
        crc2.fillStyle = "#81F7F3";
        crc2.fillRect(0, 0, canvas.width, canvas.height / 2);
        //Wiese
        crc2.fillStyle = "#64FE2E";
        crc2.fillRect(0, 350, canvas.width, canvas.height / 2);
        //Sonne
        crc2.beginPath();
        crc2.arc(150, 85, 50, 0 * Math.PI, 2 * Math.PI);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#FFFF00";
        crc2.fill();
        //linke Wolke
        crc2.beginPath();
        crc2.arc(200, 80, 30, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(240, 90, 40, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(280, 60, 50, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(330, 90, 40, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(280, 100, 40, 0 * Math.PI, 2 * Math.PI);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        //rechte Wolke
        crc2.beginPath();
        crc2.arc(600, 70, 50, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(540, 70, 30, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(580, 100, 50, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(650, 80, 60, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(650, 100, 30, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(690, 100, 40, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(700, 100, 30, 0 * Math.PI, 2 * Math.PI);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        //linker mittiger Berg
        crc2.beginPath();
        crc2.moveTo(100, 350);
        crc2.lineTo(300, 175);
        crc2.lineTo(475, 350);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#A4A4A4";
        crc2.fill();
        //wei�e Spitze
        crc2.beginPath();
        crc2.moveTo(266, 205);
        crc2.lineTo(300, 175);
        crc2.lineTo(330, 205);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        //rechter mittiger Berg
        crc2.beginPath();
        crc2.moveTo(600, 350);
        crc2.lineTo(750, 200);
        crc2.lineTo(900, 350);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#A4A4A4";
        crc2.fill();
        //wei�e Spitze
        crc2.beginPath();
        crc2.moveTo(700, 250);
        crc2.lineTo(750, 200);
        crc2.lineTo(800, 250);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        //mittiger Berg
        crc2.beginPath();
        crc2.moveTo(300, 350);
        crc2.lineTo(500, 100);
        crc2.lineTo(700, 350);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#BDBDBD";
        crc2.fill();
        //wei�e Spitze
        crc2.beginPath();
        crc2.moveTo(400, 225);
        crc2.lineTo(500, 100);
        crc2.lineTo(600, 225);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        //linker Berg
        crc2.beginPath();
        crc2.moveTo(0, 350);
        crc2.lineTo(150, 150);
        crc2.lineTo(300, 350);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#BDBDBD";
        crc2.fill();
        //wei�e Spitze
        crc2.beginPath();
        crc2.moveTo(94, 225);
        crc2.lineTo(150, 150);
        crc2.lineTo(206, 225);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        //rechter Berg
        crc2.beginPath();
        crc2.moveTo(700, 350);
        crc2.lineTo(850, 200);
        crc2.lineTo(1000, 350);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#BDBDBD";
        crc2.fill();
        //wei�e Spitze
        crc2.beginPath();
        crc2.moveTo(775, 275);
        crc2.lineTo(850, 200);
        crc2.lineTo(925, 275);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        //Hausdach
        crc2.beginPath();
        crc2.moveTo(750, 425);
        crc2.lineTo(875, 250);
        crc2.lineTo(1000, 425);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#B40404";
        crc2.fill();
        //Hauswand
        crc2.beginPath();
        crc2.moveTo(750, 650);
        crc2.lineTo(750, 425);
        crc2.lineTo(1000, 425);
        crc2.lineTo(1000, 650);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#3E80E9";
        crc2.fill();
        //Fenster
        crc2.beginPath();
        crc2.moveTo(825, 525);
        crc2.lineTo(925, 525);
        crc2.lineTo(925, 450);
        crc2.lineTo(825, 450);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#A9F5F2";
        crc2.fill();
        //T�r
        crc2.beginPath();
        crc2.moveTo(825, 650);
        crc2.lineTo(925, 650);
        crc2.lineTo(925, 550);
        crc2.lineTo(825, 550);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#8A4B08";
        crc2.fill();
        //pinke Blume
        drawFlower1(725, 600, "#088A29", "#FF00BF");
        drawFlower1(150, 450, "#088A29", "#FF00BF");
        drawFlower1(350, 550, "#088A29", "#FF00BF");
        drawFlower1(400, 700, "#088A29", "#FF00BF");
        drawFlower1(375, 600, "#088A29", "#FF00BF");
        //gelbe Blume
        drawFlower2(675, 500, "#088A29", "#FFFF00");
        drawFlower2(50, 500, "#088A29", "#FFFF00");
        drawFlower2(50, 600, "#088A29", "#FFFF00");
        drawFlower2(150, 530, "#088A29", "#FFFF00");
        drawFlower2(100, 450, "#088A29", "#FFFF00");
        //lila Blume
        drawFlower3(725, 440, "#088A29", "#FFBF00", "#CC2EFA");
        drawFlower3(350, 675, "#088A29", "#FFBF00", "#CC2EFA");
        drawFlower3(275, 440, "#088A29", "#FFBF00", "#CC2EFA");
        drawFlower3(600, 650, "#088A29", "#FFBF00", "#CC2EFA");
        drawFlower3(200, 550, "#088A29", "#FFBF00", "#CC2EFA");
        //Bienenkorb
        drawbeehive(550, 450, "#8A4B08", "#000000");
        //Blumenwiese
        for (var i = 0; i < 15; i++) {
            let flowerField = Math.floor((Math.random() * 3) + 0);
            let _x = Math.floor(Math.random() * (400 - 0)) + 0;
            let _y = Math.floor(Math.random() * (700 - 350)) + 350;
            switch (flowerField) {
                case 0:
                    drawFlower1(_x, _y, "#088A29", "#FF00BF");
                    break;
                case 1:
                    drawFlower2(_x, _y, "#088A29", "#FFFF00");
                    break;
                case 2:
                    drawFlower3(_x, _y, "#088A29", "#FFBF00", "#CC2EFA");
                    break;
                default:
                    break;
            }
        }
        //Hintergrund speichern
        saveBackground = crc2.getImageData(0, 0, 1000, 700);
        //Anfangsposition der Bienen
        for (let i = 0; i < count; i++) {
            let size1;
            let random = Math.round(Math.random());
            if (random == 1) {
                size1 = true;
            }
            if (random == 0) {
                size1 = false;
            }
            let b = { x: 558, y: 420, size: size1, color: "#FFB300" };
            bees[i] = b;
        }
        crc2.canvas.addEventListener("click", newBee); //Bei Click auf den Canvas erscheint eine neue Biene
        crc2.canvas.addEventListener("touch", newBee); //Bei Touch auf den Canvas erscheint eine neue Biene
        animate();
    }
    //Animation der Bienen
    function animate() {
        //Hintergrungbild das gespeichert wurde, wird aufgerufen
        crc2.putImageData(saveBackground, 0, 0);
        for (let i = 0; i < count; i++) {
            let b = bees[i];
            b.x += Math.random() * 1 - 2;
            b.y += Math.random() * 4 - 2;
            //Malen der Bienen an der neuen Position
            drawBee(b.x, b.y, b.size, b.color);
            //Bienen erscheinen am gegen�berliegen Rand
            if (b.x >= 1000)
                b.y = 0;
            if (b.x <= 0)
                b.y = 700;
            if (b.x < 0)
                b.y = 1000;
            if (b.x > 700)
                b.y = 0;
        }
        window.setTimeout(animate, 22);
    }
    //Anfangsposition der neuen Biene
    function newBee(_event) {
        let size2;
        let random = Math.round(Math.random());
        if (random == 1) {
            size2 = true;
        }
        if (random == 0) {
            size2 = false;
        }
        let bee = { x: 558, y: 420, size: size2, color: "#FFB300" };
        bees.push(bee);
        count++;
    }
    function drawFlower1(_x, _y, _strokeColor, _fillColor) {
        //St�ngel
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 50);
        crc2.lineTo(_x, _y);
        crc2.lineTo(_x + 10, _y - 30);
        crc2.lineTo(_x, _y);
        crc2.lineTo(_x - 10, _y - 30);
        crc2.closePath();
        crc2.stroke();
        //Bl�te
        crc2.beginPath();
        crc2.arc(_x, _y - 50, 14, 0 * Math.PI, 1 * Math.PI);
        crc2.lineTo(_x - 10, _y - 60);
        crc2.lineTo(_x - 5, _y - 52);
        crc2.lineTo(_x, _y - 60);
        crc2.lineTo(_x + 5, _y - 52);
        crc2.lineTo(_x + 10, _y - 60);
        crc2.closePath();
        crc2.fillStyle = _fillColor;
        crc2.fill();
    }
    function drawFlower2(_x, _y, _strokeColor, _fillColor) {
        //St�ngel
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 50);
        crc2.lineTo(_x, _y);
        crc2.lineTo(_x + 10, _y - 30);
        crc2.lineTo(_x, _y);
        crc2.lineTo(_x - 10, _y - 30);
        crc2.closePath();
        crc2.stroke();
        //Bl�te
        crc2.beginPath();
        crc2.arc(_x, _y - 50, 12, 0 * Math.PI, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = _fillColor;
        crc2.fill();
    }
    function drawFlower3(_x, _y, _strokeColor, _fillColor, _fillFlower) {
        //St�ngel
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 50);
        crc2.lineTo(_x, _y);
        crc2.lineTo(_x + 10, _y - 30);
        crc2.lineTo(_x, _y);
        crc2.lineTo(_x - 10, _y - 30);
        crc2.closePath();
        crc2.stroke();
        //Bl�te  
        crc2.beginPath();
        crc2.arc(_x, _y - 60, 10, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(_x + 10, _y - 50, 10, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(_x + 1, _y - 42, 10, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(_x - 10, _y - 50, 10, 0 * Math.PI, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = _fillFlower;
        crc2.fill();
        //Kreis
        crc2.beginPath();
        crc2.arc(_x, _y - 50, 7, 0 * Math.PI, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = _fillColor;
        crc2.fill();
    }
    function drawbeehive(_x, _y, _fillColor, _fillColor2) {
        //Stiel
        crc2.beginPath();
        crc2.fillRect(_x, _y, 10, 90);
        crc2.closePath();
        crc2.fillStyle = _fillColor;
        crc2.fill();
        //Rechteck
        crc2.beginPath();
        crc2.fillRect(_x - 30, _y - 60, 80, 70);
        crc2.closePath();
        crc2.fillStyle = _fillColor;
        crc2.fill();
        //Kreis
        crc2.beginPath();
        crc2.arc(_x + 8, _y - 27, 16, 0 * Math.PI, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = _fillColor2;
        crc2.fill();
    }
    function drawBee(x, y, _size, _color) {
        if (_size == true) {
            crc2.beginPath();
            crc2.fillRect(x, y, 3, 9);
            crc2.closePath();
            crc2.fillStyle = _color;
            crc2.fill();
            crc2.beginPath();
            crc2.fillRect(x - 3, y, 3, 9);
            crc2.closePath();
            crc2.fillStyle = _color;
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x - 7, y + 5, 3, 0 * Math.PI, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.beginPath();
            crc2.fillRect(x + 6, y, 3, 9);
            crc2.closePath();
            crc2.fillStyle = _color;
            crc2.fill();
            crc2.beginPath();
            crc2.fillRect(x + 3, y, 3, 9);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
        }
        if (_size == false) {
            crc2.beginPath();
            crc2.fillRect(x - 1, y, 5, 12);
            crc2.closePath();
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.beginPath();
            crc2.fillRect(x - 3, y, 5, 12);
            crc2.closePath();
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x - 7, y + 6, 5, 0 * Math.PI, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.beginPath();
            crc2.fillRect(x + 6, y, 5, 12);
            crc2.closePath();
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.beginPath();
            crc2.fillRect(x + 4, y, 5, 12);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
        }
    }
})(Aufgabe6a || (Aufgabe6a = {}));
//# sourceMappingURL=Assoziative Bienen.js.map