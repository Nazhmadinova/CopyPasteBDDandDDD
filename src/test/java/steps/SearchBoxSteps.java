package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import pages.SearchBoxPage;
import utilities.Config;
import utilities.SeleniumUtils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;

public class SearchBoxSteps {
    SearchBoxPage searchBoxPage = new SearchBoxPage();
    FileInputStream fileInputStream;
    XSSFWorkbook workbook;
    XSSFSheet sheet;
    XSSFCell cell;


    // @When("User on login page and enters credentials")
    public void user_on_login_page_and_enters_credentials() {
        SeleniumUtils.login(Config.getProperties("url1"), Config.getProperties("UsernameManager3"), Config.getProperties("passwordManager3"));
    }

    // @When("User sees home page and clicks on Invoices module")
    public void user_sees_home_page_and_clicks_on_Invoices_module() {
        SeleniumUtils.pauseWithTreadSleep(2);
        SeleniumUtils.goToInvoicingModule();
    }


    @When("The search field is dispalyed")
    public void the_search_field_is_dispalyed() {
        Assert.assertTrue(searchBoxPage.searchBox.isDisplayed());

    }

    @When("User clicks on the search sign box")
    public void user_clicks_on_the_search_sign_box() {
        Assert.assertTrue(searchBoxPage.searchSignBox.isDisplayed());
        searchBoxPage.searchSignBox.click();
        SeleniumUtils.pauseWithTreadSleep(4);


    }

    @Then("User should be able to see three dropdown menus underneath the search box Filters,Group by,Favorites")
    public void user_should_be_able_to_see_dropdown_menus_underneath_the_search_box_Filters_Group_by_Favorites() {
        Assert.assertTrue(searchBoxPage.FiltersModule.isDisplayed());
        Assert.assertTrue(searchBoxPage.GroupByModule.isDisplayed());
        Assert.assertTrue(searchBoxPage.FavoritesModule.isDisplayed());


    }

    @When("User enters valid input from file {string}")
    public void user_enters_valid_input_from_file(String string) throws IOException {

        String customerName = "" + SeleniumUtils.getCell(string, "SearchFunction", 0, 1);
        SeleniumUtils.pauseWithTreadSleep(5);
        searchBoxPage.searchBox.sendKeys(customerName + Keys.ENTER);


    }

    @Then("All of the updated invoices related to search should be displayed")
    public void all_of_the_updated_invoices_related_to_search_should_be_displayed() throws IOException {

        String customerName = "" + SeleniumUtils.getCell("src/TestData.xlsx", "SearchFunction", 0, 1);



        try {


            List<WebElement> list = searchBoxPage.listNames;
            for (WebElement name : list) {
                if (name.getText().contains(customerName)) {
                    SeleniumUtils.pauseWithTreadSleep(3);
                    Assert.assertTrue(name.isDisplayed());
                    SeleniumUtils.pauseWithTreadSleep(3);
                }
            }


        }catch (StaleElementReferenceException e){

        }

    }


    @When("User clicks on FILTERS dropdown menu")
    public void user_clicks_on_FILTERS_dropdown_menu() {
        SeleniumUtils.pauseWithTreadSleep(6);
        searchBoxPage.searchSignBox.click();
        SeleniumUtils.pauseWithTreadSleep(5);
        searchBoxPage.FiltersModule.click();

    }

    @When("User selects one of the {string}")
    public void user_selects_one_of_the(String string) {
        SeleniumUtils.pauseWithTreadSleep(2);
        //searchBoxPage.FiltersModule.click();

        List<WebElement> list = searchBoxPage.listPresetOptions;
        for (WebElement element : list) {
            if (element.getText().equalsIgnoreCase(string)) {
                element.click();
                SeleniumUtils.pauseWithTreadSleep(3);
            }
        }
    }

    @Then("List of the updated invoices filtered by chosen filter option {string} should be displayed")
    public void list_of_the_updated_invoices_filtered_by_chosen_filter_option_should_be_displayed(String string) {

        List<WebElement> list = searchBoxPage.listPresetOptions;
        for (WebElement element : list) {
            if (element.getText().equalsIgnoreCase(string)) {
                element.click();
                SeleniumUtils.pauseWithTreadSleep(2);
                Assert.assertTrue(element.isDisplayed());
                break;
            }


        }
    }
    @Then("Verify chosen {string} is dispalyed in the search box")
    public void verify_chosen_is_dispalyed_in_the_search_box(String string) {
        List<WebElement> searchConfirmList = searchBoxPage.SearchBoxConfirmTag;
        for (WebElement elemSearchBox:searchConfirmList) {
            if(elemSearchBox.getText().equals(string)){
                Assert.assertEquals(elemSearchBox.getText(),string,"Chosen preset option is not displayed in search box");
                break;
            }
        }

    }
    }

