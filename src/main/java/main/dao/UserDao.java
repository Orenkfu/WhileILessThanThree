package main.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import main.entities.User;

@Repository
public interface UserDao extends JpaRepository<User, Long> {
	User findUserById(Long id);
	User findByEmail(String email);
	
}
