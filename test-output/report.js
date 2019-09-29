$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:functionalTests/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User Launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_Launch_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters Username as \"admin1@yourstore.com\" and Password as \"admin1\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_enters_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.click_on_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_click_on_Log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User Launch browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters Username as \"\u003cuname\u003e\" and Password as \"\u003cpwd\u003e\"",
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
        "uname",
        "pwd"
      ]
    },
    {
      "cells": [
        "admin2@yourstore.com",
        "admin2"
      ]
    },
    {
      "cells": [
        "admin3@yourstore.com",
        "admin3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User Launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_Launch_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters Username as \"admin2@yourstore.com\" and Password as \"admin2\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_enters_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.click_on_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_click_on_Log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User Launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_Launch_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters Username as \"admin3@yourstore.com\" and Password as \"admin3\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_enters_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.click_on_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_click_on_Log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Login Data Driven Via Json",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User Launch browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters user credentials \"\u003ccredentials\u003e\"",
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
        "credentials"
      ]
    },
    {
      "cells": [
        "Cred1"
      ]
    },
    {
      "cells": [
        "Cred2"
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
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User Launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_Launch_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters user credentials \"Cred1\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_enters_user_credentials(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.click_on_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_click_on_Log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login Data Driven Via Json",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User Launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_Launch_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters user credentials \"Cred2\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_enters_user_credentials(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.click_on_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_click_on_Log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});