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
    cy.get('#search-input').type(catalogo[1].titulo)
    cy.get('.card-title').should('contain', catalogo[1].titulo).and('be.visible')
  });

  it('deve fazer uma busca de livros usando fixtures', () => {
    cy.fixture("livros").then((catalogo) => {
      const livro = catalogo[2]
      cy.get('#search-input').type(livro.titulo)
      cy.get('.card-title').should('contain', livro.titulo).and('be.visible')
    })
  });

  it.only('deve validar toda a lista de livros na fixture', () => {
    cy.fixture("livros").then((catalogo) => {
      catalogo.forEach(livro => {
        cy.get('#search-input').clear().type(livro.titulo)
        cy.get('.card-title').should('contain', livro.titulo).and('be.visible')
      })
  })
  });

});