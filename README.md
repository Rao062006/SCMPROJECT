Amity University Bangalore - Campus Management System
 Overview
This is a simple Campus Management System for Amity University Bangalore, implemented in JavaScript. The system allows for student enrollment, attendance tracking, grade management, and provides various reporting features.
Features
Student Management
- Enroll new students with unique IDs
- Track student details (name, course, semester)
- Manage attendance records
- Record and calculate grades/GPA
 University Operations
- List available courses
- Display university facilities
- Generate student performance reports
- View course enrollment statistics
Classes
 Student
- Properties: id, name, course, semester, attendance, grades
- Methods:
  - markAttendance(date, status) - Records attendance for a date
  - addGrade(subject, grade) - Adds a grade for a subject
  - getGPA() - Calculates and returns the student's GPA
AmityUniversity
- Properties: students (array), courses (array), facilities (array)
- Methods:
  - enrollStudent(name, course, semester) - Creates and adds a new student
  - getStudentById(id) - Retrieves a student by ID
  - getAllStudents() - Returns all enrolled students
  - getTopPerformers(limit) - Returns top performing students by GPA
  - getCourseStats() - Returns enrollment statistics by course
 Usage Example
javascript
// Initialize university
const amity = new AmityUniversity();
// Enroll students
amity.enrollStudent("Rahul Sharma", "B.Tech", 3);
amity.enrollStudent("Priya Patel", "MBA", 1);
// Add grades and attendance
const students = amity.getAllStudents();
students[0].addGrade("Mathematics", 8.5);
students[0].markAttendance("2023-10-01", "Present");
// Generate reports
console.log("Course Statistics:", amity.getCourseStats());
console.log("Top Performers:", amity.getTopPerformers(3));
Sample Output
Amity University Bangalore - Student Records
Total Students: 4
Course Statistics: { B.Tech: 2, MBA: 1, BBA: 1, B.Com: 0, B.Sc: 0 }
Top Performers: ["Rahul Sharma", "Priya Patel", "Amit Singh"]
Student Rahul Sharma GPA: 8.75
University Facilities:
1. Library
2. Sports
3. Hostel
4. Cafeteria

 Requirements

- Node.js (to run JavaScript)
- No additional dependencies required

 How to Run

1. Save the code to a file (e.g., amity.js)
2. Run using Node.js: node amity.js

 Future Enhancements

- Add faculty management
- Implement course scheduling
- Add fee payment tracking
- Include more detailed reporting features
- Add database persistence

 License

This project is open-source and available for educational purposes.
