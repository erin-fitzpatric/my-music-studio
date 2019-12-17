package com.mymusicstudio.db;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.mymusicstudio.business.Assignment;

public interface AssignmentRepository extends CrudRepository<Assignment, Integer> {
	List<Assignment> findByLessonId(int id);
}
