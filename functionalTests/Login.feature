Feature: Login 

@sanity
Scenario: Successful Login with Valid Credentials 
	Given User Launch browser 
	And User enters Username as "admin1@yourstore.com" and Password as "admin1" 
	And Click on Login 
	Then Page Title should be "Dashboard / nopCommerce administration" 
	When User click on Log out link 
	Then Page Title should be "Your store. Login" 
	
@regression
Scenario Outline: Login Data Driven 
	Given User Launch browser 
	And User enters Username as "<uname>" and Password as "<pwd>" 
	And Click on Login 
	Then Page Title should be "Dashboard / nopCommerce administration" 
	When User click on Log out link 
	Then Page Title should be "Your store. Login" 
	
	Examples: 
		| uname | pwd |
		| admin2@yourstore.com	|	admin2 |
		| admin3@yourstore.com	|	admin3 |
		
@regression1
Scenario Outline: Login Data Driven Via Json 
	Given User Launch browser 
	And User enters user credentials "<credentials>"
	And Click on Login 
	Then Page Title should be "Dashboard / nopCommerce administration" 
	When User click on Log out link 
	Then Page Title should be "Your store. Login" 
	
	Examples: 
		| credentials |
		| Cred1	|
		| Cred2	|