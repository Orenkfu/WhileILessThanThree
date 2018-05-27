package main.exceptions;

public class GeneralNoobException extends Exception {

	private static final long serialVersionUID = -9110988152466750207L;

	public GeneralNoobException() {
		super();
	}

	public GeneralNoobException(String message, Throwable cause) {
		super(message, cause);
	}

	public GeneralNoobException(String message) {
		super(message);
	}

	public GeneralNoobException(Throwable cause) {
		super(cause);
	}

	public GeneralNoobException(ExcMsg msg) {
		super(msg.getValue());
	}

	public GeneralNoobException(ExcMsg msg, Throwable cause) {
		super(msg.getValue(), cause);
	}

}
