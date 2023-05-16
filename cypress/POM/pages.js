export function movePiece (selector, x1, y1, x2, y2) {
    cy.get(selector)
    .trigger('mousedown', {pageX: x1, pageY: 2000-y1})
    .trigger('mousemove', { pageX: x2, pageY: 2000-y2 })
    .trigger('mouseup', { force: true })
  }

export class BasePage{
constructor(){
this.privateBoard = ':nth-child(2) > .wbo-button';
}

openPrivateBoard(){
    cy.get(this.privateBoard).click();
}
}

export class WhiteBoard{

    constructor(){
        this.pencil = '#toolID-Pencil';
        this.canvas = '#canvas';
    }


takePencil(){
    cy.get(this.pencil).click()
}
    drawLine(x1, y1, x2, y2){
        movePiece(this.canvas, x1, y1, x2, y2);
    }
}



export var basePage = new BasePage();
export var whiteBoard = new WhiteBoard();