package main.exceptions;

public class UnauthorizedNoobException extends GeneralNoobException {

	private static final long serialVersionUID = -1267926641776413000L;

	public UnauthorizedNoobException() {
		super();
	}

	public UnauthorizedNoobException(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

	public UnauthorizedNoobException(String message) {
		super(message);
	}

	public UnauthorizedNoobException(Throwable cause) {
		super(cause);
	}

	public UnauthorizedNoobException(ExcMsg msg) {
		super(msg);
	}

	public UnauthorizedNoobException(ExcMsg msg, Throwable cause) {
		super(msg, cause);
	}

}
