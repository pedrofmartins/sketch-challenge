/// <reference types="Cypress" />

import LoginElements from '../../elements/Login/LoginElements';
const loginElements = new LoginElements();

class LoginPage {
  signInPage() {
    cy.visit('/signin');
    cy.get('div').contains('Sign in to Sketch').should('be.visible');
  }

  cickSignInButton() {
        cy.get('button').contains('Sign In').click({
          force: true
        });
  }

  signInButton(signin) {
    switch(signin) {
      case 'click':
        cy.get('button').contains('Sign In').click({
          force: true
        });
      break;
      case 'enter':
        cy.get(loginElements.passwordField()).type('{enter}');
      break;
      }
  }

  typeEmail() {
    cy.get(loginElements.emailField()).type(Cypress.env('EMAIL'));
  }

  typeDiffEmail(email) {
    cy.get(loginElements.emailField()).type(email);
  }

  typePass() {
    cy.get(loginElements.passwordField()).type(Cypress.env('PASS'));
  }

  typeDiffPass(pass) {
    cy.get(loginElements.passwordField()).type(pass);
  }

  assertEmailBlank() {
    cy.get('div').contains('Email can’t be blank').should('be.visible');
  }

  assertPassBlank() {
    cy.get('div').contains('Password can’t be blank').should('be.visible');
  }

  showPass() {
    cy.get(loginElements.eyeIcon()).click({ force: true });
    cy.get(loginElements.passwordField()).screenshot();
  }

  assertPass() {
    cy.get(loginElements.passwordField()).within(($form) => {
      cy.wrap($form).should('have.value', Cypress.env('PASS'));
    })
  }

  assertDiffErrors(type) {
    switch(type) {
    case 'details':
      cy.get('div').contains('We couldn’t sign you in. Please check your details and try again.').should('be.visible');
    break;
    case 'inbox':
      cy.get('div').contains('You have not verified your email yet. Please check your inbox to continue.').should('be.visible');
    break;
    case 'invalid':
      cy.get('li').contains('This is not a valid email').should('be.visible');
    break;
    }
  }

  forgotPassLink() {
    cy.get('div').contains('Forgot Password?').click({ force: true });
  }

  submitResetPass() {
    cy.get('button').contains('Reset Password').click({ force: true });
  }

  assertResetPass() {
    cy.get('div').contains('If there is an account associated with this email address you will receive a password reset email.').should('be.visible');
  }

}

export default LoginPage;