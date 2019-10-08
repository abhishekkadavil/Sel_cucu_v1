package sele_cucu.DataProviders;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

//import com.google.gson.Gson;

import sele_cucu.Managers.FileReaderManager;
import sele_cucu.testDataTypes.TestData;

public class JsonDataReader {

	private final String testDataFilePath = FileReaderManager.getInstance().getConfigReader().getTestDataResourcePath()	+ "TestData.json";
	private List<TestData> testdata;

	public JsonDataReader() 
	{
		//testdata = getTestData();
	}

//	private List<TestData> getTestData() 
//	{
//		Gson gson = new Gson();
//		BufferedReader bufferReader = null;
//		try 
//		{
//			bufferReader = new BufferedReader(new FileReader(testDataFilePath));
//			TestData[] data = gson.fromJson(bufferReader, TestData[].class);
//			return Arrays.asList(data);
//		} 
//		catch (FileNotFoundException e) 
//		{
//			throw new RuntimeException("Json file not found at path : " + testDataFilePath);
//		} 
//		finally 
//		{
//			try 
//			{
//				if (bufferReader != null)
//					bufferReader.close();
//			} 
//			catch (IOException ignore)
//			{
//			}
//		}
//	}

	public final TestData getTestDataByID(String Id) 
	{
		return testdata.stream().filter(x -> x.id.equalsIgnoreCase(Id)).findAny().get();
	}

}
