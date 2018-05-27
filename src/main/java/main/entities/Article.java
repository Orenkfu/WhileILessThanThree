package main.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Article implements Serializable {

	private static final long serialVersionUID = 6893319828705828684L;
	private Long id;
	private String subject;
	private User user;
	private String body;
	private List<Comment> comments;
	private Long forumId;
	private Date posted;

	@Basic
	public Long getForumId() {
		return forumId;
	}

	public void setForumId(Long forumId) {
		this.forumId = forumId;
	}

	public Article() {
		this.comments = new ArrayList<Comment>();
	}

	public Article(String title, Long forumId, User user, String body) {
		super();
		this.comments = new ArrayList<Comment>();
		this.forumId = forumId;
		this.subject = title;
		this.user = user;
		this.body = body;
	}

	@OneToMany(targetEntity = Comment.class, cascade = CascadeType.ALL)
	@JoinTable(name = "article_comments", joinColumns = @JoinColumn(name = "article_id"), inverseJoinColumns = @JoinColumn(name = "comment_id"))
	@LazyCollection(LazyCollectionOption.FALSE)
	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	@Id
	@GeneratedValue
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Column(name = "ARTICLE_TITLE", updatable = false, nullable = false)
	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	// @Transient
	public void addComment(Comment c) {
		this.comments.add(c);
	}

	// @Transient
	public void removeComment(Comment c) {
		this.comments.remove(c);
	}

	@ManyToOne(cascade = CascadeType.REFRESH)
	@JoinColumn
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public Date getPosted() {
		return posted;
	}

	public void setPosted(Date posted) {
		this.posted = posted;
	}

	@Override
	public String toString() {
		return "Article [id=" + id + ", subject=" + subject + ", user=" + user.getId() + ", body=" + body
				+ ", comments=" + comments + ", forumId=" + forumId + "]";
	}

}
