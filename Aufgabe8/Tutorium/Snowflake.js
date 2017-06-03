/// <reference path="main.ts" />
var snowflake_a8;
(function (snowflake_a8) {
    // Im Gegensatz zu einem Interface beschreibt eine Klasse nicht nur welche Informationen vorhanden sind,
    // sondern definieren auch �ber die Methoden und Konstruktoren, wie man zu dieser Info kommt.
    class Snowflake extends snowflake_a8.DrawableObject {
        // Ein Konstruktor wird aufgerufen, wenn die Klasse mit dem new Schl�sselwort angesprochen wird.
        // Wie eine Funktion kann er Parameter entgegennehmen und verarbeiten. Sinnvolle Parameter sind z.B.
        // Informationen die sofort nach erstellen des Objekts verf�gbar sein m�ssen: Position, Farbe etc.
        constructor(_x, _y, _color) {
            super(_x, _y, _color, Math.random() * (15 - 5) + 5);
            this.rotation = Math.random() * 360;
        }
        // Zeichenfunktion der einzelnen Schneeflocke
        draw() {
            this.rotateShape(this.rotation * Math.PI / 180);
            this.drawShape();
            this.rotateShape(45 * Math.PI / 180);
            this.drawShape();
            this.clearTransformation();
        }
        // Funktion die die einzelne Schneeflocke bewegt
        move() {
            this.position.y++;
            if (this.position.y - this.radius >= snowflake_a8.context.canvas.height) {
                this.position.y = this.radius;
            }
            this.rotation++;
            if (this.rotation >= 360) {
                this.rotation = 0;
            }
        }
        update() {
            this.move();
            this.draw();
        }
    }
    snowflake_a8.Snowflake = Snowflake;
})(snowflake_a8 || (snowflake_a8 = {}));
//# sourceMappingURL=Snowflake.js.map