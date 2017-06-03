var snowflake_a8;
(function (snowflake_a8) {
    class DrawableObject {
        constructor(_x, _y, _color, _radius) {
            this.position = {
                x: _x,
                y: _y
            };
            this.color = _color;
            this.radius = _radius;
        }
        // Anders als im Tutorium habe ich die draw Funktion meiner Ausgangsklasse gef�llt,
        // Da mir beim Nachdenken aufgefallen ist, dass ja sowohl der Stern als auch die Schneeflocke
        // die gleiche Grundform haben, man also problemlos diese Funktionalit�t in der Superklasse
        // unterbringen kann.
        draw() {
            this.drawShape();
            this.rotateShape(45 * Math.PI / 180);
            this.drawShape();
            this.clearTransformation();
        }
        // Malt ein Kreuz
        drawShape() {
            snowflake_a8.context.strokeStyle = this.color;
            snowflake_a8.context.beginPath();
            snowflake_a8.context.moveTo(this.position.x, this.position.y - this.radius);
            snowflake_a8.context.lineTo(this.position.x, this.position.y + this.radius);
            snowflake_a8.context.closePath();
            snowflake_a8.context.stroke();
            snowflake_a8.context.beginPath();
            snowflake_a8.context.moveTo(this.position.x - this.radius, this.position.y);
            snowflake_a8.context.lineTo(this.position.x + this.radius, this.position.y);
            snowflake_a8.context.closePath();
            snowflake_a8.context.stroke();
        }
        // Rotiert das Canvas um _degree Grad
        rotateShape(_degree) {
            // Verschiebe das Koordinatensystem
            snowflake_a8.context.translate(this.position.x, this.position.y);
            // Rotiere um _degree Grad
            snowflake_a8.context.rotate(_degree);
            // Verschiebe zur�ck
            snowflake_a8.context.translate(-this.position.x, -this.position.y);
        }
        // Hebt s�mtliche Transformationen auf und setzt das Canvas auf Ausgangszustand zur�ck
        clearTransformation() {
            // Setzte eine neue Transformationsmatrix (bei Mathe aufpassen!), die alle Transformationen aufhebt
            snowflake_a8.context.setTransform(1, 0, 0, 1, 0, 0);
        }
    }
    snowflake_a8.DrawableObject = DrawableObject;
})(snowflake_a8 || (snowflake_a8 = {}));
//# sourceMappingURL=DrawableObjects.js.map