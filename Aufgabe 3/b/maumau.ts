
//Aufgabe: 3b-MauMau
//Name: Nadine Malinowski
//Datum: 09.04.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. 


   //Variablen deklarieren
    let Nachziehstapel: HTMLDivElement;
    let Handstapel: NodeListOf<HTMLDivElement>;
    let Ablagestapel: HTMLDivElement;
    let Spielkarten: string[];
    
    document.addEventListener("DOMContentLoaded", function(): void { 

        Spielkarten = ["Herz 7", "Piek 7","Kreuz 7", "Karo 7", "Herz 8", "Kreuz 8", "Karo 8", "Piek 8", 
                       "Herz 9", "Piek 9", "Kreuz 9", "Karo 9", "Herz 10", "Piek 10", "Kreuz 10", "Herz Bube",  
                       "Piek Bube", "Kreuz Bube ", "Karo Bube", "Piek Dame", "Herz Dame", "Kreuz Dame", 
                       "Karo Dame", "Piek Koenig", "Kreuz Koenig", "Karo Koenig", "Herz Koenig", 
                       "Piek Ass", "Kreuz Ass", "Karo Ass", "Herz Ass"];
  
        Nachziehstapel = <HTMLDivElement>document.getElementById("Nachziehstapel");
        Nachziehstapel.addEventListener("click", KarteAufnehmen); //Klick auf den Nachziehstapel (Funktion KarteAufnehmen, Zeile 30, wird aktiviert)
    
        Handstapel = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("KarteAufHand");
    
        for (let z: number = 0; z < Handstapel.length; z++) { //durchläuft den Handstapel der einzelnen divs
             Handstapel[z].addEventListener("click", KartenAblegen); 
        }
    
        Ablagestapel = <HTMLDivElement>document.getElementById("KarteAblegen");
    });


    function KarteAufnehmen(): void {

        let Karten: string = Spielkarten.splice(Math.round(Math.random() * (Spielkarten.length - 1)), 1)[0]; //splice = Schneidet die Karte herraus
        
        let Handkarte: HTMLDivElement = leereKarten(); //definiert leere Handkarte
        if (Handkarte != null) { // wenn eine leere, freie Handkarte vorhanden ist....
        Handkarte.innerText = Karten; //...bekommt sie einen "Text" aus dem array
        }

        if (Spielkarten.length === 0) { //wenn alle Spielkarten verbraucht sind...
            Nachziehstapel.style.display = "none"; //...werden sie ausgeblendet.
           }
        }

        function leereKarten(): HTMLDivElement { //findet herraus welche karten leer sind oder ob überhaupt welche leer sind

            for (let i: number = 0; i < Handstapel.length; i++) { //durchläuft die Handkarten divs...
                if (Handstapel[i].textContent === "") { //...wenn Inhalt vorhanden ist
                return Handstapel[i];
                }
            }

            return null; 
        }

        function KartenAblegen(_event: Event): void {
    
                let element: HTMLDivElement = <HTMLDivElement>_event.target;
                Ablagestapel.textContent = element.textContent; 
                element.textContent = ""; //der Inhalt der Handkarte wird gelöscht
        }





