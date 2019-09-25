package sele_cucu.Managers;

import org.openqa.selenium.WebDriver;

import sele_cucu.DataProviders.ConfigFileReader;

public class FileReaderManager {

	private static FileReaderManager fileReaderManager = new FileReaderManager();
	private static ConfigFileReader configFileReader;

	public FileReaderManager()
	{
		
	}

	public static FileReaderManager getInstance()
	{
		return fileReaderManager;
	}

	public ConfigFileReader getConfigReader()
	{
		return (configFileReader == null) ? new ConfigFileReader() : configFileReader;
	}

}
