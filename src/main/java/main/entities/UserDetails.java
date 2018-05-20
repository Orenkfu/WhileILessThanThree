package main.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Embeddable
public class UserDetails implements Serializable {

	private static final long serialVersionUID = -2081036641643066543L;
	private Long id;
	private Date created;

	public UserDetails() {
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

	@Override
	public String toString() {
		return "UserDetails [id=" + id + ", created=" + created + "]";
	}

}
