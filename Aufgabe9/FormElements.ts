//Aufgabe: 9-FormElements
//Name: Nadine Malinowski
//Datum: 04.06.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace FormElements {
    window.addEventListener("load", init);
    
    //Array aller Eissorten
    let Eissorten: string[] = ["Erdbeere", "Zirtone", "Vanille", "Schokolade", "Nuss", "Melone", "Joghurt", "Banane", "Kuerbis", "Minze", "Cookie"];
    let inputsEis: HTMLInputElement[] = [];
    
    //Array aller Zusaetze
    let zusaetze: string[] = ["Sahne", "Vanillesosse", "Schokososse", "Streusel"];
    let inputsZusaetze: HTMLInputElement[] = [];
    
    //Array aller Darreichungsformen
    let Darreichungsform: string[] = ["Waffel", "Becher"];
    let inputsDarreichung: HTMLInputElement[] = [];

    //HTMLElemente kreieren
    let Darreichung: HTMLElement;
    let Eis: HTMLElement;
    let Zusaetze: HTMLElement;
    let Bestelluebersicht: HTMLElement;
    let Bestellbutton: HTMLElement;
    
    
    function init(): void {
        Eis = document.getElementById("Eissorten"); //auf Eisssorten im HTML zugreifen
        Eis.addEventListener("change", change); 
        
        Zusaetze = document.getElementById("Zusaetze");//auf Zusaetze im HTML zugreifen
        Zusaetze.addEventListener("change", change);
        
        Darreichung = document.getElementById("Darreichungsform");//auf Darreichungsformen im HTML zugreifen
        Darreichung.addEventListener("change", change);
        
        Bestelluebersicht = document.getElementById("Bestelluebersicht");//auf Bestelluebersicht im HTML zugreifen
        
        Bestellbutton = document.getElementById("BestellungAbschicken");//auf Bestellbutton im HTML zugreifen
        Bestellbutton.addEventListener("click", BestellungPruefen);
        
        createEissorten();
        createZusaetze();  
        createDarreichungsform();     
    }

 
    //Input Eisssorten kreieren
    function createEissorten(): void {
        for (let i: number = 0; i < Eissorten.length; i++) {
            createInput(Eissorten[i]);
        }
    }
    function createInput(_Eissorte: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _Eissorte;
        label.appendChild(input);
        input.type = "number"; //Art des Inputs
        input.min = "0";
        input.max = "20";
        input.value = "0";
        label.id = _Eissorte;
        Eis.appendChild(label);
        inputsEis.push(input);
    }

    //Input Zusaetze kreieren
    function createZusaetze(): void {
        for (let i: number = 0; i < zusaetze.length; i++) {
            createCheckbox(zusaetze[i]);
        }
    }
    function createCheckbox(_Checkboxen: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _Checkboxen;
        label.appendChild(input);
        input.type = "checkbox"; //Art des Inputs
        label.id= _Checkboxen;
        Zusaetze.appendChild(label);
        inputsZusaetze.push(input);
    }
    
    //Input Darreichungsform kreieren
    function createDarreichungsform(): void {
         for (let i: number = 0; i < Darreichungsform.length; i++) {
            createRadio(Darreichungsform[i]);
        }
    }
    function createRadio(_Radiobutton: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _Radiobutton;
        label.appendChild(input);
        input.type = "radio"; //Art des Inputs
        input.name = "Radiobutton";
        label.id = _Radiobutton;
        Darreichung.appendChild(label);
        inputsDarreichung.push(input);
    } 
    
    
    //Zeigt ausgew‰hlte Produkte mit ihren Preisen in der Bestell¸bersicht an
    function changeWarenuebersicht(_summe: number): void {
        let BestellungUebersicht: HTMLElement = document.getElementById("Warenuebersicht");
            BestellungUebersicht.innerText = "";
        
        for (let i: number = 0; i < inputsEis.length; i++) {
            if(parseInt(inputsEis[i].value) > 0){
                BestellungUebersicht.innerText += Eissorten[i] + " " + (parseInt(inputsEis[i].value)*1) + "Euro" + "\n";
            }
        }
        for (let i: number = 0; i < inputsZusaetze.length; i++) {
            if(inputsZusaetze[i].checked){
                BestellungUebersicht.innerText += zusaetze[i] + " 0.30 Euro" + "\n";
            }
        } 
        //Summe wird in HTML geschrieben
        let summeHtml: HTMLElement = document.getElementById("Gesamtsumme");
        summeHtml.innerText = _summe.toString() + " Euro";   
    } 
    
   
     function change(): void {
        let summe: number = 0;
        for (let i: number = 0; i < inputsEis.length; i++) {
            summe += parseInt(inputsEis[i].value); // Preis wird immer der Summer addiert oder subtrahiert, wenn die Zahl im Inputfeld ver‰ndert wird
        }
        for (let i: number = 0; i < inputsZusaetze.length; i++) {
            if(inputsZusaetze[i].checked) //Preis wird immer der Summer addiert oder subtrahiert, wenn ein Zusatz im Inputfeld angeklickt wird
            {summe += 0.30;}
        }    
        changeWarenuebersicht(summe);
    }
    
    
    //Bestellung wird auf Vollstaendigkeit und Richtigkeit ueberprueft
    function BestellungPruefen(): void {
        let Pruefung: string[] = ["Bitte folgende Eingaben ueberpruefen! \n"];
        
        //Name
        let Name: HTMLInputElement = <HTMLInputElement> document.getElementById("Name");
            if (Name.validity.valid == false) {
                 Pruefung.push("Name \n");
                Name.style.backgroundColor = "#FA5858";
                }
           else {
                Name.style.backgroundColor = "white";
        }
        
        //Vorname
        let Vorname: HTMLInputElement = <HTMLInputElement> document.getElementById("Vorname");
            if (Vorname.validity.valid == false) {
                Pruefung.push("Vorname \n")
                Vorname.style.backgroundColor = "#FA5858";
                }
           else {
                Vorname.style.backgroundColor = "white";
        }
        
        //Straﬂe
        let Strasse: HTMLInputElement = <HTMLInputElement> document.getElementById("Strasse");
            if (Strasse.validity.valid == false) {
                Pruefung.push("Strasse \n");
                 Strasse.style.backgroundColor = "#FA5858";
                }
           else {
                Strasse.style.backgroundColor = "white";
        }
        
        //Ort, PLZ
        let OrtPLZ: HTMLInputElement = <HTMLInputElement> document.getElementById("Ort,PLZ");
            if (OrtPLZ.validity.valid == false) {
                Pruefung.push("Ort, PLZ \n");
                OrtPLZ.style.backgroundColor = "#FA5858";
                }
           else {
                OrtPLZ.style.backgroundColor = "white";
        }
        
        //Email
        let Mail: HTMLInputElement = <HTMLInputElement> document.getElementById("Email");
            if (Mail.validity.valid == false) {
                Pruefung.push("Email \n");
                Mail.style.backgroundColor = "#FA5858";
                }
           else {
                Mail.style.backgroundColor = "white";
        }
        
        //Eiskugeln
        let Eiskugeln: number = 0;
        for (let i: number = 0; i < inputsEis.length; i++) {
            if(parseInt(inputsEis[i].value) > 0)
                Eiskugeln += 1;
        } 
        if (Eiskugeln == 0)
            Pruefung.push("Eissorten\n");
        
        //Zusaetze
        let Zusaetze: number = 0;
        for (let i: number = 0; i < inputsZusaetze.length; i++) {
            if (inputsZusaetze[i].checked)
                Zusaetze += 1;
        } 
        if (Zusaetze == 0)
            Pruefung.push("Zusaetze\n");
        
        //Darreichungsform
        let Darreichung: number = 0;
        for (let i: number = 0; i < inputsDarreichung.length; i++) {
            if (inputsDarreichung[i].checked)
                Darreichung += 1;
        } 
        if (Darreichung == 0)
            Pruefung.push("Darreichungsform");
       
        if (Pruefung.length > 0) {
        for (let i: number = 0; i < Pruefung.length; i++)
            Pruefung.push
            alert (Pruefung.join(""));}
        else {
            alert("Vielen Dank fuer Ihre Bestellung! :)");
        }
    }   
}