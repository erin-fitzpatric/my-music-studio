package com.mymusicstudio.db;

import org.springframework.data.repository.CrudRepository;

import com.mymusicstudio.business.User;

public interface UserRepository extends CrudRepository<User, Integer> {
	User findByUserNameAndPassword(String UserName, String Password);
}
