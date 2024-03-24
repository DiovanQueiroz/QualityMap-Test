import moment from "moment";
import { faker } from "@faker-js/faker/locale/pt_BR";
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
  cy.get(registrationElements.dateOfBirthDay).select(`${accountInformation.birthDate[0]}`)
  cy.get(registrationElements.dateOfBirthDay).should("contain", `${accountInformation.birthDate[0]}`);

  cy.get(registrationElements.dateOfBirthMonth).select(`${accountInformation.birthDate[1]}`)
  cy.get(registrationElements.dateOfBirthMonth).should( "contain",moment().month(accountInformation.birthDate[1] - 1).format("MMMM"));

  cy.get(registrationElements.dateOfBirthYear).select(`${accountInformation.birthDate[2]}`)
  cy.get(registrationElements.dateOfBirthYear).should("contain", `${accountInformation.birthDate[2]}`);
    }

    if(accountInformation.companyName)
  cy.get(registrationElements.companyName).type(accountInformation.companyName);

  accountInformation.newsLetter === true
    ? cy.get(registrationElements.newsLetter).check()
    : cy.get(registrationElements.newsLetter).uncheck();

  cy.get(registrationElements.registerSubmitButton).click();
});


Cypress.Commands.add('apiCreateUser',()=>{
  cy.api({
    url: "https://serverest.dev/usuarios",
    method: "POST",
    body: {
        "nome": faker.person.fullName(),
        "email": faker.internet.email(),
        "password": "teste",
        "administrador": "true"
    },
    failOnStatusCode: false,
  })
  .then((response) => {
    expect(response.status).to.be.eq(201)
    expect(response.body).to.have.property(
      "message",
      "Cadastro realizado com sucesso"
    );
  });
})

Cypress.Commands.add('createMassTest',()=>{
  cy.apiCreateUser().then((response)=>{
    cy.api({
        url: "https://serverest.dev/usuarios/" + response.body._id,
        method: "GET",
        failOnStatusCode: false,
      }).then((responsetwo)=>{
        expect(responsetwo.status).to.be.eq(200)
        cy.writeFile("cypress/fixtures/testUser.json", responsetwo.body)
      })
})
 
})





