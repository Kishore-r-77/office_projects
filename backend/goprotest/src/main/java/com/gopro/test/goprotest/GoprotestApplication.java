package com.gopro.test.goprotest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

import com.gopro.test.goprotest.postreqservice.PostRequestService;

@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
public class GoprotestApplication{

	@Autowired
	private PostRequestService postRequestService;

	public static void main(String[] args) {
		SpringApplication.run(GoprotestApplication.class, args);
	}

//	@Override
//    public void run(String... args) {
//        if (args.length < 2) {
//            System.out.println("Usage: java -jar app.jar <url> <jsonBody>");
//            System.exit(1);
//        }
//
//        String url = args[0];
//        String jsonBody = args[1];
//
//        // Call the service method with the provided arguments
////        postRequestService.postReqService(url, jsonBody);
//        postRequestService.createCookieJar();
//        
////        try {
////			postRequestService.loginAndRetrieveTokens();
////		} catch (IOException e) {
////			// TODO Auto-generated catch block
////			e.printStackTrace();
////		}
//    }
	
	
//	@Override
//	public void run(String... args) {
//	    String url;
//	    String jsonBody;
//	    
////	    CookieJar cookieJar =   postRequestService1.createCookieJar();
//
//	    if (args.length < 2) {
//	        // Default values for testing or fallback
//	        url = "bajajtest";
//	        jsonBody = """
//	        {
//	            "basicdetails": {
//	                "policyholderdetails": {
//	                    "firstname": "Shubham",
//	                    "middlename": "",
//	                    "lastname": "Patil",
//	                    "gender": "Male",
//	                    "dob": "10-10-1998",
//	                    "currdate": "10-10-2024"
//	                }
//	            }
//	        }
//	        """;
//
//	        System.out.println("No arguments provided. Using default values:");
//	    } else {
//	        // Use provided arguments
//	        url = args[0];
//	        jsonBody = args[1];
//	    }
//
//	    // Log the values being used
//	    System.out.println("URL: " + url);
//	    System.out.println("JSON Body: " + jsonBody);
//
//	    try {
//	        // Call the service method with the provided or default arguments
//	        postRequestService.postReqService(url, jsonBody);
//	    } catch (Exception e) {
//	        // Handle exceptions gracefully
//	        System.err.println("Error occurred while executing the request:");
//	        e.printStackTrace();
//	    }
//	}


//	@Override
//	  public void run(String... args) {
//	        try {
//				postRequestService.loginAndRetrieveTokens();
//			} catch (IOException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//	    }

}
