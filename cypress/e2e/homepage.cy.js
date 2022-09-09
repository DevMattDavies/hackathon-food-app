describe('Light/Dark Mode', () => {
    it('passes', () => {
      cy.visit("http://localhost:3000");
      cy.contains('Light')
      cy.get('.react-switch-bg').click()
      cy.contains('Dark')
    })
  })

  describe('Pizza Name Display', () => {
    it('passes', () => {
      cy.visit("http://localhost:3000");
      cy.contains('Goat Cheese Pesto Pizza')
      cy.contains('Rustic Grilled Peaches Pizza')
    })
  })