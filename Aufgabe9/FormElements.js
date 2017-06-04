//Aufgabe: 9-FormElements
//Name: Nadine Malinowski
//Datum: 04.06.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var FormElements;
(function (FormElements) {
    window.addEventListener("load", init);
    //Array aller Eissorten
    let Eissorten = ["Erdbeere", "Zirtone", "Vanille", "Schokolade", "Nuss", "Melone", "Joghurt", "Banane", "Kuerbis", "Minze", "Cookie"];
    let inputsEis = [];
    //Array aller Zusaetze
    let zusaetze = ["Sahne", "Vanillesosse", "Schokososse", "Streusel"];
    let inputsZusaetze = [];
    //Array aller Darreichungsformen
    let Darreichungsform = ["Waffel", "Becher"];
    let inputsDarreichung = [];
    //HTMLElemente kreieren
    let Darreichung;
    let Eis;
    let Zusaetze;
    let Bestelluebersicht;
    let Bestellbutton;
    function init() {
        Eis = document.getElementById("Eissorten"); //auf Eisssorten im HTML zugreifen
        Eis.addEventListener("change", change);
        Zusaetze = document.getElementById("Zusaetze"); //auf Zusaetze im HTML zugreifen
        Zusaetze.addEventListener("change", change);
        Darreichung = document.getElementById("Darreichungsform"); //auf Darreichungsformen im HTML zugreifen
        Darreichung.addEventListener("change", change);
        Bestelluebersicht = document.getElementById("Bestelluebersicht"); //auf Bestelluebersicht im HTML zugreifen
        Bestellbutton = document.getElementById("BestellungAbschicken"); //auf Bestellbutton im HTML zugreifen
        Bestellbutton.addEventListener("click", BestellungPruefen);
        createEissorten();
        createZusaetze();
        createDarreichungsform();
    }
    //Input Eisssorten kreieren
    function createEissorten() {
        for (let i = 0; i < Eissorten.length; i++) {
            createInput(Eissorten[i]);
        }
    }
    function createInput(_Eissorte) {
        let label = document.createElement("label");
        let input = document.createElement("input");
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
    function createZusaetze() {
        for (let i = 0; i < zusaetze.length; i++) {
            createCheckbox(zusaetze[i]);
        }
    }
    function createCheckbox(_Checkboxen) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _Checkboxen;
        label.appendChild(input);
        input.type = "checkbox"; //Art des Inputs
        label.id = _Checkboxen;
        Zusaetze.appendChild(label);
        inputsZusaetze.push(input);
    }
    //Input Darreichungsform kreieren
    function createDarreichungsform() {
        for (let i = 0; i < Darreichungsform.length; i++) {
            createRadio(Darreichungsform[i]);
        }
    }
    function createRadio(_Radiobutton) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _Radiobutton;
        label.appendChild(input);
        input.type = "radio"; //Art des Inputs
        input.name = "Radiobutton";
        label.id = _Radiobutton;
        Darreichung.appendChild(label);
        inputsDarreichung.push(input);
    }
    //Zeigt ausgew�hlte Produkte mit ihren Preisen in der Bestell�bersicht an
    function changeWarenuebersicht(_summe) {
        let BestellungUebersicht = document.getElementById("Warenuebersicht");
        BestellungUebersicht.innerText = "";
        for (let i = 0; i < inputsEis.length; i++) {
            if (parseInt(inputsEis[i].value) > 0) {
                BestellungUebersicht.innerText += Eissorten[i] + " " + (parseInt(inputsEis[i].value) * 1) + "Euro" + "\n";
            }
        }
        for (let i = 0; i < inputsZusaetze.length; i++) {
            if (inputsZusaetze[i].checked) {
                BestellungUebersicht.innerText += zusaetze[i] + " 0.30 Euro" + "\n";
            }
        }
        //Summe wird in HTML geschrieben
        let summeHtml = document.getElementById("Gesamtsumme");
        summeHtml.innerText = _summe.toString() + " Euro";
    }
    function change() {
        let summe = 0;
        for (let i = 0; i < inputsEis.length; i++) {
            summe += parseInt(inputsEis[i].value); // Preis wird immer der Summer addiert oder subtrahiert, wenn die Zahl im Inputfeld ver�ndert wird
        }
        for (let i = 0; i < inputsZusaetze.length; i++) {
            if (inputsZusaetze[i].checked) {
                summe += 0.30;
            }
        }
        changeWarenuebersicht(summe);
    }
    //Bestellung wird auf Vollstaendigkeit und Richtigkeit ueberprueft
    function BestellungPruefen() {
        let Pruefung = ["Bitte folgende Eingaben ueberpruefen! \n"];
        //Name
        let Name = document.getElementById("Name");
        if (Name.validity.valid == false)
            Pruefung.push("Name \n");
        //Vorname
        let Vorname = document.getElementById("Vorname");
        if (Vorname.validity.valid == false)
            Pruefung.push("Vorname \n");
        //Stra�e
        let Strasse = document.getElementById("Strasse");
        if (Strasse.validity.valid == false)
            Pruefung.push("Strasse \n");
        //Ort, PLZ
        let OrtPLZ = document.getElementById("Ort,PLZ");
        if (OrtPLZ.validity.valid == false)
            Pruefung.push("Ort, PLZ \n");
        //Email
        let Mail = document.getElementById("Email");
        if (Mail.validity.valid == false)
            Pruefung.push("Email \n");
        //Eiskugeln
        let Eiskugeln = 0;
        for (let i = 0; i < inputsEis.length; i++) {
            if (parseInt(inputsEis[i].value) > 0)
                Eiskugeln += 1;
        }
        if (Eiskugeln == 0)
            Pruefung.push("Eissorten\n");
        //Zusaetze
        let Zusaetze = 0;
        for (let i = 0; i < inputsZusaetze.length; i++) {
            if (inputsZusaetze[i].checked)
                Zusaetze += 1;
        }
        if (Zusaetze == 0)
            Pruefung.push("Zusaetze\n");
        //Darreichungsform
        let Darreichung = 0;
        for (let i = 0; i < inputsDarreichung.length; i++) {
            if (inputsDarreichung[i].checked)
                Darreichung += 1;
        }
        if (Darreichung == 0)
            Pruefung.push("Darreichungsform");
        if (Pruefung.length > 0) {
            for (let i = 0; i < Pruefung.length; i++)
                Pruefung.push;
            alert(Pruefung.join(""));
        }
        else {
            alert("Vielen Dank fuer Ihre Bestellung! :)");
        }
    }
})(FormElements || (FormElements = {}));
//# sourceMappingURL=FormElements.js.map