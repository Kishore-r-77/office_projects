package com.gopro.test.goprotest.postreqservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostReqController {

	@Autowired
	private PostRequestService postRequestService;

	@Autowired
	private HttpClientWithAuth clientWithAuth;

//	@PostMapping("/post-req")
//	public ResponseEntity<?> handlePostRequest(
//	        @RequestParam String url, 
//	        @RequestBody String jsonBody) {
//	    try {
//	        System.out.println("Received request to post to URL: " + url);
//	        
//	        Apiresponse apiResponse = postRequestService.postReqService(url, jsonBody);
//
//	        if (apiResponse != null) {
//	            return ResponseEntity.status(apiResponse.code)
//	                                 .body(apiResponse);
//	        } else {
//	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//	                                 .body("Error: Response from service is null.");
//	        }
//	    } catch (Exception e) {
//	        e.printStackTrace();
//	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//	                             .body("Error processing request: " + e.getMessage());
//	    }
//	}

	@PostMapping("/post-req")
	public ResponseEntity<?> handlePostRequest() {
		try {
			// Call the API and capture the response
			Apiresponse apiResponse = clientWithAuth.callApi();

			// Return the API response with appropriate HTTP status
			if (apiResponse.isSucess) {
				return ResponseEntity.ok(apiResponse.body);
			} else {
				return ResponseEntity.status(apiResponse.code)
						.body("API call failed with response: " + apiResponse.body);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Error processing request: " + e.getMessage());
		}
	}

}
