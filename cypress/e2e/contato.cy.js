describe('Funcionalidade: Contato', () => {

  beforeEach(() => {
    cy.visit('index.html');
  });
  it('Deve preencher o formulário de contato com sucesso', () => {
    cy.get('#name').type('João Silva');
    cy.get('#email').type('joao.silva@example.com');
    cy.get('#subject').select('Sugestões');
    cy.get('#message').type('Gostaria de sugerir a inclusão de mais opções de pagamento.');
    cy.get('#btn-submit').click();
    cy.get('#alert-container').should('be.visible').and('contain', 'Contato enviado com sucesso!');
  });

  it('Deve validar mensagem de erro ao enviar sem preencher nome', () => {
    cy.get('#email').type('joao.silva@example.com');
    cy.get('#subject').select('Sugestões');
    cy.get('#message').type('Gostaria de sugerir a inclusão de mais opções de pagamento.');
    cy.get('#btn-submit').click();
    cy.get('#alert-container').should('be.visible').and('contain', 'Por favor, preencha o campo Nome.');
  });

  it('Deve validar mensagem de erro ao enviar sem preencher email', () => {
    cy.get('#name').type('João Silva');
    cy.get('#email').clear();
    cy.get('#subject').select('Sugestões');
    cy.get('#message').type('Gostaria de sugerir a inclusão de mais opções de pagamento.');
    cy.get('#btn-submit').click();
    cy.get('#alert-container').should('be.visible').and('contain', 'Por favor, preencha o campo E-mail.');
  });

  it('Deve validar mensagem de erro ao enviar sem preencher assunto', () => {
    cy.get('#name').type('João Silva');cy.get('#email').type('joao.silva@example.com');
    cy.get('#subject').select('Selecione o assunto...');
    cy.get('#message').type('Gostaria de sugerir a inclusão de mais opções de pagamento.');
    cy.get('#btn-submit').click();
    cy.get('#alert-container').should('be.visible').and('contain', 'Por favor, selecione o Assunto.');
  });

  it('Deve validar mensagem de erro ao enviar sem preencher a mensagem', () => {
    cy.get('#name').type('João Silva');
    cy.get('#email').type('joao.silva@example.com');
    cy.get('#subject').select('Sugestões');
    cy.get('#message').clear();
    cy.get('#btn-submit').click();
    cy.get('#alert-container').should('be.visible').and('contain', 'Por favor, escreva sua Mensagem.');
  });




});