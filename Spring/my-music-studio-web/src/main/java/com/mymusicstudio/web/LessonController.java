package com.mymusicstudio.web;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.*;

import com.mymusicstudio.business.Lesson;
import com.mymusicstudio.db.LessonRepository;
import com.mymusicstudio.db.UserRepository;

@CrossOrigin
@RestController
@RequestMapping("/lessons")
public class LessonController {
	@Autowired
	private LessonRepository lessonRepo;
	@Autowired
	private UserRepository userRepo;

	// list - return all lessons
	@GetMapping("/")
	public JsonResponse listLessons() {
		JsonResponse jr = null;
		try {
			jr = JsonResponse.getInstance(lessonRepo.findAll());
		} catch (Exception e) {
			jr = JsonResponse.getInstance(e);
			e.printStackTrace();
		}
		return jr;
	}
	
	// get - return 1 lesson for the given id
	@GetMapping("/{id}")
	public JsonResponse getLesson(@PathVariable int id) {
		JsonResponse jr = null;
		try {
			jr = JsonResponse.getInstance(lessonRepo.findById(id));
		} catch (Exception e) {
			jr = JsonResponse.getInstance(e);
			e.printStackTrace();
		}
		return jr;
	}
	
	// Get - lessons upcoming
	@GetMapping("/list-upcoming/{id}")
	public JsonResponse listUpcoming(@PathVariable int id) {
		JsonResponse jr = null;
		try {
			jr = JsonResponse.getInstance(lessonRepo.findByUserNotAndStatus(userRepo.findById(id).get(), "Upcoming"));
		} catch (Exception e) {
			jr = JsonResponse.getInstance(e);
			e.printStackTrace();
		}
		return jr;
	}
	
	// Post - adds a new Lesson
	@PostMapping("/")
	public JsonResponse addLesson(@RequestBody Lesson l) {
		JsonResponse jr = null;
		try {
			// lesson status is set in back end
			LocalDateTime time = LocalDateTime.now();
			l.setDateAssigned(time);
			l.setStatus("Upcoming");
			jr = JsonResponse.getInstance(lessonRepo.save(l));
		} catch (DataIntegrityViolationException dive) {
			jr = JsonResponse.getInstance(dive.getRootCause().getMessage());
			dive.printStackTrace();
		} catch (Exception e) {
			jr = JsonResponse.getInstance(e);
			e.printStackTrace();
		}
		return jr;
	}
	
	// put - lesson missed
	@PutMapping("/missed")
	public JsonResponse lessonMissed(@RequestBody Lesson l) {
		JsonResponse jr = null;
		// set status to missed
		try {
			l.setStatus("Missed");
			jr = JsonResponse.getInstance(lessonRepo.save(l));
		} catch (Exception e) {
			jr = JsonResponse.getInstance(e);
		}
		return jr;
	}
	
	// put - lesson completed
	@PutMapping("/completed")
	public JsonResponse lessonCompleted(@RequestBody Lesson l) {
		JsonResponse jr = null;
		// set status to completed
		try {
			l.setStatus("Completed");
			jr = JsonResponse.getInstance(lessonRepo.save(l));
		} catch (Exception e) {
			jr = JsonResponse.getInstance(e);
		}
		return jr;
	}
	
	// update - update a Lesson
	@PutMapping("/")
	public JsonResponse updateLesson(@RequestBody Lesson l) {
		JsonResponse jr = null;
		try {
			if (lessonRepo.existsById(l.getId())) {
				jr = JsonResponse.getInstance(lessonRepo.save(l));
			} else {
				// record doesn't exist
				jr = JsonResponse.getInstance("Error updating Lesson.  id: " + l.getId() + " doesn't exist!");
			}
		} catch (Exception e) {
			jr = JsonResponse.getInstance(e);
			e.printStackTrace();
		}
		return jr;
	}
	
	// delete - delete a Lesson
	@DeleteMapping("/{id}")
	public JsonResponse deleteLesson(@PathVariable int id) {
		JsonResponse jr = null;
		try {
			if (lessonRepo.existsById(id)) {
				lessonRepo.deleteById(id);
				jr = JsonResponse.getInstance("Delete succesful!");
			} else {
				// record doesn't exist
				jr = JsonResponse.getInstance("Error deleting Lesson. id: " + id + " doesn't exist!");
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

