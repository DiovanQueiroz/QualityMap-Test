import moment from "moment";
import { registrationElements } from "../e2e/elements/registrationElements";

Cypress.Commands.add("createAccount", (accountInformation) => {
    cy.visit("/register?returnUrl=%2F");

    //Required fields
    cy.get(registrationElements.firstName).type(accountInformation.name);
    cy.get(registrationElements.lastName).type(accountInformation.lastName);
    cy.get(registrationElements.email).type(accountInformation.email);
    cy.get(registrationElements.password).type(accountInformation.password);
    cy.get(registrationElements.confirmPassword).type(accountInformation.password);

    if(accountInformation.gender){
  accountInformation.gender === "male"
    ? cy.get(registrationElements.genderMale).check()
    : cy.get(registrationElements.genderFemale).check();
    }

    if(accountInformation.birthDate){
  cy.get(registrationElements.dateOfBirthDay).select(`${accountInformation.birthDate[0]}`).should("contain", `${accountInformation.birthDate[0]}`);
  cy.get(registrationElements.dateOfBirthMonth).select(`${accountInformation.birthDate[1]}`).should( "contain",moment().month(accountInformation.birthDate[1] - 1).format("MMMM"));
  cy.get(registrationElements.dateOfBirthYear).select(`${accountInformation.birthDate[2]}`).should("contain", `${accountInformation.birthDate[2]}`);
    }

    if(accountInformation.companyName)
  cy.get(registrationElements.companyName).type(accountInformation.companyName);

  accountInformation.newsLetter === true
    ? cy.get(registrationElements.newsLetter).check()
    : cy.get(registrationElements.newsLetter).uncheck();

  cy.get(registrationElements.registerSubmitButton).click();
});
