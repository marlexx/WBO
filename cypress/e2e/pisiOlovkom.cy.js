import { basePage, whiteBoard } from "../POM/pages";
import { readDraw, wBLetters } from "../POM/letters";
import * as data from "../periphery/text.json"

describe('Pisanje', () => {
    for (let i = 0; i < 2; i++) {
        it('napise sta mu kazes do 3 reda br.' + i.toString(), () => {
            cy.visit('/');
            basePage.openPrivateBoard();
            whiteBoard.takePencil();
            cy.viewport(2600, 2200);
            //cy.pause();
            let c = data.text.split("");
            whiteBoard.changeSize(60);

            wBLetters.readDraw(c, 100);

        })
    }
})