package main.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import main.utility.ForumCategory;

@Entity
public class Forum implements Serializable {

	private static final long serialVersionUID = 6627077446732527602L;
	private Long id;
	private String name;
	private ForumCategory category;
	private List<Article> articles;

	public Forum(String name, ForumCategory category, List<Article> articles) {
		super();
		this.name = name;
		this.category = category;
		this.articles = articles;
	}

	public Forum() {
	}

	@Id
	@GeneratedValue
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Enumerated
	public ForumCategory getCategory() {
		return category;
	}

	public void setCategory(ForumCategory category) {
		this.category = category;
	}

	@OneToMany(targetEntity = Article.class, fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinTable(name = "forum_articles", joinColumns = @JoinColumn(name = "forum_id"), inverseJoinColumns = @JoinColumn(name = "article_id"))
	@JsonProperty(access = Access.WRITE_ONLY)
	public List<Article> getArticles() {
		return articles;
	}

	public void setArticles(List<Article> articles) {
		this.articles = articles;
	}

	@Override
	public String toString() {
		return "Forum [id=" + id + ", name=" + name + ", category=" + category + ", articles=" + articles + "]";
	}

}
