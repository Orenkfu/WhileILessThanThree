package main.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User extends AbstractUser {
	private Long id;
	private String username;
	private String hashed_password;

	@Id
	@GeneratedValue
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getHashed_password() {
		return hashed_password;
	}

	public void setHashed_password(String hashed_password) {
		this.hashed_password = hashed_password;
	}

}
