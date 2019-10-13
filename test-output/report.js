$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./functionalTests/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login Data Driven Via Json",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression1"
    }
  ]
});
formatter.step({
  "name": "User Launch browser",
  "keyword": "Given "
});
formatter.step({
  "name": "Read tes data for \"\u003cTC_ID\u003e\" from Json file",
  "keyword": "And "
});
formatter.step({
  "name": "User enters Username and Password",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.step({
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "TC_ID"
      ]
    },
    {
      "cells": [
        "001"
      ]
    },
    {
      "cells": [
        "002"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Data Driven Via Json",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_Launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Read tes data for \"001\" from Json file",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.read_tes_data_for_from_Json_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Username and Password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_enters_Username_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_click_on_Log_out_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Data Driven Via Json",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_Launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Read tes data for \"002\" from Json file",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.read_tes_data_for_from_Json_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Username and Password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_enters_Username_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_click_on_Log_out_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});