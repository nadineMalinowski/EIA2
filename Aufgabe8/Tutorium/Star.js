/// <reference path="DrawableObjects.ts"/>
var snowflake_a8;
(function (snowflake_a8) {
    class Star extends snowflake_a8.DrawableObject {
        // Na, hups! Hier ist ja garnichts mehr?! So kann es ausgehen, wenn man noch
        // dar�ber nachdenkt was man wo braucht und feststellt, dass man eine �berfl�ssige
        // Klasse eingebaut hat. So hat es sich n�mlich in diesem Beispiel ergeben, dass
        // die suchende Schneeflocke eine spezielle Schneeflocke ist und die Schneeflocke
        // wiederum ein spezieller Stern. Eigentlich w�rde man die Klasse Star an dieser
        // Stelle aus dem Programm schmei�en, aber ich habe sie zu Demonstrationszwecken
        // hier gelassen
        constructor(_x, _y, _color, radius) {
            super(_x, _y, _color, radius);
        }
    }
    snowflake_a8.Star = Star;
})(snowflake_a8 || (snowflake_a8 = {}));
//# sourceMappingURL=Star.js.map