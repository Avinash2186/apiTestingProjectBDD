package runners;

import java.io.File;
import java.security.Timestamp;
import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/functionalTests",
        glue = {"stepDefinitions"},
        monochrome = false,
        strict = true,
       /* plugin = { "pretty", "html:target/htmlreports" }*/
        plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html",
        		"pretty", "html:target/htmlreports",
        		"json:target/cucumber.json",
        		"junit:target/cucumber.xml"},
        tags = {"@FUNCTIONAL"}

        		)


public class TestRunner {
		
	

	/*
	 * private String dateTimeGenerate() { Format formatter = new
	 * SimpleDateFormat("YYYYMMdd_HHmmssSSS"); Date date = new
	 * Date(System.currentTimeMillis()); return formatter.format(date); }
	 */

	@AfterClass
    public static void writeExtentReport() {
        Reporter.loadXMLConfig(new File("config/report.xml"));
    
    }
}
