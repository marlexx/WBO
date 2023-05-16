var i = 0;
function drawLine(i, scale, selector, x1, y1, x2, y2) {
    cy.get(selector)
        .trigger('mousedown', { pageX: (3 * i * scale) + (x1 * scale), pageY: 2000 - (y1 * scale) })
        .trigger('mousemove', { pageX: (3 * i * scale) + (x2 * scale), pageY: 2000 - (y2 * scale) })
        .trigger('mouseup', { force: true, pageX: (3 * i * scale) + (x2 * scale), pageY: 2000 - (y2 * scale) })
}

export class WBLetters {
    constructor() {
        this.canvas = '#canvas';
    }

    readDraw(c, scale) {
        for (let char of c) {
            switch (char) {
                case "A":
                    this.drawA(i, scale);
                    break;
                case "B":
                    this.drawB(i, scale);
                    break;
                case "C":
                    this.drawC(i, scale);
                    break;
                case "D":
                    this.drawD(i, scale);
                    break;
                case "E":
                    this.drawE(i, scale);
                    break;
                case "F":
                    this.drawF(i, scale);
                    break;
                case "G":
                    this.drawG(i, scale);
                    break;
                case "H":
                    this.drawH(i, scale);
                    break;
                case "I":
                    this.drawI(i, scale);
                    break;
            }
            i++;
        }
    }

    drawA(i, scale) {
        drawLine(i, scale, this.canvas, 1, 0, 2, 4);
        drawLine(i, scale, this.canvas, 2, 4, 3, 0);
        drawLine(i, scale, this.canvas, 1.38, 1.5, 2.62, 1.5);
    }

    drawB(i, scale) {
        drawLine(i, scale, this.canvas, 1, 0, 1, 4);
        drawLine(i, scale, this.canvas, 1, 0, 2, 0);
        drawLine(i, scale, this.canvas, 1, 2, 2, 2);
        drawLine(i, scale, this.canvas, 1, 4, 2, 4);
        for (let x = 2; x <= 2.8; x = x + 0.2) {
            let D = (x - 2) * (x - 2) - 1;
            let D1 = ((x + 0.2) - 2) * ((x + 0.2) - 2) - 1;
            drawLine(i, scale, this.canvas, x, 3 + (Math.sqrt(-4 * D) / 2), x + 0.2, 3 + (Math.sqrt(-4 * D1) / 2));
            drawLine(i, scale, this.canvas, x, 3 - (Math.sqrt(-4 * D) / 2), x + 0.2, 3 - (Math.sqrt(-4 * D1) / 2));
        }
        drawLine(i, scale, this.canvas, 2.8, 3 - (Math.sqrt(4 * 0.36) / 2), 3, 3);
        drawLine(i, scale, this.canvas, 2.8, 3 + (Math.sqrt(4 * 0.36) / 2), 3, 3);

        for (let x = 2; x <= 2.8; x = x + 0.2) {
            let D = Math.sqrt(4 * (1 - (x - 2) * (x - 2))) / 2;
            let D1 = Math.sqrt(4 * (1 - ((x + 0.2) - 2) * ((x + 0.2) - 2))) / 2;
            drawLine(i, scale, this.canvas, x, 1 + D, x + 0.2, 1 + D1);
            drawLine(i, scale, this.canvas, x, 1 - D, x + 0.2, 1 - D1);
        }
        drawLine(i, scale, this.canvas, 2.8, 0.4, 3, 1);
        drawLine(i, scale, this.canvas, 2.8, 1.6, 3, 1);
    }

