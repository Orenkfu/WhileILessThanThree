package main.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import main.entities.Forum;
import main.service.interfaces.ForumService;
import main.service.interfaces.UserService;
import main.utils.ForumCategory;
import main.utils.OrderBy;

@RestController
@RequestMapping(path = "/forums")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ForumResource {

	@Autowired
	UserService uService;

	@Autowired
	ForumService fService;

	@RequestMapping(path = "", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Forum[]> getAllForums(
			@RequestParam(defaultValue = "0", name = "page", value = "page", required = false) int page,
			@RequestParam(defaultValue = "10", name = "size", value = "size", required = false) int size,
			@RequestParam(name = "orderBy", required = false) OrderBy orderBy) {

		return new ResponseEntity<Forum[]>(fService.getAll(PageRequest.of(page, size)).toArray(new Forum[0]),
				HttpStatus.OK);
	}

	@RequestMapping(path = "/categories", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<ForumCategory[]> getForumCategories() {
		return new ResponseEntity<ForumCategory[]>(ForumCategory.values(), HttpStatus.OK);

	}

	@RequestMapping(path = "/{category}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Forum[]> getForumsByCategory(@PathVariable("category") ForumCategory category) {

		return new ResponseEntity<Forum[]>(this.fService.getAllByCategory(category).toArray(new Forum[0]),
				HttpStatus.OK);
	}

	@RequestMapping(path = "/f", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Forum[]> getAllForums() {

		return new ResponseEntity<Forum[]>(fService.getAll(PageRequest.of(0, 5)).toArray(new Forum[0]), HttpStatus.OK);
	}
}
