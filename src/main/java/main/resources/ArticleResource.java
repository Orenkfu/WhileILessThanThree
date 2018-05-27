package main.resources;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import main.entities.Article;
import main.exceptions.GeneralNoobException;
import main.exceptions.NoobNotFoundException;
import main.service.interfaces.ArticleService;
import main.service.interfaces.UserService;
import main.utils.OrderBy;

@RestController
@RequestMapping(path = "/articles")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ArticleResource {
	@Autowired
	private UserService uService;

	@Autowired
	private ArticleService aService;

	@Autowired
	private SessionResource sessionManager;

	@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET, path = "/byForum/{forumId}")
	public ResponseEntity<Article[]> getAllArticlesByForum(@PathVariable("forumId") Long forumId,
			@RequestParam(defaultValue = "0", required = false, value = "page", name = "page") int page,
			@RequestParam(defaultValue = "25", required = false, value = "size", name = "size") int size,
			@RequestParam(required = false, value = "orderBy", name = "orderBy") OrderBy orderBy, HttpSession session)
			throws GeneralNoobException {
		System.out.println(sessionManager.getUserFromSession(session));
		if ((boolean) session.getAttribute("authenticated"))
			return new ResponseEntity<Article[]>(
					aService.getAllByForum(PageRequest.of(page, size), forumId).toArray(new Article[0]), HttpStatus.OK);
		else
			throw new RuntimeException("test is working..?");
	}

	@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET, path = "/{id}")
	public ResponseEntity<Article> getArticle(@PathVariable("id") Long id) throws NoobNotFoundException {
		return new ResponseEntity<Article>(aService.getById(id), HttpStatus.OK);
	}

	@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST, path = "")
	public ResponseEntity<Article> postArticle(Article article) {
		return new ResponseEntity<Article>(aService.create(article), HttpStatus.OK);
	}

}
