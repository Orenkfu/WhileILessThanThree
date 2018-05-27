package main.service.interfaces;

import java.util.List;

import org.springframework.data.domain.Pageable;

import main.entities.Forum;
import main.exceptions.NoobNotFoundException;
import main.utils.ForumCategory;

public interface ForumService {

	Forum create(Forum forum);

	Forum getById(Long id) throws NoobNotFoundException;

	List<Forum> getAll(Pageable page);

	List<Forum> getAllByCategory(ForumCategory category);

	void patchName(Forum forum);

	void patchName(Long id, String name);

}
