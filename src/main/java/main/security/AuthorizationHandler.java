package main.security;

import main.exceptions.UnauthorizedNoobException;

public interface AuthorizationHandler {

	void checkAuthorization(Role role, String method) throws UnauthorizedNoobException;
}
