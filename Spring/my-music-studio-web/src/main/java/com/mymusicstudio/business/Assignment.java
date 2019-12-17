package com.mymusicstudio.business;

import javax.persistence.*;

@Entity
public class Assignment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@ManyToOne
	@JoinColumn(name="LessonID")
	private Lesson lesson;
	private String description;
	
	public Assignment() {
		super();
	}

	public Assignment(int id, Lesson lesson, String description) {
		super();
		this.id = id;
		this.lesson = lesson;
		this.description = description;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Lesson getLesson() {
		return lesson;
	}

	public void setLesson(Lesson lesson) {
		this.lesson = lesson;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
}
