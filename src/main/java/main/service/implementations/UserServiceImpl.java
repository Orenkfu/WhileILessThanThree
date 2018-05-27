package main.service.implementations;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import main.dao.UserDao;
import main.entities.User;
import main.exceptions.AuthenticationNoobException;
import main.exceptions.ExcMsg;
import main.exceptions.GeneralNoobException;
import main.exceptions.NoobNotFoundException;
import main.security.authorization.PasswordAuthenticator;
import main.service.interfaces.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserDao uDao;

	@Autowired
	PasswordAuthenticator passEncoder;

	@Override
	@Transactional
	public User createUser(User user) {
		user.getDetails().setCreated(new Date());
		user.setHashed_password(passEncoder.encode(user.getHashed_password()));
		uDao.saveAndFlush(user);
		return user;
	}

	@Override
	@Transactional(readOnly = true)
	public User getUser(Long id) throws NoobNotFoundException {
		return uDao.findUserById(id).orElseThrow(() -> new NoobNotFoundException(ExcMsg.UNOTFOUND));
	}

	@Override
	@Transactional(readOnly = true)
	public User login(String email, String password) throws GeneralNoobException {
		User user = uDao.findByEmail(email).orElseThrow(() -> new NoobNotFoundException("Could not find email."));
		if (passEncoder.validate(password, user.getHashed_password())) {
			return user;
		} else
			throw new AuthenticationNoobException(ExcMsg.WRONGPASS);
	}

}
