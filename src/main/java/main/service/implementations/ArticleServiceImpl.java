package main.service.implementations;

import java.util.Date;
import java.util.List;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import main.aspects.LogExecutionTime;
import main.dao.ArticleDao;
import main.entities.Article;
import main.entities.Comment;
import main.exceptions.ExcMsg;
import main.exceptions.NoobNotFoundException;
import main.service.interfaces.ArticleService;

@Service
public class ArticleServiceImpl implements ArticleService {
	@Autowired
	ArticleDao aDao;

	@Override
	@Transactional
	public Article create(Article a) {
		a.setPosted(new Date());
		return aDao.save(a);
	}

	@Override
	@Transactional(readOnly = true)
	public List<Article> getAllByForum(Pageable page, Long forumId) {
		return this.aDao.getArticlesByForumId(page, forumId).getContent();

	}

	@Override
	@Transactional(readOnly = true)
	public Article getById(Long id) throws NoobNotFoundException {
		Article article = this.aDao.findById(id).orElseThrow(() -> new NoobNotFoundException(ExcMsg.CNOTFOUND));
		System.out.println(article);
		Hibernate.initialize(article.getComments());
		return article;
	}

	@Override
	public void update(Article article) {
		// TODO Auto-generated method stub

	}

	@Override
	public void patchTitle(Article article) {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteById(Long id) {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteAllByForumId(Long forumId) {
		// TODO Auto-generated method stub

	}

	@Override
	@LogExecutionTime
	public List<Article> getByComments(Pageable page, List<Comment> comments) {
		return this.aDao.getArticlesByComments(page, comments).getContent();
	}

}
