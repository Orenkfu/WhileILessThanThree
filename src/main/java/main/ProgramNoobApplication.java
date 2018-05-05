package main;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProgramNoobApplication {

	@Autowired
	public OnStartup starter;

	@PostConstruct
	public void init() {
		starter.start();
	}

	public static void main(String[] args) {
		SpringApplication.run(ProgramNoobApplication.class, args);

	}
}
