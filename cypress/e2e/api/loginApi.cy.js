describe("Testing ServeRest Api's", () => {
  it("should be possible to realize a successful login", () => {
    cy.api({
        url: "https://serverest.dev/login",
        method: "POST",
        body: {
            email: "beltrano@qa.com.br",
            password: "teste"
          },
        failOnStatusCode: false,
      }).then((response) => {
      expect(response.status).to.be.eq(200)
      expect(response.body).to.have.property(
        "message",
        "Login realizado com sucesso"
      );
      expect(response.body).to.have.property("authorization");
    });
  });

  it("should fail when trying to login with a non existent email", () => {
    cy.api({
      url: "https://serverest.dev/login",
      method: "POST",
      body: { email: "withoutregister@nobody.com", password: "itshouldfail" },
      failOnStatusCode: false,
    })
    .then((response) => {
      expect(response.status).to.be.eq(401)
      expect(response.body).to.have.property(
        "message",
        "Email e/ou senha inválidos"
      );
    });
  });

  it("should fail when trying to login with a wrong password", () => {
    cy.api({
      url: "https://serverest.dev/login",
      method: "POST",
      body: { email: "fulano@qa.com", password: "itshouldfail" },
      failOnStatusCode: false,
    })
    .then((response) => {
      expect(response.status).to.be.eq(401)
      expect(response.body).to.have.property(
        "message",
        "Email e/ou senha inválidos"
      );
    });
  });
});

