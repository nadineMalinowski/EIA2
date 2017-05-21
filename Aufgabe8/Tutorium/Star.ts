/// <reference path="DrawableObjects.ts"/>

namespace snowflake_a8 {
    export class Star extends DrawableObject {

        // Na, hups! Hier ist ja garnichts mehr?! So kann es ausgehen, wenn man noch
        // dar�ber nachdenkt was man wo braucht und feststellt, dass man eine �berfl�ssige
        // Klasse eingebaut hat. So hat es sich n�mlich in diesem Beispiel ergeben, dass
        // die suchende Schneeflocke eine spezielle Schneeflocke ist und die Schneeflocke
        // wiederum ein spezieller Stern. Eigentlich w�rde man die Klasse Star an dieser
        // Stelle aus dem Programm schmei�en, aber ich habe sie zu Demonstrationszwecken
        // hier gelassen
        constructor(_x: number, _y: number, _color: string, radius: number) {
            super(_x, _y, _color, radius);
        }
    }
}