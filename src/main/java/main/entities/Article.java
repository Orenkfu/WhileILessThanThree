package main.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Article implements Serializable {

	private static final long serialVersionUID = 6893319828705828684L;
	private Long id;
	private String subject;
	private List<Comment> comments;
	private Long forumId;

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

	public Article(String title, Long forumId) {
		super();
		this.comments = new ArrayList<Comment>();
		this.forumId = forumId;
		this.subject = title;
	}

	@OneToMany(targetEntity = Comment.class, fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(name = "article_comments", joinColumns = @JoinColumn(name = "article_id"), inverseJoinColumns = @JoinColumn(name = "comment_id"))
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

	@Override
	public String toString() {
		return "Article [id=" + id + ", subject=" + subject + ", comments=" + comments + ", forumId=" + forumId + "]";
	}

}
