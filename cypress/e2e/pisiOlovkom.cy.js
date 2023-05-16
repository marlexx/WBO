import { basePage, whiteBoard} from "../POM/pages";
import { readDraw, wBLetters } from "../POM/letters";
import * as data from "../periphery/text.json"

describe('Pisanje', () =>{
    it('napise sta mu kazes do 5 slova', () =>{
        cy.visit('/');
        basePage.openPrivateBoard();
        whiteBoard.takePencil();
        cy.viewport(2600, 2200);
//cy.pause();
        let c = data.text.split("");
        whiteBoard.changeSize(80);
     
        wBLetters.readDraw(c, 100);
    })
})