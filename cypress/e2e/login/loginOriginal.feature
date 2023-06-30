Feature: Login page

    Login page will work if the user is registered

    Background:
        Given A user opens the saucedemo website

    @smoke
    Scenario Outline: Success Login
        When The user enters the <username> and <password>
            And Clicks on the login button
        Then The url will contains the inventory subdirectory

    Examples: Usernames and Passwords
        | username      | password     |
        | standard_user | secret_sauce |
        | basic_user    | secret_pass  |

    Scenario: Incorrect Login without passing username and password
        When The user clicks on the login button without passing username and password
        Then I should see error message: "Epic sadface: Username is required"

    Scenario: Incorrect Login without passing a password
        When The user enters the valid username "standard_user"
            And  Clicks on the login button
        Then I should see error message: "Epic sadface: Password is required"

    Scenario: Incorrect Login invalid password
        When The user enters the valid username "standard_user" and a invalid password "123"
            And Clicks on the login button
        Then I should see error message: "Epic sadface: Username and password do not match any user in this service"

    Scenario: Incorrect Login with blocked user
        When The user enters a blocked username "locked_out_user" and valid password "secret_sauce"
            And Clicks on login button
        Then I should see error message: "Epic sadface: Sorry, this user has been locked out."
