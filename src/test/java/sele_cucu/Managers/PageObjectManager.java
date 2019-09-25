package sele_cucu.Managers;

import org.openqa.selenium.WebDriver;

import sele_cucu.PageObjects.LoginPage;

public class PageObjectManager {

	private WebDriver driver;
	private LoginPage loginPage;

	public PageObjectManager(WebDriver driver) 
	{
		this.driver = driver;
	}

	public LoginPage getLoginPage() 
	{
		return (loginPage == null) ? loginPage = new LoginPage(driver) : loginPage;
	}

}
