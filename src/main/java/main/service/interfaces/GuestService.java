package main.service.interfaces;

import java.util.List;

import org.springframework.data.domain.Pageable;

import main.entities.Article;
import main.entities.Comment;
import main.entities.Forum;
import main.utils.ForumCategory;

public interface GuestService {

	List<Forum> getAllForums(Pageable page);

	List<Forum> getForumsByCategory(ForumCategory category);

	List<Article> getAllArticlesByForum(Pageable page, Long forumId);

	List<Comment> getAllCommentsByArticle(Pageable page, Long articleId);

}
