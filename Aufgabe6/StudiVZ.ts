//Aufgabe: 6b- StudiVZ
//Name: Nadine Malinowski
//Datum: 06.05.2017
//Matrikel: 254763
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


namespace StudiVZ {
    interface StudentData {
        matrikelNr: number;
        name: string;
        firstname: string;
        age: number;
        sex: boolean;
        comment: string;
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    
    function saveData(_input: string): string {
        let strArr: string[] = _input.split(","); //Array vom Typ string wird erstellt. Array wird aufgesplitet
        if (strArr.length <= 5 ) {
            return "Eingabe ist nicht vollstaendig oder wurde falsch eingegeben.";
        }
        
        let student: StudentData = { 
            matrikelNr: parseInt(strArr[0]), //MatrikelNr wird in string umgewandelt
            name: strArr[1],
            firstname: strArr[2],
            age: parseInt(strArr[3]), //age wird in string umgewandelt
            sex: parseInt(strArr[4]) == 1, //sex wird in string umgewandelt
            comment: strArr[5]
         }

        let sex: string;
        if (parseInt(strArr[4]) == 1) { //wird eine 1 eingegeben -> männlich  
            sex = "maennlich";
        }
        else { //wird eine 0 eingegeben -> weiblich                    
            sex = "weiblich";
        }
        
        students.push(student); //die Daten aus student werden in die studentskartei gepusht

        //Ausgabe
        return "Folgende Daten wurde angelegt:\n" + "\nMatrikelnr.: " + student.matrikelNr + "\nName: " + student.name + "," + student.firstname + "\nAlter: " + student.age + "\nGeschlecht: " + sex + "\nKommentar: " + student.comment;
    }

    function queryData(_matrikel: number): string {

        for (let i: number = 0; i < students.length; i++) {  

            if (students[i].matrikelNr == _matrikel) { //überprüft gespeicherte MatrikelNr. Ist gespeicherte MatrikelNr. vorhanden, folgt die Ausgabe
                let sex: string = students[i].sex ? "maennlich" : "weiblich"; // ? -> if-Anweisung, wurde eine 1 eingegeben -> männlich, wurde eine 0 eingegeben -> weiblich      
                //Ausgabe
                return "Gespeicherte Daten zur Matrikelnr.:" + students[i].matrikelNr + "\n\nName: " + students[i].name + "," + students[i].firstname + "\nAlter: " + students[i].age + "\nGeschlecht: " + sex + "\nKommentar: " + students[i].comment;
            }
            
            else {  
                //Ausgabe             
                return "Matrikelnummer wurde nicht angelegt.";
            }
        }
    }
}