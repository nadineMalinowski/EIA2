
//Aufgabe: 0-Arbeitsfähigkeit
//Name: Nadine Malinowski
//Datum: 18.03.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


document.addEventListener('DOMContentLoaded', function () {
    
    var eingabe: string;
    
    eingabe = prompt("Bitte geben Sie ihren Namen ein :)");
    
    if (eingabe != null); {
    document.body.innerHTML = "Herzlich Willkomen " + eingabe + "!";
    }
});