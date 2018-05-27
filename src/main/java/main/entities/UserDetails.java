package main.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import main.security.Role;

@Embeddable
public class UserDetails implements Serializable {

	private static final long serialVersionUID = -2081036641643066543L;
	private Long id;
	private Date created;
	private List<Comment> comments;
	private Role role;

	public UserDetails() {
	}

	public UserDetails(Role role) {
		this.role = role;
	}

	@Column(insertable = false, updatable = false)
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Temporal(TemporalType.TIMESTAMP)
	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

	@OneToMany(targetEntity = Comment.class, fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinTable(name = "user_comments", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "comment_id"))
	@LazyCollection(LazyCollectionOption.FALSE)
	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
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
		return "UserDetails [id=" + id + ", created=" + created + "]";
	}

}
