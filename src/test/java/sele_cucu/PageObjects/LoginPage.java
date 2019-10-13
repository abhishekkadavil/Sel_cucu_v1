package sele_cucu.PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import sele_cucu.Context.TestContext;
import sele_cucu.Managers.FileReaderManager;
import sele_cucu.Utils.Wait;
import sele_cucu.testDataTypes.TestData;

public class LoginPage {

	public WebDriver ldriver;
	public LoginPage(WebDriver rdriver)
	{
		ldriver = rdriver;
		PageFactory.initElements(ldriver, this);
	}
	
	//
	//Variables
	//
	
	@FindBy(id = "email")
	@CacheLookup
	WebElement txtEmail;

	@FindBy(id = "passwd")
	@CacheLookup
	WebElement txtPassword;
	
	@FindBy(xpath = "//a[@class='login']")
	@CacheLookup
	WebElement btnSign;

	@FindBy(id = "SubmitLogin")
	@CacheLookup
	WebElement btnLogin;

	@FindBy(linkText = "Logout")
	@CacheLookup
	WebElement lnkLogout;
	
	//
	//Functions
	//
	public void navigateTo_HomePage() 
	{
		ldriver.get(FileReaderManager.getInstance().getConfigReader().getApplicationUrl());
	}
	
	public void clickSignIn() 
	{
		btnSign.click();
	}
	
	public void setUserName(String uname) {
		clickSignIn();
		txtEmail.clear();
		txtEmail.sendKeys(uname);
	}

	public void setPassword(String pwd) {
		txtPassword.clear();
		txtPassword.sendKeys(pwd);
	}

	public void clickLogin() {
		btnLogin.click();
		Wait.untilJqueryIsDone(ldriver);
	}

	public void clickLogout() {
		lnkLogout.click();
	}
	
}
