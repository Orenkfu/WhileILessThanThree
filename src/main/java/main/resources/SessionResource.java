package main.resources;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Component;

import main.entities.User;
import main.exceptions.AuthenticationNoobException;
import main.exceptions.ExcMsg;

@Component
public class SessionResource {

	public void storeUserSession(User user, HttpSession session) {
		session.setAttribute("user", user);
		session.setAttribute("role", user.getDetails().getRole());
		session.setAttribute("authenticated", true);
	}

	public User getUserFromSession(HttpSession session) throws AuthenticationNoobException {
		System.out.println(session.getId());
		User user = (User) session.getAttribute("user");

		if (user != null)
			return user;
		else
			throw new AuthenticationNoobException(ExcMsg.UNAUTHENTICATED);
	}
}
