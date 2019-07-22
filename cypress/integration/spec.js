describe('page', () => {
  it('test viewport sizing', () => {
    cy.visit('https://example.cypress.io/')
    cy.viewport('iphone-5');
    cy.window().then(win => {
      expect(win.document.documentElement.scrollWidth).to.equal(320)
    })
  })
})
