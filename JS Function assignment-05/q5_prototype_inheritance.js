"use strict";

/**
 * Q5: Prototype Chain & Prototypal Inheritance
 */

// Parent Constructor: Person
function Person(name) {
    this.name = name;
}

// Method attached to Person's prototype
Person.prototype.printName = function() {
    console.log(`Name: ${this.name}`);
};

// Child Constructor: Student
function Student(name, branch) {
    // Call parent constructor to inherit instance properties
    Person.call(this, name);
    this.branch = branch;
}

// Link Child prototype to Parent prototype for inheritance
Student.prototype = Object.create(Person.prototype);

// Reset constructor reference back to Student
Student.prototype.constructor = Student;

// Method attached specifically to Student's prototype
Student.prototype.printBranch = function() {
    console.log(`Branch: ${this.branch}`);
};

// Demonstration
console.log("=== Q5: Prototype Chain Inheritance ===");

const student1 = new Student("Alex Smith", "Computer Science");

// Calling child method
student1.printBranch(); // Branch: Computer Science

// Calling parent method inherited via prototype chain
student1.printName();   // Name: Alex Smith

// Prototype chain verification
console.log("
--- Prototype Chain Checks ---");
console.log("student1 instance of Student?", student1 instanceof Student); // true
console.log("student1 instance of Person? ", student1 instanceof Person);  // true
console.log("student1 instance of Object? ", student1 instanceof Object);  // true
