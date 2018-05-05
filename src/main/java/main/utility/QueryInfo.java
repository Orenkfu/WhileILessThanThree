package main.utility;

public class QueryInfo {

	private int page;
	private int size;
	private String sort;

	public QueryInfo(int page, int size, String sort) {
		super();
		this.page = page;
		this.size = size;
		this.sort = sort;
	}

	public QueryInfo() {
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}

	public String getSort() {
		return sort;
	}

	public void setSort(String sort) {
		this.sort = sort;
	}

}
