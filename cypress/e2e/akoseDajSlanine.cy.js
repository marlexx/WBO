import { basePage, whiteBoard } from "../POM/pages";
describe('Slanina', () => {
  it('Akos ti da slanine', () => {
    cy.visit('/');
    cy.viewport(2600, 2200)
  
    basePage.openPrivateBoard();
    whiteBoard.takePencil();
    //A
    whiteBoard.drawLine(200,1200,400,1800);
    whiteBoard.drawLine(600,1200,400,1800);
    whiteBoard.drawLine(268.24,1404.72,533.03,1400.92);
    //K
    whiteBoard.drawLine(689.15,1200.54,692.24,1797.07);
    whiteBoard.drawLine(690.77,1512.7,1000,1800);
    whiteBoard.drawLine(690.77,1512.7,1000,1200);
    //O
    whiteBoard.drawLine(1200,1200,1000,1500);
    whiteBoard.drawLine(1000,1500,1200,1800);
    whiteBoard.drawLine(1200,1800,1400,1500);
    whiteBoard.drawLine(1400,1500,1200,1200);
    //S
    whiteBoard.drawLine(1400,1600,1800,1800);
    whiteBoard.drawLine(1400,1600,1800,1400);
    whiteBoard.drawLine(1800,1400,1400,1200);
    //v
    whiteBoard.drawLine(1600,1800,1500,1900);
    whiteBoard.drawLine(1600,1800,1700,1900);
    //E
    whiteBoard.drawLine(1900,1200,1900,1800);
    whiteBoard.drawLine(1900,1200,2200,1200);
    whiteBoard.drawLine(1900,1800,2200,1800);
    whiteBoard.drawLine(1900,1500,2200,1500);
    
    //DAJ
    whiteBoard.drawLine(1000,1100,1000,900);
    whiteBoard.drawLine(1000,900,1200,1000);
    whiteBoard.drawLine(1200,1000,1000,1100);

    whiteBoard.drawLine(1200,900,1300,1100);
    whiteBoard.drawLine(1300,1100,1400,900);
    whiteBoard.drawLine(1237,962,1364,962);

    whiteBoard.drawLine(1450,950,1450,880);
    whiteBoard.drawLine(1450,880,1600,880);
    whiteBoard.drawLine(1600,880,1600,1100);

    //S
    whiteBoard.drawLine(600,800,200,600);
    whiteBoard.drawLine(200,600,600,400);
    whiteBoard.drawLine(600,400,200,200);
    //L
    whiteBoard.drawLine(700,800,700,200);
    whiteBoard.drawLine(700,200,1000,200);
    //A
    whiteBoard.drawLine(1100,200,1200,800);
    whiteBoard.drawLine(1200,800,1500,200);
    whiteBoard.drawLine(1140,400,1400,400);
    //N
    whiteBoard.drawLine(1550,200,1550,800);
    whiteBoard.drawLine(1550,800,1800,200);
    whiteBoard.drawLine(1800,200,1800,800);
    //I
    whiteBoard.drawLine(1900,800,1900,200);
    //N
    whiteBoard.drawLine(2000,200,2000,800);
    whiteBoard.drawLine(2000,800,2200,200);
    whiteBoard.drawLine(2200,200,2200,800);
    //E
    whiteBoard.drawLine(2300,800,2300,200);
    whiteBoard.drawLine(2300,800,2500,800);
    whiteBoard.drawLine(2300,200,2500,200);
    whiteBoard.drawLine(2300,500,2500,500);
  })
})