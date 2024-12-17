package com.gopro.test.goprotest.postreqservice;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

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
public class HttpClientWithAuth {
	@Value("${login.api.url}")
	private String loginApiUrl; // The login API URL

	@Value("${refresh.api.url}")
	private String refreshApiUrl; // The refresh API URL

	@Value("${base.api.url}")
	private String baseApiUrl; // The base API URL

	@Value("${user.phone}")
	private String phone; // Username from application.properties

	@Value("${user.password}")
	private String password; // Password from application.properties

	private final OkHttpClient client;
	private final CookieJar cookieJar;

	public HttpClientWithAuth() {
		this.cookieJar = new SimpleCookieJar();
		this.client = new OkHttpClient.Builder().cookieJar(this.cookieJar).connectTimeout(5, TimeUnit.SECONDS)
				.readTimeout(5, TimeUnit.SECONDS).build();
	}

	public Apiresponse callApi() throws IOException {
		System.out.println("Inside Call Api");

		ensureAuthenticated();

		String jsonBody = "{" + "\"basicdetails\": {" + "    \"policyholderdetails\": {"
				+ "        \"firstname\": \"Shubham\"," + "        \"middlename\": \"\","
				+ "        \"lastname\": \"Patil\"," + "        \"gender\": \"Male\","
				+ "        \"dob\": \"10-10-1998\"," + "        \"currdate\": \"10-10-2024\"" + "    }" + "}" + "}";

		System.out.println("json body in call api " + jsonBody);

		RequestBody baseApiBody = RequestBody.create(jsonBody, MediaType.get("application/json; charset=utf-8"));
		Request apiRequest = new Request.Builder().url(baseApiUrl).post(baseApiBody).build();

		try (Response response = client.newCall(apiRequest).execute()) {
			String responseBody = response.body().string(); // Read the response body only once

			if (response.code() == 401) {
				System.out.println("Access token expired, refreshing...");
				refreshToken();
				return callApi(); // Retry the API call after refreshing the token
			} else {
				System.out.println("API Response: " + responseBody);
			}

			Apiresponse resp = new Apiresponse();
			resp.code = response.code();
			resp.body = responseBody;
			resp.isSucess = response.isSuccessful();
			return resp;
		}
	}

	private void ensureAuthenticated() throws IOException {
		System.out.println("Inside Ensure Authenticated");

		if (cookieJar instanceof SimpleCookieJar) {
			Map<String, String> cookies = ((SimpleCookieJar) cookieJar).getCookies();
			System.out.println("Cookie" + cookies);
			if (!cookies.containsKey("Authorization")) {
				System.out.println("Access Token Not found ... Logging in...");
				login();
			}
		}
	}

	private void login() throws IOException {

		// Create the JSON request body
		Map<String, String> requestBodyMap = Map.of("phone", phone, "password", password, "channel", "web");

		String jsonBody;
		try {
			jsonBody = new ObjectMapper().writeValueAsString(requestBodyMap);
		} catch (Exception e) {
			e.printStackTrace();
			return;
		}

		RequestBody loginBody = RequestBody.create(jsonBody, MediaType.get("application/json; charset=utf-8"));

		Request loginRequest = new Request.Builder().url(loginApiUrl).post(loginBody).build();

		try (Response response = client.newCall(loginRequest).execute()) {
			if (!response.isSuccessful()) {
				throw new IOException("Failed to login: " + response.body().string());
			}
			System.out.println("Login successful, cookies saved.");
		}
	}

	private void refreshToken() throws IOException {
		System.out.println("Inside Refresh");
		RequestBody refreshBody = RequestBody.create("{}", MediaType.get("application/json; charset=utf-8"));
		Request refreshRequest = new Request.Builder().url(refreshApiUrl).post(refreshBody).build();

		try (Response response = client.newCall(refreshRequest).execute()) {
			if (response.code() == 401) {
				System.out.println("Refresh token expired, logging in...");
				login();
			} else if (!response.isSuccessful()) {
				throw new IOException("Failed to refresh token: " + response.body().string());
			} else {
				System.out.println("Access token refreshed.");
			}
		}
	}
//
//	public static void main(String[] args) {
//		try {
//			new HttpClientWithAuth().callApi();
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//	}
}

//class SimpleCookieJar implements CookieJar {
//	private final Map<String, String> cookies = new HashMap<>();
//
//	@Override
//	public void saveFromResponse(HttpUrl url, List<Cookie> cookies) {
//		for (Cookie cookie : cookies) {
//			this.cookies.put(cookie.name(), cookie.value());
//		}
//	}
//
//	@Override
//	public List<Cookie> loadForRequest(HttpUrl url) {
//		List<Cookie> cookieList = new ArrayList<>();
//		for (Map.Entry<String, String> entry : cookies.entrySet()) {
//			cookieList.add(new Cookie.Builder().name(entry.getKey()).value(entry.getValue()).domain(url.host())
//					.path("/").build());
//		}
//		return cookieList;
//	}
//
//	public Map<String, String> getCookies() {
//		return cookies;
//	}
//}

class SimpleCookieJar implements CookieJar {
    private final ConcurrentMap<String, StoredCookie> cookies = new ConcurrentHashMap<>();

    public SimpleCookieJar() {
        // Schedule a background task to clean expired cookies every 1 second
        ScheduledExecutorService cleaner = Executors.newScheduledThreadPool(1);
        cleaner.scheduleAtFixedRate(this::removeExpiredCookies, 1, 1, TimeUnit.SECONDS);
    }

    private void removeExpiredCookies() {
        long currentTime = System.currentTimeMillis();
        cookies.entrySet().removeIf(entry -> entry.getValue().isExpired(currentTime));
    }

    @Override
    public void saveFromResponse(HttpUrl url, List<Cookie> cookies) {
        for (Cookie cookie : cookies) {
            this.cookies.put(cookie.name(), new StoredCookie(cookie));
        }
    }

    @Override
    public List<Cookie> loadForRequest(HttpUrl url) {
        List<Cookie> validCookies = new ArrayList<>();
        long currentTime = System.currentTimeMillis();

        for (Map.Entry<String, StoredCookie> entry : cookies.entrySet()) {
            if (!entry.getValue().isExpired(currentTime)) {
                validCookies.add(entry.getValue().getCookie());
            }
        }

        return validCookies;
    }

    // New method to retrieve all cookies as a map
    public Map<String, String> getCookies() {
        Map<String, String> cookieMap = new HashMap<>();
        long currentTime = System.currentTimeMillis();

        for (Map.Entry<String, StoredCookie> entry : cookies.entrySet()) {
            if (!entry.getValue().isExpired(currentTime)) {
                cookieMap.put(entry.getKey(), entry.getValue().getCookie().value());
            }
        }

        return cookieMap;
    }

    private static class StoredCookie {
        private final Cookie cookie;
        private final long expiryTime;

        public StoredCookie(Cookie cookie) {
            this.cookie = cookie;
            if (cookie.expiresAt() > 0) {
                this.expiryTime = cookie.expiresAt();
            } else {
                this.expiryTime = System.currentTimeMillis() + TimeUnit.SECONDS.toMillis(5);
            }
        }

        public boolean isExpired(long currentTime) {
            return currentTime > expiryTime;
        }

        public Cookie getCookie() {
            return cookie;
        }
    }
}