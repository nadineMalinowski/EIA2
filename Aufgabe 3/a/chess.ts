//Aufgabe: 2a-Dynamic HTML
//Name: Nadine Malinowski
//Datum: 01.04.2017
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
                calculateSum();
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
        var ausgabe: string;
        //Die Reiskörner werden als Dezimalzahl und als Hexadezimalzahl ausgegeben
        //ausgabe = "Dezimal: " + summe.toString() + " | Hexadezimal: " + summe.toString(16); 
        document.getElementById("tooltip").textContent = "HUGO";    

//document.addEventListener("mousemove", function (Event) {
//    document.getElementById("tooltip").style.left = 10 + "px";
//    document.getElementById("tooltip").style.top = 20 + "px";
//});


document.addEventListener("mousemove", function(event): void{
    //Koordinaten der Maus
    var x: number = event.clientX;
    var y: number = event.clientY;
    
    //Div-Element, welches an der Maus hängt, wird gestyled
    document.getElementById("tooltip").style.position = "absolute";
    document.getElementById("tooltip").style.top = y + 13 + "px";
    document.getElementById("tooltip").style.left = x + 13 + "px";
    document.getElementById("tooltip").style.border = "3px solid darkblue";
    document.getElementById("tooltip").style.backgroundColor = "blue";
    document.getElementById("tooltip").style.padding = "10px";
    
}); 

