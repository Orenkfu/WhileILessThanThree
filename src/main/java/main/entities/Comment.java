package main.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import main.utility.Postable;

@Entity
public class Comment implements Postable, Serializable {

	private static final long serialVersionUID = 6243672951328215322L;
	private Long id;
	private String body;
	private boolean isFirst;
	private Long authorId;
	private Long articleId;

	@Id
	@GeneratedValue
	public Long getId() {
		return id;
	}

	public Comment() {
	}

	public Comment(String body) {
		super();
		this.body = body;
	}

	public Comment(String body, boolean isFirst, Long authorId, Long articleId) {
		super();
		this.body = body;
		this.isFirst = isFirst;
		this.authorId = authorId;
		this.articleId = articleId;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Column(nullable = false)
	public Long getArticleId() {
		return articleId;
	}

	public void setArticleId(Long articleId) {
		this.articleId = articleId;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	@Column(name = "ARTICLE_CONTENT", nullable = false)
	public boolean isFirst() {
		return isFirst;
	}

	public void setFirst(boolean isFirst) {
		this.isFirst = isFirst;
	}

	@Column(name = "author_id")
	public Long getAuthorId() {
		return authorId;
	}

	public void setAuthorId(Long authorId) {
		this.authorId = authorId;
	}

	@Override
	public String toString() {
		return "Comment [id=" + id + ", body=" + body + ", isFirst=" + isFirst + ", authorId=" + authorId
				+ ", articleId=" + articleId + "]";
	}

}
