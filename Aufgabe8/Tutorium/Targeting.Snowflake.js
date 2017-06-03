/// <reference path="Snowflake.ts"/>
var snowflake_a8;
(function (snowflake_a8) {
    class TargetingSnowflake extends snowflake_a8.Snowflake {
        constructor(_x, _y, _color, _targetX, _targetY) {
            super(_x, _y, _color);
            this.target = {
                x: _targetX,
                y: _targetY
            };
        }
        move() {
            // X Position des Ziels minus eigene X Position ...
            let dx = this.target.x - this.position.x;
            // ... dasselbe mit Y ...
            let dy = this.target.y - this.position.y;
            // ... ergibt ein rechtwinkliges Dreieck dessen Hypotenuse die Distanz zum Ziel darstellt
            let d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
            // Ist die Distanz zum Ziel gro�er 2 wollen wir uns weiter daraufzu bewegen
            // Hier bitte keinen absoluten Wert wie distanz == 0 einsetzen, da wir mit Flie�kommazahlen arbeiten.
            // Die Wahrscheinlichkeit dass niemals exakt 0 rauskommt ist sehr hoch (au�er ihr rundet st�ndig)
            if (d >= 2) {
                // Erkl�rung signum in main.ts ganz unten.
                // Ist dX positiv m�ssen wir uns in positive X Richtung bewegen um ins Ziel zu kommen
                // Umgekehrt ist dx negativ m�ssen wir in negative X Richtung wandern.
                this.position.x += snowflake_a8.signum(dx);
                // Selbes Spiel in Y Richtung
                this.position.y += snowflake_a8.signum(dy);
            }
            this.rotation++;
            if (this.rotation >= 360) {
                this.rotation = 0;
            }
        }
    }
    snowflake_a8.TargetingSnowflake = TargetingSnowflake;
})(snowflake_a8 || (snowflake_a8 = {}));
//# sourceMappingURL=Targeting.Snowflake.js.map