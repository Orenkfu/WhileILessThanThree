package main;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.security.crypto.password.PasswordEncoder;

import main.exceptions.GeneralNoobException;
import main.security.SecurityBeanConfig;

@SpringBootApplication
public class ProgramNoobApplication {

	@Autowired
	public OnStartup starter;

	@PostConstruct
	public void init() {
		try {
			starter.start().then();
		} catch (GeneralNoobException e) {
			e.printStackTrace();
		}
	}

	public static void main(String[] args) {
		SpringApplication.run(ProgramNoobApplication.class, args);
		AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();

		ctx.register(SecurityBeanConfig.class);
		ctx.refresh();

		PasswordEncoder hey = ctx.getBean(PasswordEncoder.class);
		System.out.println(hey);
	}
}
