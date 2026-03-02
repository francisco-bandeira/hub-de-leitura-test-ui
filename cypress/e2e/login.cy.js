/// <reference types="cypress" />
describe('Funcionalidade: Login', () => {
  beforeEach(() => {
    cy.visit('login/html')
  });
  it('Deve fazer login com sucesso', () => {
    cy.get('#email').type('usuario@teste.com')
    cy.get('#password').type('user123')
    cy.get('#login-btn').click()
    cy.url().should('include','dashboard.html')
    cy.get('#user-name').should('contain', 'Usuário Padrão')
  });

  it('Deve fazer login usando custom commands', () => {
    cy.login('usuario@teste.com', 'user123')
    cy.url().should('include', 'dashboard.html')
    cy.get('#user-name').should('contain', 'Usuário Padrão').and('be.visible')

  })
  it.only('Login com admin', () => {
    cy.login('admin@biblioteca.com', 'admin123')
    cy.url().should('include', 'dashboard.html')
    cy.get('.admin-header').should('contain', 'Painel Administrativo').and('be.visible')
  });

  it('deve fazer login usando massa de dados importada', () => {
    
  });

});