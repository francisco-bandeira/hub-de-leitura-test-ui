/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro do Hub de Leitura', () => {
  beforeEach(() => {
    cy.visit('register.html')
  });

  it('Deve fazer o cadastro com sucesso, usando função js', () => {
    let email = `joao.silva${Date.now()}@example.com`

    cy.get('#name').type('João Silva')
    cy.get('#email').type(email)
    cy.get('#phone').type('1234567890')
    cy.get('#password').type('senha123')
    cy.get('#confirm-password').type('senha123')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    cy.url().should('include', 'dashboard.html')
  });

  it('Deve fazer o cadastro com sucesso, usando faker', () => {
    let name = faker.person.fullName()
    let email = faker.internet.email()

    cy.get('#name').type(name)
    cy.get('#email').type(email)
    cy.get('#phone').type('1234567890')
    cy.get('#password').type('senha123')
    cy.get('#confirm-password').type('senha123')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    cy.url().should('include', 'dashboard.html')
    cy.get('#user-name').should('contain', name)
  });

  it.only('deve preencher cadastro com sucesso usando custom commands', () => {
    let name = faker.person.fullName()
    let email = faker.internet.email()
    let telefone = faker.phone.number('###########')
    let senha = faker.internet.password()
    cy.preencherCadastro(name, email, telefone, senha, senha)
    cy.url().should('include', 'dashboard.html')
    cy.get('#user-name').should('contain', name)
  });

});