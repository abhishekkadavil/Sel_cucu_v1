package sele_cucu.Managers;

import org.openqa.selenium.WebDriver;

import sele_cucu.DataProviders.ConfigFileReader;
import sele_cucu.DataProviders.JsonDataReader;

public class FileReaderManager {

	private static FileReaderManager fileReaderManager = new FileReaderManager();
	private static ConfigFileReader configFileReader;
	private static JsonDataReader jsonDataReader;

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
	
	public JsonDataReader getJsonReader() 
	{
		return (jsonDataReader == null) ? new JsonDataReader() : jsonDataReader;
	}

}
