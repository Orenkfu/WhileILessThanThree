package main.service.implementations;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import main.dao.VisitorDao;
import main.entities.Visitor;
import main.service.interfaces.VisitorTrafficService;

@Service
public class VisitorTrafficServiceImpl implements VisitorTrafficService {

	@Autowired
	VisitorDao dao;

	@Override
	public Visitor track(Visitor visitor) {
		if (!this.check(visitor.getIpAddress())) {
			visitor.setFirstVisited(new Date());
			visitor.setTimesVisited(1);
			System.out.println("tracking visitor new" + visitor);
			return this.add(visitor);
		} else {
			System.out.println("patching existing visitor" + visitor);
			this.incrementVisits(visitor);
			return visitor;
		}
	}

	@Override
	public Visitor add(Visitor visitor) {
		return this.dao.save(visitor);
	}

	@Override
	public void remove(String remoteAddress) {
		this.dao.deleteById(remoteAddress);
	}

	@Override
	public void incrementVisits(Visitor visitor) {
		visitor.setTimesVisited(visitor.getTimesVisited() + 1);
		this.dao.save(visitor);
	}

	@Override
	public Visitor get(String remoteAddress) {
		return this.dao.findById(remoteAddress).orElseThrow(() -> new RuntimeException("cant find visitor"));
	}

	@Override
	public boolean check(String remoteAddress) {
		return this.dao.findById(remoteAddress).isPresent();

	}

}
