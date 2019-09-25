package sele_cucu.Utils;

import org.openqa.selenium.WebDriver;

import sele_cucu.DataProviders.ConfigFileReader;
import sele_cucu.Managers.FileReaderManager;
import sele_cucu.Managers.PageObjectManager;
import sele_cucu.PageObjects.LoginPage;

public class BaseClass {
	
	public WebDriver driver;
	public PageObjectManager pageObjectManager;
	public LoginPage loginPage;
	public ConfigFileReader configFileReader;
	public FileReaderManager fileReaderManager;
	
	public void initBaseClass()
	{
		try
		{
			pageObjectManager = new PageObjectManager(driver);
			loginPage = pageObjectManager.getLoginPage();
			fileReaderManager = new FileReaderManager();
			configFileReader= fileReaderManager.getConfigReader();
		}
		catch (Exception ex)
		{
			System.out.println(ex.toString());
		}
	}

}
