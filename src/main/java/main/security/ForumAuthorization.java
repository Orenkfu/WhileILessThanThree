package main.security;

import main.exceptions.ExcMsg;
import main.exceptions.UnauthorizedNoobException;

public class ForumAuthorization implements AuthorizationHandler {

	@Override
	public void checkAuthorization(Role role, String method) throws UnauthorizedNoobException {
		if (method == "GET") {
			checkRead(role);
		} else {
			checkWrite(role);
		}
	}

	private void checkRead(Role role) {

	}

	private void checkWrite(Role role) throws UnauthorizedNoobException {
		if (role != Role.Admin || role != Role.Moderator)
			throw new UnauthorizedNoobException(ExcMsg.UNAUTHORIZED);
	}

}
