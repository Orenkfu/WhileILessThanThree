package main.service.interfaces;

import java.util.List;

import org.springframework.data.domain.Pageable;

import main.entities.Article;
import main.entities.Comment;
import main.entities.Forum;
import main.entities.User;
import main.utils.ForumCategory;
import main.utils.NewArticleHelper;

public interface UserService {

	Comment createComment(Comment c);

	Article createArticle(NewArticleHelper a);

	Forum createForum(Forum f);

	List<Forum> getAllForums(Pageable page);

	List<Forum> getForumsByCategory(ForumCategory category);

	List<Article> getAllArticlesByForum(Pageable page, Long forumId);

	List<Comment> getCommentsByArticle(Pageable page, Long articleId);

	Article getArticle(Long id);

	Forum getForum(Long id);

	User createUser(User user);

	User getUser(Long id);
	
	User login(String email, String password);


}
