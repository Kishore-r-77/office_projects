package com.gopro.test.goprotest.postreqservice;

import java.io.IOException;
import java.net.HttpCookie;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

import okhttp3.Cookie;
import okhttp3.CookieJar;
import okhttp3.HttpUrl;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

@Service
public class PostRequestService {

	@Value("${login.api.url}")
	private String loginApiUrl; // The login API URL

	@Value("${refresh.api.url}")
	private String refreshApiUrl; // The refresh API URL

	@Value("${user.phone}")
	private String phone; // Username from application.properties

	@Value("${user.password}")
	private String password; // Password from application.properties

	public static String accessToken = null;
	public static String refreshToken = null;

	private final CookieJar cookieJar; // CookieJar at class level
	private final OkHttpClient client; // OkHttpClient using the class-level CookieJar

	public PostRequestService() {
		// Initialize the CookieJar
		this.cookieJar = new CookieJar() {
			private final java.net.CookieManager cookieManager = new java.net.CookieManager();

			@Override
			public void saveFromResponse(HttpUrl url, List<Cookie> cookies) {
				for (Cookie cookie : cookies) {
					HttpCookie httpCookie = new HttpCookie(cookie.name(), cookie.value());
					httpCookie.setDomain(cookie.domain());
					httpCookie.setPath(cookie.path());
					cookieManager.getCookieStore().add(null, httpCookie);
				}
			}

			@Override
			public List<Cookie> loadForRequest(HttpUrl url) {
				return cookieManager.getCookieStore().getCookies().stream()
						.map(httpCookie -> new Cookie.Builder().name(httpCookie.getName()).value(httpCookie.getValue())
								.domain(httpCookie.getDomain()).path(httpCookie.getPath()).build())
						.toList();
			}
		};

		// Initialize the OkHttpClient with the CookieJar
		this.client = new OkHttpClient.Builder().cookieJar(this.cookieJar).build();
	}

	// Method to handle login and store tokens in the CookieJar
	public void loginAndRetrieveTokens() throws IOException {
		// Create the JSON request body
		Map<String, String> requestBodyMap = Map.of("phone", phone, "password", password, "channel", "web");

		String jsonBody;
		try {
			jsonBody = new ObjectMapper().writeValueAsString(requestBodyMap);
		} catch (Exception e) {
			e.printStackTrace();
			return;
		}

		RequestBody body = RequestBody.create(jsonBody, MediaType.get("application/json; charset=utf-8"));

		Request request = new Request.Builder().url(loginApiUrl).post(body)
				.addHeader("Authorization", "Bearer " + refreshToken).build();

		try (Response response = client.newCall(request).execute()) {
			System.out.println("Response Code: " + response.code());
			System.out.println("Response Message: " + response.message());

			if (response.body() != null) {
				System.out.println("Response Body: " + response.body().string());
			}

			if (response.isSuccessful()) {
				List<Cookie> cookies = Cookie.parseAll(response.request().url(), response.headers());
				for (Cookie cookie : cookies) {
					if ("Authorization".equals(cookie.name())) {
						accessToken = cookie.value();
					} else if ("RefreshToken".equals(cookie.name())) {
						refreshToken = cookie.value();
					}
				}

				System.out.println("Access Token: " + accessToken);
				System.out.println("Refresh Token: " + refreshToken);
			} else {
				System.err.println("Login failed: " + response.code() + " - " + response.message());
			}
		}
	}

	public void refreshAndRetrieveTokens(String refreshToken) throws IOException {
		System.out.println("Inside Refresh And Retrieve Token");

		RequestBody body = RequestBody.create("{}", MediaType.get("application/json; charset=utf-8"));

		// Create an empty request body for the refresh API
//        RequestBody body = RequestBody.create(new byte[0], MediaType.get("application/json; charset=utf-8"));

		// Build the POST request
		String refreshcookie = "RefreshToken=" + refreshToken;
		Request request = new Request.Builder().url(refreshApiUrl) // URL for the refresh API
				.post(body).addHeader("Cookie", refreshcookie).build();

		System.out.println("Refresh Api := " + refreshApiUrl);
		// Execute the request and handle the response
		try (Response response = client.newCall(request).execute()) {
			if (response.body() != null) {
				// Safely read and log the response body
				String responseBody = response.body().string();
				System.out.println("Response Body: " + responseBody);

				// Check for successful response
				if (response.isSuccessful()) {
					// Parse cookies from the response headers
					List<Cookie> cookies = Cookie.parseAll(response.request().url(), response.headers());
					for (Cookie cookie : cookies) {
						if ("Authorization".equalsIgnoreCase(cookie.name())) {
							accessToken = cookie.value(); // Retrieve and store access token
						} else if ("RefreshToken".equalsIgnoreCase(cookie.name())) {
							refreshToken = cookie.value(); // Retrieve and store refresh token
						}
					}

					// Log the retrieved tokens
					System.out.println("Refresh Access Token: " + accessToken);
					System.out.println("Refresh Refresh Token: " + refreshToken);
				} else {
					// Log unsuccessful response details
					System.err.println("Refresh failed: " + response.code() + " - " + response.message());
				}
			} else {
				System.err.println("Response body is null");
			}
		} catch (IOException e) {
			// Handle exceptions during the request execution
			System.err.println("Exception during token refresh: " + e.getMessage());
			e.printStackTrace();
		}
	}

//    private static class Apiresponse {
// 	   String body;
// 	   int code;
// 	   boolean isSucess;
// 	}

