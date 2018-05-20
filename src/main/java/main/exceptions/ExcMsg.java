package main.exceptions;

public enum ExcMsg {
	GENERAL, UNAUTHORIZED, UNVERIFIED, BADINPUT;

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
		default:
			return null;
		}
	}

}
