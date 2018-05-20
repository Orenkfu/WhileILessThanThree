package main.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import main.entities.Article;
import main.service.interfaces.UserService;
import main.utils.OrderBy;

@RestController
@RequestMapping(path = "/articles")
public class ArticleResource {
	@Autowired
	private UserService uService;

	@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET, path = "/byForum/{forumId}")
	public Article[] getAllArticlesByForum(@PathVariable("forumId") Long forumId,
			@RequestParam(defaultValue = "0", required = false, value = "page", name = "page") int page,
			@RequestParam(defaultValue = "25", required = false, value = "size", name = "size") int size,
			@RequestParam(required = false, value = "orderBy", name = "orderBy") OrderBy orderBy) {
		return uService.getAllArticlesByForum(PageRequest.of(page, size), forumId).toArray(new Article[0]);
	}

	@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET, path = "/{id}")
	public Article getArticle(@PathVariable("id") Long id) {

		Article article = uService.getArticle(id);
		System.out.println("RECEIVED ARTICLE: " + article);
		return article;
	}

}
