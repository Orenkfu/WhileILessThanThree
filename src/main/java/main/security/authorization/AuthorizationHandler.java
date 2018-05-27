package main.security.authorization;

import main.exceptions.UnauthorizedNoobException;
import main.security.Role;

public interface AuthorizationHandler {

	void checkAuthorization(Role role, String method) throws UnauthorizedNoobException;
}
