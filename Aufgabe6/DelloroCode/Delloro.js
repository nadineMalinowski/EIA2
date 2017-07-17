var L6_MultidimensionalArray;
(function (L6_MultidimensionalArray) {
    window.addEventListener("load", init);
    let crc2;
    let squareData = [];
    let n = 30;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        for (let i = 0; i < n; i++) {
            squareData[i] = [];
            squareData[i][0] = Math.random() * 200;
            squareData[i][1] = Math.random() * 200;
            squareData[i][2] = Math.random() * 30 + 10;
        }
        window.setTimeout(animate, 20);
    }
    function animate() {
        console.log("Animate called");
        crc2.fillStyle = "#ff0000";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        for (let i = 0; i < n; i++) {
            squareData[i][0] += Math.random() * 4 - 2;
            squareData[i][1] += Math.random() * 4 - 2;
            drawObject(squareData[i][0], squareData[i][1], squareData[i][2]);
        }
        window.setTimeout(animate, 20);
    }
    function drawObject(_x, _y, _size) {
        crc2.fillStyle = "#000000";
        crc2.fillRect(_x, _y, _size, _size);
    }
})(L6_MultidimensionalArray || (L6_MultidimensionalArray = {}));
//# sourceMappingURL=Delloro.js.map