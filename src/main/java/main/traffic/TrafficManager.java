package main.traffic;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import main.entities.Visitor;
import main.service.interfaces.VisitorTrafficService;

@Component
public class TrafficManager {

	@Autowired
	VisitorTrafficService service;

	public Visitor track(Visitor visitor) {
		visitor.setLastVisited(new Date());
		visitor = this.service.track(visitor);
		return visitor;

	}

}
