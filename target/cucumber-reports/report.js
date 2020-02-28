$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/validateInvoice.feature");
formatter.feature({
  "name": "Validate invoice feature for accepting created invoices",
  "description": "  Agile story: As a user I want to be able to validate customer\u0027s invoices\n  so register the payment and send it to customer\n  A/C: User should see validate button, After clicking validate button user should\n  see customer invoice and should be able send the invoice to the customer, and register the payment",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SmokeTest"
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
  "name": "Verify validate button is displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "selects customer\u0027s invoice with status from file \"src/TestData.xlsx\"",
  "keyword": "And "
});
formatter.match({
  "location": "ValidateInvoiceSteps.selects_customer_s_invoice_with_status_from_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see the validate button",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_should_see_the_validate_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify validate button should not displayed 1",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User selects customer\u0027s invoice with \"\u003cstatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should not see validate button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "status"
      ]
    },
    {
      "cells": [
        "Open"
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
  "name": "Verify validate button should not displayed 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User selects customer\u0027s invoice with \"Open\"",
  "keyword": "And "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_selects_customer_s_invoice_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should not see validate button",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_should_not_see_validate_button()"
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
  "name": "Verify validate button should not displayed 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User selects customer\u0027s invoice with \"Paid\"",
  "keyword": "And "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_selects_customer_s_invoice_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should not see validate button",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_should_not_see_validate_button()"
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
  "name": "Verify ValidateWithPositiveAmountOfTotalAndRegisterPayment",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User selects customer\u0027s invoice that has more than 0 amount of total and with \"Draft\" status",
  "keyword": "And "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_selects_customer_s_invoice_that_has_more_than_amount_of_total_and_with_status(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on validate button",
  "keyword": "When "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_clicks_on_validate_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Register Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_clicks_on_Register_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Validate button",
  "keyword": "And "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_clicks_on_Validate_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see again current invoice and status should change to \"primary\" sign",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_should_see_again_current_invoice_and_status_should_change_to_sign(String)"
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
  "name": "Verify SendByEmailInvoice",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User selects customer\u0027s invoice that has more than 0 amount of total and with \"Draft\" status",
  "keyword": "And "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_selects_customer_s_invoice_that_has_more_than_amount_of_total_and_with_status(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on validate button",
  "keyword": "And "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_clicks_on_validate_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Send By Email button",
  "keyword": "And "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_clicks_on_Send_By_Email_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Send button",
  "keyword": "And "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_clicks_Send_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sees that after sending Send By Email button is not highlighted, uses file \"src/TestData.xlsx\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidateInvoiceSteps.user_sees_that_after_sending_Send_By_Email_button_is_not_highlighted_uses_file(String)"
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