//Aufgabe: 5-Bienenschwarm
//Name: Nadine Malinowski
//Datum: 29.04.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


namespace Aufgabe5 {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    
    let x: number[] = [];
    let y: number[] = [];
    let count: number = 10;
    let saveBackground: ImageData;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
    
        //Himmel
        crc2.fillStyle = "#81F7F3";
        crc2.fillRect (0, 0, canvas.width, canvas.height/2);
         
        //Wiese
        crc2.fillStyle = "#64FE2E";
        crc2.fillRect(0, 350, canvas.width, canvas.height/2);
        
        //Sonne
        crc2.beginPath();
        crc2.arc(150,85,50,0*Math.PI,2*Math.PI);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();   
        crc2.fillStyle = "#FFFF00";
        crc2.fill();
         
        //linke Wolke
        crc2.beginPath();
        crc2.arc(200,80,30,0*Math.PI,2*Math.PI);
        crc2.arc(240,90,40,0*Math.PI,2*Math.PI);
        crc2.arc(280,60,50,0*Math.PI,2*Math.PI);
        crc2.arc(330,90,40,0*Math.PI,2*Math.PI);
        crc2.arc(280,100,40,0*Math.PI,2*Math.PI);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
         
        //rechte Wolke
        crc2.beginPath();
        crc2.arc(600,70,50,0*Math.PI,2*Math.PI);
        crc2.arc(540,70,30,0*Math.PI,2*Math.PI);
        crc2.arc(580,100,50,0*Math.PI,2*Math.PI);
        crc2.arc(650,80,60,0*Math.PI,2*Math.PI);
        crc2.arc(650,100,30,0*Math.PI,2*Math.PI);
        crc2.arc(690,100,40,0*Math.PI,2*Math.PI);
        crc2.arc(700,100,30,0*Math.PI,2*Math.PI);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        
        //linker mittiger Berg
        crc2.beginPath();
        crc2.moveTo(100,350); 
        crc2.lineTo(300,175); 
        crc2.lineTo(475,350);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke(); 
        crc2.fillStyle = "#A4A4A4";
        crc2.fill();
        //weiße Spitze
        crc2.beginPath();
        crc2.moveTo(266,205); 
        crc2.lineTo(300,175);
        crc2.lineTo(330,205);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        
        //rechter mittiger Berg
        crc2.beginPath();
        crc2.moveTo(600,350); 
        crc2.lineTo(750,200); 
        crc2.lineTo(900,350);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke(); 
        crc2.fillStyle = "#A4A4A4";
        crc2.fill();
        //weiße Spitze
        crc2.beginPath();
        crc2.moveTo(700,250); 
        crc2.lineTo(750,200);
        crc2.lineTo(800,250);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        
        //mittiger Berg
        crc2.beginPath();
        crc2.moveTo(300,350); 
        crc2.lineTo(500,100); 
        crc2.lineTo(700,350);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke(); 
        crc2.fillStyle = "#BDBDBD";
        crc2.fill();
        //weiße Spitze
        crc2.beginPath();
        crc2.moveTo(400,225); 
        crc2.lineTo(500,100);
        crc2.lineTo(600,225);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        
        //linker Berg
        crc2.beginPath();
        crc2.moveTo(0, 350); 
        crc2.lineTo(150,150); 
        crc2.lineTo(300, 350);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke(); 
        crc2.fillStyle = "#BDBDBD";
        crc2.fill();
        //weiße Spitze
        crc2.beginPath();
        crc2.moveTo(94,225); 
        crc2.lineTo(150,150);
        crc2.lineTo(206,225);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        
        //rechter Berg
        crc2.beginPath();
        crc2.moveTo(700, 350); 
        crc2.lineTo(850,200); 
        crc2.lineTo(1000, 350);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke(); 
        crc2.fillStyle = "#BDBDBD";
        crc2.fill();
        //weiße Spitze
        crc2.beginPath();
        crc2.moveTo(775,275); 
        crc2.lineTo(850,200);
        crc2.lineTo(925,275);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        
        //Hausdach
        crc2.beginPath();
        crc2.moveTo(750,425); 
        crc2.lineTo(875,250); 
        crc2.lineTo(1000,425);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke(); 
        crc2.fillStyle = "#B40404";
        crc2.fill();
        //Hauswand
        crc2.beginPath();
        crc2.moveTo(750,650); 
        crc2.lineTo(750,425);
        crc2.lineTo(1000,425);
        crc2.lineTo(1000,650);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#3E80E9";
        crc2.fill();
        //Fenster
        crc2.beginPath();
        crc2.moveTo(825,525); 
        crc2.lineTo(925,525);
        crc2.lineTo(925,450);
        crc2.lineTo(825,450);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#A9F5F2";
        crc2.fill();
        //Tür
        crc2.beginPath();
        crc2.moveTo(825,650); 
        crc2.lineTo(925,650);
        crc2.lineTo(925,550);
        crc2.lineTo(825,550);
        crc2.closePath();
        crc2.strokeStyle = "#5E610B";
        crc2.stroke();
        crc2.fillStyle = "#8A4B08";
        crc2.fill();  
        
