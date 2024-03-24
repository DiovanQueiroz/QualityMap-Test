
export const registrationElements = {
    resultBlock: '.result',
    continueButton: ".buttons > .button-1",
    firstName: "#FirstName",
    lastName: "#LastName",
    email: "#Email",
    password: "#Password",
    confirmPassword: "#ConfirmPassword",
    genderMale: "#gender-male",
    genderFemale: "#gender-female",
    dateOfBirthDay: '[name="DateOfBirthDay"]',
    dateOfBirthMonth: '[name="DateOfBirthMonth"]',
    dateOfBirthYear: '[name="DateOfBirthYear"]',
    companyName: "#Company",
    newsLetter: "#Newsletter",
    registerSubmitButton: "#register-button",

}

export const registrationTexts = {
    successfulRegistration: "Your registration completed",
    buttonText: "Continue",
    passwordRulesLabel: "Password must meet the following rules: ",
    passwordRuleOne: "must have at least 6 characters",
    emailAlreadyExists: "The specified email already exists",
    wrongEmail: "Wrong email",
    firstNameRequired: "First name is required.",
    lastNameRequired: "Last name is required.",
    emailRequired: "Email is required.",
    passwordRequired: "Password is required."
}

export const registrationAlerts = {
    invalidPassword : "#Password-error",
    emailError: "#Email-error",
    errorMessageH1:".message-error",
    firstNameError: ":nth-child(1) > .form-fields > :nth-child(2)",
    lastNameError: ":nth-child(1) > .form-fields > :nth-child(3)",
    confirmPasswordError: "#ConfirmPassword-error"
}