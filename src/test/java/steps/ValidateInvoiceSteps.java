package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import pages.*;
import utilities.Config;
import utilities.Driver;
import utilities.SeleniumUtils;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;

public class ValidateInvoiceSteps {

    InvoicingModulePage invoicingModulePage = new InvoicingModulePage();
    ExistingCustomerInvoicePage existingCustomerInvoicePage = new ExistingCustomerInvoicePage();
    RegisterPaymentPage registerPaymentPage = new RegisterPaymentPage();
    SendByEmailPage sendByEmailPage = new SendByEmailPage();
    HomePage homePage = new HomePage();

    @When("User on login page and enters credentials")
    public void user_on_login_page_and_enters_credentials() {
        SeleniumUtils.login(Config.getProperties("url1"),
                Config.getProperties("UsernameManager3"),
                Config.getProperties("passwordManager3"));

    }

    @When("User sees home page and clicks on Invoices module")
    public void user_sees_home_page_and_clicks_on_Invoices_module() {
        SeleniumUtils.pauseWithTreadSleep(2);
        SeleniumUtils.goToInvoicingModule();
    }

    @When("selects customer's invoice with status from file {string}")
    public void selects_customer_s_invoice_with_status_from_file(String string) throws IOException {

        XSSFCell cell = SeleniumUtils.getCell(string,"ValidateFunction",0,1);

        SeleniumUtils.pauseWithTreadSleep(3);
        List<WebElement> statuses = invoicingModulePage.tableStatus;

        for(WebElement status: statuses){
            if(status.getText().equals(""+cell)){
                status.click();
                break;
            }
        }
    }


    @Then("User should see the validate button")
    public void user_should_see_the_validate_button() {
        Assert.assertTrue("Validate button is not displayed, test FAILED",existingCustomerInvoicePage.validateButton.isDisplayed());
    }

    @When("User selects customer's invoice with {string}")
    public void user_selects_customer_s_invoice_with(String string) {

        SeleniumUtils.pauseWithTreadSleep(3);
        List<WebElement> statuses = invoicingModulePage.tableStatus;

        for(WebElement status: statuses){
            if(status.getText().equals(string)){
                status.click();
                break;
            }
        }

    }

    @Then("User should not see validate button")
    public void user_should_not_see_validate_button() {
        SeleniumUtils.pauseWithTreadSleep(3);
        Assert.assertFalse("Validate button is displayed, test FAILED",existingCustomerInvoicePage.validateButton.isDisplayed());
    }

    @When("User selects customer's invoice that has more than {int} amount of total and with {string} status")
    public void user_selects_customer_s_invoice_that_has_more_than_amount_of_total_and_with_status(Integer int1, String string) {
        SeleniumUtils.pauseWithTreadSleep(3);

        List<WebElement> totalAmount = invoicingModulePage.tableTotal;
        List<WebElement> statuses = invoicingModulePage.tableStatus;

        SeleniumUtils.pauseWithTreadSleep(2);
        for(int i = 0; i < totalAmount.size(); i++){
            String str = totalAmount.get(i).getText();
            String newStr = "";
            for(int j = 0; j < str.length(); j++){
                if(str.charAt(j) == '-' || Character.isDigit(str.charAt(j)) || str.charAt(j) == '.'){
                    newStr += str.charAt(j);
                }
            }
            double eachAmount = Double.parseDouble(newStr);
            if(statuses.get(i).getText().equals(string) && eachAmount > int1){
                totalAmount.get(i).click();
                break;
            }
        }
    }



    @When("User clicks on validate button")
    public void user_clicks_on_validate_button() {
        SeleniumUtils.explicitWaitForVisibility(existingCustomerInvoicePage.validateButton,2);
        existingCustomerInvoicePage.validateButton.click();
    }

    @When("User clicks on Register Payment button")
    public void user_clicks_on_Register_Payment_button() {
        SeleniumUtils.pauseWithTreadSleep(4);
        Driver.getDriver().findElement(By.xpath("//button[.='Register Payment']")).click();
    }

    @When("User clicks on Validate button")
    public void user_clicks_on_Validate_button() {
        SeleniumUtils.pauseWithTreadSleep(4);
        Driver.getDriver().findElement(By.xpath("//span[.='Validate']")).click();
        //registerPaymentPage.validateButton.click();
    }

    @Then("User should see again current invoice and status should change to {string} sign")
    public void user_should_see_again_current_invoice_and_status_should_change_to_sign(String string) {
        SeleniumUtils.pauseWithTreadSleep(3);

        String status = Driver.getDriver().findElement(By.xpath("//button[@data-value='paid']")).getAttribute("class");

        Assert.assertTrue("Failed",status.contains(string));
    }