        //pinke Blume
        drawFlower1(725,600, "#088A29", "#FF00BF");
        drawFlower1(150,450, "#088A29", "#FF00BF");
        drawFlower1(350,550, "#088A29", "#FF00BF");
        drawFlower1(400,700, "#088A29", "#FF00BF");
        drawFlower1(375,600, "#088A29", "#FF00BF");
        //gelbe Blume
        drawFlower2(675,500, "#088A29", "#FFFF00");
        drawFlower2(50,500, "#088A29", "#FFFF00");
        drawFlower2(50,600, "#088A29", "#FFFF00");
        drawFlower2(150,530, "#088A29", "#FFFF00");
        drawFlower2(100,450, "#088A29", "#FFFF00");
        //lila Blume
        drawFlower3(725,440, "#088A29", "#FFBF00", "#CC2EFA");
        drawFlower3(350,675, "#088A29", "#FFBF00", "#CC2EFA");
        drawFlower3(275,440, "#088A29", "#FFBF00", "#CC2EFA");
        drawFlower3(600,650, "#088A29", "#FFBF00", "#CC2EFA");
        drawFlower3(200,550, "#088A29", "#FFBF00", "#CC2EFA");
        //Bienenkorb
        drawbeehive(550,450, "#8A4B08", "#000000");
        //Biene
        drawBee(x[i], y[i],"#FFFF00", "#000000");
        
        //Blumenwiese
            for (var i: number = 0; i < 15; i ++) {
                let flowerField: number = Math.floor((Math.random()*3) + 0);
                let _x: number = Math.floor(Math.random() * (400-0)) + 0;
                let _y: number = Math.floor(Math.random() * (700-350)) + 350;
            
                switch (flowerField) {
                    case 0:
                        drawFlower1(_x,_y,"#088A29","#FF00BF");
                        break;
                    case 1:
                        drawFlower2(_x,_y,"#088A29","#FFFF00");
                        break;
                    case 2:
                        drawFlower3(_x,_y,"#088A29","#FFBF00","#CC2EFA");
                        break; 
                    default:
                        break;  
                }
            }
    
        //Hintergrund speichern
        saveBackground = crc2.getImageData(0, 0, 1000, 700);
        
        //Anfangsposition der Bienen
        for (let i: number = 0; i < count; i++) {
            x[i] = 558;
            y[i] = 410;
        }
        
        //Animation der Bienen
        function animate(): void {
            //Hintergrungbild das gespeichert wurde, wird aufgerufen
            crc2.putImageData(saveBackground, 0, 0);

            for (let i: number = 0; i < count; i++) {
                x[i] += Math.random() * 1 - 2;
                y[i] += Math.random() * 4 - 2;
            
                //Malen der Bienen an der neuen Position
                drawBee(x[i], y[i],"#FFFF00", "#000000");
            
                //Bienen erscheinen am gegenüberliegen Rand
                if (x[i] >= 1000)
                    x[i] = 0;
            
                if (y[i] <= 0)
                    y[i] = 700;
            
                if (x[i] < 0)
                    x[i] = 1000;
            
                if (y[i] > 700)
                    y[i] = 0;
            }
        window.setTimeout(animate, 22);
        }

