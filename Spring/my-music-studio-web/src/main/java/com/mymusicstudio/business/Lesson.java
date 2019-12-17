package com.mymusicstudio.business;

import java.time.LocalDateTime;

import javax.persistence.*;


@Entity
public class Lesson {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@ManyToOne
	@JoinColumn(name="userID")
	private User user;
	private LocalDateTime dateAssigned;
	private LocalDateTime lessonDateTime;
	private String location;
	private String address;
	private String city;
	private String state;
	private String zip;
	private String status;
	
	public Lesson() {
		super();
	}

	public Lesson(int id, User user, LocalDateTime dateAssigned, LocalDateTime lessonDateTime, String location,
			String address, String city, String state, String zip, String status) {
		super();
		this.id = id;
		this.user = user;
		this.dateAssigned = dateAssigned;
		this.lessonDateTime = lessonDateTime;
		this.location = location;
		this.address = address;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.status = status;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public LocalDateTime getDateAssigned() {
		return dateAssigned;
	}

	public void setDateAssigned(LocalDateTime time) {
		this.dateAssigned = time;
	}

	public LocalDateTime getLessonDateTime() {
		return lessonDateTime;
	}

	public void setLessonDateTime(LocalDateTime lessonDateTime) {
		this.lessonDateTime = lessonDateTime;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZip() {
		return zip;
	}

	public void setZip(String zip) {
		this.zip = zip;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
}
