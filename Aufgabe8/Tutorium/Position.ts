namespace snowflake_a8 {

    // Typ Definition f�r eine zweidimensionale Position
    // Ist einfach sch�ner und �bersichtlicher z.B. ein Attribut position oder target in eine Klasse einzubauen
    // und dann auf dessen Attribute x und y zuzugreifen statt irgendwann positionX/Y, targetX/Y, offsetX/Y usw.
    // jeweils einzeln verwalten zu m�ssen
    export interface Position {
        x: number;
        y: number;
    }
}