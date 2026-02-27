describe('Funcionalidade: Contato', () => {

const campos = {
  NOME: '#name',
  EMAIL: '#email',
  ASSUNTO: '#subject',
  MENSAGEM: '#message',
  BOTAO: '#btn-submit',
  ALERTA: '#alert-container'
};

const pessoa = {
  nome: 'João Silva',
  email: 'joao.silva@example.com',
  selected: 'Sugestões',
  mensagem: 'Gostaria de sugerir a inclusão de mais opções de pagamento.',
  sucesso: 'Contato enviado com sucesso!',
  erroNome: 'Por favor, preencha o campo Nome.',
  erroEmail: 'Por favor, preencha o campo E-mail.',
  erroAssunto: 'Por favor, selecione o Assunto.',
  erroMensagem: 'Por favor, escreva sua Mensagem.'
};

  beforeEach(() => {
    cy.visit('index.html');
  });
  it('Deve preencher o formulário de contato com sucesso', () => {
    cy.get(campos.NOME).type(pessoa.nome);
    cy.get(campos.EMAIL).type(pessoa.email);
    cy.get(campos.ASSUNTO).select(pessoa.selected);
    cy.get(campos.MENSAGEM).type(pessoa.mensagem);
    cy.get(campos.BOTAO).click();
    cy.get(campos.ALERTA).should('be.visible').and('contain', pessoa.sucesso);
  });

  it('Deve validar mensagem de erro ao enviar sem preencher nome', () => {
    cy.get(campos.EMAIL).type('joao.silva@example.com');
    cy.get(campos.ASSUNTO).select(pessoa.selected);
    cy.get(campos.MENSAGEM).type(pessoa.mensagem);
    cy.get(campos.BOTAO).click();
    cy.get(campos.ALERTA).should('be.visible').and('contain', pessoa.erroNome );
  });

  it('Deve validar mensagem de erro ao enviar sem preencher email', () => {
    cy.get(campos.NOME).type('João Silva');
    cy.get(campos.EMAIL).clear();
    cy.get(campos.ASSUNTO).select('Sugestões');
    cy.get(campos.MENSAGEM).type(pessoa.mensagem);
    cy.get(campos.BOTAO).click();
    cy.get(campos.ALERTA).should('be.visible').and('contain', pessoa.erroEmail);
  });

  it('Deve validar mensagem de erro ao enviar sem preencher assunto', () => {
    cy.get(campos.NOME).type('João Silva'); cy.get(campos.EMAIL).type('joao.silva@example.com');
    cy.get(campos.ASSUNTO).select('Selecione o assunto...');
    cy.get(campos.MENSAGEM).type(pessoa.mensagem);
    cy.get(campos.BOTAO).click();
    cy.get(campos.ALERTA).should('be.visible').and('contain', pessoa.erroAssunto);
  });

  it('Deve validar mensagem de erro ao enviar sem preencher a mensagem', () => {
    cy.get(campos.NOME).type('João Silva');
    cy.get(campos.EMAIL).type('joao.silva@example.com');
    cy.get(campos.ASSUNTO).select('Sugestões');
    cy.get(campos.MENSAGEM).clear();
    cy.get(campos.BOTAO).click();
    cy.get(campos.ALERTA).should('be.visible').and('contain', pessoa.erroMensagem);
  });

});