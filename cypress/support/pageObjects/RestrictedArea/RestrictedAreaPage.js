/// <reference types="Cypress" />

import RestrictedElements from '../../elements/Logout/LogoutElements';
const restrictedAreaPage = new RestrictedElements();

class RestrictedAreaPage {
  assertLoggedInUser() {
    cy.get(restrictedAreaPage.userAvatar()).should('be.visible');
  }

  signOut() {
    cy.get(restrictedAreaPage.userAvatar()).click({ force: true });
    cy.get('button').contains(' Sign Out').click({ force: true });
  }

  goToWorkspace() {
    cy.get('div').contains('Continue to Workspace').click({ force: true });
    cy.get('div').contains('Continue to Workspace').should('not.exist');
  }

  assertSignInPage() {
    cy.get('div').contains('Sign in to Sketch').should('be.visible');
    cy.url().should('include', '/signin')
  }
}

export default RestrictedAreaPage;