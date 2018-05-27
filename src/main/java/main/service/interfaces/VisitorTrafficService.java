package main.service.interfaces;

import main.entities.Visitor;

public interface VisitorTrafficService {
	Visitor add(Visitor visitor);

	void remove(String remoteAddress);

	void incrementVisits(Visitor visitor);

	Visitor get(String remoteAddress);

	boolean check(String remoteAddress);

	Visitor track(Visitor visitor);
}
