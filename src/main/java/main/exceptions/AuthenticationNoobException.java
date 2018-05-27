package main.exceptions;

public class AuthenticationNoobException extends GeneralNoobException {

	private static final long serialVersionUID = 1924339828837654972L;

	public AuthenticationNoobException() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AuthenticationNoobException(ExcMsg msg) {
		super(msg);
	}

	public AuthenticationNoobException(String message, Throwable cause) {
		super(message, cause);
	}

	public AuthenticationNoobException(String message) {
		super(message);
	}

	public AuthenticationNoobException(Throwable cause) {
		super(cause);
	}

}
