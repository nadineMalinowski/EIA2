//Aufgabe: 3a-Sissa Summe
//Name: Nadine Malinowski
//Datum: 09.04.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

document.addEventListener('DOMContentLoaded', function () {
    let rice = 1;
    let color: boolean = true;
    let ergebnis = 0;
        
    for (let line = 0; line < 8; line++) {
      
        for (let field = 0; field < 8; field++){
           
            let div = document.createElement("div");
            document.body.appendChild(div);
          
            if (color == true) {
                div.style.backgroundColor = "black";
                div.style.color = "white";
                color = false;
            }
            else { 
                div.style.backgroundColor = "white";
                div.style.color = "black";
                color = true;
            }
          
            div.innerText = "" + rice;
            rice = rice *2;
        } 
        
        if  (color == true) {
             color = false;
        }
        else {
             color = true;
        }
    }
  
              
    document.getElementsByTagName("div")[0];
    let divList : NodeListOf<HTMLElement> = document.getElementsByTagName("div");
            
    for (let i: number = 0; i < 8; i++) {
        divList[i].addEventListener("click", differentColor);
                      
        function differentColor (): void { 
            if (divList[i].style.backgroundColor != "red"){
                divList[i].style.backgroundColor = "red";
            }
            else {
                if (i % 2 == 0){ 
                    divList[i].style.backgroundColor  = "black";
                }
                else {
                    divList[i].style.backgroundColor  = "white";
                }
            } 
        }               
    }
        document.getElementById("tooltip").textContent = "Dezimal: ";    
});

document.addEventListener("mousemove", function(event): void{
    let x: number = event.clientX;
    let y: number = event.clientY;
    
   
    document.getElementById("tooltip").style.position = "absolute";
    document.getElementById("tooltip").style.top = y + 15 + "px";
    document.getElementById("tooltip").style.left = x + 15 + "px";
    document.getElementById("tooltip").style.border = "3px solid darkblue";
    document.getElementById("tooltip").style.backgroundColor = "blue";
    document.getElementById("tooltip").style.padding = "10px";
    
}); 

