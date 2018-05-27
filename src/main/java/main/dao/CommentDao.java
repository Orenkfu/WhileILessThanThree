package main.dao;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import main.entities.Comment;

@Repository
public interface CommentDao extends JpaRepository<Comment, Long> {

	Page<Comment> getCommentsByArticleId(Pageable page, Long articleId);

	Optional<Comment> findById(Long id);

	// @Query(value= "from User u INNER JOIN u.comments uc where
	// uc.comments.comment.id ='userId'")
	Page<Comment> getCommentsByAuthorId(Pageable page, Long userId);

}
