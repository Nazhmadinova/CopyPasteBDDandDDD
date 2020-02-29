Feature: Search for invoice feature
  Agile story: As a user I should be able to use search functionality, so I can find and manage invoices.
  A/C:

  Background: Login and going to Invoice module
    When User on login page and enters credentials
    And User sees home page and clicks on Invoices module


  @SmokeTest
  Scenario: VALIDATION OF THE SEARCH BOX AND 3 DROPDOWN MENUS
    When The search field is dispalyed
    And User clicks on the search sign box
    Then User should be able to see three dropdown menus underneath the search box Filters,Group by,Favorites


  @SmokeTest
  Scenario:INVOICES SEARCH BY THE CUSTOMER NAME
    When User enters valid input from file "src/TestData.xlsx"
    Then All of the updated invoices related to search should be displayed

  @SmokeTest
  Scenario Outline: verifying preset filter options in the "Filters" dropdown menu
    And User clicks on FILTERS dropdown menu
    When User selects one of the "<preset option>"
    Then List of the updated invoices filtered by chosen filter option "<preset option>" should be displayed
    Then Verify chosen "<preset option>" is dispalyed in the search box

    Examples:
      | preset option     |
      | Paid              |
#      | Draft             |
#      | Open              |
#      | Overdue           |
#      | My Invoices       |
#      | My Activities     |
#      | Late Activities   |
#      | Today Activities  |
#      | Future Activities |
#


