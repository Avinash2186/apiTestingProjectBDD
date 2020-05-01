package stepDefinitions;

import java.util.List;
import java.util.Map;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class Steps2 {
	private static final String USER_ID = "9b5f49ab-eea9-45f4-9d66-bcf56a531b85";
	private static final String USERNAME = "TOOLSQA-Test";
	private static final String PASSWORD = "Test@@123";
	private static final String BASE_URL = "http://bookstore.toolsqa.com";

	/*
	 * private static String token; private static Response response; private static
	 * String jsonString; private static String bookId;
	 */


	/*
	 * @Given("I am an authorized user") public void iAmAnAuthorizedUser() {
	 * 
	 * RestAssured.baseURI = BASE_URL; RequestSpecification request =
	 * RestAssured.given();
	 * 
	 * request.header("Content-Type", "application/json"); response =
	 * request.body("{ \"userName\":\"" + USERNAME + "\", \"password\":\"" +
	 * PASSWORD + "\"}") .post("/Account/v1/GenerateToken");
	 * 
	 * String jsonString = response.asString(); token =
	 * JsonPath.from(jsonString).get("token"); System.out.println("token:::"+token);
	 * 
	 * }
	 */
	
	@Then("^Response Body Contains some data$")
	public void response_Body_Contains_some_data() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("response body:::: ");
	}
	
}