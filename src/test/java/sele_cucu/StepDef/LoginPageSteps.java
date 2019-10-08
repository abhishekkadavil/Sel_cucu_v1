package sele_cucu.StepDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import sele_cucu.Context.TestContext;
import sele_cucu.Enums.Context;
import sele_cucu.Managers.FileReaderManager;
import sele_cucu.Managers.WebDriverManager;
import sele_cucu.PageObjects.LoginPage;
import sele_cucu.testDataTypes.TestData;
import sele_cucu.testDataTypes.TestData.Credentials;

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
		testContext.scenarioContext.setContext(Context.LOGIN_ERROR, "Error while login");
		String LOGIN_ERR = (String)testContext.scenarioContext.getContext(Context.LOGIN_ERROR);
		System.out.println(LOGIN_ERR);
	}

	@Then("Page Title should be {string}")
	public void page_Title_should_be(String string) {
	    
	}

	@When("User click on Log out link")
	public void user_click_on_Log_out_link() {
	    
	}
	
	@Given("User enters user credentials {string}")
	public void user_enters_user_credentials(String testDataId) 
	{
		//Credentials creds=FileReaderManager.getInstance().getJsonReader().getTestDataByID(testDataId);
		//loginPage.fill_credsDetails(creds);
	}

}
