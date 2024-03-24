Automation tests for QualityMap

🚀 Features
Framework and plugins

✔️ Cypress: Used to create and run end-to-end (E2E) and API test automation.

✔️ Faker: Generates random names, emails, etc...

✔️ Mochawesome: Generates a dashboard report of our tests.

✔️ Cypress-plugin-api: Displays a API  response and request on frontend execution

✔️ moment: Validatse our conversion of number to month.

Code quality

✔️ ESLint: To avoid errors in the code pattern and ensure good quality of the same.

CI/CD
✔️ GitHub Actions: To trigger a pipeline on every push, this pipeline executes automated tests with Cypress and also ESlint to ensure working tests and quality code.


💻 Prerequisites to run the project on your machine

An IDE of your choice (we use VS Code in this project, which can be found here: https://code.visualstudio.com/).

Node.js 16.0+ (downloadable from here: https://nodejs.org/en/download/).

npm 8.0+ (comes bundled with Node.js).


⚙️ Running the project on your machine

Cloning the project:


Open your terminal and navigate to the directory where you want to clone the project.

Run the following command:

git clone [https://github.com/thaynaracdutra/webjump-automation-tests.git](https://github.com/DiovanQueiroz/QualityMap-Test.git)

This will clone the project to your machine.


Installing dependencies:


Navigate to the project folder in your terminal.

Run the following command:

npm install

This will install all of the project's dependencies.


Running the tests:


Headless mode:


Run the following command in the terminal:

npm run cy:run

This will run the tests in headless mode.


Headed mode:


Run the following command in the terminal:

npm run cy:open

This will open the Cypress test runner in your browser.



👩🏽‍💻 Test Execution Evidence


![image](https://github.com/DiovanQueiroz/QualityMap-Test/assets/98119854/2dcd05ed-9288-4dc9-8bd3-8b5ce8a8d692)




💬 Author's Comments

This project uses a GitHub Actions pipeline to run the tests. The pipeline is triggered on every commit and can be viewed here: https://github.
com/DiovanQueiroz/QualityMap-Test/actions
