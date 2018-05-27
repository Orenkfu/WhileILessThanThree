package main.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import main.entities.User;
import main.exceptions.GeneralNoobException;
import main.exceptions.NoobNotFoundException;
import main.service.interfaces.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserResource {

	@Autowired
	UserService uService;

	@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE, path = "/login/{email}/{password}", method = RequestMethod.GET)
	ResponseEntity<User> login(@PathVariable("email") String email, @PathVariable("password") String password)
			throws GeneralNoobException {
		User user = uService.login(email, password);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

	@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE, path = "/{id}", method = RequestMethod.GET)
	ResponseEntity<User> getUserById(@PathVariable("id") Long id) throws NoobNotFoundException {
		System.out.println("get single user resource reached");
		User user = uService.getUser(id);
		System.err.println(user);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
}
