package main.service;

import java.util.Date;
import java.util.List;

import org.hibernate.Hibernate;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import main.dao.ArticleDao;
import main.dao.CommentDao;
import main.dao.ForumDao;
import main.dao.UserDao;
import main.entities.Article;
import main.entities.Comment;
import main.entities.Forum;
import main.entities.User;
import main.service.interfaces.UserService;
import main.utils.ArticleFactory;
import main.utils.ForumCategory;
import main.utils.NewArticleHelper;

//WILL BE SPLIT INTO SUBCLASSES
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	CommentDao cDao;

	@Autowired
	ArticleDao aDao;

	@Autowired
	ForumDao fDao;

	@Autowired
	UserDao uDao;

	@Autowired
	ArticleFactory artFactory;

	public Comment createComment(Comment c) {
		return cDao.save(c);
	}

	@Override
	@Transactional
	public Article createArticle(NewArticleHelper a) {
		Article art = new Article(a.getSubject(), a.getForumId());
		art = aDao.save(art);
		Comment c = new Comment(a.getContent(), true, a.getUserId(), art.getId());
		art.addComment(c);

		return aDao.save(art);

	}

	@Override
	@Transactional(readOnly = true)
	public List<Comment> getCommentsByArticle(Pageable page, Long articleId) {
		List<Comment> comments = cDao.getCommentsByArticleId(page, articleId).getContent();
		Hibernate.initialize(comments);
		return comments;
	}

	@Override
	public Forum createForum(Forum f) {
		return fDao.save(f);
	}

	@Override
	@Transactional(readOnly = true)
	@LazyCollection(LazyCollectionOption.TRUE)
	public List<Forum> getAllForums(Pageable page) {
		return fDao.findAll(page).getContent();
	}

	@Override
	@Transactional(readOnly = true)
	public List<Article> getAllArticlesByForum(Pageable page, Long forumId) {
		return this.aDao.getArticlesByForumId(page, forumId).getContent();
	}

	@Override
	public List<Forum> getForumsByCategory(ForumCategory category) {
		return this.fDao.getForumsByCategory(category);
	}

	@Override
	@Transactional(readOnly = true)
	public Article getArticle(Long id) {
		Article article = this.aDao.getOne(id);
		System.out.println(article);
		Hibernate.initialize(article.getComments());
		return article;
	}

	@Override
	@Transactional(readOnly= true)
	public Forum getForum(Long id) {
		return null;
	}

	@Override
	@Transactional
	public User createUser(User user) {
		user.getDetails().setCreated(new Date());
		uDao.saveAndFlush(user);
		return user;
	}

	@Override
	@Transactional(readOnly = true)
	public User getUser(Long id) {
		System.out.println("get single user service reached");
		return uDao.findUserById(id);
	}

	@Override
	@Transactional(readOnly = true)
	public User login(String email, String password) {
		User user = uDao.findByEmail(email);
		if (password.equals(user.getHashed_password())) {
			return user;
		}
		else throw new RuntimeException("wrong password :)");
	}



}