    @When("User clicks on Send By Email button")
    public void user_clicks_on_Send_By_Email_button() {
        SeleniumUtils.explicitWaitForVisibility(existingCustomerInvoicePage.sendByEmailButton,5);
        existingCustomerInvoicePage.sendByEmailButton.click();

        SeleniumUtils.pauseWithTreadSleep(2);
        try{
            if(sendByEmailPage.saveButton.isDisplayed()){
                sendByEmailPage.closeButton.click();
            }
        }catch (NoSuchElementException e){
        }


    }

    @When("User clicks Send button")
    public void user_clicks_Send_button() {
        SeleniumUtils.explicitWaitForVisibility(sendByEmailPage.sendButton,5);
        sendByEmailPage.sendButton.click();
    }

    @Then("User sees that after sending Send By Email button is not highlighted, uses file {string}")
    public void user_sees_that_after_sending_Send_By_Email_button_is_not_highlighted_uses_file(String string) throws IOException{

        XSSFCell cell = SeleniumUtils.getCell(string,"ValidateFunction",4,1);

        SeleniumUtils.pauseWithTreadSleep(3);

        String sendByEmailAttribute = existingCustomerInvoicePage.sendByEmailButtonAfterClicking.getAttribute("class");
        Assert.assertFalse(sendByEmailAttribute.contains(""+cell));

    }

    @When("User selects customer's invoice that has {int} amount of total and with {string} status")
    public void user_selects_customer_s_invoice_that_has_amount_of_total_and_with_status(Integer int1, String string) {

        List<WebElement> totalAmount = invoicingModulePage.tableTotal;
        List<WebElement> statuses = invoicingModulePage.tableStatus;
        // SeleniumUtils.pauseWithTreadSleep(2);
        boolean check = true;

        int a = 0;
        while (check){
            for(int i = a; i < totalAmount.size()-1; i++){
                String str = totalAmount.get(i).getText();
                String newStr = "";
                for(int j = 0; j < str.length(); j++){
                    if(str.charAt(j) == '-' || Character.isDigit(str.charAt(j)) || str.charAt(j) == '.'){
                        newStr += str.charAt(j);
                    }
                }
                double eachAmount = Double.parseDouble(newStr);
                if(statuses.get(i).getText().equals(string) && eachAmount == int1){
                    totalAmount.get(i).click();
                    a = i+1;
                    break;
                }
            }
            SeleniumUtils.pauseWithTreadSleep(2);

            try {
                existingCustomerInvoicePage.productFieldFirst.getText();
                homePage.invoicingButton.click();
            }catch (NoSuchElementException e){
                existingCustomerInvoicePage.validateButton.click();
                //SeleniumUtils.pauseWithTreadSleep(3);
                String warningMsg = existingCustomerInvoicePage.emptyProductFieldValidateWarning.getText();
                Assert.assertEquals(warningMsg,"Please create some invoice lines.");
                SeleniumUtils.pauseWithTreadSleep(2);
                existingCustomerInvoicePage.wrongValidateWarningOkButton.click();
                break;
            }
        }

//        List<WebElement> totalAmount = Driver.getDriver().findElements(By.xpath("//tbody[@class='ui-sortable']/tr/td[8]"));
//        List<WebElement> statuses = Driver.getDriver().findElements(By.xpath("//tbody[@class='ui-sortable']/tr/td[10]"));
//         SeleniumUtils.pauseWithTreadSleep(2);
//        boolean check = true;
//
//        int a = 0;
//        while (check){
//            for(int i = a; i < totalAmount.size()-1; i++){
//                String str = totalAmount.get(i).getText();
//                String newStr = "";
//                for(int j = 0; j < str.length(); j++){
//                    if(str.charAt(j) == '-' || Character.isDigit(str.charAt(j)) || str.charAt(j) == '.'){
//                        newStr += str.charAt(j);
//                    }
//                }
//                double eachAmount = Double.parseDouble(newStr);
//                if(statuses.get(i).getText().equals(string) && eachAmount == int1){
//                    totalAmount.get(i).click();
//                    a = i+1;
//                    break;
//                }
//            }
//
//            SeleniumUtils.pauseWithTreadSleep(5);
//
//            try {
//                existingCustomerInvoicePage.productFieldFirst.getText();
//                SeleniumUtils.pauseWithTreadSleep(5);
//                Driver.getDriver().findElement(By.xpath("(//span[contains(text(),'Invoicing')])[1]")).click();
//                //homePage.invoicingButton.click();
//            }catch (NoSuchElementException e){
//                existingCustomerInvoicePage.validateButton.click();
//                SeleniumUtils.pauseWithTreadSleep(3);
//                String warningMsg = existingCustomerInvoicePage.emptyProductFieldValidateWarning.getText();
//                Assert.assertEquals(warningMsg,"Please create some invoice lines.");
//                SeleniumUtils.pauseWithTreadSleep(2);
//                existingCustomerInvoicePage.wrongValidateWarningOkButton.click();
//                break;
//            }
//        }
    }




}
