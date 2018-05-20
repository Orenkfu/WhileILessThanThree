package main.entities;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import main.security.Role;

@Entity
@Table(name = "USERS")
public class User {
	private Long id;
	private String username;
	private String email;
	private String hashed_password;
	private UserDetails details;
	private Role role;

	public User() {
		this.details = new UserDetails();
	}

	public User(String username, String hashed_password, String email, Role role) {
		super();
		this.username = username;
		this.hashed_password = hashed_password;
		this.email = email;
		this.details = new UserDetails();
		this.role = role;
	}

	// @OneToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
	// @JoinColumn(name = "id", unique = true, nullable = false)
	@Embedded
	public UserDetails getDetails() {
		return details;
	}

	public void setDetails(UserDetails details) {
		this.details = details;
	}

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

	@Column(unique = true, length = 45)
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Enumerated
	@Column(length = 45, name = "SECURITY_ROLE")
	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", email=" + email + ", hashed_password=" + hashed_password
				+ ", details=" + details + ", role=" + role + "]";
	}

}
