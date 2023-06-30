Feature: Login page

    Login page will work if the user is registered

    Background:
        Given A user opens the saucedemo website

    @smoke
    Scenario: Success Login
        When The user enters the "username", "password" and clicks on the login button
        Then The url will contains the inventory subdirectory

    Scenario: Incorrect Login without passing username and password
        When The user clicks on the login button without passing username and password
        Then I should see error message 1 "Epic sadface: Username is required"

    Scenario: Incorrect Login without passing a password
        When The user enters the valid username "username" and clicks on the login button
        Then I should see error message 2 "Epic sadface: Password is required"

    Scenario: Incorrect Login invalid password
        When The user enters the valid username "username" and a invalid password "password"
            And Clicks on the login button
        Then I should see error message 3 "Epic sadface: Username and password do not match any user in this service"

    Scenario: Incorrect Login with blocked user
        When The user enters a blocked username "username", a valid password "password" and clicks on login button
        Then I should see error message 4 "Epic sadface: Sorry, this user has been locked out."
		