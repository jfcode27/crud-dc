describe("Master Prof App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  it("frontpage can be opened", () => {
    cy.contains("Iniciar Sesión");
  });

  it("login form exists", () => {
    cy.contains("Usuario");
    cy.contains("Contraseña");
  });

  it("login form works", () => {
    cy.get("input").first().type("zeider27");
    cy.get("input").last().type("123456");
    cy.contains("Ingresar").click();
    cy.contains("Alumnos");
  });

  describe("when logged in", () => {
    beforeEach(() => {
      cy.get("input").first().type("zeider27");
      cy.get("input").last().type("123456");
      cy.contains("Ingresar").click();
      cy.contains("Alumnos");
    });
    it("a new student can be created", () => {
        cy.contains('Agregar').click()
        cy.get('[placeholder="Nombre del alumno"]').type('Juan Estrada Martinez')
        cy.get('[placeholder="Matrícula"]').type('10000')
        cy.get('[placeholder="Semestre"]').type('7')
        cy.get('[placeholder="Escuela"]').type('Universidad de la Salle Bajio')
        cy.contains('Agregar').click({force: true})
    });
  });
});