        function drawFlower1(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            //Stängel
            crc2.beginPath(); 
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y-50);
            crc2.lineTo(_x, _y);
            crc2.lineTo(_x+10, _y-30);
            crc2.lineTo(_x, _y);
            crc2.lineTo(_x-10, _y-30);
            crc2.closePath();
            crc2.stroke();
            //Blüte
            crc2.beginPath();
            crc2.arc(_x, _y-50, 14,0*Math.PI,1*Math.PI);
            crc2.lineTo(_x-10, _y-60);
            crc2.lineTo(_x-5, _y-52);
            crc2.lineTo(_x, _y-60);
            crc2.lineTo(_x+5, _y-52);
            crc2.lineTo(_x+10, _y-60);
            crc2.closePath();
            crc2.fillStyle = _fillColor;
            crc2.fill();
        }
      
        function drawFlower2(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            //Stängel
            crc2.beginPath(); 
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y-50);
            crc2.lineTo(_x, _y);
            crc2.lineTo(_x+10, _y-30);
            crc2.lineTo(_x, _y);
            crc2.lineTo(_x-10, _y-30);
            crc2.closePath();
            crc2.stroke();
            //Blüte
            crc2.beginPath();
            crc2.arc(_x, _y-50, 12,0*Math.PI,2*Math.PI);
            crc2.closePath();
            crc2.fillStyle = _fillColor;
            crc2.fill();   
        }  
    
        function drawFlower3(_x: number, _y: number, _strokeColor: string, _fillColor: string, _fillFlower:string): void {
            //Stängel
            crc2.beginPath(); 
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y-50);
            crc2.lineTo(_x, _y);
            crc2.lineTo(_x+10, _y-30);
            crc2.lineTo(_x, _y);
            crc2.lineTo(_x-10, _y-30);
            crc2.closePath();
            crc2.stroke();
            //Blüte  
            crc2.beginPath();
            crc2.arc(_x, _y-60, 10,0*Math.PI,2*Math.PI);
            crc2.arc(_x+10, _y-50, 10,0*Math.PI,2*Math.PI);
            crc2.arc(_x+1, _y-42, 10,0*Math.PI,2*Math.PI);
            crc2.arc(_x-10, _y-50, 10,0*Math.PI,2*Math.PI);
            crc2.closePath();
            crc2.fillStyle = _fillFlower;
            crc2.fill();
            //Kreis
            crc2.beginPath();
            crc2.arc(_x, _y-50, 7,0*Math.PI,2*Math.PI);
            crc2.closePath();
            crc2.fillStyle = _fillColor;
            crc2.fill();   
        }
    
        function drawbeehive(_x: number, _y: number,_fillColor: string,_fillColor2: string): void {
            //Stiel
            crc2.beginPath();
            crc2.fillRect (_x, _y, 10, 90);
            crc2.closePath();
            crc2.fillStyle = _fillColor;
            crc2.fill();
            //Rechteck
            crc2.beginPath();
            crc2.fillRect (_x-30, _y-60, 80, 70);
            crc2.closePath();
            crc2.fillStyle = _fillColor;
            crc2.fill()
            //Kreis
            crc2.beginPath();
            crc2.arc(_x+8, _y-27, 16,0*Math.PI,2*Math.PI);
            crc2.closePath();
            crc2.fillStyle = _fillColor2;
            crc2.fill()
        }
        
        //Anfangsposition der neuen Biene
        function newBee (_event: Event): void {
            x.push(558);
            y.push(420);
            count ++; 
        }
        
        window.setTimeout(animate, 22);
        canvas.addEventListener("click", newBee);//Bei Click auf den Canvas erscheint eine neue Biene
        canvas.addEventListener("touch", newBee);//Bei Touch auf den Canvas erscheint eine neue Biene
        
        function drawBee(x: number, y: number, _fillColor1: string, _fillColor2: string): void {
            crc2.beginPath();
            crc2.fillRect (x, y, 3, 9);
            crc2.closePath();
            crc2.fillStyle = _fillColor1;
            crc2.fill();
            crc2.beginPath();
            crc2.fillRect(x-3, y, 3, 9);
            crc2.closePath();
            crc2.fillStyle = _fillColor1;
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x-7, y+5, 3,0*Math.PI,2*Math.PI);
            crc2.closePath();
            crc2.fillStyle = _fillColor2;
            crc2.fill();
            crc2.beginPath();
            crc2.fillRect (x+6, y, 3, 9);
            crc2.closePath();
            crc2.fillStyle = _fillColor1;
            crc2.fill(); 
            crc2.beginPath();
            crc2.fillRect (x+3, y, 3, 9);
            crc2.closePath();
            crc2.fillStyle = _fillColor2;
            crc2.fill()
        }
    }  
}