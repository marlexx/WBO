var kont;
describe('TR', ()=>{
 
it('intercepts', () => {
    cy.visit('https://www.lambdatest.com/selenium-playground');
  
    cy.intercept('GET', 'https://auth.lambdatest.com/api/country-details').as('Request');
  
    cy.get('#__next > div.wrapper > section.my-50 > div > div > div:nth-child(1) > div:nth-child(1) > ul > li:nth-child(5) > a').click();
  
    cy.wait('@Request').then((request) => {
      cy.log(request.response);
      cy.log(request);
      kont = request.response.body.continent;
      cy.wrap(kont).as('konti');
  
    //   cy.wait('@konti').then((konti) => {
    //     cy.log(konti);
    //   });
    });
    cy.get('@konti').then((kontin)=>{cy.log(kontin)
        cy.get('#company').type(kontin)})
    
    cy.then(()=>{
    cy.log(kont);
    cy.get('#name').type(kont);
})
  });
  for(let i = 0; i<2;i++){
    it('requests'+i.toString(), ()=>{
        cy.then(()=>{
            cy.log(kont);
        })
        cy.request({
                "url": "https://malimarlex.testrail.com/index.php?/api/v2/get_projects",
      "method": "GET",
      "timeout": 0,
      "headers": {
            "Authorization": "Basic eDJqdW5pb3IwMkBnbWFpbC5jb206SW52YWxpZDFjb3ZlayM="
                }}).then((response) => {
                        cy.log(response, response.body);
                        expect(response.status).to.eq(200);
                        expect(response.body.projects).to.have.length(1);
                        expect(response.body.projects[0].name).to.eql('firstProject');
                      });
                })
            }
})
