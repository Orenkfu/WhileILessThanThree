package main.service.implementations;

import java.util.List;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import main.aspects.LogExecutionTime;
import main.dao.ForumDao;
import main.entities.Forum;
import main.exceptions.ExcMsg;
import main.exceptions.NoobNotFoundException;
import main.service.interfaces.ForumService;
import main.utils.ForumCategory;

@Service
public class ForumServiceImpl implements ForumService {

	@Autowired
	ForumDao fDao;

	@Override
	@Transactional
	public Forum create(Forum forum) {
		return fDao.save(forum);
	}

	@Override
	@Transactional(readOnly = true)
	public Forum getById(Long id) throws NoobNotFoundException {
		return this.fDao.findById(id).orElseThrow(() -> new NoobNotFoundException(ExcMsg.FNOTFOUND));
	}

	@Override
	public void patchName(Forum forum) {
		// TODO Auto-generated method stub

	}

	@Override
	public void patchName(Long id, String name) {
		// TODO Auto-generated method stub

	}

	@Override
	@Transactional(readOnly = true)
	@LazyCollection(LazyCollectionOption.TRUE)
	public List<Forum> getAll(Pageable page) {
		return fDao.findAll(page).getContent();
	}

	@Override
	@Transactional(readOnly = true)
	@LogExecutionTime
	public List<Forum> getAllByCategory(ForumCategory category) {
		return this.fDao.getForumsByCategory(category);

	}

}
