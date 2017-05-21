/// <reference path="Snowflake.ts"/>

namespace snowflake_a8 {
    export class TargetingSnowflake extends Snowflake {
        target: Position;

        constructor(_x: number, _y: number, _color: string, _targetX: number, _targetY: number) {
            super(_x, _y, _color);
            this.target = {
                x: _targetX,
                y: _targetY
            };
        }

        move(): void {
            // X Position des Ziels minus eigene X Position ...
            let dx: number = this.target.x - this.position.x;
            // ... dasselbe mit Y ...
            let dy: number = this.target.y - this.position.y;
            // ... ergibt ein rechtwinkliges Dreieck dessen Hypotenuse die Distanz zum Ziel darstellt
            let d: number = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

            // Ist die Distanz zum Ziel gro�er 2 wollen wir uns weiter daraufzu bewegen
            // Hier bitte keinen absoluten Wert wie distanz == 0 einsetzen, da wir mit Flie�kommazahlen arbeiten.
            // Die Wahrscheinlichkeit dass niemals exakt 0 rauskommt ist sehr hoch (au�er ihr rundet st�ndig)
            if (d >= 2) {
                // Erkl�rung signum in main.ts ganz unten.
                // Ist dX positiv m�ssen wir uns in positive X Richtung bewegen um ins Ziel zu kommen
                // Umgekehrt ist dx negativ m�ssen wir in negative X Richtung wandern.
                this.position.x += signum(dx);
                // Selbes Spiel in Y Richtung
                this.position.y += signum(dy);
                // Malt euch am Besten auf kariertem Papier ein paar Beispiele auf und macht euch so die Geometrie
                // hinter der ganzen Sache verst�ndlich
            }

            this.rotation++;
            if (this.rotation >= 360) {
                this.rotation = 0;
            }
        }
    }
}