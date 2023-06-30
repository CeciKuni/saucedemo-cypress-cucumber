import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";
import InventoryPage from "../../pages/InventoryPage";

const login = new LoginPage();
const inventory = new InventoryPage();

Given("A user opens the saucedemo website", () => {
  login.navigateToLoginPage(data.loginPageTitle);
});

//*************************************** Scenario: Success Login ***************************************
When(
  "The user enters the {string}, {string} and clicks on the login button",
  (username, password) => {
    login.submitLogin(data.username[0], data.password[0]);
  }
);

Then("The url will contains the inventory subdirectory", () => {
  inventory.inventoryPageValidation();
  inventory.openSideBar();
  inventory.clickLogoutButton();
});

//*************************************** Scenario: Incorrect Login without passing username and password ***************************************
When(
  "The user clicks on the login button without passing username and password",
  () => {
    login.clickLoginButton();
  }
);

Then("I should see error message 1 {string}", (errorMsg) => {
  login.loginErrorMessage(data.errorMessages[0]);
});

//*************************************** Scenario: Incorrect Login without passing a password ***************************************
When(
  "The user enters the valid username {string} and clicks on the login button",
  (username) => {
    login.typeUsername(data.username[0]);
    login.clickLoginButton();
  }
);

Then("I should see error message 2 {string}", (errorMsg) => {
  login.loginErrorMessage(data.errorMessages[1]);
});

//***************************************Scenario: Incorrect Login invalid password ***************************************
When(
  "The user enters the valid username {string} and a invalid password {string}",
  (username, password) => {
    login.typeUsername(data.username[0]);
    login.typePassword(data.password[1]);
  }
);

When("Clicks on the login button", () => {
  login.clickLoginButton();
});

Then("I should see error message 3 {string}", (errorMsg) => {
  login.loginErrorMessage(data.errorMessages[2]);
});

//*************************************** Scenario: Incorrect Login with blocked user ***************************************
When("The user enters a blocked username {string}, a valid password {string} and clicks on login button", () => {
  login.typeUsername(data.username[2]);
  login.typePassword(data.password[0]);
  login.clickLoginButton();
});

Then("I should see error message 4 {string}", (errorMsg) => {
  login.loginErrorMessage(data.errorMessages[3]);
});