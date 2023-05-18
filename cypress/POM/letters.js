var i = 0;
var row = 1;

function drawLine(i1, scale, selector, x1, y1, x2, y2) {

    cy.get(selector)
        .trigger('mousedown', { pageX: (3 * i1 * scale) + (x1 * scale), pageY: 500 * row - (y1 * scale) })
        .trigger('mousemove', { pageX: (3 * i1 * scale) + (x2 * scale), pageY: 500 * row - (y2 * scale) })
        .trigger('mouseup', { force: true, pageX: (3 * i1 * scale) + (x2 * scale), pageY: 500 * row - (y2 * scale) })
}

function drawStart(i1, scale, selector, x1, y1) {
    cy.get(selector)
        .trigger('mousedown', { pageX: (3 * i1 * scale) + (x1 * scale), pageY: 500 * row - (y1 * scale) })
}

function drawMove(i1, scale, selector, x2, y2) {
    cy.get(selector)
        .trigger('mousemove', { pageX: (3 * i1 * scale) + (x2 * scale), pageY: 500 * row - (y2 * scale) })
}

function drawEnd(i1, scale, selector, x2, y2) {
    cy.get(selector)
        .trigger('mouseup', { force: true, pageX: (3 * i1 * scale) + (x2 * scale), pageY: 500 * row - (y2 * scale) })
}

export class WBLetters {
    constructor() {
        this.canvas = '#canvas';
    }