	public Apiresponse postReqService(String url, String jsonBody) {
		System.out.println("Inside PostReq Service");

		String apiUrl = "http://localhost:3002/api/v1/excelservices/result/" + url;

		System.out.println("##### apiurl ##### -: " + apiUrl);
		// Retrieve cookies from the CookieJar for the given URL
		HttpUrl httpUrl = HttpUrl.parse(url);
		if (httpUrl != null) {
			List<Cookie> cookies = this.cookieJar.loadForRequest(httpUrl);

			// Extract accessToken and refreshToken from the cookies
			for (Cookie cookie : cookies) {
				if ("accessToken".equals(cookie.name())) {
					accessToken = "Bearer " + cookie.value(); // Assuming "Bearer" is needed
				} else if ("refreshToken".equals(cookie.name())) {
					refreshToken = cookie.value();
				}
			}
		}

		if (accessToken == null && refreshToken == null) {
			System.out.println("Tokens not found. Logging in...");
			try {
				loginAndRetrieveTokens();
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else {

			try {
				validateAndRefreshTokens(apiUrl, jsonBody, accessToken, refreshToken);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		RequestBody body = RequestBody.create(jsonBody, MediaType.get("application/json; charset=utf-8"));

		String cookie = "Authorization=" + accessToken;
		System.out.println("Cookie -: " + cookie);
		Request request = new Request.Builder().url(apiUrl).post(body).addHeader("Cookie", cookie).build();

		try (Response response = client.newCall(request).execute()) {
			String responseBody = response.body().string();
			System.out.println("Inside Resp Response Body -: " + responseBody);
			Apiresponse resp = new Apiresponse();
			resp.code = response.code();
			if (response.isSuccessful()) {
				resp.body = responseBody;
				resp.isSucess = response.isSuccessful();
			} else {
				resp.isSucess = false;
				resp.body = null;
			}
			return resp;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	/**
	 * Validates the access token by making a test API call. If the access token is
	 * invalid, attempts to refresh it using the refresh token. If the refresh token
	 * is also invalid, logs in to retrieve new tokens.
	 */

	private void validateAndRefreshTokens(String apiUrl, String jsonBody, String accessToken, String refreshToken)
			throws IOException {
		System.out.println("Inside Validating tokens...");
		
		System.out.println("Access Token: " + accessToken);
		System.out.println("Refresh Token: " + refreshToken);

		// Test the access token
	   //String cookie = "Authorization=abcd";
//		String cookie = "Authorization=" + accessToken;
		
		RequestBody body = RequestBody.create(jsonBody, MediaType.get("application/json; charset=utf-8"));

		Request request = new Request.Builder().url(apiUrl).post(body).build();

		System.out.println("apiUrl in validate "+apiUrl);
		try (Response response = client.newCall(request).execute()) {
			
			System.out.println("Response From Access Key Validation := "+response.toString());
			System.out.println("Access Token Validation Response Code: " + response.code());
			String responseBody = response.body() != null ? response.body().string() : "<No Response Body>";
			System.out.println("Access Token Validation Response Body: " + responseBody);

			if (response.code() == 200) {
				System.out.println("Access token is valid.");
				return;
			} else if (response.code() == 401) {
				System.out.println("Access token expired. Attempting to refresh tokens...");
				refreshTokens(refreshToken);
			} else {
				System.err.println("Unexpected response code: " + response.code() + " - " + response.message());
				System.err.println("Response Body: " + responseBody);
			}
		} catch (IOException e) {
			System.err.println("Error during access token validation: " + e.getMessage());
			throw e;
		}
	}

	private void refreshTokens(String refreshToken) throws IOException {
		
		String refreshCookie = "RefreshToken=" + refreshToken;
		RequestBody body = RequestBody.create("{}", MediaType.get("application/json; charset=utf-8"));

		Request request = new Request.Builder().url(refreshApiUrl).post(body)
				.build();

		try (Response response = client.newCall(request).execute()) {
			System.out.println("Refresh Token Response Code: " + response.body());
			String responseBody = response.body() != null ? response.body().string() : "<No Response Body>";
			System.out.println("Refresh Token Response Body: " + responseBody);

			if (response.code() == 200) {
				System.out.println("Tokens refreshed successfully.");
				// Parse cookies from the response headers
				List<Cookie> cookies = Cookie.parseAll(response.request().url(), response.headers());
				for (Cookie cookie : cookies) {
					if ("Authorization".equalsIgnoreCase(cookie.name())) {
						System.out.println("New Access Token: " + cookie.value());
					} else if ("RefreshToken".equalsIgnoreCase(cookie.name())) {
						System.out.println("New Refresh Token: " + cookie.value());
					}
				}
			} else if (response.code() == 401) {
				System.out.println("Refresh token expired. Logging in...");
				loginAndRetrieveTokens();
			} else {
				System.err.println("Failed to refresh tokens: " + response.code() + " - " + response.message());
				System.err.println("Response Body: " + responseBody);
			}
		} catch (IOException e) {
			System.err.println("Error during token refresh: " + e.getMessage());
			throw e;
		}
	}

}
