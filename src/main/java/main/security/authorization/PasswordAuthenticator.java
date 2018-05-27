package main.security.authorization;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class PasswordAuthenticator {
	PasswordEncoder encoder;

	@Autowired
	public void setPasswordEncoder(PasswordEncoder encoder) {
		this.encoder = encoder;
	}

	public String encode(String password) {
		return encoder.encode(password);
	}

	public boolean validate(String password, String hashedPassword) {
		return encoder.matches(password, hashedPassword);
	}
}