    readDraw(c, scale) {
        i = 0;
        row = 1;
        for (let char of c) {
            switch (char) {
                case " ":
                    if (i == 0)
                        i = -1;
                    break;
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
                case "J":
                    this.drawJ(i, scale);
                    break;
                case "K":
                    this.drawK(i, scale);
                    break;
                case "L":
                    this.drawL(i, scale);
                    break;
                case "M":
                    this.drawM(i, scale);
                    break;
                case "N":
                    this.drawN(i, scale);
                    break;
                case "O":
                    this.drawO(i, scale);
                    break;
                case "P":
                    this.drawP(i, scale);
                    break;
                case "Q":
                    this.drawQ(i, scale);
                    break;
                case "R":
                    this.drawR(i, scale);
                    break;
                case "S":
                    this.drawS(i, scale);
                    break;
                case "T":
                    this.drawT(i, scale);
                    break;
                case "V":
                    this.drawV(i, scale);
                    break;
                case "X":
                    this.drawX(i, scale);
                    break;
                case "Y":
                    this.drawY(i, scale);
                    break;
                case "Z":
                    this.drawZ(i, scale);
                    break;

            }
            if (i < 7)
                i++;
            else {
                i = 0;
                row = row + 1;
            }

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
        for (let x = 0.3; x <= 2.8; x = x + 0.2) {
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

    drawJ(i, scale) {
        drawLine(i, scale, "body", 3, 1, 3, 4);
        for (let x = 1; x <= 2.8; x = x + 0.2) {
            let D = Math.sqrt(4 * (1 - (x - 2) * (x - 2))) / 2;
            let D1 = Math.sqrt(4 * (1 - ((x + 0.2) - 2) * ((x + 0.2) - 2))) / 2;
            drawLine(i, scale, this.canvas, x, 1 - D, x + 0.2, 1 - D1);
        }
        drawLine(i, scale, this.canvas, 2.8, 0.4, 3, 1);
    }

    drawK(i, scale) {
        drawLine(i, scale, "body", 1, 0, 1, 4);
        drawLine(i, scale, "body", 1, 2, 3, 4);
        drawLine(i, scale, "body", 1, 2, 3, 0);
    }

    drawL(i, scale) {
        drawLine(i, scale, "body", 1, 0, 1, 4);
        drawLine(i, scale, "body", 1, 0, 3, 0);
    }

    drawM(i, scale) {
        drawLine(i, scale, "body", 1, 0, 1, 4);
        drawLine(i, scale, "body", 1, 4, 2, 2);
        drawLine(i, scale, "body", 2, 2, 3, 4);
        drawLine(i, scale, "body", 3, 0, 3, 4);
    }

    drawN(i, scale) {
        drawLine(i, scale, "body", 1, 0, 1, 4);
        drawLine(i, scale, "body", 1, 4, 3, 0);
        drawLine(i, scale, "body", 3, 0, 3, 4);
    }

    drawO(i, scale) {
        drawStart(i, scale, "body", 1, 2);
        for (let x = 1.05; x <= 3; x = x + 0.05) {
            let A1 = 62.24, A2 = 16, B1 = 248.96, B2 = 64, C = -250.72;
            let D = A1 * x * x - B1 * x;
            let y = (B2 + Math.sqrt(B2 * B2 - 4 * A2 * (D - C))) / (2 * A2)
            drawMove(i, scale, "body", x, y);
        }
        for (let x = 3; x >= 1; x = x - 0.05) {
            let A1 = 62.24, A2 = 16, B1 = 248.96, B2 = 64, C = -250.72;
            let D = A1 * x * x - B1 * x;
            let y = (B2 - Math.sqrt(B2 * B2 - 4 * A2 * (D - C))) / (2 * A2)
            drawMove(i, scale, "body", x, y);
        }
        drawEnd(i, scale, "body", 1, 2);

    }

    drawP(i, scale) {
        drawLine(i, scale, "body", 1, 0, 1, 4);
        drawLine(i, scale, "body", 1, 4, 2, 4);
        drawLine(i, scale, "body", 1, 2, 2, 2);

        drawStart(i, scale, "body", 1, 4);
        for (let x = 2; x <= 3; x = x + 0.05) {
            let A1 = 1, A2 = 1, B1 = -4, B2 = -6, C = 12;
            let D = A1 * x * x + B1 * x;
            let y = (-B2 + Math.sqrt(B2 * B2 - 4 * A2 * (D + C))) / (2 * A2);
            drawMove(i, scale, "body", x, y);
        }
        for (let x = 3; x >= 2; x = x - 0.05) {
            let A1 = 1, A2 = 1, B1 = -4, B2 = -6, C = 12;
            let D = A1 * x * x + B1 * x;
            let y = (-B2 - Math.sqrt(B2 * B2 - 4 * A2 * (D + C))) / (2 * A2);
            drawMove(i, scale, "body", x, y);
        }
        drawEnd(i, scale, "body", 1, 2);
    }

    drawQ(i, scale) {
        drawStart(i, scale, "body", 1, 2);
        for (let x = 1.05; x <= 3; x = x + 0.05) {
            let A1 = 62.24, A2 = 16, B1 = 248.96, B2 = 64, C = -250.72;
            let D = A1 * x * x - B1 * x;
            let y = (B2 + Math.sqrt(B2 * B2 - 4 * A2 * (D - C))) / (2 * A2)
            drawMove(i, scale, "body", x, y);
        }
        for (let x = 3; x >= 1; x = x - 0.05) {
            let A1 = 62.24, A2 = 16, B1 = 248.96, B2 = 64, C = -250.72;
            let D = A1 * x * x - B1 * x;
            let y = (B2 - Math.sqrt(B2 * B2 - 4 * A2 * (D - C))) / (2 * A2)
            drawMove(i, scale, "body", x, y);
        }
        drawEnd(i, scale, "body", 1, 2);
        drawLine(i, scale, "body", 2, 1, 3, 0);
    }

    drawR(i, scale) {
        drawLine(i, scale, "body", 1, 0, 1, 4);
        drawLine(i, scale, "body", 1, 4, 2, 4);
        drawLine(i, scale, "body", 1, 2, 2, 2);
        drawLine(i, scale, "body", 2, 2, 3, 0);

        drawStart(i, scale, "body", 1, 4);
        for (let x = 2; x <= 3; x = x + 0.05) {
            let A1 = 1, A2 = 1, B1 = -4, B2 = -6, C = 12;
            let D = A1 * x * x + B1 * x;
            let y = (-B2 + Math.sqrt(B2 * B2 - 4 * A2 * (D + C))) / (2 * A2);
            drawMove(i, scale, "body", x, y);
        }
        for (let x = 3; x >= 2; x = x - 0.05) {
            let A1 = 1, A2 = 1, B1 = -4, B2 = -6, C = 12;
            let D = A1 * x * x + B1 * x;
            let y = (-B2 - Math.sqrt(B2 * B2 - 4 * A2 * (D + C))) / (2 * A2);
            drawMove(i, scale, "body", x, y);
        }
        drawEnd(i, scale, "body", 1, 2);
    }

    drawS(i, scale) {
        drawStart(i, scale, "body", Math.sqrt(2) / 2 + 2, Math.sqrt(2) / 2 + 3);
        for (let x = Math.sqrt(2) / 2 + 2; x >= 1; x = x - 0.05) {
            let A1 = 1, A2 = 1, B1 = -4, B2 = -6, C = 12;
            let D = A1 * x * x + B1 * x;
            let y = (-B2 + Math.sqrt(B2 * B2 - 4 * A2 * (D + C))) / (2 * A2);
            drawMove(i, scale, "body", x, y);
        }
        for (let x = 1; x <= 2; x = x + 0.05) {
            let A1 = 1, A2 = 1, B1 = -4, B2 = -6, C = 12;
            let D = A1 * x * x + B1 * x;
            let y = (-B2 - Math.sqrt(B2 * B2 - 4 * A2 * (D + C))) / (2 * A2);
            drawMove(i, scale, "body", x, y);
        }
        drawEnd(i, scale, "body", 1, 2);

        drawStart(i, scale, "body", 2, 2);
        for (let x = 2; x <= 3; x = x + 0.05) {
            let A1 = 1, A2 = 1, B1 = -4, B2 = -2, C = 4;
            let D = A1 * x * x + B1 * x;
            let y = (-B2 + Math.sqrt(B2 * B2 - 4 * A2 * (D + C))) / (2 * A2);
            drawMove(i, scale, "body", x, y);
        }
        for (let x = 3; x >= 2 - Math.sqrt(2) / 2; x = x - 0.05) {
            let A1 = 1, A2 = 1, B1 = -4, B2 = -2, C = 4;
            let D = A1 * x * x + B1 * x;
            let y = (-B2 - Math.sqrt(B2 * B2 - 4 * A2 * (D + C))) / (2 * A2);
            drawMove(i, scale, "body", x, y);
        }
        drawEnd(i, scale, "body", 2 - Math.sqrt(2) / 2, 1 - Math.sqrt(2) / 2);
    }

    drawT(i, scale) {
        drawLine(i, scale, "body", 2, 0, 2, 4);
        drawLine(i, scale, "body", 1, 4, 3, 4);
    }

    drawV(i, scale) {
        drawLine(i, scale, "body", 1, 4, 2, 0);
        drawLine(i, scale, "body", 2, 0, 3, 4);
    }

    drawX(i, scale) {
        drawLine(i, scale, "body", 1, 0, 3, 4);
        drawLine(i, scale, "body", 1, 4, 3, 0);
    }

    drawY(i, scale) {
        drawLine(i, scale, "body", 2, 0, 2, 2);
        drawLine(i, scale, "body", 2, 2, 1, 4);
        drawLine(i, scale, "body", 2, 2, 3, 4);
    }

    drawZ(i, scale) {
        drawLine(i, scale, "body", 1, 0, 3, 0);
        drawLine(i, scale, "body", 1, 0, 3, 4);
        drawLine(i, scale, "body", 1, 4, 3, 4);
    }
}

export var wBLetters = new WBLetters();