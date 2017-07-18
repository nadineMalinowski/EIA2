namespace Abschlussarbeit {
    
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let gesamterRegen: Regentropfen[];
    let image: ImageData;
    let n: number = 1;

    window.addEventListener("load", init);
    
    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        gesamterRegen = [];
        
        //Himmel
        crc2.fillStyle = "#58D3F7";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        
        drawSnow(45,650, "white");
        bild()
      for (let i:number = 0; i< n; i++) {
          gesamterRegen [i] = new Regentropfen();
          } }
      
        //Schnee
        function drawSnow(_x:number, _y:number, _fillColor:string): void {
            crc2.beginPath();
            crc2.arc(_x,_y,100,0*Math.PI,2*Math.PI);
            crc2.arc(_x+140,_y+5,120,0*Math.PI,2*Math.PI);
            crc2.arc(_x+200,_y,100,0*Math.PI,2*Math.PI);
            crc2.arc(_x+340,_y+5,130,0*Math.PI,2*Math.PI);
            crc2.arc(_x+460,_y+10,150,0*Math.PI,2*Math.PI);
            crc2.arc(_x+560,_y+15,130,0*Math.PI,2*Math.PI);
            crc2.arc(_x+660,_y+20,120,0*Math.PI,2*Math.PI);
            crc2.arc(_x+880,_y+30,200,0*Math.PI,2*Math.PI);
            crc2.closePath();
            crc2.fillStyle = _fillColor;
            crc2.fill();
        }
    
    //Löscht den blauen Regentropfen bei Klick
  /*  function klick(event: MouseEvent): void {
        //blauer Regentropfen nach Klick löschen
        for (let i:number = 0; i < gesamterRegen.length; i++){
        let r:Regentropfen = gesamterRegen[i];
            
        //Position des Klicks herrausfinden
        let clickx: number = event.clientx;
        let clicky: number = event.clienty;
            
        //Differenz zwischen der geklickten Position und der Position des Regentropfens ausrechnen
        let diffx: number = Math.abs(r.currentPosX - clickX);
        let diffy: number = Math.abs(r.currentPostY - clickY);
            
        //wenn Differenz zwischen geklickte Position und Position des Regentropfens kleiner 40 wird Regentropfen gelöscht
        if (diffx <= 40 && diffy <=40){
            gesamterRegen.splice(i, 1);//Regentropfen wird aus Array entfernt
            b++;//Zählt die blauen Regentropfen die gelöscht wurden durch
            }
        }    
    //Hintergrund speichern
        image = crc2.getImageData(0, 0, 1000, 700);
    
    //Regentropfen erstellen
    function bild():void {
        for (let i:number = 0; i < n; i++){
            let regen : Regentropfen = new Regentropfen();
            gesamterRegen.push(regen);
            console.log(regen);
            regen.draw();
            n++;
        }
        
        window.setTimeout(animate, 20);
        
        function animate(): void{
            //Hintergrund der gespeichert wurde wird aufgerufen
            crc2.putImageData(image, 0,0);
            for (let i: number = 0; i < gesamterRegen.length; i++) {
                let r: Regentropfen = gesamterRegen[i];
                r.update();
            }
            window.setTimeout(animate, 20);
        }
    }
}*/
