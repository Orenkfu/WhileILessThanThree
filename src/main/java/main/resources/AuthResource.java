package main.resources;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import main.aspects.Syso;
import main.entities.User;
import main.exceptions.GeneralNoobException;
import main.service.interfaces.UserService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*", maxAge = 3600)

public class AuthResource {
	@Autowired
	UserService uService;

	@Autowired
	SessionResource sessionManager;

	@Syso
	@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE, path = "/login/{email}/{password}", method = RequestMethod.GET)
	ResponseEntity<User> login(@PathVariable("email") String email, @PathVariable("password") String password,
			HttpSession session) throws GeneralNoobException {
		User user = uService.login(email, password);
		sessionManager.storeUserSession(user, session);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

	@Syso
	@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE, path = "/logout", method = RequestMethod.DELETE)
	public void logout(HttpSession session) {
		session.invalidate();
	}

}
