/// <reference types="cypress" />
describe('Funcionalidade: Catálogo de Livros', () => {
  beforeEach(() => {
    cy.visit('catalog.html')
  });

  it.skip('Deve clicar no botão adicionar a cesta', () => {
    cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
    cy.get('#cart-count').should('contain', '1')
    cy.get('#global-alert-container').should('contain', '"1984" foi adicionado à cesta!')
  });



  it('Deve clicar em todos botões de adicionar a cesta', () => {
    cy.get('.btn-primary').click({ multiple: true })
    cy.get('#cart-count').should('contain', '12')
  });

  it('Deve clicar no primeiro botao de adicionar a cesta', () => {
    cy.get('.btn-primary').first().click()
    cy.get('#cart-count').should('contain', '1')
    cy.get('#global-alert-container').should('contain', '"1984" foi adicionado à cesta!')
  });

  it('Deve clicar no ultimo botão de adicionar a cesta', () => {
    cy.get('.btn-primary').last().click()
    cy.get('#cart-count').should('contain', '1')
    cy.get('#global-alert-container').should('contain', '"O Alquimista" foi adicionado à cesta!')
  });

  it('Deve clicar no terceiro botão de adicionar a cesta', () => {
    cy.get('.btn-primary').eq(2).click()
    cy.get('#cart-count').should('contain', '1')
    cy.get('#global-alert-container').should('contain', ' "A Divina Comédia" foi adicionado à cesta!')

  });

  it('Deve exibir o detalhes do livro e adicionar a cesta', () => {
    cy.contains('Dom Casmurro').click()
    cy.url().should('include', 'book-details')
    cy.get('#add-to-cart-btn').click()
    cy.get('#cart-count').should('contain', '1')
    cy.get('#alert-container').should('contain', ' Livro adicionado à cesta com sucesso!')

  });

});