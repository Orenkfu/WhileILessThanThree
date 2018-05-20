package main;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;

import main.entities.Article;
import main.entities.Comment;
import main.entities.Forum;
import main.entities.User;
import main.security.Role;
import main.service.interfaces.UserService;
import main.utils.ForumCategory;
import main.utils.NewArticleHelper;

@Component
public class OnStartup {

	@Autowired
	UserService adminS;

	public void start() {
		System.err.println("SYSTEM STARTING");

		User firstUser = new User("frozen", "123", "frozen@gmail.com", Role.User);
		adminS.createUser(firstUser);
		System.err.println(firstUser.getDetails());
		System.out.println(firstUser);
		User sameUser = adminS.getUser(firstUser.getId());
		System.err.println(sameUser);
		System.err.println(sameUser.getDetails());
		Forum f = adminS.createForum(new Forum("Java Basic", ForumCategory.JAVA, null));
		Forum f2 = adminS.createForum(new Forum("Basic Python", ForumCategory.PYTHON, null));
		Forum f3 = adminS.createForum(new Forum("Spring", ForumCategory.JAVA, null));
		Article a = adminS
				.createArticle(new NewArticleHelper("First!", "This is the first article in the forum!", f.getId()));
		Article a2 = adminS
				.createArticle(new NewArticleHelper("Second!", "This is the second article in the forum!", f.getId()));
		Article a3 = adminS
				.createArticle(new NewArticleHelper("Third!", "This is the third article in the forum!", f.getId()));
		Comment c = a.getComments().get(0);
		Comment c2 = adminS
				.createComment(new Comment("This is the second comment of the first article!", false, null, a.getId()));
		Comment c3 = adminS
				.createComment(new Comment("This is the third comment of the first article!", false, null, a.getId()));
		Comment c4 = adminS
				.createComment(new Comment("This is the fourth comment of the first article!", false, null, a.getId()));
		Comment c5 = adminS.createComment(
				new Comment("This is the second comment of the second article!", false, null, a2.getId()));
		Comment c6 = adminS.createComment(
				new Comment("This is the second comment of the first article!", false, null, a3.getId()));
		ArrayList<Article> allArticles = new ArrayList<Article>(Arrays.asList(a, a2, a3));
		f.setArticles(allArticles);
		adminS.createForum(f);
		System.err.println(adminS.getAllForums(PageRequest.of(0, 5)));
		System.err.println(adminS.getCommentsByArticle(PageRequest.of(0, 5), a.getId()));
		System.err.println(adminS.getCommentsByArticle(PageRequest.of(0, 5), a2.getId()));
		System.err.println(adminS.getCommentsByArticle(PageRequest.of(0, 5), a3.getId()));

	}
}
