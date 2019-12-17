package com.mymusicstudio.db;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.mymusicstudio.business.Lesson;
import com.mymusicstudio.business.User;

public interface LessonRepository extends CrudRepository<Lesson, Integer> {
	List<Lesson> findByUserNotAndStatus(User user, String status);
}
