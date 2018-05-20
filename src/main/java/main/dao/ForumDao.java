package main.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import main.entities.Forum;
import main.utils.ForumCategory;

@Repository
public interface ForumDao extends JpaRepository<Forum, Long> {

	public List<Forum> getForumsByCategory(ForumCategory category);

}
