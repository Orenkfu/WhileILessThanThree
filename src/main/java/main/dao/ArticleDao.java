package main.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import main.entities.Article;

@Repository
public interface ArticleDao extends JpaRepository<Article, Long> {

	public Page<Article> getArticlesByForumId(Pageable page, Long forumId);
}
