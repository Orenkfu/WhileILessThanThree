package main.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import main.entities.Article;
import main.entities.Comment;

@Repository
public interface ArticleDao extends JpaRepository<Article, Long> {
	Optional<Article> findById(Long id);

	public Page<Article> getArticlesByForumId(Pageable page, Long forumId);

	public Page<Article> getArticlesByComments(Pageable page, List<Comment> comments);
}
