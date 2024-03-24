import { faker } from "@faker-js/faker/locale/pt_BR";

describe('apiTests',()=>{
    before(()=>{
            cy.createMassTest()
    })
    
    it('Should be possible to create an user',()=>{
        cy.apiCreateUser()
    })
    it('Should be possible to edit an user',()=>{
        const newName = faker.person.fullName()
        const newEmail = faker.internet.email()
        cy.fixture("testUser.json").then((testUser)=>{
            cy.api({
                url: "https://serverest.dev/usuarios/" + testUser._id,
                method: "PUT",
                body: {
                    "nome": newName,
                    "email":newEmail,
                    "password": testUser.password,
                    "administrador": testUser.administrador
                },
              })
              .then((response) => {
                expect(response.status).to.be.eq(200)
                expect(response.body).to.have.property(
                  "message",
                  "Registro alterado com sucesso"
                );
              })
        })
    })
    it('Should be possible to delete an user',()=>{
        cy.fixture("testUser.json").then((testUser)=>{
            cy.api({
                url: "https://serverest.dev/usuarios/" + testUser._id,
                method: "DELETE",
              })
              .then((response) => {
                expect(response.status).to.be.eq(200)
                expect(response.body).to.have.property(
                  "message",
                  "Registro excluído com sucesso"
                );
              })
        })
    })
})