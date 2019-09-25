package sele_cucu.StepDef;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import sele_cucu.Managers.PageObjectManager;
import sele_cucu.PageObjects.LoginPage;
import sele_cucu.Utils.BaseClass;

public class LoginPageSteps extends BaseClass {
	
	@Given("User Launch browser")
	public void user_Launch_browser() 
	{
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		initBaseClass();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(configFileReader.getImplicitlyWait(), TimeUnit.SECONDS);
		loginPage.navigateTo_HomePage(); 
	}

	@When("User enters Username as {string} and Password as {string}")
	public void user_enters_Username_as_and_Password_as(String string, String string2) 
	{
	    
	}

	@When("Click on Login")
	public void click_on_Login() {
	    
	}

	@Then("Page Title should be {string}")
	public void page_Title_should_be(String string) {
	    
	}

	@When("User click on Log out link")
	public void user_click_on_Log_out_link() {
	    
	}

	@Then("Close browser")
	public void close_browser() {

	}

	@Given("User Launch Chrome browser")
	public void user_Launch_Chrome_browser() {

	}

	@When("User enters Email as {string} and Password as {string}")
	public void user_enters_Email_as_and_Password_as(String string, String string2) {

	}

}
