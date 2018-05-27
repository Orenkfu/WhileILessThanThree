package main.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import main.entities.Visitor;

@Repository
public interface VisitorDao extends JpaRepository<Visitor, String> {

}
