 Amity University Bangalore - Campus Management System
 ___________________________________________________________________________________________________________________________________________________________________________________________

 Overview

This is a simple Campus Management System for Amity University Bangalore, implemented in JavaScript. The system allows for student enrollment, attendance tracking, grade management, and provides various reporting features
___________________________________________________________________________________________________________________________________________________________________________________________________________________
 Features:-
____________________________________________________________________________________________________________________________________________________________________________________________________________________
* Student Management
1. Enroll new students with unique IDs
2. Track student details (name, course, semester)
3. Manage attendance records
4. Record and calculate grades/GPA

* University Operations
1. List available courses
2. Display university facilities
3. Generate student performance reports
4. View course enrollment statistics
___________________________________________________________________________________________________________________________________________________________________________________________________________________
 Classes
____________________________________________________________________________________________________________________________________________________________________________________________________________________
* Student
#Properties: id, name, course, semester, attendance, grades
* Methods:
  1.markAttendance(date, status) - Records attendance for a date
  2.addGrade(subject, grade) - Adds a grade for a subject
  3.getGPA() - Calculates and returns the student's GPA
____________________________________________________________________________________________________________________________________________________________________________________________________________________
 AmityUniversity
 Properties: students (array), courses (array), facilities (array)
 Methods:-
  1. enrollStudent(name, course, semester) - Creates and adds a new student
  2. getStudentById(id) - Retrieves a student by ID
  3. getAllStudents() - Returns all enrolled students
  4. getTopPerformers(limit) - Returns top performing students by GPA
  5. getCourseStats() - Returns enrollment statistics by course
____________________________________________________________________________________________________________________________________________________________________________________________________________________
 Usage Example
___________________________________________________________________________________________________________________________________________________________________________________________________________________
javascript
* Initialize university
const amity = new AmityUniversity();

* Enroll students
amity.enrollStudent("Rahul Sharma", "B.Tech", 3);
amity.enrollStudent("Priya Patel", "MBA", 1);

* Add grades and attendance
const students = amity.getAllStudents();
students[0].addGrade("Mathematics", 8.5);
students[0].markAttendance("2023-10-01", "Present");
____________________________________________________________________________________________________________________________________________________________________________________________________________________
* Generate reports
console.log("Course Statistics:", amity.getCourseStats());
console.log("Top Performers:", amity.getTopPerformers(3));
____________________________________________________________________________________________________________________________________________________________________________________________________________________
 Sample Output
____________________________________________________________________________________________________________________________________________________________________________________________________________________
Amity University Bangalore - Student Records
Total Students: 4
Course Statistics: { B.Tech: 2, MBA: 1, BBA: 1, B.Com: 0, B.Sc: 0 }
Top Performers: ["Rahul Sharma", "Priya Patel", "Amit Singh"]___
Student Rahul Sharma GPA:9.3
University Facilities:
1. Library
2. Sports
3. Hostel
4. caffetria
____________________________________________________________________________________________________________________________________________________________________________________________________________________
* Requirements
1. Node.js (to run JavaScript)
2.No additional dependencies required
____________________________________________________________________________________________________________________________________________________________________________________________________________________
* How to Run
1. Save the code to a file (e.g., amity.js)
2. Run using Node.js: node amity.js
____________________________________________________________________________________________________________________________________________________________________________________________________________________
* Future Enhancements
1. Add faculty management
2. Implement course scheduling
3.Add fee payment tracking
4. Include more detailed reporting features
5. Add database persistence
____________________________________________________________________________________________________________________________________________________________________________________________________________________
* License
This project is open-source and available for educational purposes.
