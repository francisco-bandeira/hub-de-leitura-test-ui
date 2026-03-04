class CadastroPage {
   
   //Seletores
   campoNome() {return cy.get('#name')}
   campoEmail() {return cy.get('#email')}
   campoTelefone() {return cy.get('#phone')}
   campoSenha() {return cy.get('#password')}
   campoConfirmarSenha() {return cy.get('#confirm-password')}
   checkTermos() {return cy.get('#terms-agreement')}
   botaoCriarConta() {return cy.get('#register-btn')}

   //Métodos
    visitarPaginaCadastro() {
        cy.visit('register.html')
    }

    preencherFormularioCadastro(name, email, telefone, senha, confirmarSenha) {
       if (name) { this.campoNome().clear().type(name) } 
        this.campoEmail().clear().type(email)
        this.campoTelefone().clear().type(telefone)
        this.campoSenha().clear().type(senha)
        this.campoConfirmarSenha().clear().type(confirmarSenha)
        this.checkTermos().check()
        this.botaoCriarConta().click()
    }

}
export default CadastroPage;