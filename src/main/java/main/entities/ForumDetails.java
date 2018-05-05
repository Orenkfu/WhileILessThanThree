package main.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;

@Entity
public class ForumDetails implements Serializable {

	private static final long serialVersionUID = -4936720126027258997L;
	private Long id;
	private Date created;
	private Long articleAmount;
	private Forum owner;

	public ForumDetails() {
	}

	public ForumDetails(Date created, Long articleAmount, Forum forum) {
		super();
		this.owner = forum;
		this.created = created;
		this.articleAmount = articleAmount;
	}

	@MapsId("id")
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
	public Forum getOwner() {
		return owner;
	}

	public void setOwner(Forum owner) {
		this.owner = owner;
	}

	@Id
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

	public Long getArticleAmount() {
		return articleAmount;
	}

	public void setArticleAmount(Long articleAmount) {
		this.articleAmount = articleAmount;
	}

}
