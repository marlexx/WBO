describe('TR', ()=>{

    it('requests', ()=>{
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
})