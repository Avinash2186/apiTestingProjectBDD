$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("End2End_Test.feature");
formatter.feature({
  "line": 1,
  "name": "End to End Test For Book Api",
  "description": "\r\nDescription: Purpose is to test end to end",
  "id": "end-to-end-test-for-book-api",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "User generates token for Authorisation",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am an authorized user",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.iAmAnAuthorizedUser()"
});
formatter.result({
  "duration": 3759234300,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "the Authorized user can Add and Remove a book.",
  "description": "",
  "id": "end-to-end-test-for-book-api;the-authorized-user-can-add-and-remove-a-book.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "A list of books are available",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I add a book to my reading list",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the book is added",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I remove a book from my reading list",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the book is removed",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.listOfBooksAreAvailable()"
});
formatter.result({
  "duration": 488885300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.addBookInList()"
});
formatter.result({
  "duration": 396227600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_book_is_added()"
});
formatter.result({
  "duration": 140700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.removeBookFromList()"
});
formatter.result({
  "duration": 470956700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_book_is_removed()"
});
formatter.result({
  "duration": 495776000,
  "error_message": "java.lang.AssertionError: expected:\u003c0\u003e but was:\u003c4\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepDefinitions.Steps.the_book_is_removed(Steps.java:106)\r\n\tat ✽.Then the book is removed(End2End_Test.feature:14)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 6,
  "name": "User generates token for Authorisation",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am an authorized user",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.iAmAnAuthorizedUser()"
});
formatter.result({
  "duration": 506891800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify Status Code when user try and get list of all books.",
  "description": "",
  "id": "end-to-end-test-for-book-api;verify-status-code-when-user-try-and-get-list-of-all-books.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "A list of books are available",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Status Code Must Be \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.listOfBooksAreAvailable()"
});
formatter.result({
  "duration": 495998800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "Steps.status_Code_Must_Be(int)"
});
formatter.result({
  "duration": 1853600,
  "status": "passed"
});
formatter.uri("GetResponse.feature");
formatter.feature({
  "line": 1,
  "name": "Get Rssponse of Books Api",
  "description": "\r\nDescription: Purpose is to get Response and Validate body",
  "id": "get-rssponse-of-books-api",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "User generates token for Authorisation",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am an authorized user",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.iAmAnAuthorizedUser()"
});
formatter.result({
  "duration": 496418200,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify Response when user get list of all books.",
  "description": "",
  "id": "get-rssponse-of-books-api;verify-response-when-user-get-list-of-all-books.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "A list of books are available",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Response Body Contains some data",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.listOfBooksAreAvailable()"
});
formatter.result({
  "duration": 455735500,
  "status": "passed"
});
formatter.match({
  "location": "Steps2.response_Body_Contains_some_data()"
});
formatter.result({
  "duration": 145600,
  "status": "passed"
});
});