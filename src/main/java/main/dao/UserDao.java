package main.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import main.entities.User;

@Repository
public interface UserDao extends JpaRepository<User, Long> {
	Optional<User> findUserById(Long id);

	Optional<User> findByEmail(String email);

}
