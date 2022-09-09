describe('Open Homepage', () => {
    it('passes', () => {
      cy.visit("http://localhost:3000");
      cy.contains('Light Mode')
      cy.get('.react-switch-bg').click()
      cy.contains('Dark Mode')
    })
  })