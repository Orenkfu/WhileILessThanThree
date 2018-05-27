package main.service.interfaces;

import java.util.List;

import org.springframework.data.domain.Pageable;

import main.entities.Article;
import main.entities.Comment;
import main.exceptions.NoobNotFoundException;

public interface ArticleService {
	Article create(Article a);

	List<Article> getAllByForum(Pageable page, Long forumId);

	List<Article> getByComments(Pageable page, List<Comment> comments);

	Article getById(Long id) throws NoobNotFoundException;

	void update(Article article);

	void patchTitle(Article article);

	void deleteById(Long id);

	void deleteAllByForumId(Long forumId);

}
