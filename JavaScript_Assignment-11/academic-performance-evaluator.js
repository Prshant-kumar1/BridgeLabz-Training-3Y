// Q4: Academic Performance Evaluator

const studentName = "Prashant";

// Marks obtained in five subjects, each out of 100
const marks = [90, 85, 78, 88, 92];

const totalSubjects = marks.length;

// Validate the marks before calculating the result
const validMarks = marks.every(
    mark => Number.isFinite(mark) && mark >= 0 && mark <= 100
);

if (totalSubjects === 0 || !validMarks) {
    console.log("Invalid marks. Enter marks between 0 and 100.");
} else {
    // Calculate total marks and average percentage
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    const maximumMarks = totalSubjects * 100;
    const percentage = (totalMarks / maximumMarks) * 100;

    // Check whether the student has failed any subject
    const hasFailed = marks.some(mark => mark < 35);

    let result;

    // Apply the academic rules
    if (hasFailed || percentage < 50) {
        result = "Detained";
    } else if (percentage >= 85) {
        result = "Promoted with Distinction";
    } else {
        result = "Promoted";
    }

    // Display the academic report
    console.log("ACADEMIC PERFORMANCE REPORT");
    console.log(`Student: ${studentName}`);
    console.log(`Marks: ${marks.join(", ")}`);
    console.log(`Total Marks: ${totalMarks}/${maximumMarks}`);
    console.log(`Percentage: ${percentage.toFixed(2)}%`);
    console.log(`Result: ${result}`);
}