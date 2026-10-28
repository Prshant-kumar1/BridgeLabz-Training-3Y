// Q4: Array Performance Analyzer

// Generate an array of 8 random scores between 30 and 100
// Formula: Math.floor(Math.random() * (max - min + 1)) + min
let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

// Calculate highest and lowest scores using spread syntax with Math.max / Math.min
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Calculate average score using reduce()
let totalScore = scores.reduce((accumulator, currentScore) => accumulator + currentScore, 0);
let averageScore = (totalScore / scores.length).toFixed(2);

// Calculate number of students who passed (score >= 50) using filter()
let passingStudents = scores.filter(score => score >= 50);
let passCount = passingStudents.length;

// Display full summary in a formatted output
console.log("========================================");
console.log("       STUDENT PERFORMANCE SUMMARY      ");
console.log("========================================");
console.log(`Generated Scores: [${scores.join(", ")}]`);
console.log("----------------------------------------");
console.log(`* Highest Score         : ${highestScore}`);
console.log(`* Lowest Score          : ${lowestScore}`);
console.log(`* Average Score         : ${averageScore}`);
console.log(`* Passed (>= 50) Count  : ${passCount} out of ${scores.length}`);
console.log(`* Passing Scores        : [${passingStudents.join(", ")}]`);
console.log("========================================");
