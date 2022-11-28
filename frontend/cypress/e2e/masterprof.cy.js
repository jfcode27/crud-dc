describe('Master Prof App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })
  it('frontpage can be opened', () => {
    cy.contains ('Iniciar Sesión')
  })

  it('login form exists', () => {
    cy.contains ('Usuario')
    cy.contains ('Contraseña')
  })


})
