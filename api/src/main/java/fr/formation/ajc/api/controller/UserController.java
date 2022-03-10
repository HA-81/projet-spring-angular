package fr.formation.ajc.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.formation.ajc.api.model.User;
import fr.formation.ajc.api.service.UserService;



@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	
	
	@GetMapping("")
	public List<User> findAll() {
		return userService.findUsers();
		
	}
	
	@GetMapping("/{id}")
	public User findById(@PathVariable(name = "id") int id) {
		return userService.findUserById(id);
	}
	
	@PostMapping("")
	public String create(@RequestBody User u)		
	{ 
		userService.saveUser(u);  
		return "User créer";
    }
	
	@PutMapping("")
	public String update(@RequestBody User u)		
	{ 
		userService.updateUser(u);
		return "User à jour";	
    }
	
	@DeleteMapping("/{id}")
	public String delete(@PathVariable(name ="id") int id)		
	{ 
		userService.deleteUserById(id);
		return "User suprrimée";	
    }
	
	@GetMapping("/{lastname}")
	public List<User> findbyName(@PathVariable(name ="lastname") String lastname)
	{
		return userService.findByLastname(lastname);
	}

}
