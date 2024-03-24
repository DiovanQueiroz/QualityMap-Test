import { faker } from "@faker-js/faker/locale/pt_BR";

export const successfulAccount = {
  gender: "male",
  email: faker.internet.email(),
  password: "Diovan1234",
  name: faker.person.firstName(),
  lastName: faker.person.lastName(),
  birthDate: [16, 9, 1998],
  companyName: faker.animal.bird(),
  newsLetter: false,
};
export const invalidPassword = {
  gender: "male",
  email: faker.internet.email(),
  password: "1",
  name: faker.person.firstName(),
  lastName: faker.person.lastName(),
  birthDate: [16, 9, 1998],
  companyName: faker.animal.bird(),
  newsLetter: false,
};
export const invalidEmailWithAt = {
  email: "testeemail@teste",
  password: "teste@teste",
  name: faker.person.firstName(),
  lastName: faker.person.lastName(),
};
export const invalidEmailWithoutAt = {
  email: "noAt",
  password: "teste@teste",
  name: faker.person.firstName(),
  lastName: faker.person.lastName(),
};
export const uniqueEmail = {
  gender: "male",
  email: 'teste2303@mailinator.com',
  password: "Senha1234",
  name: faker.person.firstName(),
  lastName: faker.person.lastName(),
  birthDate: [12, 5, 2004],
  companyName: faker.animal.bird(),
  newsLetter: false,
};

