package main.exceptions;

public enum ExcMsg {
	GENERAL, UNAUTHORIZED, UNVERIFIED, BADINPUT, WRONGPASS, CNOTFOUND, FNOTFOUND, ANOTFOUND, UNOTFOUND, UNAUTHENTICATED;

	public String getValue() {

		switch (this) {
		case GENERAL:
			return "An error has occurred";
		case UNAUTHORIZED:
			return "User does not have authorization for that request.";
		case UNVERIFIED:
			return "User is not verified.";
		case BADINPUT:
			return "Bad Input.";
		case WRONGPASS:
			return "Password is incorrect.";
		case CNOTFOUND:
			return "Could not find comment.";
		case FNOTFOUND:
			return "Could not find forum.";
		case ANOTFOUND:
			return "Could not find article.";
		case UNOTFOUND:
			return "Could not find user.";
		case UNAUTHENTICATED:
			return "User is not logged in.";
		default:
			return "User is not verified.";
		}
	}

}
