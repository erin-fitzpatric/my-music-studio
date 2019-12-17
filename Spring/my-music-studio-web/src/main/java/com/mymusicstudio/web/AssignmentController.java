package com.mymusicstudio.web;

import org.springframework.beans.factory.annotation.*;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.*;

import com.mymusicstudio.business.Assignment;
import com.mymusicstudio.db.AssignmentRepository;
import com.mymusicstudio.web.JsonResponse;

@CrossOrigin
@RestController
@RequestMapping("/assignments")

public class AssignmentController {
	@Autowired
	private AssignmentRepository assignmentRepo;
		
	// list - return all assignments
	@GetMapping("/")
	public JsonResponse listAssignments() {
		JsonResponse jr = null;
		try {
			jr = JsonResponse.getInstance(assignmentRepo.findAll());
		} catch (Exception e) {
			jr = JsonResponse.getInstance(e);
			e.printStackTrace();
		}
		return jr;
	}
	
	// get - return 1 assignment for the given id
	@GetMapping("/{id}")
	public JsonResponse getAssignment(@PathVariable int id) {
		JsonResponse jr = null;
		try {
			jr = JsonResponse.getInstance(assignmentRepo.findById(id));
		} catch (Exception e) {
			jr = JsonResponse.getInstance(e);
			e.printStackTrace();
		}
		return jr;
	}
	
	// get - list line items for a Lesson 
	@GetMapping("/assignments-for-lesson/{lessonId}")
	public JsonResponse getAllAssignments(@PathVariable int lessonId) {
		JsonResponse jr = null;
		try {
			jr = JsonResponse.getInstance(assignmentRepo.findByLessonId(lessonId));
		} catch (Exception e) {
			jr = JsonResponse.getInstance(e);
			e.printStackTrace();
		}
		return jr;
	}
	
	// add - adds a new assignment
	@PostMapping("/")
	public JsonResponse addAssignment(@RequestBody Assignment a) {
		JsonResponse jr = null;
		try {
			jr = JsonResponse.getInstance(assignmentRepo.save(a));
		} catch (DataIntegrityViolationException dive) {
			jr = JsonResponse.getInstance(dive.getRootCause().getMessage());
			dive.printStackTrace();
		} catch (Exception e) {
			jr = JsonResponse.getInstance(e);
			e.printStackTrace();
		}
		return jr;
	}
	
	// update - update an Assignment
	@PutMapping("/")
	public JsonResponse updateAssignment(@RequestBody Assignment a) {
		JsonResponse jr = null;
		try {
			if (assignmentRepo.existsById(a.getId())) {
				jr = JsonResponse.getInstance(assignmentRepo.save(a));
			} else {
				// record doesn't exist
				jr = JsonResponse.getInstance("Error updating Assignment.  id: " + a.getId() + " doesn't exist!");
			}
		} catch (Exception e) {
			jr = JsonResponse.getInstance(e);
			e.printStackTrace();
		}
		return jr;
	}
	
	// delete - delete an Assignment
	@DeleteMapping("/{id}")
	public JsonResponse deleteAssignment(@PathVariable int id) {
		JsonResponse jr = null;
		try {
			if (assignmentRepo.existsById(id)) {		
				assignmentRepo.deleteById(id);
				jr = JsonResponse.getInstance("Delete succesful!");
			} else {
				// record doesn't exist
				jr = JsonResponse.getInstance("Error deleting Assignment. id: " + id + " doesn't exist!");
			}
		} catch (DataIntegrityViolationException dive) {
			jr = JsonResponse.getInstance(dive.getRootCause().getMessage());
			dive.printStackTrace();
		} catch (Exception e) {
			jr = JsonResponse.getInstance(e);
			e.printStackTrace();
		}
		return jr;
	}
}

