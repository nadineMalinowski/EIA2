namespace L6_MultidimensionalArray {
    window.addEventListener("load", init);

    let crc2: CanvasRenderingContext2D;
    let squareData: number[][] = [];
    let n: number = 30;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        for (let i: number = 0; i < n; i++) {
            squareData[i] = [];
            squareData[i][0] = Math.random() * 200;
            squareData[i][1] = Math.random() * 200;
            squareData[i][2] = Math.random() * 30 + 10;
        }

        window.setTimeout(animate, 20);
    }

    function animate(): void {
        console.log("Animate called");

        crc2.fillStyle = "#ff0000";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let i: number = 0; i < n; i++) {
            squareData[i][0] += Math.random() * 4 - 2;
            squareData[i][1] += Math.random() * 4 - 2;
            drawObject(squareData[i][0], squareData[i][1], squareData[i][2]);
        }

        window.setTimeout(animate, 20);
    }

    function drawObject(_x: number, _y: number, _size: number): void {
        crc2.fillStyle = "#000000";
        crc2.fillRect(_x, _y, _size, _size);
    }
}