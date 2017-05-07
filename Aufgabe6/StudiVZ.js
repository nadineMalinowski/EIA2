//Aufgabe: 6b- StudiVZ
//Name: Nadine Malinowski
//Datum: 06.05.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let dataArr = _input.split(","); //Arry vom Typ string wird erstellt. Array wird aufgesplitet
        let student = {
            matrikelNr: parseInt(dataArr[0]),
            name: dataArr[1],
            firstname: dataArr[2],
            age: parseInt(dataArr[3]),
            sex: parseInt(dataArr[4]) == 1,
            comment: dataArr[5]
        };
        let sex;
        if (parseInt(dataArr[4]) == 1) {
            sex = "maennlich";
        }
        else {
            sex = "weiblich";
        }
        students.push(student); //die Daten aus student werden in die studentskartei gepusht, damit ein neuer "Student" ensteht
        //Ausgabe
        return "folgende Daten wurde angelegt:\n" + "\nMatrikelnr.: " + student.matrikelNr + "\nName: " + student.name + "," + student.firstname + "\nAlter: " + student.age + "\nGeschlecht: " + sex + "\nKommentar: " + student.comment;
    }
    function queryData(_matrikel) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].matrikelNr == _matrikel) {
                let sex = students[i].sex ? "maennlich" : "weiblich"; // ? -> if-Anweisung, wurde eine 1 eingegeben -> m�nnlich, wurde eine 0 eingegeben -> weiblich      
                //Ausgabe
                return "Gespeicherte Daten zur Matrikelnr.: " + students[i].matrikelNr + "\n\nName: " + students[i].name + "," + students[i].firstname + "\nAlter: " + students[i].age + "\nGeschlecht: " + sex + "\nKommentar: " + students[i].comment;
            }
            else {
                //Ausgabe             
                return "Matrikelnummer wurde nicht angelegt.";
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=StudiVZ.js.map