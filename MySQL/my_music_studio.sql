-- create and select the database
DROP DATABASE IF EXISTS my_music_studio;
CREATE DATABASE my_music_studio;
USE my_music_studio;

-- create User table
Create table User (
ID 				integer 		primary key auto_increment,
UserName 		varchar(20) 	not null,
Password 		varchar(20) 	not null,
FirstName 		varchar(20) 	not null,
LastName 		varchar(20) 	not null,
PhoneNumber 	varchar(12),
Email 			varchar(75),
IsAdmin 		tinyint 		default 1 not null,
CONSTRAINT uname unique (UserName)
);

-- create Lesson table
Create table Lesson (
ID 				integer 		primary key auto_increment,
UserID			integer			not null,
DateAssigned	datetime		not null,
LessonDateTime	datetime		not null,
Location		varchar(255)	not null,
Address 		varchar(255) 	not null,
City 			varchar(255) 	not null,
State 			varchar(2) 		not null,
Zip 			varchar(5) 		not null,
Status			varChar(20)		not null default 'Upcoming',
Foreign Key (UserID) references user(ID)
); 

-- create Assignment table
Create table Assignment (
ID 					integer 		primary key auto_increment,
LessonID			integer			not null,
Description			varchar(255)	not null,
Foreign Key (LessonID) references lesson(ID)
);

-- Add User
insert into user (ID, UserName, Password, FirstName, LastName, PhoneNumber, Email, IsAdmin) VALUES
	(1, 'admin', 'sesame', 'adminfirst', 'adminlast', '111-111-1111', 'admin@admin.com', 1), 
	(2, 'studentone', 'studentone', 'studentonefirst', 'studentonelast', '222-222-2222', 'studentone@student.com', 0),
    (3, 'studenttwo', 'studenttwo', 'studenttwofirst', 'studenttwolast', '333-333-3333', 'studenttwo@student.com', 0); 
    
-- Add Lesson
insert into lesson (ID, UserID, LessonDateTime, Location, Address, City, State, Zip, Status) VALUES
	(1, 1, '2019-12-27 11:30:00', 'Your High School', '123 Address Street', 'Cincinnati', 'OH', '11111', 'Upcoming'),
	(2, 1, '2019-12-14 11:00:00', 'Your High School', '123 Address Street', 'Cincinnati', 'OH', '11111', 'Completed'),
	(3, 2, '2019-12-30 14:00:00', 'Your High School', '123 Address Street', 'Cincinnati', 'OH', '11111', 'Upcoming');

-- Add Assignment
insert into assignment (ID, LessonID, Description) VALUES
	(1, 1, "Practice Bb major scale until you can play it 10x in a row without a mistake"),
	(2, 1, "Practice long tones exercise #1"),
	(3, 1, "Practice articulation exercise #'s 1, 5, and 7"),
    (4, 2, "Prepare measures 12-32 from Allegretto"),
    (5, 3, "Practice the harmonic minor scale in 12 keys"),
    (6, 3, "Memorize movement II and record for next week");

-- create a user and grant privileges to that user
DROP USER IF EXISTS my_music_studio_user@localhost;
CREATE USER my_music_studio_user@localhost IDENTIFIED BY 'sesame';
GRANT SELECT, INSERT, DELETE, UPDATE ON my_music_studio.* TO my_music_studio_user@localhost;