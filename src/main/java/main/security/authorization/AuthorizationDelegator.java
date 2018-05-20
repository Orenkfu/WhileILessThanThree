package main.security.authorization;

import main.exceptions.UnauthorizedNoobException;
import main.security.ForumAuthorization;
import main.security.Role;

public class AuthorizationDelegator {

	public void delegate(Role role, String method, String requestType) throws UnauthorizedNoobException {
		switch (requestType) {
		case "forums":
			new ForumAuthorization().checkAuthorization(role, method);
			break;
		case "comments":
			break;
		case "articles":
			break;
		case "users":
			break;
		default:
			break;
		}

	}

}
