
//Aufgabe: 0-Arbeitsfähigkeit
//Name: Nadine Malinowski
//Datum: 18.03.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


document.addEventListener('DOMContentLoaded', function () {
    
    var eingabe: any;
    
    eingabe = prompt("Bitte geben Sie ihren Namen ein :)");
   
    document.body.innerHTML = "Herzlich Willkomen " + eingabe + "!";
});