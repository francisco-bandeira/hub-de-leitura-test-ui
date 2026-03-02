/// <reference types="cypress" />
import catalogo from "../fixtures/livros.json";

describe('Funcionalidade: Busca no Catálogo', () => {
  beforeEach(() => {
    cy.visit('catalog.html')
  });
it('Deve buscar o livro 1984 com sucesso', () => {
   cy.get('#search-input').type('1984')
  cy.get('.card-title').should('contain', '1984').and('be.visible')
});

it('Deve buscar o livro do arquivo de massa de dados', () => {
   cy.get('#search-input').type(catalogo.livros[1].titulo)
  cy.get('.card-title').should('contain', catalogo.livros[1].titulo).and('be.visible')
});

});