package sele_cucu.StepDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import sele_cucu.Context.TestContext;
import sele_cucu.Managers.WebDriverManager;
import sele_cucu.PageObjects.LoginPage;

public class LoginPageSteps {
	
	public LoginPage loginPage;
	public WebDriverManager webDriverManager;
	TestContext testContext;

	public LoginPageSteps(TestContext context) 
	{
		testContext = context;
		loginPage = testContext.getPageObjectManager().getLoginPage();
	}
	
	@Given("User Launch browser")
	public void user_Launch_browser() 
	{
		loginPage.navigateTo_HomePage(); 
	}

	@When("User enters Username as {string} and Password as {string}")
	public void user_enters_Username_as_and_Password_as(String uname, String pwd) 
	{
	    loginPage.setUserName(uname);
	    loginPage.setPassword(pwd);
	}

	@When("Click on Login")
	public void click_on_Login() 
	{
	    loginPage.clickLogin();
	}

	@Then("Page Title should be {string}")
	public void page_Title_should_be(String string) {
	    
	}

	@When("User click on Log out link")
	public void user_click_on_Log_out_link() {
	    
	}

}
