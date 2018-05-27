package main;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import main.entities.Article;
import main.entities.Comment;
import main.entities.Forum;
import main.entities.User;
import main.entities.UserDetails;
import main.exceptions.NoobNotFoundException;
import main.security.Role;
import main.service.interfaces.ArticleService;
import main.service.interfaces.CommentService;
import main.service.interfaces.ForumService;
import main.service.interfaces.UserService;
import main.utils.ForumCategory;

@Component
public class OnStartup {

	@Autowired
	UserService uService;

	@Autowired
	CommentService cService;

	@Autowired
	ArticleService aService;

	@Autowired
	ForumService fService;

	PasswordEncoder encoder;

	@Autowired
	public void setPasswordEncoder(PasswordEncoder encoder) {
		this.encoder = encoder;
	}

	public OnStartup start() throws NoobNotFoundException {
		System.err.println("SYSTEM STARTING");

		User firstUser = new User("frozen", "123", "frozen@gmail.com", new UserDetails(Role.User));
		User secondUser = new User("picker", "123", "picker@gmail.com", new UserDetails(Role.Admin));
		firstUser = uService.createUser(firstUser);
		secondUser = uService.createUser(secondUser);
		uService.getUser(firstUser.getId());
		System.err.println(firstUser.getDetails());
		System.out.println(firstUser);
		Forum f = fService.create(new Forum("Java Basic", ForumCategory.JAVA, null));
		System.err.println(f);
		Forum f2 = fService.create(new Forum("Basic Python", ForumCategory.PYTHON, null));
		Forum f3 = fService.create(new Forum("Spring", ForumCategory.JAVA, null));
		Article a = aService.create(new Article("The First Article", f.getId(), firstUser,
				"Congratulations, You are viewing the first article in the best forum in the world!"));
		System.err.println(a);
		Article a2 = aService.create(new Article("The Second Article", f.getId(), firstUser,
				"Congratulations, you are viewing the second article of the best forum in the world!"));
		Article a3 = aService.create(new Article("The Third Article", f.getId(), secondUser,
				"Congratulations, you are viewing the third article of the best forum in the world!"));
		Comment c2 = cService.create(
				new Comment("This is the second comment of the first article!", false, firstUser.getId(), a.getId()));
		Comment c3 = cService.create(
				new Comment("This is the third comment of the first article!", false, firstUser.getId(), a.getId()));
		Comment c4 = cService.create(
				new Comment("This is the fourth comment of the first article!", false, firstUser.getId(), a.getId()));
		Comment c5 = cService.create(
				new Comment("This is the second comment of the second article!", false, firstUser.getId(), a2.getId()));
		Comment c6 = cService.create(
				new Comment("This is the second comment of the first article!", false, firstUser.getId(), a3.getId()));
		Comment c7 = cService.create(
				new Comment("This is the third comment of the first article!", false, firstUser.getId(), a3.getId()));
		return this;
	}

	public OnStartup then() throws NoobNotFoundException {
		List<Comment> comments = cService.getByArticleId(6L, PageRequest.of(0, 20));
		System.out.println(aService.getByComments(PageRequest.of(0, 20), comments));
		return this;

	}
}
