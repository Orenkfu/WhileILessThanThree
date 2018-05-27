package main.service.implementations;

import java.util.Date;
import java.util.List;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import main.dao.CommentDao;
import main.entities.Comment;
import main.exceptions.ExcMsg;
import main.exceptions.NoobNotFoundException;
import main.service.interfaces.CommentService;

@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	CommentDao cDao;

	@Override
	@Transactional
	public Comment create(Comment comment) {
		comment.setPosted(new Date());
		return cDao.save(comment);

	}

	@Override
	@Transactional(readOnly = true)
	public List<Comment> getByArticleId(Long articleId, Pageable page) {
		List<Comment> comments = cDao.getCommentsByArticleId(page, articleId).getContent();
		Hibernate.initialize(comments);
		return comments;
	}

	@Override
	public List<Comment> getByUserId(Long userId, Pageable page) {
		List<Comment> comments = cDao.getCommentsByAuthorId(page, userId).getContent();
		Hibernate.initialize(comments);
		return comments;
	}

	@Override
	public Comment getById(Long id) throws NoobNotFoundException {
		return this.cDao.findById(id).orElseThrow(() -> new NoobNotFoundException(ExcMsg.CNOTFOUND));
	}

	@Override
	public void update(Comment comment) {
		// TODO Auto-generated method stub

	}

	@Override
	public void patchTitle(Comment comment) {
		// TODO Auto-generated method stub

	}

	@Override
	public void patchTitle(String title, Long id) {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteById(Long id) {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteAllByArticleId(Long articleId) {
		// TODO Auto-generated method stub

	}

}
