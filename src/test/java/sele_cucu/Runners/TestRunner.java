package sele_cucu.Runners;

import java.io.*;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

//import com.vimalselvam.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import sele_cucu.Managers.FileReaderManager;

@RunWith(Cucumber.class)
@CucumberOptions
		(
		features= {".//functionalTests/"},
		glue= {"sele_cucu.StepDef"},
		//plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},//for extended report
		//plugin = {"com.cucumber.listener.ExtentCucumberFormatter:test-output/report.html"},
		//plugin = { "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"},//for extended report
		dryRun=false,
		monochrome=true,
		plugin= {"pretty","html:test-output"}, //for normal report
		//tags= {"@sanity, @regression"}
		tags= {"@regression1"}
		)
public class TestRunner {
	
	@AfterClass
	public static void writeExtentReport() 
	{
		/*
		 * Reporter.loadXMLConfig(new
		 * File(FileReaderManager.getInstance().getConfigReader().getReportConfigPath())
		 * ); Reporter.setSystemInfo("user", System.getProperty("user.name"));
		 * Reporter.setSystemInfo("os", "Mac OSX");
		 * Reporter.setTestRunnerOutput("Sample test runner output message");
		 */
	}

}
