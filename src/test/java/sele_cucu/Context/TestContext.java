package sele_cucu.Context;

import sele_cucu.Managers.PageObjectManager;
import sele_cucu.Managers.WebDriverManager;

public class TestContext {
	
	private WebDriverManager webDriverManager;
	private PageObjectManager pageObjectManager;

	public TestContext() 
	{
		webDriverManager = new WebDriverManager();
		pageObjectManager = new PageObjectManager(webDriverManager.getDriver());
	}

	public WebDriverManager getWebDriverManager() 
	{
		return webDriverManager;
	}

	public PageObjectManager getPageObjectManager() 
	{
		return pageObjectManager;
	}

}
