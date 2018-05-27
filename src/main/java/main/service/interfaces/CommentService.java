package main.service.interfaces;

import java.util.List;

import org.springframework.data.domain.Pageable;

import main.entities.Comment;
import main.exceptions.NoobNotFoundException;

public interface CommentService {

	Comment create(Comment comment);

	List<Comment> getByArticleId(Long articleId, Pageable page);

	Comment getById(Long id) throws NoobNotFoundException;

	List<Comment> getByUserId(Long userId, Pageable page);

	void update(Comment comment);

	void patchTitle(Comment comment);

	void patchTitle(String title, Long id);

	void deleteById(Long id);

	void deleteAllByArticleId(Long articleId);

}
