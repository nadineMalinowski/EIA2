var Abschlussarbeit;
(function (Abschlussarbeit) {
    let image;
    let n = 1;
    window.addEventListener("load", init);
    function init(_event) {
        Abschlussarbeit.canvas = document.getElementsByTagName("canvas")[0];
        Abschlussarbeit.crc2 = Abschlussarbeit.canvas.getContext("2d");
        Abschlussarbeit.gesamterRegen = [];
        //Himmel
        Abschlussarbeit.crc2.fillStyle = "#58D3F7";
        Abschlussarbeit.crc2.fillRect(0, 0, Abschlussarbeit.canvas.width, Abschlussarbeit.canvas.height);
        drawSnow(45, 650, "white");
        bild();
        for (let i = 0; i < n; i++) {
            Abschlussarbeit.gesamterRegen[i] = new Abschlussarbeit.Regentropfen();
        }
        //Schnee
        function drawSnow(_x, _y, _fillColor) {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(_x, _y, 100, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.arc(_x + 140, _y + 5, 120, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.arc(_x + 200, _y, 100, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.arc(_x + 340, _y + 5, 130, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.arc(_x + 460, _y + 10, 150, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.arc(_x + 560, _y + 15, 130, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.arc(_x + 660, _y + 20, 120, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.arc(_x + 880, _y + 30, 200, 0 * Math.PI, 2 * Math.PI);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fillStyle = _fillColor;
            Abschlussarbeit.crc2.fill();
        }
        //L�scht den blauen Regentropfen bei Klick
        /*  function klick(event: MouseEvent): void {
              //blauer Regentropfen nach Klick l�schen
              for (let i:number = 0; i < gesamterRegen.length; i++){
              let r:Regentropfen = gesamterRegen[i];
                  
              //Position des Klicks herrausfinden
              let clickx: number = event.clientx;
              let clicky: number = event.clienty;
                  
              //Differenz zwischen der geklickten Position und der Position des Regentropfens ausrechnen
              let diffx: number = Math.abs(r.currentPosX - clickX);
              let diffy: number = Math.abs(r.currentPostY - clickY);
                  
              //wenn Differenz zwischen geklickte Position und Position des Regentropfens kleiner 40 wird Regentropfen gel�scht
              if (diffx <= 40 && diffy <=40){
                  gesamterRegen.splice(i, 1);//Regentropfen wird aus Array entfernt
                  b++;//Z�hlt die blauen Regentropfen die gel�scht wurden durch
                  }
              }
          }*/
        //Hintergrund speichern
        image = Abschlussarbeit.crc2.getImageData(0, 0, 1000, 700);
        //Regentropfen erstellen
        function bild() {
            for (let i = 0; i < n; i++) {
                let regen = new Abschlussarbeit.Regentropfen();
                Abschlussarbeit.gesamterRegen.push(regen);
                console.log(regen);
                regen.draw();
                n++;
            }
            window.setTimeout(animate, 20);
            function animate() {
                //Hintergrund der gespeichert wurde wird aufgerufen
                Abschlussarbeit.crc2.putImageData(image, 0, 0);
                for (let i = 0; i < Abschlussarbeit.gesamterRegen.length; i++) {
                    let r = Abschlussarbeit.gesamterRegen[i];
                    r.update();
                }
                window.setTimeout(animate, 20);
            }
        }
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=main.js.map