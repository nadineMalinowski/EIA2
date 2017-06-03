namespace saveInput {
    window.addEventListener("load", init);

// Array f�r alle Sorten, die in meiner Konditorei angeboten werden sollen
    let sorts: string[] = ["Schoko", "Erdbeer", "K�se", "Schwarzw�lder Kirsch", "Bienenstich"];
// Das Fieldset in dem alle Inputs f�r die verschiedenen Kuchen angeordnet werden sollen.
    let fieldset: HTMLFieldSetElement;
// Array in dem alle inputs f�r die Sorten untergebracht werden
    let inputs: HTMLInputElement[] = [];


    function init(): void {
        fieldset = document.getElementsByTagName("fieldset")[0];

        createInputs();

        fieldset.addEventListener("change", change);
    }

    function createInputs(): void {
        // Erstelle pro Sorte Kuchen einen Input
        for (let i: number = 0; i < sorts.length; i++) {
            console.log(sorts[i]);
            createInput(sorts[i]);
        }
    }

    function createInput(_sort: string): void {
        // Ein Label ist ein Text den man anklicken kann um damit den Input auszul�sen
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _sort;
        label.appendChild(input);
        // Die Art des Inputs wird �ber den Typ definiert
        input.type = "number";
        input.min = "0";
        input.value = "0";

        fieldset.appendChild(label);
        inputs.push(input);
    }

// Wenn sich etwas �ndert, summiere die Werte aller inputs auf und gebe
// das Ergebnis auf der Konsole aus
    function change(): void {
        let sum: number = 0;
        for (let i: number = 0; i < inputs.length; i++) {
            sum += parseInt(inputs[i].value);
        }

        console.log(sum);
    }
}