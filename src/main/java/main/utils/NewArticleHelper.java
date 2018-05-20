package main.utils;

public class NewArticleHelper {
	private String subject;
	private String content;
	private Long userId;
	private Long forumId;

	public NewArticleHelper(String subject, String content, Long forumId) {
		super();
		this.forumId = forumId;
		this.subject = subject;
		this.content = content;
	}

	public NewArticleHelper(String subject, String content, Long userId, Long forumId) {
		super();
		this.forumId = forumId;
		this.subject = subject;
		this.content = content;
		this.userId = userId;
	}

	public Long getForumId() {
		return forumId;
	}

	public void setForumId(Long forumId) {
		this.forumId = forumId;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

}
