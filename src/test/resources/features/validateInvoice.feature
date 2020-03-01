@SmokeTest
Feature: Validate invoice feature for accepting created invoices
  Agile story: As a user I want to be able to validate customer's invoices
  so register the payment and send it to customer
  A/C: User should see validate button, After clicking validate button user should
  see customer invoice and should be able send the invoice to the customer, and register the payment

  Background: Login and going to Invoice module
    When User on login page and enters credentials
    And User sees home page and clicks on Invoices module

  Scenario: Verify validate button is displayed
    And selects customer's invoice with status from file "src/TestData.xlsx"
    Then User should see the validate button

  Scenario Outline: Verify validate button should not displayed 1
    And User selects customer's invoice with "<status>"
    Then User should not see validate button
    Examples:
      | status |
      | Open   |
      | Paid   |


  Scenario: Verify ValidateWithPositiveAmountOfTotalAndRegisterPayment
    And User selects customer's invoice that has more than 0 amount of total and with "Draft" status
    When User clicks on validate button
    And User clicks on Register Payment button
    And User clicks on Validate button
    Then User should see again current invoice and status should change to "primary" sign

  Scenario: Verify SendByEmailInvoice
    And User selects customer's invoice that has more than 0 amount of total and with "Draft" status
    And User clicks on validate button
    And User clicks on Send By Email button
    And User clicks Send button
    Then User sees that after sending Send By Email button is not highlighted, uses file "src/TestData.xlsx"

  Scenario: Verify validate invoice with empty product field
    And User selects customer's invoice that has 0 amount of total and with "Draft" status

