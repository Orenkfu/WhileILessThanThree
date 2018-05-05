package main.utility;

import org.springframework.stereotype.Component;

import main.entities.Article;
import main.entities.Comment;

@Component
public class ArticleFactory {
	public Article build(NewArticleHelper a) {
		Comment c = new Comment(a.getContent(), true, a.getUserId(), null);
		Article art = new Article(a.getSubject(), 1L);
		art.addComment(c);
		return art;
	}

	public Comment setArticleIdOnComment(Comment c, Long id) {
		c.setArticleId(id);
		return c;
	}
}
