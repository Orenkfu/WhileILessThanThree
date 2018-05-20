package main.httpclient;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

public class TestClient {
	RestTemplate restTemplate;
	private final static String url = "http://localhost:8080";
	private final static String forumUrl = "http://localhost:8080/forums";
	private final static String articleUrl = "http://localhost:8080/articles";

	public TestClient() {
		restTemplate = new RestTemplate();
	}

	public String getArticle(Long id) {
		ResponseEntity<String> a = restTemplate.getForEntity(articleUrl + "/" + id, String.class);
		return a.getBody();
	}

}