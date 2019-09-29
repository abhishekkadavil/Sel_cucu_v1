package sele_cucu.testDataTypes;

public class TestData {
	
	public String id;
	public String firstName;
	public String lastName;
	public Integer age;
	public String emailAddress;
	public Address address;
	public PhoneNumber phoneNumber;
	public Credentials credentials;
	
	public class Address {

	public String streetAddress;
	public String city;
	public String postCode;
	public String state;
	public String country;
	public String county;

	}
	public class Credentials {

	public String username;
	public String password;

	}
	public class PhoneNumber {

	public String home;
	public String mob;

	}

}
