// Q2: Multi-Type Data Summary

// Declare variables with different JavaScript data types
const userName = "Prashant";
const age = 20;
const isStudent = true;
const subjects = ["Java", "Python", "JavaScript"];
const student = {
    name: "Prashant",
    course: "B.Tech CSE"
};
const middleName = null;
let address;

// Store the variables in a single report
const dataSummary = [
    {
        Variable: "userName",
        Value: userName,
        Type: typeof userName
    },
    {
        Variable: "age",
        Value: age,
        Type: typeof age
    },
    {
        Variable: "isStudent",
        Value: isStudent,
        Type: typeof isStudent
    },
    {
        Variable: "subjects",
        Value: subjects.join(", "),
        Type: Array.isArray(subjects) ? "array" : typeof subjects
    },
    {
        Variable: "student",
        Value: JSON.stringify(student),
        Type: typeof student
    },
    {
        Variable: "middleName",
        Value: String(middleName),
        Type: "null"
    },
    {
        Variable: "address",
        Value: String(address),
        Type: typeof address
    }
];

// Display the complete report in a table
console.table(dataSummary);