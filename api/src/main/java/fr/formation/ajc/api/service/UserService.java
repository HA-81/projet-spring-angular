package fr.formation.ajc.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.formation.ajc.api.model.User;
import fr.formation.ajc.api.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public List<User> findUsers() {
		return userRepository.findAll();
	}

	public User findUserById(int id) {
		return userRepository.findById(Integer.valueOf(id)).get();
	}

	public void saveUser(User u) {
		userRepository.save(u);
		
	}
	
	public void updateUser(User u) {
		userRepository.save(u);
		
	}

	public void deleteUserById(int id) {
		userRepository.deleteById(id);	
	}

	public List<User> findByLastname(String lastname) {
		return userRepository.findByName(lastname);
	}
	

	

}
