/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import CadastroPage from '../support/pages/cadastro-page';


describe('Funcionalidade: Cadastro do Hub de Leitura', () => {
  const cadastroPage = new CadastroPage();

  beforeEach(() => {
    cadastroPage.visitarPaginaCadastro()
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

  it('deve preencher cadastro com sucesso usando custom commands', () => {
    let name = faker.person.fullName()
    let email = faker.internet.email()
    let telefone = faker.phone.number('###########')
    let senha = faker.internet.password()
    cy.preencherCadastro(name, email, telefone, senha, senha)
    cy.url().should('include', 'dashboard.html')
    cy.get('#user-name').should('contain', name)
  });

  it('deve fazer o cadastro com sucesso - Usando Page Objects', () => {
    let name = faker.person.fullName()
    let senha = faker.internet.password()
    
    cadastroPage.preencherFormularioCadastro(
      name,
      faker.internet.email(),
      faker.phone.number('###########'),
      senha,
      senha
    )
    cy.url().should('include', 'dashboard.html')
    cy.get('#user-name').should('contain', name).and('be.visible')
  });
  it.only('deve validar mensagem de erro ao tentar enviar formulário sem nome', () => {
    cadastroPage.preencherFormularioCadastro(
      '',
      faker.internet.email(),
      faker.phone.number('###########'),
      'senha123',
      'senha123'
    )
    cy.get('.invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres').and('be.visible')
  });
});