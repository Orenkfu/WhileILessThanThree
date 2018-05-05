package main.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import main.entities.Comment;

@Repository
public interface CommentDao extends JpaRepository<Comment, Long> {

	Page<Comment> getCommentsByArticleId(Pageable page, Long articleId);

}
