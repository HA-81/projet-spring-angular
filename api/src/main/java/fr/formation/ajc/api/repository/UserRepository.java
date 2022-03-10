package fr.formation.ajc.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.formation.ajc.api.model.User;


public interface UserRepository extends JpaRepository<User, Integer> {
	
	public List<User> findByName(String lastname);

}
