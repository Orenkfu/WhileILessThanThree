package main.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Visitor_Traffic")
public class Visitor {
	private String ipAddress;
	private Date firstVisited;
	private Date lastVisited;
	private int timesVisited;
	private boolean isSignedUp;

	public Visitor() {
	}

	public Visitor(String ipAddress) {
		super();
		this.ipAddress = ipAddress;
	}

	public Visitor(String ipAddress, Date firstVisited, Date lastVisited, int timesVisited, boolean isSignedUp) {
		super();
		this.ipAddress = ipAddress;
		this.firstVisited = firstVisited;
		this.lastVisited = lastVisited;
		this.timesVisited = timesVisited;
		this.isSignedUp = isSignedUp;
	}

	@Id
	@Column(updatable = false, name = "Remote_Adress")
	public String getIpAddress() {
		return ipAddress;
	}

	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}

	public Date getFirstVisited() {
		return firstVisited;
	}

	public void setFirstVisited(Date firstVisited) {
		this.firstVisited = firstVisited;
	}

	public Date getLastVisited() {
		return lastVisited;
	}

	public void setLastVisited(Date lastVisited) {
		this.lastVisited = lastVisited;
	}

	public int getTimesVisited() {
		return timesVisited;
	}

	public void setTimesVisited(int timesVisited) {
		this.timesVisited = timesVisited;
	}

	public boolean isSignedUp() {
		return isSignedUp;
	}

	public void setSignedUp(boolean isSignedUp) {
		this.isSignedUp = isSignedUp;
	}
}
