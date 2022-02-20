/* global Given, Then, When */

import { Given } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../pageObjects/Login/LoginPage';
import RestrictedAreaPage from '../../pageObjects/RestrictedArea/RestrictedAreaPage'
const loginPage = new LoginPage();
const restrictedPage = new RestrictedAreaPage();


//common

Given('I am at the Sign In area', () => {
  loginPage.signInPage();
});

Given('I am at the restricted area', () => {
  loginPage.signInPage();
  loginPage.typeEmail();
  loginPage.typePass();
  loginPage.cickSignInButton();
  restrictedPage.goToWorkspace();
  restrictedPage.assertLoggedInUser();
});

Then(/^I can see the "(.*?)" error message$/, (type) => {
  loginPage.assertDiffErrors(type);
});

//scenario 1

When(/^I type my email, pass and "(.*?)" to sign in$/, (signin) => {
  loginPage.typeEmail();
  loginPage.typePass();
  loginPage.signInButton(signin);
});

Then('I am redirected to the restricted area', () => {
  cy.wait(3000)
  restrictedPage.goToWorkspace();
  restrictedPage.assertLoggedInUser();
});

//scenario 2

When('I click on the Sign Out button', () => {
  restrictedPage.signOut();
});

Then('I am redirected to the Sign In area', () => {
  restrictedPage.assertSignInPage();
});

//scenario 3

When('I click on the Sign In button', () => {
  loginPage.cickSignInButton();
});

Then('I can see the blank email and password error messages', () => {
  loginPage.assertEmailBlank();
  loginPage.assertPassBlank();
});

//scenario 4

When('I type only my email', () => {
  loginPage.typeEmail();
  loginPage.cickSignInButton();
});

Then('I can see the blank password error message', () => {
  loginPage.assertPassBlank();
});

//scenario 5

When('I type only my pass', () => {
  loginPage.typePass();
  loginPage.cickSignInButton();
});

Then('I can see the blank email error message', () => {
  loginPage.assertEmailBlank();
});

//scenario 6

When(/^I type "(.*?)" and pass$/, (email) => {
  loginPage.typeDiffEmail(email);
  loginPage.typePass();
  loginPage.cickSignInButton();
});

//scenario 7

When(/^I type my email and "(.*?)"$/, (pass) => {
  loginPage.typeEmail();
  loginPage.typeDiffPass(pass);
  loginPage.cickSignInButton();
});

//scenario 8

When('I type my credentials', () => {
  loginPage.typeEmail();
  loginPage.typePass();
});

When('I click on the Eye Icon', () => {
  loginPage.showPass();
});

Then('I can see my password', () => {
  loginPage.assertPass();
});

//scenario Forgot Password?

When('I click on the Forgot Passord? link', () => {
  loginPage.forgotPassLink();
});

When('I type my email', () => {
  loginPage.typeEmail();
  loginPage.submitResetPass();
});

Then('I can see the sent reset email message', () => {
  loginPage.assertResetPass();
});