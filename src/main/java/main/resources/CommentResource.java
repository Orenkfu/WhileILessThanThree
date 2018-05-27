package main.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import main.aspects.Syso;
import main.entities.Comment;
import main.service.interfaces.CommentService;
import main.service.interfaces.UserService;
import main.utils.OrderBy;

@RestController
@RequestMapping(path = "/comments")
@CrossOrigin(origins = "*", maxAge = 3600)
public class CommentResource {

	@Autowired
	UserService uService;

	@Autowired
	CommentService cService;

	@Syso
	@RequestMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	public ResponseEntity<Comment[]> getCommentsByArticleId(@PathVariable("id") Long id,
			@RequestParam(defaultValue = "0", value = "page", name = "page", required = false) int page,
			@RequestParam(defaultValue = "25", value = "size", name = "size", required = false) int size,
			@RequestParam(value = "orderBy", name = "orderBy", required = false) OrderBy orderBy) {
		Comment[] comments = this.cService.getByArticleId(id, PageRequest.of(page, size)).toArray(new Comment[0]);
		for (Comment comment : comments) {
			System.out.println(comment.getPosted());
		}
		return new ResponseEntity<Comment[]>(comments, HttpStatus.OK);
	}

	@Syso
	@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public ResponseEntity<Comment> postComment(@RequestBody Comment comment) {
		comment = cService.create(comment);
		System.out.println(comment);
		return new ResponseEntity<Comment>(comment, HttpStatus.OK);
	}

	@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET, path = "/user/{id}")
	public ResponseEntity<Comment[]> getCommentsByUserId(@PathVariable("id") Long id,
			@RequestParam(defaultValue = "0", value = "page", name = "page", required = false) int page,
			@RequestParam(defaultValue = "25", value = "size", name = "size", required = false) int size,
			@RequestParam(value = "orderBy", name = "orderBy", required = false) OrderBy orderBy) {
		Comment[] comments = this.cService.getByUserId(id, PageRequest.of(page, size)).toArray(new Comment[0]);
		for (Comment comment : comments) {
			System.out.println(comment.getPosted());
		}
		return new ResponseEntity<Comment[]>(comments, HttpStatus.OK);
	}

}
