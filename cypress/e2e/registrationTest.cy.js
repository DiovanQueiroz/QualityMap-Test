import {successfulAccount, invalidPassword, uniqueEmail, invalidEmailWithoutAt, invalidEmailWithAt, withoutRequiredFields} from "../fixtures/accountFactory";
import { registrationElements, registrationTexts, registrationAlerts } from "./elements/registrationElements";

describe("template spec", () => {
  it("should be possible to create an account", () => {
    cy.createAccount(successfulAccount);
    cy.get(registrationElements.resultBlock)
      .should("be.visible")
      .and("contain", registrationTexts.successfulRegistration);
    cy.url().should(
      "eq",
      Cypress.config().baseUrl + "/registerresult/1?returnUrl=/"
    );
    cy.get(registrationElements.continueButton)
      .should("be.visible")
      .and("contain", registrationTexts.buttonText);
  });

  it("should display an error message above the password field when trying to create an account with an invalid password", () => {
    cy.createAccount(invalidPassword);
    cy.get(registrationAlerts.invalidPassword)
      .should("be.visible")
      .and("contain", registrationTexts.passwordRulesLabel)
      .and("contain", registrationTexts.passwordRuleOne);
  });

  it("should display an error message on the top of the page when trying to create an account with an invalid email", () => {
    cy.createAccount(invalidEmailWithAt);
    cy.get(registrationAlerts.errorMessageH1) 
      .should("be.visible")
      .and("contain", registrationTexts.wrongEmail)
  });

  it("should display an error message above email field when trying to create an account with an invalid email", () => {
    cy.createAccount(invalidEmailWithoutAt);
    cy.get(registrationAlerts.emailError) 
    .should("be.visible")
    .and("contain", registrationTexts.wrongEmail)
  });

  it("should display an error message on the top of the page when trying to create an account with an duplicated email", () => {
    cy.createAccount(uniqueEmail);
    cy.get(registrationAlerts.errorMessageH1) 
      .should("be.visible")
      .and("contain", registrationTexts.emailAlreadyExists)
  });

  it("should display an error message above required fields when trying to create and account with filling up them", () => {
    cy.visit("/register?returnUrl=%2F");
    cy.get(registrationElements.registerSubmitButton).click()

    cy.contains(registrationTexts.firstNameRequired).should("be.visible")
    cy.contains(registrationTexts.lastNameRequired).should("be.visible")
    cy.contains(registrationTexts.emailRequired).should("be.visible")
    cy.contains(registrationTexts.passwordRequired).should("be.visible")
    cy.contains(registrationTexts.passwordRequired).last().should("be.visible")

  });
});
