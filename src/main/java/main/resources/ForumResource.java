package main.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import main.entities.Forum;
import main.service.interfaces.UserService;
import main.utility.ForumCategory;
import main.utility.OrderBy;

@RestController
@RequestMapping(path = "/forums")
public class ForumResource {

	@Autowired
	UserService uService;

	@RequestMapping(path = "", produces = MediaType.APPLICATION_JSON_VALUE)
	public Forum[] getAllForums(
			@RequestParam(defaultValue = "0", name = "page", value = "page", required = false) int page,
			@RequestParam(defaultValue = "10", name = "size", value = "size", required = false) int size,
			@RequestParam(name = "orderBy", required = false) OrderBy orderBy) {

		System.out.println("Page size is : " + size);

		return uService.getAllForums(PageRequest.of(page, size)).toArray(new Forum[0]);
	}

	@RequestMapping(path = "/categories", produces = MediaType.APPLICATION_JSON_VALUE)
	public ForumCategory[] getForumCategories() {
		return ForumCategory.values();

	}

	@RequestMapping(path = "/{category}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Forum[] getForumsByCategory(@PathVariable("category") ForumCategory category) {

		return this.uService.getForumsByCategory(category).toArray(new Forum[0]);
	}

	@RequestMapping(path = "/f", produces = MediaType.APPLICATION_JSON_VALUE)
	public Forum[] getAllForums() {

		return uService.getAllForums(PageRequest.of(0, 5)).toArray(new Forum[0]);
	}
}
