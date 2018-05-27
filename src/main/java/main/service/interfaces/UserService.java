package main.service.interfaces;

import main.entities.User;
import main.exceptions.GeneralNoobException;
import main.exceptions.NoobNotFoundException;

public interface UserService {

	User createUser(User user);

	User getUser(Long id) throws NoobNotFoundException;

	User login(String email, String password) throws GeneralNoobException;

}