    drawC(i, scale) {
        drawLine(i, scale, this.canvas, 0.27 + 0.6, 2, 0.3 + 0.6, 2 + (Math.sqrt(-48 - 12 * (-4.44)) / -6));
        drawLine(i, scale, this.canvas, 0.27 + 0.6, 2, 0.3 + 0.6, 2 - (Math.sqrt(-48 - 12 * (-4.44)) / -6));
        for (let x = 0.3; x <= 3; x = x + 0.2) {
            let D = 4 * x * x - 16 * x;
            let D1 = 4 * (x + 0.2) * (x + 0.2) - 16 * (x + 0.2);
            drawLine(i, scale, this.canvas, x + 0.6, 2 + (Math.sqrt(-48 - 12 * D) / -6), x + 0.2 + 0.6, 2 + (Math.sqrt(-48 - 12 * D1) / -6));
            drawLine(i, scale, this.canvas, x + 0.6, 2 - (Math.sqrt(-48 - 12 * D) / -6), x + 0.2 + 0.6, 2 - (Math.sqrt(-48 - 12 * D1) / -6));
        }
    }

    drawD(i, scale) {
        drawLine(i, scale, this.canvas, 1, 0, 1, 4);
        for (let x = 1; x <= 2.8; x = x + 0.2) {
            let D = Math.sqrt(16 - (4 * ((x - 1) * (x - 1)))) / 2;
            let D1 = Math.sqrt(16 - (4 * (((x + 0.2) - 1) * ((x + 0.2) - 1)))) / 2;

            drawLine(i, scale, this.canvas, x, 2 + D, x + 0.2, 2 + D1);
            drawLine(i, scale, this.canvas, x, 2 - D, x + 0.2, 2 - D1);

        }
        drawLine(i, scale, this.canvas, 2.8, 2 + 0.87177979, 3, 2);
        drawLine(i, scale, this.canvas, 2.8, 2 - 0.87177979, 3, 2);
    }

    drawE(i, scale) {
        drawLine(i, scale, this.canvas, 1, 0, 1, 4);
        drawLine(i, scale, this.canvas, 1, 0, 3, 0);
        drawLine(i, scale, this.canvas, 1, 4, 3, 4);
        drawLine(i, scale, this.canvas, 1, 2, 3, 2);
    }

    drawF(i, scale) {
        drawLine(i, scale, this.canvas, 1, 0, 1, 4);
        drawLine(i, scale, this.canvas, 1, 4, 3, 4);
        drawLine(i, scale, this.canvas, 1, 2, 3, 2);
    }

    drawG(i, scale) {
        drawLine(i, scale, this.canvas, 0.27 + 0.6, 2, 0.3 + 0.6, 2 + (Math.sqrt(-48 - 12 * (-4.44)) / -6));
        drawLine(i, scale, this.canvas, 0.27 + 0.6, 2, 0.3 + 0.6, 2 - (Math.sqrt(-48 - 12 * (-4.44)) / -6));
        for (let x = 0.3; x <= 2.5; x = x + 0.2) {
            let D = 4 * x * x - 16 * x;
            let D1 = 4 * (x + 0.2) * (x + 0.2) - 16 * (x + 0.2);
            drawLine(i, scale, this.canvas, x + 0.6, 2 + (Math.sqrt(-48 - 12 * D) / -6), x + 0.2 + 0.6, 2 + (Math.sqrt(-48 - 12 * D1) / -6));
            drawLine(i, scale, this.canvas, x + 0.6, 2 - (Math.sqrt(-48 - 12 * D) / -6), x + 0.2 + 0.6, 2 - (Math.sqrt(-48 - 12 * D1) / -6));
        }
        drawLine(i, scale, this.canvas, 2.5, 2, 3.5, 2);
        drawLine(i, scale, this.canvas, 3.5, 2, 3.5, 0.5);
    }

    drawH(i, scale) {
        drawLine(i, scale, this.canvas, 1, 0, 1, 4);
        drawLine(i, scale, this.canvas, 3, 0, 3, 4);
        drawLine(i, scale, this.canvas, 1, 2, 3, 2);
    }

    drawI(i, scale) {
        drawLine(i, scale, "body", 2, 0, 2, 4); //moze i body jbt
        drawLine(i, scale, this.canvas, 1, 4, 3, 4);
        drawLine(i, scale, this.canvas, 1, 0, 3, 0);
    }
}

export var wBLetters = new WBLetters();