// Amity University Bangalore - Campus Management System (100 lines)
class Student {
  constructor(id, name, course, semester) {
    this.id = id;
    this.name = name;
    this.course = course;
    this.semester = semester;
    this.attendance = {};
    this.grades = {};
  }

  markAttendance(date, status) {
    this.attendance[date] = status;
  }

  addGrade(subject, grade) {
    this.grades[subject] = grade;
  }

  getGPA() {
    const subjects = Object.keys(this.grades);
    if (subjects.length === 0) return 0;
    
    const total = subjects.reduce((sum, sub) => {
      return sum + this.grades[sub];
    }, 0);
    
    return (total / subjects.length).toFixed(2);
  }
}

class AmityUniversity {
  constructor() {
    this.students = [];
    this.courses = ["B.Tech", "MBA", "BBA", "B.Com", "B.Sc"];
    this.facilities = ["Library", "Sports", "Hostel", "Cafeteria"];
  }

  enrollStudent(name, course, semester) {
    const id = "AU" + Math.floor(1000 + Math.random() * 9000);
    const student = new Student(id, name, course, semester);
    this.students.push(student);
    return student;
  }

  getStudentById(id) {
    return this.students.find(student => student.id === id);
  }

  getAllStudents() {
    return this.students;
  }

  getTopPerformers(limit = 5) {
    return [...this.students]
      .sort((a, b) => b.getGPA() - a.getGPA())
      .slice(0, limit);
  }

  getCourseStats() {
    const stats = {};
    this.courses.forEach(course => {
      stats[course] = this.students.filter(s => s.course === course).length;
    });
    return stats;
  }
}

// Demo Usage
const amity = new AmityUniversity();

// Enroll students
amity.enrollStudent("Rahul Sharma", "B.Tech(iot)", 3);
amity.enrollStudent("Virat", "MBA", 1);
amity.enrollStudent("Rinku Singh", "BBA", 2);
amity.enrollStudent("Mourya Gupta", "B.Tech cse", 4);

// Add grades and attendance
const students = amity.getAllStudents();
students[0].addGrade("Chemistry", 8.5);
students[0].addGrade("Physics", 9.0);
students[0].markAttendance("2023-10-01", "Present");

students[1].addGrade("Marketing", 8.0);
students[1].addGrade("Finance", 8.5);
students[1].markAttendance("2023-08-11", "Present");

// Display information
console.log("Amity University Bangalore - Student Records");
console.log("Total Studenits:", students.length);
console.log("Course Statistics:", amity.getCourseStats());
console.log("Top Performers:", amity.getTopPerformers(3).map(s => s.name));

// Get student by ID
const student = amity.getStudentById(students[0].id);
console.log(Student ${student.name} GPA: ${student.getGPA()});

// University facilities
console.log("\nUniversity Facilities:");
amity.facilities.forEach((facility, index) => {
  console.log(${index + 1}. ${facility});
});

// Sample output
console.log("\nSample Output Complete!");
