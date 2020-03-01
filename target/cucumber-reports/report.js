$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/searchBox.feature");
formatter.feature({
  "name": "Search for invoice feature",
  "description": "  Agile story: As a user I should be able to use search functionality, so I can find and manage invoices.\n  A/C:",
  "keyword": "Feature"
});
formatter.background({
  "name": "Login and going to Invoice module",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User on login page and enters credentials",
  "keyword": "When "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_on_login_page_and_enters_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sees home page and clicks on Invoices module",
  "keyword": "And "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_sees_home_page_and_clicks_on_Invoices_module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "VALIDATION OF THE SEARCH BOX AND 3 DROPDOWN MENUS",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "The search field is dispalyed",
  "keyword": "When "
});
formatter.match({
  "location": "SearchBoxSteps.the_search_field_is_dispalyed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the search sign box",
  "keyword": "And "
});
formatter.match({
  "location": "SearchBoxSteps.user_clicks_on_the_search_sign_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see three dropdown menus underneath the search box Filters,Group by,Favorites",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchBoxSteps.user_should_be_able_to_see_dropdown_menus_underneath_the_search_box_Filters_Group_by_Favorites()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login and going to Invoice module",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User on login page and enters credentials",
  "keyword": "When "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_on_login_page_and_enters_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sees home page and clicks on Invoices module",
  "keyword": "And "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_sees_home_page_and_clicks_on_Invoices_module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "INVOICES SEARCH BY THE CUSTOMER NAME",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User enters valid input from file \"src/TestData.xlsx\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchBoxSteps.user_enters_valid_input_from_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All of the updated invoices related to search should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchBoxSteps.all_of_the_updated_invoices_related_to_search_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "verifying preset filter options in the \"Filters\" dropdown menu",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User clicks on FILTERS dropdown menu",
  "keyword": "And "
});
formatter.step({
  "name": "User selects one of the \"\u003cpreset option\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "List of the updated invoices filtered by chosen filter option \"\u003cpreset option\u003e\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify chosen \"\u003cpreset option\u003e\" is dispalyed in the search box",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "preset option"
      ]
    },
    {
      "cells": [
        "Paid"
      ]
    }
  ]
});
formatter.background({
  "name": "Login and going to Invoice module",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User on login page and enters credentials",
  "keyword": "When "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_on_login_page_and_enters_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sees home page and clicks on Invoices module",
  "keyword": "And "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_sees_home_page_and_clicks_on_Invoices_module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying preset filter options in the \"Filters\" dropdown menu",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User clicks on FILTERS dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "SearchBoxSteps.user_clicks_on_FILTERS_dropdown_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects one of the \"Paid\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchBoxSteps.user_selects_one_of_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "List of the updated invoices filtered by chosen filter option \"Paid\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchBoxSteps.list_of_the_updated_invoices_filtered_by_chosen_filter_option_should_be_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify chosen \"Paid\" is dispalyed in the search box",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchBoxSteps.verify_chosen_is_dispalyed_in_the_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login and going to Invoice module",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User on login page and enters credentials",
  "keyword": "When "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_on_login_page_and_enters_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sees home page and clicks on Invoices module",
  "keyword": "And "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_sees_home_page_and_clicks_on_Invoices_module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify validate invoice with empty product field",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User selects customer\u0027s invoice that has 0 amount of total and with \"Draft\" status",
  "keyword": "And "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_selects_customer_s_invoice_that_has_amount_of_total_and_with_status(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});